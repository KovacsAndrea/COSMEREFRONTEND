import { Link } from 'react-router-dom'
import './homePage.css'
import {Grow} from '@mui/material';
export const HomePage:React.FC<{}> = ({}) => {
    return <div  className="start-page-background">
        <Grow in={true} timeout={500}>
        <Link to="/auth" className='cosmere'>THE COSMERE</Link>
        </Grow>
    </div>
}
