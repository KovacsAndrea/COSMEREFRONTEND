import React from 'react';
import { useGlobalState } from '../../../globalVarialbles.tsx';
import './paginationStyle.css'
import { ShortGridColumn } from '../genericComponents/popUp/popUpGridColumn/gridColumn.tsx';
import { GridColumnHeader } from '../genericComponents/popUp/popUpGridColumn/gridColumnHeader.tsx';
import { CosmerePopUpGrid } from '../genericComponents/popUp/popUpGrid.tsx';
export const PaginationContent: React.FC<{ 
    paginationValue: any, 
    setPaginationValue: any,
    possibleValues: number[]
}> = ({paginationValue, setPaginationValue, possibleValues}) => {
    const {usingLocal} = useGlobalState();
    
    const paginationCurrentlyDisabled = false;
    
    const handleChoice = (value: number) => {
		async function useLocalData() {
        }
        async function useCloudData() {
            setPaginationValue(value)
        }
        if(usingLocal){useLocalData()} else {useCloudData()}
    }


    return (
        <>
        <CosmerePopUpGrid> 
            <ShortGridColumn header={<GridColumnHeader title={"Elements per page"} />}>
                    {possibleValues.map(paginationOption =>
                        <div className="checkable-option-for-filter-button" key={paginationOption}>
                            <input type="radio" name="Values" 
                            key = {paginationOption.toString() + "PAG"} 
                            value={paginationOption}  
                            className = "stilu-lu-vasile" 
                            checked = {paginationValue === paginationOption}
                            onClick={() => handleChoice(paginationOption)} 
                            onChange={() => {}}/>
                            <label htmlFor={paginationOption.toString()} className="stilu-lu-vasile-da-ptr-label"> {paginationOption} </label>
                        </div>
                        )}
            </ShortGridColumn >
            {paginationCurrentlyDisabled ? 
            <></> : 
            <><div className="filter-grid-column-insignia"></div></>}
            </CosmerePopUpGrid>
        </>
    )
}