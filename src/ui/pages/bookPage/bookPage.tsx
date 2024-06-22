import { useLocation } from "react-router-dom";
import { BookData } from "../../../localData/models/book.ts";
import { EditableBookCard } from "../../components/bookComponents/editableBookCard/editableBookCard.tsx";

export const BookPage: React.FC<{}> = ({}) => {
    const location = useLocation();
    const bookData: BookData = location.state.bookData;
    console.log(location)
    return (<>
        <EditableBookCard bookData={bookData}/>
    </>)
}