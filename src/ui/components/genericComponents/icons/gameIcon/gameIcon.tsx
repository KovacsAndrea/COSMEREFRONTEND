import { Fade } from "@mui/material"

export const GameIcon:React.FC<{onClickAction: any}> = ({ onClickAction}) => {
    return (
        <Fade in = {true} timeout={500}> 
            <div className="cosmere-icon-wrapper">
                <div className = "cosmere-icon active big-icon greyish" onClick={onClickAction}/>
            </div>
        </Fade>
    )
}