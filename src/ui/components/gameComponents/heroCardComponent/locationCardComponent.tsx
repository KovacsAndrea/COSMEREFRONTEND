import { useEffect, useState } from "react";
import { GameLocation } from "../../../../localData/models/gameLocation.ts";
import { useGlobalState } from "../../../../globalVarialbles.tsx";
import { Grow } from "@mui/material";
import { ChangeHeroCardComponent, HeroCardComponent, SelectHeroCardComponent } from "../../genericComponents/buttons/cardButtons/cardButtons.tsx";
import { HeroCardAvatar } from "./heroCardAvatarComponent.tsx";
import './locationCardStyle.css'

export const LocationCard:React.FC<{ locationData: GameLocation }> = 
({locationData}) => {
    const [cardStyle, setCardStile] = useState("unselected-card")
    const {gameLocation, setGameLocation} = useGlobalState();
    const handleSelectLocation = () => {
       setGameLocation(locationData)
    }
    useEffect(() => {
       if(gameLocation._name == locationData._name)
        {setCardStile("selected-card")}
       else{setCardStile("unselected-card")}
    }, [gameLocation])
    return (
        <>
        <Grow in={true} timeout={800}>
            <div className={"hero-card " + cardStyle}>
                <HeroCardAvatar avatarPath={locationData._cover_avatar}/>
                <div className='hero-card-class'>
                    <p>{locationData._name}</p>
                </div>
                <div className='hero-card-name'>
                    <p>{locationData._planet}</p>
                </div>
                <div className='hero-card-button-wrapper'>
                    <HeroCardComponent onClickDetails={null} onClickSelect={handleSelectLocation} />
                </div>
            </div>
        </Grow >
        </>
    )
}

export const ChosenLocationCard:React.FC<{ locationData: GameLocation, onClickDetails: any, onGoToLocations: any}> = 
({locationData, onClickDetails, onGoToLocations}) => {
    
    return (
        <>
        <Grow in={true} timeout={800}>
            <div className= "chosen-hero-card">
                <HeroCardAvatar avatarPath={locationData._cover_avatar}/>
                <div className='hero-card-class'>
                    <p>{locationData._planet}</p>
                </div>
                <div className='hero-card-name'>
                    <p>{locationData._name}</p>
                </div>
                <div className='hero-card-button-wrapper'>
                    {locationData._id == "NO_LOCATION_CHOSEN" && <SelectHeroCardComponent onClickAction = {onGoToLocations} />}
                    {locationData._id != "NO_LOCATION_CHOSEN" && <ChangeHeroCardComponent onClickDetails = {onClickDetails} onClickChange={onGoToLocations} />}
                    
                </div>
            </div>
        </Grow >
        </>
    )
}