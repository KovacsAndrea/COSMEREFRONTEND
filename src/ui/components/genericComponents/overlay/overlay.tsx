import { Fade } from "@mui/material"
import './overlay.css'
export const Overlay: React.FC<{inState: boolean, onClickAction: any, children: any}> = ({inState, onClickAction, children}) => {
    return (
        <>
        <Fade in={inState} timeout={400}>
            <div className="cosmere-overlay" onClick={onClickAction}>    
                    {children}
            </div>
        </Fade>
        </>
    )
}