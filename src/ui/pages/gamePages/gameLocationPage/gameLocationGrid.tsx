import { gameLocations } from "../../../../localData/data/gameLocations.ts"
import { GameLocation } from "../../../../localData/models/gameLocation.ts"
import { LocationCard } from "../../../components/gameComponents/heroCardComponent/locationCardComponent.tsx"
import { CosmereGrid } from "../../../components/genericComponents/grid/grid.tsx"

export const LocationGrid:React.FC<{}> = ({}) =>{

    return(<>
    <CosmereGrid>
    {gameLocations.map((location: GameLocation) => <LocationCard locationData={location}/>)}
    </CosmereGrid>
    </>)
}