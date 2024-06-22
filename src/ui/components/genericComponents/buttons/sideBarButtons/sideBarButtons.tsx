import { FaBookOpen, FaChartPie, FaFilter, FaSortAlphaDown } from 'react-icons/fa';
import './sideBarButtons.css'
import { Grow } from '@mui/material';

export const TinButton:React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
        <Grow in={true} timeout={500}>
        <div className='side-bar-button tin-button' 
            onClick={onClickAction}>
            <div className="tag"><p>Sort</p><FaSortAlphaDown className='sort-filter-chart-icons'/></div>
        </div>
        </Grow>
        </>
    )
}

export const IronButton:React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
        <Grow in={true} timeout={500}>
        <div className='side-bar-button iron-button' 
            onClick={onClickAction}>
           <span className="tag">Filter <FaFilter className='sort-filter-chart-icons'/></span>
        </div>
        
        </Grow>
        </>
    )
}

export const CopperButton:React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
        <Grow in={true} timeout={500}>
        <div className='side-bar-button copper-button' 
            onClick={onClickAction}>
            <span className="tag" ><p>Chart </p> <FaChartPie className='sort-filter-chart-icons'/></span>
        </div>
        </Grow>
        </>
    )
}

export const SteelButton:React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
        <Grow in={true} timeout={500}>
        <div className='side-bar-button steel-button' 
            onClick={onClickAction}>
            <div className="tag">Pages<FaBookOpen className='sort-filter-chart-icons'/></div>
        </div>
        </Grow>
        </>
    )
}

