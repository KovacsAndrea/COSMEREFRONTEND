import { Link, useNavigate } from "react-router-dom"
import { SearchBar } from "./searchBar.tsx"
import { useEffect, useState } from "react";
import './theme.css'
import { IoPerson } from "react-icons/io5";
import { Slide } from "@mui/material";
import { useGlobalState } from "../../../../globalVarialbles.tsx";
export const NavBar: React.FC<{}> = ({}) => {
    const { 
        user,
        refreshUser,
        goingToMainPage,
        setGoindToMainPage,
     } = useGlobalState();
    const navigate = useNavigate();
    useEffect(() => {
        refreshUser();
    }, [user])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        sessionStorage.setItem('token', '')
        navigate("/auth")
    };

    const handleSettings = () => {
        navigate("/profile")
    };

    const handleBackToMain = () => {
        setGoindToMainPage(true)
        navigate("/main")
    };

    return (<>
        <div> 
            <Slide in = {true} timeout={800} direction="down">
            <div className="nav-bar-content">
                <div className="nav-bar-logo">
                    <div className = "cosmere-large-logo" onClick={handleBackToMain}>THE COSMERE</div>
                </div>
                <div className="nav-bar-search">
                    <SearchBar />
                </div>
                <div className="nav-bar-profile">
                {user? <div className = 'user-profile' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <p className="user-profile-username"> {user.username} </p> 
                            <div className="dropdown-menu">
                                <div className="dropdown-option" onClick={handleSettings}>Settings</div>
                                <div className="dropdown-option" onClick={handleLogout}>Log Out</div>
                            </div>
                        </div> :
                        <>
                        <div className = 'user-profile' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <IoPerson onClick = {handleLogout}  className="user-icon"/>
                            <div className="dropdown-menu">
                                <div className="dropdown-option" onClick={handleLogout}>Sign In</div>
                            </div>
                        </div>
                        </>
                        

                }
                </div>
            </div>
            </Slide>
        </div>
    </>)
}