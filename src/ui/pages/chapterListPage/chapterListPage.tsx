import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../../globalVarialbles.tsx";
import { BookData } from "../../../localData/models/book.ts";
import { ChapterNavigationComponent } from "../../components/genericComponents/icons/iconComponents/chapterNavigationComponent.tsx";
import { ChapterGrid } from "../../components/chapterComponents/chapterGrid.tsx";
import './chapterListPage.css'
import { ChapterData } from "../../../localData/models/chapter.ts";
import axios from "axios";
export const ChapterListPage: React.FC<{}> = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const bookData: BookData = location.state.bookData;
    const [chapterList, setChapterList ] = useState([]);
    const {cosmerePath, setComponentIsLoading} = useGlobalState();
    const {usingLocal} = useGlobalState();
    const {getLocalChapterList} = useGlobalState();
    const [chapterWasDeleted, setChapterWasDeleted] = useState(false)
    
    useEffect(() => {
        async function useLocalData() {
            setChapterList(getLocalChapterList(bookData._id))
        }
        async function useCloudData() {
            axios.get(cosmerePath + "/mongoChapters/" + bookData._id, {headers: {Authorization: `${token}`}}). then(response => {
                setChapterList(response.data.chaptersOfBook);
            })
        }
       if(usingLocal){useLocalData()} else {useCloudData()}
    }, []) 

    useEffect(() => {
        async function useLocalData() {
        }
        async function useCloudData() {
            if(chapterWasDeleted){
                axios.get(cosmerePath + "/mongoChapters/" + bookData._id, {headers: {Authorization: `${token}`}}). then(response => {
                    setChapterList(response.data.chaptersOfBook);
                })
                setChapterWasDeleted(false)
                setTimeout(()=>{setComponentIsLoading(false)}, 500)
                
            }
        }
       if(usingLocal){useLocalData()} else {useCloudData()}
    }, [chapterWasDeleted]) 


    const handleAddChapter = () => {
        axios.get(cosmerePath + "/mongoBooks/mockBook/mockID", {headers: {Authorization: `${token}`}}).then(
            response => {
                const chapterData: ChapterData = {
                    _id: response.data.id,
                    _book_id: bookData._id,
                    _chapter_number: "",
                    _title: "",
                    _description: "",
                    _pov: "",
                    _wordcount: ""
                }
                navigate(`/chapter/${chapterData._id.toString()}`, {state: {chapterData, bookData}})
            })

    }
    const handleBackToBook = () => {
        navigate("/book/" + bookData._id, {state: {bookData}})
    }
    
    console.log(chapterList)
    return (<>
    <div className="chapter-list-page-wrapper">
        <ChapterNavigationComponent onClickAddAction={handleAddChapter} onClickBackAction={handleBackToBook}/>
        <ChapterGrid chapterList={chapterList} bookData={bookData} setChapterWasDeleted={setChapterWasDeleted}/>
    </div>
    </>)
}