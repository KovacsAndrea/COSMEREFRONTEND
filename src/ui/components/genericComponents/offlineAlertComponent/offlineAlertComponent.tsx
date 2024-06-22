import { Grow } from '@mui/material'
import './offlineAlertComponent.css'
import { useGlobalState } from '../../../../globalVarialbles.tsx';
import { Overlay } from '../overlay/overlay.tsx';
import { OKButton } from '../buttons/otherButtons/otherButtons.tsx';
import { offlineErrorMessagge } from '../../../constants/errors.ts';
export const OfflineAlertComponent: React.FC<{}> = ({}) => {
    const {alertMessage, alertStatus, setAlertStatus} = useGlobalState();
    const closeAlert = () => {
        setAlertStatus(false)
    }
    return(
        <>
          <Overlay inState={alertStatus} onClickAction={closeAlert}>
            <Grow in={alertStatus} timeout={500}>
                        <div className="offline-alert-component"> 
                            <div className="offline-alert-header"> 
                            <p className="offline-alert-title">{"IVORY SAYS"}</p>
                            <div className='offline-alert-content'>
                                <p></p>
                                <p>{alertMessage}</p>
                                <p className='this-fact-is'>{offlineErrorMessagge.thisFactIs}</p>
                            </div>

                            <div className='ivory-emblem'></div>
                            <div className='offline-alert-footer'>
                                <OKButton onClickAction={closeAlert}/>
                            </div>
                        </div>
                    </div>
            </Grow>
          </Overlay>
                    

        
        </>
    )
}