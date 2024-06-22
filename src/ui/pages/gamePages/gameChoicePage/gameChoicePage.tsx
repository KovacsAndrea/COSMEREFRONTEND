import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../../../../globalVarialbles.tsx"
import { HeroCard } from "../../../components/gameComponents/heroCardComponent/heroCardComponent.tsx"
import { CosmereGrid } from "../../../components/genericComponents/grid/grid.tsx"
import { ChosenHeroCard } from "../../../components/gameComponents/heroCardComponent/chosenHeroCardComponent.tsx"
import { IoFlash } from "react-icons/io5"
import './gameChoicePage.css'
import { ChosenLocationCard } from "../../../components/gameComponents/heroCardComponent/locationCardComponent.tsx"
export const GamePageChoice:React.FC<{}> = ({}) =>{
    const{player1, player2, gameLocation, setComponentIsLoading} = useGlobalState()
    const navigate = useNavigate();
    const selectPlayer1 = () => {
        const heroData = "PLAYER1"
        navigate("/game/characters", {state: {heroData}})
    }
    const selectPlayer2 = () => {
        const heroData = "PLAYER2"
        navigate("/game/characters", {state: {heroData}})
    }

    const selectLocation = () => {
        navigate("/game/locations")
    }

    const playGame = () => {
        setComponentIsLoading(true)
        setTimeout(() => {
            setComponentIsLoading(false)
            navigate("/game/match")
        }, 0)
    }
return (<>
<div className="character-page-wrapper">
    
    <CosmereGrid>
        <ChosenHeroCard heroData={player1} onClickDetails={null} onGoToCharacters={selectPlayer1}/>
        <ChosenLocationCard locationData={gameLocation} onClickDetails={null} onGoToLocations={selectLocation} />
        <ChosenHeroCard heroData={player2} onClickDetails={null} onGoToCharacters={selectPlayer2}/>
    </CosmereGrid>

    <div className="choice-page-play-button-wrapper"> <button onClick = {playGame} className="choice-page-play-button">BEGIN MATCH</button> </div>
    
        

</div>
</>)
}