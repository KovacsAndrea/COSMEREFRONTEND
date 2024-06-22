import { useState, useEffect, useRef } from "react";
import { REGEX } from "../../../constants/regex.ts";
import { validateContent, adjustAreaHeight } from "../../genericComponents/editableCardComponents/utils.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide } from "@mui/material";
import { ChapterIconComponent } from "../../genericComponents/icons/iconComponents/chapterIconComponent.tsx";
import { CardUneditableTitleComponent } from "../../genericComponents/editableCardComponents/cardUneditableTitleComponent.tsx";
import { CardEditableContentBigComponent } from "../../genericComponents/editableCardComponents/cardEditableContentBigComponent.tsx";
import { infoMessage } from "../../../constants/info.ts";
import { CardEditableContentSmallComponent } from "../../genericComponents/editableCardComponents/cardEditableContentSmallComponent.tsx";
import { ChapterData } from "../../../../localData/models/chapter.ts";
import './editableChapterCard.css'
import { BookData } from "../../../../localData/models/book.ts";
import axios from "axios";
import { useGlobalState } from "../../../../globalVarialbles.tsx";

export const EditableChapterCard: React.FC<{}> = ({}) => {
    const token = sessionStorage.getItem('token');
    const location = useLocation();
    const navigate = useNavigate();

    const bookData: BookData = location.state.bookData;
    const chapterData: ChapterData = location.state.chapterData;

    const [SlideIn, setSlideIn] = useState(true)
    const handleBackToBook = () => {
        setSlideIn(false)
        setTimeout(() => {
            navigate(`/book/${bookData._id}`, { state: { bookData } })
        }, 500);
    }
    
    

    const handleBackToGrid = () => {
        setSlideIn(false)
        setTimeout(() => {
        navigate(`/chapters/book/${bookData._id}`, { state: { bookData } })
    }, 500);
    }

    
    const bookTitle = bookData._title;
    const [title, setTitle] = useState(chapterData._title);
    const [description, setDescription] = useState(chapterData._description);
    const [wordcount, setWordcount] = useState(chapterData._wordcount);
    const [pov, setPov] = useState(chapterData._pov);
    const [chapterNumber, setChapterNumber] = useState(chapterData._chapter_number);

    const [OGtitle, _setOGTitle] = useState(chapterData._title);
    const [OGdescription, _setOGDescription] = useState(chapterData._description);
    const [OGwordcount, _setOGWordcount] = useState(chapterData._wordcount);
    const [OGpov, _setOGPov] = useState(chapterData._pov);
    const [OGchapterNumber, _setOGChapterNumber] = useState(chapterData._chapter_number);

    const [titleValidator, setTitleValidator] = useState(false);
    const [descriptionValidator, setDescriptionValidator] = useState(false);
    const [wordcountValidator, setWordcountValidator] = useState(false);
    const [povValidator, setpovValidator] = useState(false);
    const [chapterNumberValidator, setchapterNumberValidator] = useState(false);

    let allFieldsAreValid  = false;
    let anyFieldIsDifferent = false;

    const [canBeSaved, setCanBeSaved] = useState(false);
    const [canBeDeleted, setCanBeDeleted] = useState(false);

    const validateAllContent = () => {
        console.log("im validating")
        validateContent(title, REGEX.chapterTitle, setTitleValidator);
        validateContent(description, REGEX.chapterDescription, setDescriptionValidator);
        validateContent(wordcount, REGEX.chapterWordCount, setWordcountValidator)
        validateContent(pov, REGEX.pov, setpovValidator)
        validateContent(chapterNumber, REGEX.chapterNumber, setchapterNumberValidator)
    }

    useEffect (() => {
        validateAllContent();
        allFieldsAreValid = (
            titleValidator &&
            descriptionValidator &&
            wordcountValidator &&
            povValidator &&
            chapterNumberValidator
        )
        anyFieldIsDifferent = (
            OGtitle != title ||
            OGdescription != description ||
            OGwordcount != wordcount ||
            OGpov != pov ||
            OGchapterNumber != chapterNumber
        )
        console.log("TITLE " + titleValidator)
        console.log("description " + descriptionValidator)
        console.log("count " + wordcountValidator)
        console.log("pov " + povValidator)
        console.log("chNumber  " + chapterNumberValidator)

        let chapterCanBeSaved = (anyFieldIsDifferent && allFieldsAreValid)
        setCanBeSaved(chapterCanBeSaved)

        let chapterCanBeDeleted = (OGtitle.length !==0);
        setCanBeDeleted(chapterCanBeDeleted);

    }, [title, description, wordcount, pov, 
        titleValidator, 
        descriptionValidator, 
        wordcountValidator, 
        povValidator,
        chapterNumberValidator])

    const titleAreaRef= useRef<HTMLTextAreaElement>(null);
    const chapterTitleAreaRef = useRef<HTMLTextAreaElement>(null);
    const descriptionAreaRef = useRef<HTMLTextAreaElement>(null);
    const wordcountAreaRef = useRef<HTMLTextAreaElement>(null);
    const povAreaRef = useRef<HTMLTextAreaElement>(null);
    const chapterNumberAreaRef = useRef<HTMLTextAreaElement>(null);
    
    const {cosmerePath, setComponentIsLoading} = useGlobalState();

    useEffect(() => {
        adjustAreaHeight(titleAreaRef)
    }, [titleAreaRef])
    
    const handleSave = async () => {
        if(canBeSaved){
            setComponentIsLoading(true)
            await axios.delete(cosmerePath + "/mongoChapters/" + chapterData._id, {headers: {Authorization: `${token}`}})
            await axios.post(cosmerePath + "/mongoChapters/", {
                _id: chapterData._id,
                _book_id: bookData._id,
                _chapter_number: chapterNumber,
                _title: title,
                _description: description,
                _wordcount: wordcount,
                _pov: pov
            }, {headers: {Authorization: `${token}`}})
                handleBackToGrid();
                setComponentIsLoading(false)
        }
    }

    const handleDelete = async () => {
        
        if(canBeDeleted){
            setComponentIsLoading(true)
                await axios.delete(cosmerePath + "/mongoChapters/" + chapterData._id, {headers: {Authorization: `${token}`}})
                navigate(`/chapters/book/${bookData._id}`, { state: { bookData } })
                setComponentIsLoading(false)
        }
    }
    
    let cardTitle = "Ch." + chapterNumber + " of " + bookTitle; 
    return(<>
    <Slide in = {SlideIn} timeout={500} direction="up">
            <div className="editable-card-page-wrapper">
                <div className="editable-entity-card" >
                    <div className = "editable-entity-card-content-wrapper"> 
                    <CardUneditableTitleComponent
                        content={cardTitle}
                        contentAreaRef={titleAreaRef}
                        />
                    <CardEditableContentBigComponent
                            content={title}
                            setContent={setTitle}
                            contentValidator={titleValidator}
                            setContentValidator={setTitleValidator}
                            contentAreaRef={chapterTitleAreaRef}
                            validatorRegex={REGEX.chapterTitle}
                            contentDescription={infoMessage.chapterTitle}
                            placeholder={"Input chapter title"}/>

                        <CardEditableContentBigComponent
                            content={description}
                            setContent={setDescription}
                            contentValidator={descriptionValidator}
                            setContentValidator={setDescriptionValidator}
                            contentAreaRef={descriptionAreaRef}
                            validatorRegex={REGEX.chapterDescription}
                            contentDescription={infoMessage.chapterDescription}
                            placeholder={"Input chapter description"}/>

                        <CardEditableContentBigComponent
                            content={pov}
                            setContent={setPov}
                            contentValidator={povValidator}
                            setContentValidator={setpovValidator}
                            contentAreaRef={povAreaRef}
                            validatorRegex={REGEX.chapterTitle}
                            contentDescription={infoMessage.chapterPov}
                            placeholder={"Input chapter point of view"}/>
                        
                        <div className="editable-entity-card-grid-wrapper">
                            <CardEditableContentSmallComponent
                                content = {wordcount}
                                setContent={setWordcount}
                                contentValidator={wordcountValidator}
                                setContentValidator={setWordcountValidator}
                                contentAreaRef={wordcountAreaRef}
                                neighbourAreaRef={chapterNumberAreaRef}
                                validatorRegex={REGEX.chapterWordCount}
                                contentDescription={infoMessage.chapterWordcount}
                                placeholder={"Input chapter wordcount"}/>
    
                            <CardEditableContentSmallComponent 
                                content={chapterNumber}
                                setContent={setChapterNumber}
                                contentValidator={chapterNumberValidator}
                                setContentValidator={setchapterNumberValidator}
                                contentAreaRef={chapterNumberAreaRef}
                                neighbourAreaRef={wordcountAreaRef}
                                validatorRegex={REGEX.chapterNumber}
                                contentDescription={infoMessage.chapterWordcount}
                                placeholder={"Input chapter number"}/>
                        
                        </div>
                        <ChapterIconComponent 
                        onClickDiscard={handleBackToGrid}
                        saveIsEnabled = {canBeSaved} onClickSave={handleSave}
                        deleteIsEnabled = {canBeDeleted} onClickDelete={handleDelete}
                        onClickInfo={handleBackToBook}/>
                    </div>
                
                    </div>
                </div>
                </Slide>
    </>)
}

