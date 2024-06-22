import { useLocation } from "react-router-dom"
import { EditableChapterCard } from "../../components/chapterComponents/editableChapterCard/editableChapterCard.tsx"

export const ChapterPage: React.FC<{}> = ({}) => {
    const location = useLocation();
    console.log(location.state)
    return (<>
    <EditableChapterCard />
    </>)
}