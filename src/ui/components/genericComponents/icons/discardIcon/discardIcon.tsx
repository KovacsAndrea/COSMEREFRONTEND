import {Fade} from '@mui/material'
import '../iconStyle.css'
import { IoArrowUndoCircle } from 'react-icons/io5'

export const DiscardIcon:React.FC<{onClickAction: any}> = ({ onClickAction}) => {
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <IoArrowUndoCircle  className = "cosmere-icon active small-icon golden" onClick={onClickAction}/>
            </div>
        </Fade>
    )
}