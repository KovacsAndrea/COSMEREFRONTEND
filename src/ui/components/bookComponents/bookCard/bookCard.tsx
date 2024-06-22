import { useNavigate } from 'react-router-dom';
import React from "react";
import { BookData } from '../../../../localData/models/book.ts';
import { CosmereCard } from '../../genericComponents/card/card.tsx';


export const BookCard: React.FC<{bookData: BookData, setDeleteBook: any}> = ({bookData, setDeleteBook}) => {
    const navigate = useNavigate();
    const onClickDetails = () => {
        navigate(`/book/${bookData._id.toString()}`, {state: {bookData}})
    }
    const onClickDelete = () => {
        setDeleteBook(bookData._id); 
    }

    const cardContent = [bookData._description, bookData._chapterFormat, bookData._planet, bookData._system, bookData._shard, bookData._date]
    return(
        <>
        <CosmereCard 
        cardTitle={bookData._title}
        cardContent={cardContent}
        onClickDetails={onClickDetails}
        onClickDelete={onClickDelete}/>
        </>
    )

}