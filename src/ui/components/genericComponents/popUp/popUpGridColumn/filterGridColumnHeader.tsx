import { FaCheckSquare, FaRegCheckSquare } from "react-icons/fa"
import './gridColumn.css'

export const FilterGridColumnHeader:React.FC<{title: string, onCheckAllAction: any, onUncheckAllAction: any}> = ({title, onCheckAllAction, onUncheckAllAction}) => {
    return (<>
        <div className = "filter-grid-column-header">
                <label className="title-for-grid-category"> {title} </label>
                <FaCheckSquare className="cool-check-uncheck-icons" onClick={onCheckAllAction}/>
                <FaRegCheckSquare className="cool-check-uncheck-icons" onClick={onUncheckAllAction}/> 
        </div>
    </>)
}