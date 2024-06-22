import React from 'react'
import './chartComponent.css'
import { ShortGridColumn } from '../genericComponents/popUp/popUpGridColumn/gridColumn.tsx'
import { GridColumnHeader } from '../genericComponents/popUp/popUpGridColumn/gridColumnHeader.tsx'

export const TypeOptions: React.FC<{chartType: any, setChartType: any}> = ({chartType, setChartType}) => {
    const handleSelectPie = () => {
        setChartType("Pie")
        console.log(chartType)
    }
    const handleSelectBar = () => {
        setChartType("Bar")
        console.log(chartType)
    }
    return (
        <>
            <ShortGridColumn header={<GridColumnHeader title={"Chart Options"} />}>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="Chart" value={"Pie Chart"} id = {"PieChart"} className = "stilu-lu-vasile" 
                            onClick={handleSelectPie} defaultChecked= {true}/>
                            <label htmlFor={"PieChart"} className="stilu-lu-vasile-da-ptr-label"> Pie Chart </label>
                        </div>
                        <div className="checkable-option-for-filter-button">
                            <input type="radio" name="Chart" value={"Bar Chart"} id = {"BarChart"} className = "stilu-lu-vasile"
                            onClick={handleSelectBar}/>
                            <label htmlFor={"BarChart"} className="stilu-lu-vasile-da-ptr-label"> BarChart </label>
                        </div>
            </ShortGridColumn>
        </>
    )
}