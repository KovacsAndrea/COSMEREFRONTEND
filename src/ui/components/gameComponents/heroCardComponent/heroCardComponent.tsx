import { Grow } from '@mui/material'
import './heroCardStyle.css'
import { HeroCardComponent } from '../../genericComponents/buttons/cardButtons/cardButtons.tsx'
import { HeroCardAvatar } from './heroCardAvatarComponent.tsx'
import { GameCharacter } from '../../../../localData/models/gameCharacter.ts'
import { useGlobalState } from '../../../../globalVarialbles.tsx'
import { useEffect, useState } from 'react'
export const HeroCard:React.FC<{ heroData: GameCharacter, playerChoice: string }> = 
({heroData, playerChoice}) => {
    const [cardStyle, setCardStile] = useState("unselected-card")
    const {player1, player2, setPlayer1, setPlayer2} = useGlobalState();
    const handleSelectPlayer = () => {
        if(playerChoice == "PLAYER1"){setPlayer1(heroData)}
        if(playerChoice == "PLAYER2"){setPlayer2(heroData)}
    }
    useEffect(() => {
        if(playerChoice == "PLAYER1"){if(player1._name == heroData._name){setCardStile("selected-card")}else{setCardStile("unselected-card")}}
        if(playerChoice == "PLAYER2"){if(player2._name == heroData._name){setCardStile("selected-card")}else{setCardStile("unselected-card")}}
    }, [player1, player2])
    return (
        <>
        <Grow in={true} timeout={800}>
            <div className={"hero-card " + cardStyle}>
                <HeroCardAvatar avatarPath={heroData._cover_avatar}/>
                <div className='hero-card-class'>
                    <p>{heroData._class}</p>
                </div>
                <div className='hero-card-name'>
                    <p>{heroData._name}</p>
                </div>
                <div className='hero-card-button-wrapper'>
                    <HeroCardComponent onClickDetails={null} onClickSelect={handleSelectPlayer} />
                </div>
            </div>
        </Grow >
        </>
    )
}