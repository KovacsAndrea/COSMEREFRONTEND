import { Slide } from '@mui/material'
import './gameIntroPage.css'
import { CosmereButton } from '../../../components/genericComponents/buttons/otherButtons/otherButtons.tsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoPlay } from 'react-icons/io5'
import { useGlobalState } from '../../../../globalVarialbles.tsx'
export const GameIntroPage: React.FC<{}> = ({}) =>{
    const [slideIn, setSlideIn] = useState(true)
    const navigate = useNavigate();
    const onClickBackToMain = () => {
        setSlideIn(false)
        setTimeout(() => {
            navigate("/main");
        }, 1500); 
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {emptyGameData} = useGlobalState()
    const goToCharacters = () =>{
        emptyGameData();
        setSlideIn(false)
        setTimeout(() => {
            navigate("/game/choice");
        }, 1500); 
    }
    const gameDescription = `Embark on an epic adventure through the interconnected worlds of Brandon Sanderson's Cosmere in "Cosmere Chronicles: Unleash the Shards". Dive deep into the rich lore, master powerful magic systems, and join iconic characters from across the novels. Choose your path, select your hero, and harness unique magical abilities to shape the fate of the Cosmere.`
    const stormlightDescription = `In the world of Roshar, Stormlight is the fundamental source of power. Drawn from the highstorms that rage across the land, this luminescent energy can be stored in gemstones and harnessed by Surgebinders.`
    const allomancyDescription = `Allomancy is one of the three magic systems in the Mistborn fantasy novel trilogy, as well as the most prominent. People capable of Allomancy are known as "Allomancers" and have the ability to use or "burn" metals to fuel a variety of physical and mental enhancements or abilities.`
    const nalthisDescription = `On the world of Nalthis, Breath is a powerful and intrinsic force within every individual. 
    Each Breath grants a small increase in life and vitality, but collecting more allows players to perform incredible feats
     through Awakening. Awakeners can imbue objects with life, command them to perform tasks, and even enhance their own 
     physical abilities. The more Breaths you accumulate, the more powerful and versatile your Awakening abilities become.`
    const tressDescription = `The seas of Lumar are filled with magical spores, each type corresponding to a different Aether.
     These spores react violently with water, producing various effects. Verdant spores create instant plant growth, while 
     Roseite spores form crystalline structures. Players can harness these spores to manipulate the environment and combat enemies.`
    const elantrisDescription = `In the city of Elantris and its surrounding regions, AonDor is a powerful rune-based 
    magic system. By drawing specific Aons, or magical symbols, players can channel the Dor, a pervasive mystical energy. 
    Each Aon corresponds to different effects—Aon Rao for light, Aon Tia for teleportation, Aon Daa for destructive force, 
    and more. Mastering AonDor requires precision and understanding of the intricate symbols, offering players a versatile and powerful means to manipulate reality.`
    const painterDescription = `In the world of The Nightmare Painters certain individuals possess the rare 
    ability to manifest their dreams and fears into reality through intricate paintings. 
    These artists, known as Nightmare Painters, wield a unique form of magic that bridges the boundary 
    between dreams and waking life.`
    
    return (<>
        <Slide in={slideIn} timeout={1500} mountOnEnter unmountOnExit>
            <div className="intro-game-page-wrapper">
                <div className="intro-game-page-background">
                <div className="intro-game-page-wallpaper-section intro-game-kredik-shaw">
                    {/* <div className="intro-the-cosmere-awaits-wrapper">
                    <p className="intro-the-cosmere-awaits">THE COSMERE AWAITS</p>
                    </div> */}
                    <div className = "intro-game-page-button-wrapper">
                        <CosmereButton onClickAction={onClickBackToMain} />
                    </div>
                </div>

                <div className="intro-game-page-wallpaper-section">
                    <div className='theflex'>
                    <div className='gameCard game-card-stormlight'> <h2>SURGES</h2>
                    <p>{stormlightDescription}</p></div>
                    <div className='gameCard game-card-allomancy'> <h2>ALLOMANCY</h2>
                    <p>{allomancyDescription}</p></div>
                    <div className='gameCard game-card-breath'> <h2>BREATH</h2>
                    <p>{nalthisDescription}</p></div>
                    <div className='gameCard game-card-brando' onClick={goToCharacters}> 
                        <h2>PLAY</h2>
                        <p>{gameDescription}</p>
                        <IoPlay className='cosmere-play-icon'/>
                    </div>
                    <div className='gameCard game-card-spore'> <h2>AETHER</h2>
                    <p>{tressDescription}</p></div>
                    <div className='gameCard game-card-aondor'> <h2>AON DOR</h2>
                    <p>{elantrisDescription}</p></div>
                    <div className='gameCard game-card-ink'> <h2>CREACTION</h2>
                    <p>{painterDescription}</p></div>
                    </div>
                </div>
                <div className="intro-game-page-wallpaper-section intro-game-luthadel"></div>
                </div>
            </div>
        </Slide>
    </>)
}