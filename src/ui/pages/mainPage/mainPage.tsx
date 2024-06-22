import React, { useState, useEffect } from 'react';
import { SideBarComponent } from "../../components/sideBarComponents/sideBarComponent.tsx";
import { Footer } from '../../components/genericComponents/footer/footer.tsx';
import { Header } from '../../components/genericComponents/header/header.tsx';
import { BookGrid } from '../../components/bookComponents/bookGrid.tsx';
import { PainterEmblemLeft } from '../../components/genericComponents/emblems/rectangleEmblems.tsx';


export const MainPage: React.FC<{}> = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [listIsEmpty, setListIsEmpty] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide the loading spinner after 1 second
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <>
            <Header  />
            <SideBarComponent />
            <BookGrid />
            <Footer />
        </>
    );
};
