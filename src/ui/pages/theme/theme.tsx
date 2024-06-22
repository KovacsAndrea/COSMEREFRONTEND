import { ReactNode } from "react"
import { useLocation } from "react-router-dom";
import { NavBar } from "./themeComponents/navBar.tsx";
import { OfflineAlertComponent } from "../../components/genericComponents/offlineAlertComponent/offlineAlertComponent.tsx";
import { InvestitureComponent } from "../../components/genericComponents/investitureComponent/investitureComponent.tsx";


export const Theme: React.FC<{children: ReactNode}> = ({children}) => {
    const location = useLocation();
    
    const navShouldBeDisplayed = (
        location.pathname == "/main" ||
        location.pathname.startsWith("/book/") ||
        location.pathname.startsWith("/chapter/") ||
        location.pathname.startsWith("/chapters/book/") ||
        location.pathname.startsWith("/game/choice") ||
        location.pathname.startsWith("/game/locations") ||
        location.pathname.startsWith("/game/characters") ||
        location.pathname == "/profile"
    )
    return (<>
    {navShouldBeDisplayed && <NavBar />}
    <InvestitureComponent />
    <OfflineAlertComponent />
    <main>{children}</main>
    </>)
}