import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Sidebar.css';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow  Icon={SubscriptionsIcon} title="Subscription"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="WatchLater"/>
        <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
        <hr/>
      </div>
    )
}

export default Sidebar;
