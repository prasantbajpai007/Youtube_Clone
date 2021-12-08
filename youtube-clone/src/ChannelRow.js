import React from 'react';
import {Avatar} from  '@mui/material';
import './ChannelRow.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function ChannelRow({image,channel,subs,noOfVideos,verified,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo"
             alt={channel} 
             src={image}
             />

             <div className="channelRow_text">
             <h4>
                 {channel} {verified && <CheckCircleOutlineIcon/>}
             </h4>
             <p>
             {subs} subscribers . {noOfVideos} videos
             </p>
            <p>{description}</p>
    

             </div>
        </div>
    )
}

export default ChannelRow;
