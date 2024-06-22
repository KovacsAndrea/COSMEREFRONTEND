import { ShantidEmblemLeft, ShantidEmblemRight } from "../genericComponents/emblems/rectangleEmblems.tsx"
import { PopUp } from "../genericComponents/popUp/popUp.tsx"
import { ChartContent } from "./chartContent.tsx"


export const ChartComponent: React.FC<{chartIsOpen: boolean, setChartIsOpen: any}> =({chartIsOpen, setChartIsOpen}) => {

    const onCloseChartPopup = () => {setChartIsOpen(false)}
    return (
        <>
            
            <PopUp 
            isOpen={chartIsOpen}
            title='Chart'
            onCloseAction={onCloseChartPopup}
            leftEmblem = {<ShantidEmblemLeft/>}
            rightEmblem = {<ShantidEmblemRight/>}>
                <ChartContent />
            </PopUp>
        </>
    )
}