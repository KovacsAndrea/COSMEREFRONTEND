import { Fade } from '@mui/material';
import { useGlobalState } from '../../../../globalVarialbles.tsx'
import Canvas from '../../../components/player/Canvas.tsx';
import './gamePage.css'
export const GamePage: React.FC<{}> = ({}) => {
    const {gameLocation} = useGlobalState();
    console.log(gameLocation)
    let backgroundStyle = ""
    if(gameLocation._cover_avatar != "no-location"){backgroundStyle = "game-background " + gameLocation._cover_avatar + "-background"}
    else{backgroundStyle = "game-background shattered-plains-location-background"}
    
    
    return (
        <>
        <Fade in = {true} timeout = {1000}>
        <div className= {backgroundStyle}>
            <Canvas></Canvas>
        </div>
        </Fade>
        </>
    )
}