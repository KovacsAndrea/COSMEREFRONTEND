import {Fade} from '@mui/material'
import '../iconStyle.css'
import { IoInformationCircle } from 'react-icons/io5'

export const InfoIcon:React.FC<{onClickAction: any}> = ({ onClickAction}) => {
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <IoInformationCircle   className = "cosmere-icon active small-icon blue" onClick={onClickAction}/>
            </div>
        </Fade>
    )
}