import React from 'react';
import './authPage.css';
import { AuthComponent } from './authComponent.tsx';
import {Grow} from '@mui/material';
export const AuthPage: React.FC = () => {
  return (
    <>
    <div className="auth-page">
        <Grow in={true} timeout={500}>
            <div>
            <AuthComponent />
            </div>
        </Grow>
    </div>
    </>
  )
};
