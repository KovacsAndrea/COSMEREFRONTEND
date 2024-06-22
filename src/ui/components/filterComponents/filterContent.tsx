import { useEffect } from "react";
import { CheckboxButton } from "../genericComponents/buttons/sortFilterPaginatioButtons/checkboxButton.tsx";
import './filterStyle.css'
import { CosmerePopUpGrid } from "../genericComponents/popUp/popUpGrid.tsx";
import { TallGridColumn } from "../genericComponents/popUp/popUpGridColumn/gridColumn.tsx";
import { FilterGridColumnHeader } from "../genericComponents/popUp/popUpGridColumn/filterGridColumnHeader.tsx";


export const FilterContent: React.FC<{
    //the unique sets
    planetData: string[];
    systemData: string[];
    shardData: string[];
    dateData: number[];

    //the current selected data set, on which we'll make changes
    //on close pupup we update the changes
    currentPlanetData: string[];
    setCurrentPlanetData: React.Dispatch<React.SetStateAction<string[]>>;
    currentSystemData: string[];
    setCurrentSystemData: React.Dispatch<React.SetStateAction<string[]>>;
    currentShardData: string[];
    setCurrentShardData: React.Dispatch<React.SetStateAction<string[]>>;
    currentDateData: number[];
    setCurrentDateData: React.Dispatch<React.SetStateAction<number[]>>;
}> 
= ({ planetData,
    systemData,
    shardData,
    dateData,
    currentPlanetData,
    setCurrentPlanetData,
    currentSystemData,
    setCurrentSystemData,
    currentShardData,
    setCurrentShardData,
    currentDateData,
    setCurrentDateData}) => {

    const planets ="planets"
    const systems = "systems"
    const shards = "shards"
    const dates = "dates"

    useEffect(() => {console.log("FILTER CONTENT               ->>>>>>>>>>>>>>>>>> IS RENDERING")}, [])

    const checkAllPlanets = () => {setCurrentPlanetData(planetData)}
    const unCheckAllPlanets = () => {setCurrentPlanetData([])}

    const checkAllSystems = () => {setCurrentSystemData(systemData)}
    const unCheckAllSystems = () => {setCurrentSystemData([])}
    
    const checkAllShards = () => {setCurrentShardData(shardData)}
    const unCheckAllShards = () => {setCurrentShardData([])}
    
    const checkAllDates = () => {setCurrentDateData(dateData);}  
    const unCheckAllDates = () => {setCurrentDateData([])}
    
    return (
        <>
            <CosmerePopUpGrid>    
            <TallGridColumn header={<FilterGridColumnHeader
                    title={planets}
                    onCheckAllAction={checkAllPlanets}
                    onUncheckAllAction={unCheckAllPlanets} />}>
                    {planetData != null ? 
                    <>{planetData.map( planet => <CheckboxButton
                            name = {planet} 
                            category = {planets} 
                            key = {planet + "PLANET"} 
                            selectedStuff = {currentPlanetData} 
                            setSelectedStuff = {setCurrentPlanetData}/>)}</> :
                    <></>}
            </TallGridColumn>


            <TallGridColumn header={<FilterGridColumnHeader
                    title={systems}
                    onCheckAllAction={checkAllSystems}
                    onUncheckAllAction={unCheckAllSystems} />}>
                    {systemData != null ?
                    <>{systemData.map( system => <CheckboxButton 
                        name = {system } 
                        category = {systems} 
                        key = {system + "SYSTEM"} 
                        selectedStuff={currentSystemData} 
                        setSelectedStuff={setCurrentSystemData} />)}</> : 
                    <></>}
            </TallGridColumn>

            <TallGridColumn header={<FilterGridColumnHeader
                    title={shards}
                    onCheckAllAction={checkAllShards}
                    onUncheckAllAction={unCheckAllShards} />}>
                    {shardData != null ? 
                    <>{shardData.map( shard => <CheckboxButton
                        name = {shard } 
                        category = {shards} 
                        key = {shard + "SHARD"} 
                        selectedStuff={currentShardData} 
                        setSelectedStuff={setCurrentShardData} />)}</> : 
                    <></>}
            </TallGridColumn>

            <TallGridColumn header={<FilterGridColumnHeader
                    title={dates}
                    onCheckAllAction={checkAllDates}
                    onUncheckAllAction={unCheckAllDates} />}>
                    {dateData != null ? 
                    <> {dateData.map( date => <CheckboxButton
                        name = {date} 
                        category = {dates} 
                        key = {date + "DATE"} 
                        selectedStuff={currentDateData} 
                        setSelectedStuff={setCurrentDateData} />)}</> : 
                    <></>}
            </TallGridColumn>
            </CosmerePopUpGrid>
        </>
    );
}


