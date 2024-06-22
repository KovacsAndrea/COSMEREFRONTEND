import React from 'react';
import { SideBarComponent } from "../../components/sideBarComponents/sideBarComponent.tsx";
import { Footer } from '../../components/genericComponents/footer/footer.tsx';
import { Header } from '../../components/genericComponents/header/header.tsx';
import { BookGrid } from '../../components/bookComponents/bookGrid.tsx';


export const MainPage: React.FC<{}> = () => {

    return (
        <>
            <Header  />
            <SideBarComponent />
            <BookGrid />
            <Footer />
        </>
    );
};
