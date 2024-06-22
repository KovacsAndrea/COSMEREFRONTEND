import './loadingComponent.css'
import {Grow} from '@mui/material';

export const LoadingSpinner: React.FC<{isLoading: any}> = ({isLoading}) => {
  return (
      <Grow in={isLoading} timeout={500}>
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      </Grow>
    );
  };
  