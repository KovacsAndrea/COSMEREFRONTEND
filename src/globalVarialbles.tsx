import axios from "axios";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { FilterData } from "./localData/models/filterData.ts";
import { SortData } from "./localData/models/sortData.ts";
import { BookRepo } from "./localData/repo/bookRepo.ts";
import { BookService } from "./localData/service/bookService.ts";
import { Book, BookData } from "./localData/models/book.ts";
import { ChapterRepo } from "./localData/repo/chapterRepo.ts";
import { ChapterServ } from "./localData/service/chapterService.ts";
import { GameCharacter } from "./localData/models/gameCharacter.ts";
import { GameLocation } from "./localData/models/gameLocation.ts";
import { noLocation } from "./localData/data/gameLocations.ts";
import { _player1, _player2 } from "./localData/data/gameCharacters.ts";


interface GlobalState{
    clientIsConnectedToInternet: boolean;
    setClientIsConnectedToInternet: React.Dispatch<React.SetStateAction<boolean>>;
    serverIsRunning: boolean;
    setServerIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    usingLocal: boolean;
    setUsingLocal: React.Dispatch<React.SetStateAction<boolean>>;

    localBookList: BookData[];
    setLocalBookList: React.Dispatch<React.SetStateAction<BookData[]>>;
    
    mongoBookList: Book[];
    setMongoBookList: React.Dispatch<React.SetStateAction<Book[]>>;

    planetData: string[];
    setPlanetData: React.Dispatch<React.SetStateAction<string[]>>;
    systemData: string[];
    setSystemData: React.Dispatch<React.SetStateAction<string[]>>;
    shardData: string[];
    setShardData: React.Dispatch<React.SetStateAction<string[]>>;
    dateData: number[];
    setDateData: React.Dispatch<React.SetStateAction<number[]>>;

    currentFilterPlanetData: string[];
    setCurrentFilterPlanetData: React.Dispatch<React.SetStateAction<string[]>>;
    currentFilterSystemData: string[];
    setCurrentFilterSystemData: React.Dispatch<React.SetStateAction<string[]>>;
    currentFilterShardData: string[];
    setCurrentFilterShardData: React.Dispatch<React.SetStateAction<string[]>>;
    currentFilterDateData: number[];
    setCurrentFilterDateData: React.Dispatch<React.SetStateAction<number[]>>;

    currentSortCriteria: string;
    setCurrentSortCriteria: React.Dispatch<React.SetStateAction<string>>;
    currentSortDirection: number;
    setCurrentSortDirection: React.Dispatch<React.SetStateAction<number>>;

    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentElementsPerPage: number;
    setCurrentElementsPerPage: React.Dispatch<React.SetStateAction<number>>;

    bookViewLength: number;
    setBookViewLength: React.Dispatch<React.SetStateAction<number>>

    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    refreshUser: () => any;

    userList: any;
    setUserList: React.Dispatch<React.SetStateAction<any>>;
    
    alertMessage: string;
    alertStatus: boolean;
    setAlertStatus: React.Dispatch<React.SetStateAction<boolean>>;


    filterShouldBeComputed: boolean,
    setFilterShouldBeComputed: React.Dispatch<React.SetStateAction<boolean>>;

    sortShouldBeComputed: boolean,
    setSortShouldBeComputed: React.Dispatch<React.SetStateAction<boolean>>;

    paginationShouldBeComputed: boolean,
    setPaginationShouldBeComputed: React.Dispatch<React.SetStateAction<boolean>>;

    searchShouldBeComputed: boolean,
    setSearchShouldBeComputed: React.Dispatch<React.SetStateAction<boolean>>;

    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>;

    goingToMainPage: boolean
    setGoindToMainPage: React.Dispatch<React.SetStateAction<boolean>>;
    componentIsLoading: boolean,
    setComponentIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

    player1: GameCharacter;
    setPlayer1: React.Dispatch<React.SetStateAction<GameCharacter>>;

    player2: GameCharacter;
    setPlayer2: React.Dispatch<React.SetStateAction<GameCharacter>>;

    gameLocation: GameLocation;
    setGameLocation: React.Dispatch<React.SetStateAction<GameLocation>>;

    emptyGameData: () => void;

    refreshLocalBookList: () => void;
    refreshMongoBookList: () => void;
    refreshFilterData: () => void;
    refreshCurrentFilterData: () => void;
    refreshCurrentSortData: () => void;
    refreshCurrentPage: () => void;
    updateCurrentPage: (newCurrentPage: number) => void;
    refreshCurrentElementsPerPage: () => void;
    updateCurrentElementsPerPage: (newElementsPerPage: number) => any;
    refreshBookViewLength: () => any;
    refreshUserList: () => any;
    getLocalChapterList: (book_id: string) => any;
    token: any;
    stateHandler: (connectedAction: any, alertMessage: string) => any;
    cosmerePath: string
    
    
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined)

