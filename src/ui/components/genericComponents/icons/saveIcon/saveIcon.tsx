
import { Fade } from '@mui/material'
import '../iconStyle.css'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useGlobalState } from '../../../../../globalVarialbles.tsx'
import { offlineErrorMessagge } from '../../../../constants/errors.ts'

export const SaveIcon:React.FC<{enabled: boolean, onClickAction: any}> = ({enabled, onClickAction}) => {
    let buttonStyle = ""
    const {usingLocal, stateHandler} = useGlobalState();
    if(!enabled || usingLocal){buttonStyle = "cosmere-icon disabled small-icon"}
    else{buttonStyle = "cosmere-icon active small-icon green"}
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <IoCheckmarkCircle   className = {buttonStyle} onClick={() => stateHandler(onClickAction, offlineErrorMessagge.tryingToEdit)}/>
            </div>
        </Fade>
    )
}