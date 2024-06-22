import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useGlobalState } from "../../../../../globalVarialbles.tsx";
import './SFPButtonStyle.css'
export const RadioButton: React.FC<{
    name: any, 
    category: any, 
    sortCriteria: any, setSortCriteria: any, 
    sortDirection: any, setSortDirection: any,

}> = ({name, category, 
    sortCriteria, setSortCriteria,
    sortDirection, setSortDirection
}) => {

    // console.log(name);
    // console.log(category);
    // console.log(sortCriteria);
    // console.log(sortDirection);
    
    const {usingLocal} = useGlobalState()

    const handleClick = () =>{
        async function useLocalData() {
            console.log("am dat click")
            setSortCriteria(category)
            setSortDirection(name)
            axios.patch("http://localhost:4000/sort/criteria", { sortCriteria: category})
            axios.patch("http://localhost:4000/sort/direction", { sortDirection: name})
                    
        }
        async function useCloudData() {
            setSortCriteria(category);
            setSortDirection(name);
        }
       if(usingLocal){useLocalData()} else {useCloudData()}
        
    }

    const handleChange = () =>{
    }

    const [isChecked, setIsChecked] = useState(sortCriteria == category && sortDirection == name)

    useEffect(() => {setIsChecked(sortCriteria == category && sortDirection == name)}, [sortCriteria, sortDirection])

    return(
        <>
        <div className="checkable-option-for-grid-column">
            <input type="radio" name="SORT" 
            value={name} 
            id = {name + category} 
            checked = {isChecked} 
            className = "SFP-CR-style" onClick={handleClick} onChange={handleChange}/>
            <label htmlFor={name + category} className="SFP-Label-style"> {name == 1 ? "Ascending" : "Descending"} </label>
        </div>
        </>
    )
}