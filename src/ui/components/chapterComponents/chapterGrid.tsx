import { BookData } from "../../../localData/models/book.ts"
import { Chapter, ChapterData } from "../../../localData/models/chapter.ts"
import { CosmereGrid } from "../genericComponents/grid/grid.tsx"
import { ChapterCard } from "./chapterCard/chapterCard.tsx"

export const ChapterLogic: React.FC<{chapterList: Chapter[], bookData: BookData, setChapterWasDeleted: any}> = ({chapterList, bookData, setChapterWasDeleted}) => {
    
    return (<>
        {chapterList.map((chapter: Chapter) => {
            let chapterData: ChapterData = {
                _id: chapter._id,
                _book_id: chapter._book_id,
                _chapter_number: chapter._chapter_number.toString(),
                _title: chapter._title,
                _description: chapter._description,
                _pov: chapter._pov,
                _wordcount: chapter._wordcount.toString()
            }
            return <ChapterCard chapterData={chapterData} bookData={bookData} setChapterWasDeleted={setChapterWasDeleted}/>
            })}
    </>)
}

export const ChapterGrid: React.FC<{chapterList: Chapter[], bookData: BookData, setChapterWasDeleted: any}> = ({chapterList, bookData, setChapterWasDeleted}) => {
    return (
        <>
        <CosmereGrid>
            <ChapterLogic chapterList={chapterList} bookData={bookData} setChapterWasDeleted={setChapterWasDeleted}/>
        </CosmereGrid>
        </>
    )
}