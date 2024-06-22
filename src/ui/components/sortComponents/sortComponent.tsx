import axios from "axios"
import { useState, useEffect } from "react"
import { useGlobalState } from "../../../globalVarialbles.tsx"
import { SortData } from "../../../localData/models/sortData.ts"
import { SunlitEmblemLeft, SunlitEmblemRight } from "../genericComponents/emblems/rectangleEmblems.tsx"
import { PopUp } from "../genericComponents/popUp/popUp.tsx"
import { SortContent } from "./sortContent.tsx"

export const SortComponent: React.FC<{sortIsOpen: boolean, setSortIsOpen: any}> =({sortIsOpen, setSortIsOpen}) => {
    const {cosmerePath} = useGlobalState()
    const token = sessionStorage.getItem('token')
    const [sortIsActive, setSortIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading)
    const [sortCriteria, setSortCriteria] = useState<string>("")
    const [sortDirection, setSortDirection] = useState<number>(0)

    const {
        currentSortCriteria,
        currentSortDirection,
        refreshCurrentSortData,
        usingLocal,
        setSortShouldBeComputed
    } = useGlobalState()

    //setup
    useEffect(() => {
        async function useLocalData(){

        }
        async function useGlobalData(){
            const sortResult = await axios.get<{sortData: SortData}>(cosmerePath + "/mongoBooks/sort/current/data")
            setSortCriteria(sortResult.data.sortData.criteria)
            setSortDirection(sortResult.data.sortData.direction)
            setIsLoading(false);
        }
        if(usingLocal) {useLocalData()} else (useGlobalData())
    }, [])

    
    //handling sort is active 
    useEffect(() => {
        setSortIsActive(currentSortCriteria.length!=0 && (
        currentSortDirection == 1 ||
        currentSortDirection == -1 ))
    }, [currentSortCriteria, currentSortDirection])


    const onCloseSortPopup = () => {
        setSortIsOpen(false)
        async function modifyAccordingToLocalChanges() {}
        async function modifyAccordingToGlobalChanges() {
            const sortCriteriaChanged = sortCriteria.toString() != currentSortCriteria.toString();
            const sortDirectionChanged = sortDirection.toString() != currentSortDirection.toString();

            try{
                if(sortCriteriaChanged || sortDirectionChanged){
                    console.log("|||||||||||||||||||||||||||| UPDATING SORT CRITERIA ||||||||||||||||||||||||||||")
                    
                    const result = await axios.patch(cosmerePath + "/mongoBooks/sort/current/data", {
                    criteria : sortCriteria,
                    direction : sortDirection
                    },{headers: {Authorization: `${token}`}})
                    if(result.data.modifiedCount<1){ alert("SOMETHING WENT WRONG. PLESE TRY AGAIN")}
                    refreshCurrentSortData();
                    setSortShouldBeComputed(true);
                }
            }catch(error:any){
                    alert(error.response.data.error)
                    setSortCriteria(currentSortCriteria)
                    setSortDirection(currentSortDirection)

            }
            
            
        }
        if(usingLocal) {modifyAccordingToLocalChanges()} else {modifyAccordingToGlobalChanges()};
    }
    return (
        <>
            <PopUp 
            isOpen={sortIsOpen}
            title='Sort'
            onCloseAction={onCloseSortPopup}
            leftEmblem = {<SunlitEmblemLeft/>}
            rightEmblem = {<SunlitEmblemRight/>}>
                <SortContent 
                sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}
                sortDirection={sortDirection} setSortDirection={setSortDirection}
            />
            </PopUp>
        </>
    )
}