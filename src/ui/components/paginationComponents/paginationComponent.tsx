import { useState, useEffect } from "react"
import { useGlobalState } from "../../../globalVarialbles.tsx"
import { PainterEmblemLeft, PainterEmblemRight } from "../genericComponents/emblems/rectangleEmblems.tsx"
import { PopUp } from "../genericComponents/popUp/popUp.tsx"
import { PaginationContent } from "./paginationContent.tsx"

export const PaginationComponent: React.FC<{paginationIsOpen: boolean, setPaginationIsOpen: any}> =({paginationIsOpen, setPaginationIsOpen}) => {
    const {
        currentElementsPerPage,
        updateCurrentElementsPerPage,
        setPaginationShouldBeComputed
    } = useGlobalState()
    const [elementsPerPage, setElementsPerPage] = useState(currentElementsPerPage)
    const possibleValues = [9, 15, 30]
    
    useEffect(() => {
        setElementsPerPage(currentElementsPerPage)
    }, [currentElementsPerPage])
    
    const onClosePaginationPopup = () => {
        setPaginationIsOpen(false)
        console.log("ELEMENTS PER PAGE " +elementsPerPage)
        console.log("CURRENT ELEMENTS PER PAGE " + currentElementsPerPage)
        if(currentElementsPerPage != elementsPerPage){
            if(possibleValues.includes(elementsPerPage)){
                console.log("||||||||||||||||||||||||| UPDATING THE PAGINATION CRITERIA |||||||||||||||||||||||||")
                updateCurrentElementsPerPage(elementsPerPage);
                setPaginationShouldBeComputed(true)
            }
        }
    }
    return (
        <>
            <PopUp 
            isOpen={paginationIsOpen}
            title='Pagination'
            onCloseAction={onClosePaginationPopup}
            leftEmblem = {<PainterEmblemLeft />}
            rightEmblem={<PainterEmblemRight />}>
                <PaginationContent 
                paginationValue={elementsPerPage} 
                setPaginationValue={setElementsPerPage}
                possibleValues = {possibleValues} />
            </PopUp>
        </>
    )
}