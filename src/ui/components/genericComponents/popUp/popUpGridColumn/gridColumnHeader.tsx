import { FaCheckSquare, FaRegCheckSquare } from "react-icons/fa"

export const GridColumnHeader:React.FC<{title: string}> = ({title}) => {
    return (<>
        <div className = "filter-grid-column-header">
                <label className="title-for-grid-category"> {title} </label>
        </div>
    </>)
}