import { FaSearch } from "react-icons/fa"

export const SearchBar: React.FC<{}> = ({}) => {
    const handleSearchClick = () => {
        
    }
    return (<>

        <div className="search-box">
            <input type='search' 
            placeholder="Access Coppermind" 
            className='search-input'
            name="Access Coppermind"
            >
            </input>
            <FaSearch className='search-icon' 
            onClick={handleSearchClick}/>
        </div>

    
    </>)
}