import { useNavigate } from "react-router-dom";
import { ChapterData } from "../../../../localData/models/chapter.ts";
import { BookData } from "../../../../localData/models/book.ts";
import { CosmereCard } from "../../genericComponents/card/card.tsx";
import axios from "axios";
import { useGlobalState } from "../../../../globalVarialbles.tsx";

export const ChapterCard: React.FC<{chapterData: ChapterData, bookData: BookData, setChapterWasDeleted: any}> = ({chapterData, bookData, setChapterWasDeleted}) => {
    const navigate = useNavigate();
    const onClickDetails = () => {
        navigate(`/chapter/${chapterData._id.toString()}`, {state: {chapterData, bookData}})
    }
    const {token, setComponentIsLoading} = useGlobalState();
    const onClickDelete = async () => {
        setComponentIsLoading(true)
        await axios.delete("http://localhost:4000/mongoChapters/" + chapterData._id, {headers: {Authorization: `${token}`}})
        setChapterWasDeleted(true)
    }
    const chapterOrder = "Ch." + chapterData._chapter_number + " of " + bookData._title
    const cardContent = [chapterOrder, chapterData._description, "POV: " + chapterData._pov, "Word count: " + chapterData._wordcount]
    return(
        <>
        <CosmereCard 
        cardTitle={chapterData._chapter_number + ". " +chapterData._title}
        cardContent={cardContent}
        onClickDetails={onClickDetails}
        onClickDelete={onClickDelete}/>
        </>
    )

}