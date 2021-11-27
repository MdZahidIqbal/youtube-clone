import React, { useState} from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import img1 from './images/Logo_of_YouTube_(2015-2017).svg'
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img className="header__logo" src={img1} alt="" />
            </Link>
            </div>
            <div className='header__input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputbutton"/>
            </Link>
            </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon  className="header__icon"/>
            <NotificationsIcon  className="header__icon" />
            <Avatar alt="" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__340.jpg" />
            </div>

        </div>
    )
}

export default Header;
