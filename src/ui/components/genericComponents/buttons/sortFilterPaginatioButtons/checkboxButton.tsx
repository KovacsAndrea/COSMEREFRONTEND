
import React from "react";
import { useEffect, useState } from "react";
import './SFPButtonStyle.css'

export const CheckboxButton: React.FC<{
    name: any, 
    category: string, 
    selectedStuff: any, 
    setSelectedStuff: any}> = ({
        name, 
        category, 
        selectedStuff, 
        setSelectedStuff, }) => {

    let listItems: any[] = selectedStuff;
    let checked = listItems.includes(name);
    const [isChecked, setIsChecked] = useState(checked)

    useEffect(() => {
        let listItems: any[] = selectedStuff;
        setIsChecked(listItems.includes(name))
    }, [selectedStuff])

    const updateSelectedItemsOnChange = () => {
        if (listItems.includes(name)){
            listItems = listItems.filter(item => item !== name);
        } else {listItems.push(name)}
    }

    const handleChange = (e: any) => {
        setIsChecked(e.target.checked)
        updateSelectedItemsOnChange();
        setSelectedStuff(listItems);
    };

    return(
        <>
        <div className="checkable-option-for-grid-column">
            <input 
            type="checkbox" 
            className = "SFP-CR-style" 
            id = {name + category} 
            checked = {isChecked} 
            value={name.toString()}
            onChange={(e) => {handleChange(e)}} />

            <label 
            className="SFP-Label-style"
             htmlFor={name + category}> {name} </label>
        </div>
        </>
    )
}