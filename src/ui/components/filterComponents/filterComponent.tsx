import axios from 'axios'
import { useState, useEffect } from 'react'
import { useGlobalState } from '../../../globalVarialbles.tsx'
import { FilterData } from '../../../localData/models/filterData.ts'
import { CrowEmblemLeft, CrowEmblemRight } from '../genericComponents/emblems/rectangleEmblems.tsx'
import { PopUp } from '../genericComponents/popUp/popUp.tsx'
import { FilterContent } from './filterContent.tsx'
import './filterStyle.css'
import { accessErrorMessagge, } from '../../constants/errors.ts'

export const FilterComponent: React.FC<{filterIsOpen: boolean, setFilterIsOpen: any}> =({filterIsOpen, setFilterIsOpen}) => {

    const {cosmerePath} = useGlobalState()
    const token = sessionStorage.getItem('token')
    const [_filterIsActive, setFilterIsActive] = useState(false);

    const {
        //this is the set of all available filter criteria
        //the sets of all unique planets, systems, shards, dates
        planetData,
        systemData,
        shardData,
        dateData,

        //this is the set of the current selected filter criteria
        currentFilterPlanetData,
        currentFilterSystemData,
        currentFilterShardData,
        currentFilterDateData,
        setFilterShouldBeComputed,
        user,
        stateHandler,
        setComponentIsLoading,
    } = useGlobalState();

    //also the set of current criteria, will be initialized later 
    //will be updated when the user chooses other filter criteria
    //then when we close popup, we will compare
    //currentFilter____Data to current____Data
    //if they are different, we will update the currentFilter____Data
    const [currentPlanetData, setCurrentPlanetData] = useState<string[]>([]);
    const [currentSystemData, setCurrentSystemData] = useState<string[]>([]);
    const [currentShardData, setCurrentShardData] = useState<string[]>([]);
    const [currentDateData, setCurrentDateData] = useState<number[]>([]);

    //makes a GET request from DB and sets the currentFilter____Data to the result
    const {refreshCurrentFilterData} = useGlobalState();
    const {usingLocal} = useGlobalState();

    //initial setup
    useEffect (() => {
        async function useLocalData() {}
        async function useCloudData() {
            //fetching current data from database
            const currentFilterResponse = await axios.get<{ currentFilterData: FilterData }>(cosmerePath + "/mongoBooks/filter/current/data");
            const _currentFilterData = currentFilterResponse.data.currentFilterData;
                        
            setCurrentPlanetData(_currentFilterData.planets);
            setCurrentSystemData(_currentFilterData.systems);
            setCurrentShardData(_currentFilterData.shards);
            setCurrentDateData(_currentFilterData.dates);

            //component is done loading 
        }
        if(usingLocal){useLocalData()} else { useCloudData()}
    }, [])

    const updateFilterData = async () => {
        //DO THE PATCH
        console.log("||||||||||||||||||||||||| UPDATING THE FILTER CRITERIA |||||||||||||||||||||||||")
        try{
            const result = await axios.patch(cosmerePath + "/mongoBooks/filter/current/data", {
                planetData: currentPlanetData,
                systemData: currentSystemData,
                shardData: currentShardData,
                dateData: currentDateData
            }, {headers: {Authorization: `${token}`}})
            if(result.data.modifiedCount<1){ alert("SOMETHING WENT WRONG. PLESE TRY AGAIN")}
            //do GET form DB and update currentFilter____Data to the current
            //we do this, and NOT set the currentFilter____Data without a GET 
            //because we don't want to proceed without being absolutely sure 
            //that what we have in currentFilter____Data is EXACTLY what we have in the DB
            refreshCurrentFilterData();
            setFilterShouldBeComputed(true); 
        }catch(error:any ){
            setCurrentPlanetData(currentFilterPlanetData)
            setCurrentSystemData(currentFilterSystemData)
            setCurrentShardData(currentFilterShardData)
            setCurrentDateData(currentFilterDateData)
            alert(error.response.data.error)
        }
    }
    //every time the currentFilter____Data changes, we will 
    //compute if filter is active, ie, if there is anything checked
    useEffect(() => {
        setFilterIsActive(
            currentFilterPlanetData.length != 0 ||
            currentFilterSystemData.length !=0 || 
            currentFilterShardData.length !=0 ||
            currentFilterDateData.length != 0                     
        )
    }, [
        currentFilterPlanetData, 
        currentFilterSystemData, 
        currentFilterShardData, 
        currentFilterDateData])

    //where the magic happens    
    const onCloseFilterPopup = () => {
        //close the filter pupop 
        setFilterIsOpen(false)
        async function modifyAccordingToLocalChanges() {}
        async function modifyAccordingToGlobalChanges() {
            //if the data from the currentFilter____Data which is not updated anywhere else but here
            //is different from the current____Data which is updated by clicking the according checkbox
            //then we proceed to update the currentFilter____Data
            const planetDataChanged = currentPlanetData.toString() != currentFilterPlanetData.toString()
            const systemDataChanged = currentSystemData.toString() != currentFilterSystemData.toString()
            const shardDataChanged = currentShardData.toString() != currentFilterShardData.toString()
            const dateDataChanged = currentDateData.toString() != currentFilterDateData.toString()
    
            if(
                planetDataChanged || 
                systemDataChanged || 
                shardDataChanged || 
                dateDataChanged)
                {
                    let errorMessage = ""
                    if(!user){errorMessage = accessErrorMessagge.accessMessage}
                    else if(user) {
                        if(user.accessLevel == "Bridgeman"){
                            errorMessage = accessErrorMessagge.bridgeman
                        }
                    }
                    if(errorMessage){setComponentIsLoading(false)}
                    stateHandler(updateFilterData, errorMessage)
                }
                setComponentIsLoading(false)
        }
        if(usingLocal) {modifyAccordingToLocalChanges()} else {
            setComponentIsLoading(true)
            modifyAccordingToGlobalChanges()
           };
    }

    return (
        <>
            <PopUp 
            isOpen={filterIsOpen}
            title='Filter'
            onCloseAction={onCloseFilterPopup}
            leftEmblem={<CrowEmblemLeft/>}
            rightEmblem ={<CrowEmblemRight/>}>
                <FilterContent planetData={planetData}
                systemData={systemData}
                shardData={shardData}
                dateData={dateData}
                currentPlanetData={currentPlanetData}
                setCurrentPlanetData={setCurrentPlanetData}
                currentSystemData={currentSystemData}
                setCurrentSystemData={setCurrentSystemData}
                currentShardData={currentShardData}
                setCurrentShardData={setCurrentShardData}
                currentDateData={currentDateData}
                setCurrentDateData={setCurrentDateData}/>
            </PopUp>
        </>
    )
}