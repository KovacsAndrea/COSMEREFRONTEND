
import { Slide } from "@mui/material";
import "./header.css"
import { CosmereButtonRed } from "../buttons/otherButtons/otherButtons.tsx";
import { useNavigate } from "react-router-dom";
export function Header() {
    const navigate = useNavigate();
    const onClickGame = () => {navigate("/game/intro")}
    const p1 = "The Cosmere is the fictional universe I created for many of my fantasy novels to take place within. Currently Elantris, Mistborn, Warbreaker, The Stormlight Archive, White Sand, and anything from Arcanum Unbounded are part of the Cosmere, and I’ve tried my best to make the distinction clear on the Books page of my site here, which will give you a good idea where my stories take place, whether within the Cosmere or outside of it.";
    const p2 = "All of my Cosmere books share a single creation myth, a single cosmology, that gives underlying theorem of magic for all these connected worlds. The theorem is not simple–I can’t really encapsulate it in one sentence–but you can map out how the magic all fits together in the Cosmere using this kind of super theorem. Since all the worlds in the Cosmere are connected, that means you should pay attention. Certain characters from one series sometimes show up in other series. You don’t often need to know this is going on to enjoy the book, but if you keep your eyes open, you’ll be rewarded with glimpses of these Worldhoppers now and then.";
    const p3 = "Sometimes I get asked questions like: Does such-and-such story take place within the Cosmere? And here’s a good rule of thumb that mostly works: if the book contains Earth in any shape or form, then the story is not set in the Cosmere. Also, my children’s books and The Wheel of Time are not part of the Cosmere.";
    return(
        <>
        <Slide in={true} timeout={800} direction="down">
        <div className = "header-info-banner">
            <h1 className="heder-info-title">WHAT IS THE COSMERE?®</h1>
            <p className="header-paragraph">{p1}</p>
            <p className="header-paragraph">{p2}</p>
            <p className="header-paragraph">{p3}</p>
            
            <CosmereButtonRed onClickAction={onClickGame}/>
        </div>
        </Slide>
        </>
    )
}