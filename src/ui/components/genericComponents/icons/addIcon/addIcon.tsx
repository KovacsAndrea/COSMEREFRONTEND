import { IoAddCircle} from "react-icons/io5"
import '../iconStyle.css'
import { Fade } from "@mui/material"
import { useGlobalState } from "../../../../../globalVarialbles.tsx"
import { accessErrorMessagge, offlineErrorMessagge } from "../../../../constants/errors.ts"
export const AddIcon:React.FC<{onClickAction: any}> = ({ onClickAction}) => {
    const {usingLocal, stateHandler, user} = useGlobalState();
    let addIconStyle = "";
    let errorMessage = "";

    if(usingLocal) {addIconStyle = "cosmere-icon disabled big-icon"}
    else{addIconStyle = "cosmere-icon active big-icon golden"}

    if(!user ){addIconStyle = "cosmere-icon disabled big-icon"
        errorMessage = accessErrorMessagge.accessMessage
    } else{addIconStyle = "cosmere-icon active big-icon golden"}

    if(user) {
        if (user.accessLevel == "Bridgeman" ){
            addIconStyle = "cosmere-icon disabled big-icon"
            errorMessage = accessErrorMessagge.bridgeman
        }
        else if (user.accessLevel == "Surgebinder" ){
            addIconStyle = "cosmere-icon disabled big-icon"
            errorMessage = accessErrorMessagge.surgebinder
        }
        else{addIconStyle = "cosmere-icon active big-icon golden"}
    }
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <IoAddCircle className = {addIconStyle} onClick={() => stateHandler(onClickAction, offlineErrorMessagge.tryingToAdd)}/>
            </div>
        </Fade>
    )
}