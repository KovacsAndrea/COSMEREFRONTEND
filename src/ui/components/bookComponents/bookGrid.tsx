import { useNavigate } from "react-router-dom";
import { MainPageIconComponent } from "../genericComponents/icons/iconComponents/mainPageComponent.tsx"
import { Book, BookData } from "../../../localData/models/book.ts";
import { useGlobalState } from "../../../globalVarialbles.tsx";
import { useEffect, useState } from "react";
import { BookCard } from "./bookCard/bookCard.tsx";
import { CosmereGrid } from "../genericComponents/grid/grid.tsx";
import axios from "axios";

export const BookLogic:React.FC<{}> = ({}) => {
    const {usingLocal, localBookList, mongoBookList,
        refreshFilterData, 
        refreshMongoBookList, 
        updateCurrentPage,
        filterShouldBeComputed,
        setFilterShouldBeComputed,
        sortShouldBeComputed,
        setSortShouldBeComputed,
        paginationShouldBeComputed,
        setPaginationShouldBeComputed,
        currentPage,
        cosmerePath,
        setComponentIsLoading
    } = useGlobalState()
    const token = sessionStorage.getItem('token');
    const [deleteBook, setDeleteBook] = useState("")



    useEffect(() => {
        function useLocalData(){

        } 
        async function useGlobalData(){
            setComponentIsLoading(true)
            if(deleteBook.length != 0){
                try{
                    await axios.delete(cosmerePath + '/mongoBooks/' + deleteBook, {headers: {Authorization: `${token}`}})
                }catch(error: any){
                }
                await refreshMongoBookList();
                await refreshFilterData();
                await setDeleteBook("")
            }

            if(filterShouldBeComputed){
                console.log("BOOK TABLE SAYS WE SHOULD COMPUTE FILTER")
                updateCurrentPage(1)
                await refreshMongoBookList();
                await setFilterShouldBeComputed(false)
            }

            if(sortShouldBeComputed){
                console.log("BOOK TABLE SAYS SORT SHOULD BE COMPUTED")
                updateCurrentPage(1)
                await refreshMongoBookList();
                await setSortShouldBeComputed(false)
            }

            if(paginationShouldBeComputed){
                console.log("BOOK TABLE SAYS PAGINATION SHOULD BE COMPUTED")           
                updateCurrentPage(1)
                refreshMongoBookList()
                setPaginationShouldBeComputed(false)
            }
            setComponentIsLoading(false)
        }
        if(usingLocal){useLocalData()} else{useGlobalData()}
    }, [mongoBookList, 
        deleteBook, 
        filterShouldBeComputed, 
        paginationShouldBeComputed, 
        sortShouldBeComputed,
        currentPage])
    return (
        <>{usingLocal ? 
            <>{localBookList.map((book: Book) => {
                let bookData: BookData = {
                    _id: book._id,
                    _title: book._title,
                    _description: book._description,
                    _planet: book._planet,
                    _system: book._system,
                    _shard: book._shard,
                    _date: book._date.toString()}
            return <BookCard bookData={bookData} setDeleteBook = {setDeleteBook} key = {bookData._id}/>})}</> :
       
            <>{mongoBookList.map((book: Book) => {
                let bookData: BookData = {
                _id: book._id,
                _title: book._title,
                _description: book._description,
                _planet: book._planet,
                _system: book._system,
                _shard: book._shard,
                _date: book._date.toString()}
                return <BookCard setDeleteBook = {setDeleteBook} bookData={bookData} key = {bookData._id}/>
            })}</>

        }
        
        </>
    )
}
export const BookGrid:React.FC<{}> = ({}) => {
    const navigate = useNavigate();
    const {cosmerePath, token} = useGlobalState();
    const onClickAddAction = () => {

        axios.get(cosmerePath + "/mongoBooks/mockBook/mockID", {headers: {Authorization: `${token}`}}).then(
            response => {
                const bookData: BookData = {
                    _id: response.data.id,
                    _title: "",
                    _description: "",
                    _planet: "",
                    _system: "",
                    _shard: "",
                    _date: ""
                }
                navigate("/book/" + bookData._id, {state: {bookData}})
            })
    }
    return (
        <>
        <MainPageIconComponent onClickAddAction={onClickAddAction}/>
        <CosmereGrid>
            <BookLogic />
        </CosmereGrid>
        </>
    )
}