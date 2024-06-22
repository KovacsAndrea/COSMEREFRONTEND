import { IoChevronBackCircle } from "react-icons/io5"
import '../iconStyle.css'
import { Fade } from "@mui/material"

export const BackIcon:React.FC<{onClickAction: any}> = ({ onClickAction}) => {
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <IoChevronBackCircle className = "cosmere-icon active big-icon golden" onClick={onClickAction}/>
            </div>
        </Fade>
    )
}