import { Link, useNavigate } from "react-router-dom"
import { BookData } from "../../../../localData/models/book.ts"

import { useEffect, useRef, useState } from "react"
import { useGlobalState } from "../../../../globalVarialbles.tsx"
import './editableBookCard.css'
import { CardEditableContentBigComponent } from "../../genericComponents/editableCardComponents/cardEditableContentBigComponent.tsx"
import { REGEX } from "../../../constants/regex.ts"
import { infoMessage } from "../../../constants/info.ts"
import { CardEditableContentSmallComponent } from "../../genericComponents/editableCardComponents/cardEditableContentSmallComponent.tsx"
import { CardTitleComponent } from "../../genericComponents/editableCardComponents/cardTitleComponent.tsx"
import { CardUneditableComponent } from "../../genericComponents/editableCardComponents/cardUneditableContentComponent.tsx"
import { Slide } from "@mui/material"
import { BookIconComponent } from "../../genericComponents/icons/iconComponents/bookIconComponent.tsx"
import { ShallanEmblemLeft, ShallanEmblemRight, SmallShallanEmblemLeft, SmallShallanEmblemRight } from "../../genericComponents/emblems/rectangleEmblems.tsx"
import axios from "axios"
export const EditableBookCard: React.FC<{bookData: BookData}> = ({bookData}) => {
    const [title, setTitle] = useState(bookData._title);
    const [description, setDescription] = useState(bookData._description);
    const [chapters, setChapters] = useState("");
    const [planet, setPlanet] = useState(bookData._planet);
    const [system, setSystem] = useState(bookData._system);
    const [shard, setShard] = useState(bookData._shard);
    const [startDate, setStartDate] = useState(bookData._date);

    const [OGtitle, _setOGTitle] = useState(bookData._title);
    const [OGdescription, _setOGDescription] = useState(bookData._description);
    const [OGplanet, _setOGPlanet] = useState(bookData._planet);
    const [OGsystem, _setOGSystem] = useState(bookData._system);
    const [OGshard, _setOGShard] = useState(bookData._shard);
    const [OGstartDate, _setOGStartDate] = useState(bookData._date);

    const [canBeDeleted, setCanBeDeleted] = useState(false);

    const {usingLocal, 
        cosmerePath, 
        token, 
        refreshMongoBookList, 
        updateCurrentPage, 
        refreshFilterData, 
        setComponentIsLoading,
        goingToMainPage} = useGlobalState();

    const [titleValidator, setTitleValidator] = useState(false)
    const [descriptionValidator, setDescriptionValidator] = useState(false)
    const [planetValidator, setPlanetValidator] = useState(false)
    const [systemValidator, setSystemValidator] = useState(false)
    const [shardValidator, setShardValidator] = useState(false)
    const [startDateValidator, setStartDateValidator] = useState(false);

    const titleAreaRef = useRef<HTMLTextAreaElement>(null);
    const descriptionAreaRef =  useRef<HTMLTextAreaElement>(null);
    const chaptersAreaRef = useRef<HTMLTextAreaElement>(null);
    const planetAreaRef = useRef<HTMLTextAreaElement>(null);
    const systemAreaRef = useRef<HTMLTextAreaElement>(null);
    const shardAreaRef = useRef<HTMLTextAreaElement>(null);
    const startDateAreaRef = useRef<HTMLTextAreaElement>(null);

    const [canBeSaved, setCanBeSaved] = useState(false);
    let allFieldsAreValid  = false;
    let anyFieldIsDifferent = false;
    const [SlideIn, setSlideIn] = useState(true)
    const navigate = useNavigate();
    const expandChapters = () => {
        setSlideIn(false)
        setTimeout(() => {
            navigate("/chapters/book/" + bookData._id, {state: {bookData}});
        }, 800);}

    useEffect(() => {
        async function getChapterFormat(){
            const chFormat = await axios.get("http://localhost:4000/mongoChapters/format/" + bookData._id)
            setChapters(chFormat.data.chapterFormat)
        }
        async function handleCanBeDeleted(){
            const bookExists = await axios.get(cosmerePath + '/mongoBooks/' + bookData._id)
            console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOK")
            console.log(bookExists.data.book)
            if(bookExists.data.book){setCanBeDeleted(true)}
        }
        getChapterFormat();
        handleCanBeDeleted();
    }, [])

    useEffect(() => {
        allFieldsAreValid = 
        (titleValidator &&
            descriptionValidator &&
            planetValidator &&
            systemValidator &&
            shardValidator && 
            startDateValidator)
        anyFieldIsDifferent = 
        (title !== OGtitle
            || description !== OGdescription
            || planet !== OGplanet
            || system !== OGsystem
            || shard !== OGshard
            || startDate.toString() !== OGstartDate.toString())

        console.log("Any fields are different valoarea: " + anyFieldIsDifferent)
        console.log("All fields are valid: " + allFieldsAreValid)
        
        
        if(allFieldsAreValid && anyFieldIsDifferent) {

                setCanBeSaved(true);
            } else {
                setCanBeSaved(false);
        }
    }, [title, description, chapters, startDate, planet, system, shard, 
        titleValidator, descriptionValidator, startDateValidator, 
        planetValidator, systemValidator, shardValidator]);

    const handleSave = () => {
        async function useLocalData() {
           
        }
        async function useCloudData() {
            if(canBeSaved) {
                {
                    
                    try{
                        setComponentIsLoading(true)
                        console.log(token)
                        if(canBeDeleted){
                            await axios.delete(cosmerePath + '/mongoBooks/' + bookData._id, {headers: {Authorization: `${token}`}})
                        }
                        await axios.post(cosmerePath + '/mongoBooks', {
                        _id: bookData._id,
                        _title: title,
                        _description: description,
                        chaptersFormat: chapters,
                        _planet: planet,
                        _system: system,
                        _shard: shard,
                        _date: startDate}, {headers: {Authorization: `${token}`}})
                        updateCurrentPage(1)
                        refreshMongoBookList();
                        refreshFilterData();
                        setComponentIsLoading(false)
                        navigate("/main");
                    }
                    catch(error: any){
                        alert(error.response.data.error)
                    }
                    
                }
            } 
        }
       if(usingLocal){useLocalData()} else {useCloudData()}
    }


    const handleDelete = () => {
        async function useLocalData() {
        }

        async function useCloudData() {
            if(canBeDeleted){
                let confirmation = window.confirm("Sure you want to delete this?");
                if(confirmation){
                    
                    try{
                        setComponentIsLoading(true)
                        await axios.delete(cosmerePath + '/mongoBooks/' + bookData._id, {headers: {Authorization: `${token}`}})
                        updateCurrentPage(1)
                        refreshMongoBookList();
                        refreshFilterData();
                        setComponentIsLoading(false)
                        navigate("/main");
                    }
                    catch(error:any){
                        alert(error.response.data.error)
                    }
                }
            }
            console.log(" -----------USING CLOUD DATA -----------")
        }

       if(usingLocal){useLocalData()} else {useCloudData()}
    }
    const handleDiscard = () => {
        setSlideIn(false)
        setTimeout(() => {
            navigate("/main");
        }, 500);}

    return (
        <>
        <Slide in = {SlideIn} timeout={800} direction="up">
            
            <div className="editable-book-card-page-wrapper">
                <div className="editable-book-entity-card" >
                    <div className = "editable-book-card-content-wrapper"> 
                    <CardTitleComponent
                        title={title}
                        setTitle={setTitle}
                        titleValidator={titleValidator}
                        setTitleValidator={setTitleValidator}
                        titleAreaRef={titleAreaRef} 
                        placeholder={"Input Novel Title"}/>
                        
                        <CardEditableContentBigComponent
                            content={description}
                            setContent={setDescription}
                            contentValidator={descriptionValidator}
                            setContentValidator={setDescriptionValidator}
                            contentAreaRef={descriptionAreaRef}
                            validatorRegex={REGEX.description}
                            contentDescription={infoMessage.description}
                            placeholder={"Input novel description"}/>
    
                        <CardUneditableComponent 
                            content = {chapters}
                            onExpandAction = {expandChapters} 
                            chaptersAreaRef={chaptersAreaRef}
                            placeholder={"Input novel chapters"}/>
                        
                        <div className="editable-entity-card-grid-wrapper">
                            <CardEditableContentSmallComponent
                                content = {planet}
                                setContent={setPlanet}
                                contentValidator={planetValidator}
                                setContentValidator={setPlanetValidator}
                                contentAreaRef={planetAreaRef}
                                neighbourAreaRef={systemAreaRef}
                                validatorRegex={REGEX.planet}
                                contentDescription={infoMessage.planet}
                                placeholder={"Input Novel planet"}/>
    
                            <CardEditableContentSmallComponent 
                                content={system}
                                setContent={setSystem}
                                contentValidator={systemValidator}
                                setContentValidator={setSystemValidator}
                                contentAreaRef={systemAreaRef}
                                neighbourAreaRef={planetAreaRef}
                                validatorRegex={REGEX.system}
                                contentDescription={infoMessage.system}
                                placeholder={"Input Novel system"}/>
                                
    
                            <CardEditableContentSmallComponent 
                                content = {shard}
                                setContent={setShard}
                                contentValidator={shardValidator}
                                setContentValidator={setShardValidator}
                                contentAreaRef={shardAreaRef}
                                neighbourAreaRef={startDateAreaRef}
                                validatorRegex={REGEX.shard}
                                contentDescription={infoMessage.shard}
                                placeholder={"Input Novel shard"}/>
    
                            <CardEditableContentSmallComponent
                                content={startDate}
                                setContent={setStartDate}
                                contentValidator={startDateValidator}
                                setContentValidator={setStartDateValidator}
                                contentAreaRef={startDateAreaRef}
                                neighbourAreaRef={shardAreaRef}
                                validatorRegex={REGEX.startDate}
                                contentDescription={infoMessage.startDate}
                                placeholder={"Input Novel date"}/>
                        </div>
                    </div>
                    <BookIconComponent onClickDiscard={handleDiscard}
                    saveIsEnabled = {canBeSaved} onClickSave={handleSave}
                    deleteIsEnabled = {canBeDeleted} onClickDelete={handleDelete}/>
                    </div>
                
                </div>
            </Slide>
        </>
    )
}