export const GlobalStateProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const bookRepo = new BookRepo();
    const bookServ = new BookService(bookRepo);
    const chapterRepo = new ChapterRepo();
    const chapterServ = new ChapterServ(chapterRepo)
    const token = sessionStorage.getItem('token');
    const [clientIsConnectedToInternet, setClientIsConnectedToInternet] = useState(true);
    const [serverIsRunning, setServerIsRunning] = useState(true);
    const [usingLocal, setUsingLocal] = useState(false);
    const [localBookList, setLocalBookList] = useState<BookData[]>([]);
    const [mongoBookList, setMongoBookList] = useState<Book[]>([]);
    
    
    const [planetData, setPlanetData] = useState<string[]>([]);
    const [systemData, setSystemData] = useState<string[]>([]);
    const [shardData, setShardData] = useState<string[]>([]);
    const [dateData, setDateData] = useState<number[]>([]);

    const [currentFilterPlanetData, setCurrentFilterPlanetData] = useState<string[]>([]);
    const [currentFilterSystemData, setCurrentFilterSystemData] = useState<string[]>([]);
    const [currentFilterShardData, setCurrentFilterShardData] = useState<string[]>([]);
    const [currentFilterDateData, setCurrentFilterDateData] = useState<number[]>([]);

    const [currentSortCriteria, setCurrentSortCriteria] = useState<string>("_date");
    const [currentSortDirection, setCurrentSortDirection] =  useState<number>(0);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentElementsPerPage, setCurrentElementsPerPage] = useState<number>(0);
    
    const [bookViewLength, setBookViewLength] = useState(0);

    const [user, setUser] = useState("")
    const [userList, setUserList] = useState([])

    const [alertStatus, setAlertStatus] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const [filterShouldBeComputed, setFilterShouldBeComputed] = useState(true)
    const [sortShouldBeComputed, setSortShouldBeComputed] = useState(true)
    const [paginationShouldBeComputed, setPaginationShouldBeComputed] = useState(true)
    const [searchShouldBeComputed, setSearchShouldBeComputed] = useState(true)
    const [searchText, setSearchText] = useState("")

    const[componentIsLoading, setComponentIsLoading] = useState(false)
    const[goingToMainPage, setGoindToMainPage] = useState(true)

    const [player1, setPlayer1] = useState(_player1)
    const [player2, setPlayer2] = useState(_player2)
    const [gameLocation, setGameLocation] = useState(noLocation)

    const emptyGameData = () => {
        setPlayer1(_player1)
        setPlayer2(_player2)
        setGameLocation(noLocation)
    }

    //const _renderedCosmerePath = "https://cosmerebackend.onrender.com"
    const _localCosmerePath = "http://localhost:4000"

    const cosmerePath = _localCosmerePath
    const refreshMongoBookList = () =>{
      console.log("FETCHING BOOKS")
      axios.get(cosmerePath + "/mongoBooks", {headers: {Authorization: `${token}`}}).then( response => {
        setMongoBookList(response.data.books);
        }).catch (error => {
        console.error('Error fetching backend data:', error);
        });
    }

    const refreshLocalBookList = () => {
      setLocalBookList(bookServ.getAllBooks())
    }

    const refreshFilterData = () => {
      axios.get<{ filterData: FilterData }>(cosmerePath + "/mongoBooks/filter/data", {headers: {Authorization: `${token}`}})
        .then(filterResponse => {
          console.log("FETCHING GFILTER DATA CURVELOR")
            const _filterData = filterResponse.data.filterData;
            setPlanetData(_filterData.planets);
            setSystemData(_filterData.systems);
            setShardData(_filterData.shards);
            setDateData(_filterData.dates);
        })
        .catch(error => {
            console.error('Error fetching filter data:', error);
        });
  };

  const refreshCurrentFilterData = () => {
    axios.get<{ currentFilterData: FilterData }>(cosmerePath + "/mongoBooks/filter/current/data", {headers: {Authorization: `${token}`}}).then(
      currentFilterResponse => {
        const _currentFilterData = currentFilterResponse.data.currentFilterData;
                     
        setCurrentFilterPlanetData(_currentFilterData.planets);
        setCurrentFilterSystemData(_currentFilterData.systems);
        setCurrentFilterShardData(_currentFilterData.shards);
        setCurrentFilterDateData(_currentFilterData.dates);
      })
  }

  const refreshCurrentSortData = () => {
    axios.get<{ sortData: SortData }>(cosmerePath + "/mongoBooks/sort/current/data", {headers: {Authorization: `${token}`}}).then(
      currentSortResponse => {
        setCurrentSortCriteria(currentSortResponse.data.sortData.criteria);
        setCurrentSortDirection(currentSortResponse.data.sortData.direction);
      })
  }

  const refreshCurrentPage = () => {
    axios.get<{currentPage: number}>(cosmerePath + "/mongoBooks/pagination/currentPage", {headers: {Authorization: `${token}`}}).then(
      currentPaginationResponse => {
        //console.log("REFRESHING CURRENT PAGE TO: " + currentPaginationResponse.data.currentPage)
        setCurrentPage(currentPaginationResponse.data.currentPage)
      }
    )
  }

  const updateCurrentPage =  async (newCurrentPage: number) => {
    await axios.patch(cosmerePath + "/mongoBooks/pagination/currentPage", {
      currentPage: newCurrentPage
    }, {headers: {Authorization: `Bearer ${token}`}})
    const result = await axios.get<{currentPage: number}>(cosmerePath + "/mongoBooks/pagination/currentPage", {headers: {Authorization: `${token}`}})
    setCurrentPage(result.data.currentPage)
  }

  const refreshCurrentElementsPerPage = async () => {
    const result = await axios.get<{elementsPerPage: number}>(cosmerePath + "/mongoBooks/pagination/elementsPerPage", {headers: {Authorization: `${token}`}})
    setCurrentElementsPerPage(result.data.elementsPerPage)
  }

  const updateCurrentElementsPerPage = async (newElementsPerPage: number) => {
    await axios.patch(cosmerePath + "/mongoBooks/pagination/elementsPerPage", {
      elementsPerPage: newElementsPerPage
    }, {headers: {Authorization: `Bearer ${token}`}})
    const result = await axios.get<{elementsPerPage: number}>(cosmerePath + "/mongoBooks/pagination/elementsPerPage", {headers: {Authorization: `${token}`}})
    setCurrentElementsPerPage(result.data.elementsPerPage)
  }

  const refreshBookViewLength = async () => {
    const result = await axios.get<{length: number}>(cosmerePath + "/mongoBooks/view/length", {headers: {Authorization: `${token}`}})
    setBookViewLength(result.data.length)
  }

  const refreshUser = async () => {
    const token = sessionStorage.getItem('token')
    const user = await axios.get(cosmerePath + "/mongoUsers/user",  {headers: {Authorization: `${token}`}})
    setUser(user.data.user)
  }

  const refreshUserList = async () => {
    const result = await axios.get(cosmerePath + "/mongoUsers/list")
    setUserList(result.data.userList)
  }

  const stateHandler = (connectedAction: any, alertMessage: string) => {
    if(alertMessage!= ""){setAlertMessage(alertMessage), setAlertStatus(true);}

    else{connectedAction()}
}

  const getLocalChapterList = (book_id: string) => {
    return chapterServ.getChaptersOfBook(book_id)
  }
 

    useEffect(() => {
        // axios.get(cosmerePath + "/books/search/NONE").then( response => {
        //     setBookList(response.data.books);
        //     }).catch (error => {
        //     console.error('Error fetching backend data:', error);
        //     });
        
        refreshMongoBookList();
        refreshFilterData();
        refreshCurrentFilterData();
        refreshCurrentSortData();
        refreshCurrentElementsPerPage();
        updateCurrentPage(1);
        refreshUser();
        refreshUserList();
        if(usingLocal){refreshLocalBookList(); console.log("REFRESGING LOCAL BOOK LIST")}else{
          //refresh remote book list
        }

        }, []);

  const state: GlobalState = {
    clientIsConnectedToInternet,
    setClientIsConnectedToInternet,
    serverIsRunning,
    setServerIsRunning,
    usingLocal,
    setUsingLocal,

    localBookList,
    setLocalBookList,
    refreshLocalBookList,

    mongoBookList,
    setMongoBookList,
    refreshMongoBookList,

    planetData,
    setPlanetData,
    systemData,
    setSystemData,
    shardData,
    setShardData,
    dateData,
    setDateData,
    refreshFilterData,

    currentFilterPlanetData,
    setCurrentFilterPlanetData,
    currentFilterSystemData,
    setCurrentFilterSystemData,
    currentFilterShardData,
    setCurrentFilterShardData,
    currentFilterDateData,
    setCurrentFilterDateData,
    refreshCurrentFilterData,

    currentSortCriteria,
    setCurrentSortCriteria,
    currentSortDirection,
    setCurrentSortDirection,
    refreshCurrentSortData,

    currentPage,
    setCurrentPage,
    refreshCurrentPage,
    updateCurrentPage,

    currentElementsPerPage,
    setCurrentElementsPerPage,
    refreshCurrentElementsPerPage,
    updateCurrentElementsPerPage,

    bookViewLength,
    setBookViewLength,
    refreshBookViewLength,

    user,
    setUser,
    refreshUser,

    userList, 
    setUserList,
    refreshUserList,

    getLocalChapterList,

    alertMessage,
    alertStatus,
    setAlertStatus,
    stateHandler,
    cosmerePath,

    filterShouldBeComputed,
    setFilterShouldBeComputed,
    sortShouldBeComputed,
    setSortShouldBeComputed,
    paginationShouldBeComputed,
    setPaginationShouldBeComputed,
    searchShouldBeComputed,
    setSearchShouldBeComputed,
    token,
    searchText,
    setSearchText,
    componentIsLoading,
    setComponentIsLoading,

    goingToMainPage,
    setGoindToMainPage,
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    gameLocation,
    setGameLocation,
    emptyGameData
  };


    return <GlobalStateContext.Provider value = {state}>
        {children}
    </GlobalStateContext.Provider>
}

export const useGlobalState = (): GlobalState => {
    const context = useContext(GlobalStateContext)
    if(!context){
        throw new Error("useGlobalState must be used within a GlobalStateProvider")
    }
    return context
}