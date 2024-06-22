import { CharacterGrid } from "./gameCharacterGrid.tsx"
import './characterPageStyle.css'
import { useLocation } from "react-router-dom"

export const CharacterPage:React.FC<{}> = ({}) => {
    const location = useLocation();
    console.log(location.state.heroData)
    const player = location.state.heroData;
    
    return(
        <>
        <div className="character-page-wrapper">

        <CharacterGrid playerChoice={player}/>
        </div>
        </>
    )
}