
import React, { useEffect } from "react";
import { RadioButton } from "../genericComponents/buttons/sortFilterPaginatioButtons/radioButton.tsx";
import { CosmerePopUpGrid } from "../genericComponents/popUp/popUpGrid.tsx";
import { ShortGridColumn } from "../genericComponents/popUp/popUpGridColumn/gridColumn.tsx";
import { GridColumnHeader } from "../genericComponents/popUp/popUpGridColumn/gridColumnHeader.tsx";
export const SortContent: React.FC <{
    sortCriteria: any, setSortCriteria: any,
    sortDirection: any, setSortDirection: any
}> = ({
    sortCriteria, setSortCriteria, 
    sortDirection, setSortDirection, }) => {
    
    const title = "Title"
    const planets ="Planets"
    const systems = "Systems"
    const shards = "Shards"
    const date = "Dates"

    const titleCategory = "_title"
    const planetsCategory ="_planet"
    const systemsCategory = "_system"
    const shardsCategory = "_shard"
    const dateCategory = "_date"
    
    let directions = [1, -1];
    const sortingIsCurrentlyDisabled = false;

    useEffect(() => {console.log("SORT CONTENT->>>>>>>>>>>>>>>>>> IS RENDERING")}, [])
    
    return (
        <>
        <CosmerePopUpGrid> 
            <ShortGridColumn header={<GridColumnHeader title={title} />}>
                {directions.map( direction => <RadioButton
                name = {direction} 
                category = {titleCategory} key = {direction + title} 
                sortCriteria = {sortCriteria} setSortCriteria={setSortCriteria}
                sortDirection={sortDirection} setSortDirection={setSortDirection}/>)}
            </ShortGridColumn >

            <ShortGridColumn header={<GridColumnHeader title={planets} />}>
                {directions.map( direction => <RadioButton
                name = {direction} 
                category = {planetsCategory} key = {direction + planets} 
                sortCriteria = {sortCriteria} setSortCriteria={setSortCriteria}
                sortDirection={sortDirection} setSortDirection={setSortDirection}/>)}
            </ShortGridColumn >

            <ShortGridColumn header={<GridColumnHeader title={systems} />}>
                {directions.map( direction => <RadioButton
                name = {direction} 
                category = {systemsCategory} key = {direction + systems} 
                sortCriteria = {sortCriteria} setSortCriteria={setSortCriteria}
                sortDirection={sortDirection} setSortDirection={setSortDirection}/>)}
            </ShortGridColumn >

            <ShortGridColumn header={<GridColumnHeader title={shards} />}>
                {directions.map( direction => <RadioButton
                name = {direction} 
                category = {shardsCategory} key = {direction + shards} 
                sortCriteria = {sortCriteria} setSortCriteria={setSortCriteria}
                sortDirection={sortDirection} setSortDirection={setSortDirection}/>)}
            </ShortGridColumn >

            <ShortGridColumn header={<GridColumnHeader title={date} />}>
                {directions.map( direction => <RadioButton
                name = {direction} 
                category = {dateCategory} key = {direction + date} 
                sortCriteria = {sortCriteria} setSortCriteria={setSortCriteria}
                sortDirection={sortDirection} setSortDirection={setSortDirection}/>)}
            </ShortGridColumn >

            {sortingIsCurrentlyDisabled ? <></> : <></>}
            
            </CosmerePopUpGrid>
        </>
    )
}