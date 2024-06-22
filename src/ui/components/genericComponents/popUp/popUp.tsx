import React from 'react';
import { FaTimes } from "react-icons/fa";
import './popUp.css';
import {Grow} from '@mui/material';
import { Overlay } from '../overlay/overlay.tsx';

export const PopUp: React.FC<{
    isOpen: boolean;  
    title: string; 
    onCloseAction: () => void;
    leftEmblem: React.ReactNode;
    rightEmblem: React.ReactNode;
    children: React.ReactNode;
}> = ({
    isOpen, 
    title, 
    onCloseAction,
    leftEmblem,
    rightEmblem,
    children
}) => {
    return (
        <>
            <Overlay inState = {isOpen} onClickAction={null}>
                {leftEmblem}
                <Grow in={isOpen} timeout={500}>
                    <div className="pop-up-content"> 
                        <div className="pop-up-header"> 
                            <p className="pop-up-title">{title}</p>
                            <FaTimes className="pop-up-theme-close-button" onClick={onCloseAction} />
                        </div>
                        {children}
                    </div>
                </Grow>
                {rightEmblem}
            </Overlay>
                    

        </>
    );
};
