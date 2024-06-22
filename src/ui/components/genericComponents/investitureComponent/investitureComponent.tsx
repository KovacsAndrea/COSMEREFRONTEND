import { useGlobalState } from '../../../../globalVarialbles.tsx';
import './investitureCompoment.css'
import {Grow} from '@mui/material';

export const InvestitureComponent: React.FC<{}> = ({}) => {
  const {componentIsLoading} = useGlobalState();
  return (
      <Grow in={componentIsLoading} timeout={1000}>
        <div className = "investiture-component-wrapper">
            <div className="investiture-component-spinner"></div>
        </div>
        
  
      </Grow>
    );
  };
  