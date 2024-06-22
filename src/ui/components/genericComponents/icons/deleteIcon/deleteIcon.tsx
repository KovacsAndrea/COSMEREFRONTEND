import {Fade} from '@mui/material'
import '../iconStyle.css'
import { IoCloseCircle } from 'react-icons/io5'
import { useGlobalState } from '../../../../../globalVarialbles.tsx'
import { offlineErrorMessagge } from '../../../../constants/errors.ts'

export const DeleteIcon:React.FC<{enabled: boolean, onClickAction: any}> = ({enabled, onClickAction}) => {
    let buttonStyle = ""
    const {usingLocal, stateHandler} = useGlobalState();
    if(!enabled || usingLocal){buttonStyle = "cosmere-icon disabled small-icon"}
    else{buttonStyle = "cosmere-icon active small-icon red"}
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <IoCloseCircle   className = {buttonStyle} onClick={() => stateHandler(onClickAction, offlineErrorMessagge.tryingToDelete)}/>
            </div>
        </Fade>
    )
}