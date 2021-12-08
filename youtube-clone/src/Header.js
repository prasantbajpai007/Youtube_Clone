import React,{useState}from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const [inputSearch,setInputSearch]=useState("");
    return (
        
        <div className="header">
        <div className="header_left">
            <MenuIcon />
             <Link to='/' > 
            <img className='header_logo'src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtubeimage" />
             </Link> 
            
            </div>
            <div className ="header_input">
            <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="xt" />
            <Link to={`/search/${inputSearch}`}>

            <SearchIcon className="header_inputbutton"/>
            </Link>
            </div>
            <div className ="header_icons">
            <VideoCallIcon className="header_icon"/>
            <AppIcon  className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <AccountCircleIcon className="header_icon"/>
            </div>
        </div>
    )
}

export default Header;
