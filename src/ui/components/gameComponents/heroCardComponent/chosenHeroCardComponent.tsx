import { Grow } from "@mui/material";
import { GameCharacter } from "../../../../localData/models/gameCharacter.ts";
import { HeroCardAvatar } from "./heroCardAvatarComponent.tsx";
import { ChangeHeroButton, ChangeHeroCardComponent, HeroCardComponent, SelectHeroButton, SelectHeroCardComponent } from "../../genericComponents/buttons/cardButtons/cardButtons.tsx";
import { useState } from "react";

export const ChosenHeroCard:React.FC<{ heroData: GameCharacter, onClickDetails: any, onGoToCharacters: any}> = 
({heroData, onClickDetails, onGoToCharacters}) => {
    
    return (
        <>
        <Grow in={true} timeout={800}>
            <div className= "chosen-hero-card">
                <HeroCardAvatar avatarPath={heroData._cover_avatar}/>
                <div className='hero-card-class'>
                    <p>{heroData._class}</p>
                </div>
                <div className='hero-card-name'>
                    <p>{heroData._name}</p>
                </div>
                <div className='hero-card-button-wrapper'>
                    {heroData._id == "NO_CHARACTER_CHOSEN" && <SelectHeroCardComponent onClickAction = {onGoToCharacters} />}
                    {heroData._id != "NO_CHARACTER_CHOSEN" && <ChangeHeroCardComponent onClickDetails = {onClickDetails} onClickChange={onGoToCharacters} />}
                    
                </div>
            </div>
        </Grow >
        </>
    )
}