import { gameCharacters } from "../../../../localData/data/gameCharacters.ts"
import { GameCharacter } from "../../../../localData/models/gameCharacter.ts"
import { HeroCard } from "../../../components/gameComponents/heroCardComponent/heroCardComponent.tsx"
import { CosmereGrid } from "../../../components/genericComponents/grid/grid.tsx"

export const CharacterGrid:React.FC<{playerChoice: string }> = ({playerChoice}) =>{

    return(<>
    <CosmereGrid>
    {gameCharacters.map((hero: GameCharacter) => <HeroCard heroData={hero} playerChoice={playerChoice}/>)}
    </CosmereGrid>
    </>)
}