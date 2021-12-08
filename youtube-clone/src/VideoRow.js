import React from 'react';
import './videoRow.css';

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <dic className="videoRow_text">
                <h3>
                    {title}
                </h3>
                <p className="videoRow_headline">
                   {channel} .<span className="videoRow_subsNumber">{subs} </span>  Subscribers {views} views . {timestamp} 
                </p>
                <p className="videoRow_descriptions">{description}</p>
            </dic>
        </div>
    )
}

export default VideoRow;
