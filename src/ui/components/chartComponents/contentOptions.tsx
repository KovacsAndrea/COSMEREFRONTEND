import React from 'react'
import './chartComponent.css'
import { ShortGridColumn } from '../genericComponents/popUp/popUpGridColumn/gridColumn.tsx'
import { GridColumnHeader } from '../genericComponents/popUp/popUpGridColumn/gridColumnHeader.tsx'

export const ContentOptions: React.FC<{chartContent:any, setChartContent: any}> 
= ({setChartContent}) => {
    const handleChoosePlanet = () => { setChartContent("Planets")}
    const handleChooseSystems = () => { setChartContent("Systems")}
    const handleChooseShards = () => { setChartContent("Shards")}
    const handleChooseDates = () => { setChartContent("Dates")}
    
    return (
        <>
            <ShortGridColumn header={<GridColumnHeader title={"Content Options"} />}>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="Options" value={"Planets"} id = {"Planets"} className = "stilu-lu-vasile" 
                            onClick={handleChoosePlanet} defaultChecked={true}/>
                            <label htmlFor={"Planets"} className="stilu-lu-vasile-da-ptr-label"> Planets </label>
                        </div>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="Options" value={"Systems"} id = {"Systems"} className = "stilu-lu-vasile" 
                            onClick={handleChooseSystems}/>
                            <label htmlFor={"Systems"} className="stilu-lu-vasile-da-ptr-label"> Systems </label>
                        </div>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="Options" value={"Shards"} id = {"Shards"} className = "stilu-lu-vasile" 
                            onClick={handleChooseShards}/>
                            <label htmlFor={"Shards"} className="stilu-lu-vasile-da-ptr-label"> Shards </label>
                        </div>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="Options" value={"Dates"} id = {"Dates"} className = "stilu-lu-vasile" 
                            onClick={handleChooseDates}/>
                            <label htmlFor={"Dates"} className="stilu-lu-vasile-da-ptr-label"> Dates </label>
                        </div>
            </ShortGridColumn>
        </>
    )
}