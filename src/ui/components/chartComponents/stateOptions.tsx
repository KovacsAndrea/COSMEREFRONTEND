import React from 'react'
import './chartComponent.css'
import { ShortGridColumn } from '../genericComponents/popUp/popUpGridColumn/gridColumn.tsx'
import { GridColumnHeader } from '../genericComponents/popUp/popUpGridColumn/gridColumnHeader.tsx'

export const StateOptions: React.FC<{stateType: any, setStateType: any, isConnected: any}> = ({setStateType, isConnected}) => {
    const handleSelectServer = () => {
        setStateType("Server")
    }
    const handleSelectSocket = () => {
        setStateType("Socket")
    }
    console.log(isConnected)
    return (
        <>
           <ShortGridColumn header={<GridColumnHeader title={"State Options"} />}>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="State" value={"Server"} id = {"Server"} className = "stilu-lu-vasile" 
                            onClick={handleSelectServer} defaultChecked= {true}/>
                            <label htmlFor={"Server"} className="stilu-lu-vasile-da-ptr-label"> Server </label>
                        </div>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="State" value={"Socket"} id = {"Socket"} className = "stilu-lu-vasile"
                            onClick={handleSelectSocket}/>
                            <label htmlFor={"Socket"} className="stilu-lu-vasile-da-ptr-label"> Socket </label>
                        </div>
            </ShortGridColumn>
        </>
    )
}