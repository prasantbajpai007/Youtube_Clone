import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPAge_filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
              image="https://yt3.ggpht.com/a-/AOh14GhFApbsFe2s2E2H0CL1Nr5WjNXrxPRtfsleJopI=s288-c-k-c0xffffffff-no-rj-mo"
              channel="Cleaver Programmer"
              verified
              subs="23k"
              noOfVideos={124}
              description="Build a Flutter News App with NewsApi Org | Flutter Tutorial For Beginners"
            />
            <hr/>
            <VideoRow
              title="Build a Flutter News App with NewsApi Org | Flutter Tutorial For Beginners"
          views="33k"
          subs="1.4M"
          image="https://i.ytimg.com/vi/aaGcER1uUoE/maxresdefault.jpg"
          channel="Sanskar Tiwari"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhFApbsFe2s2E2H0CL1Nr5WjNXrxPRtfsleJopI=s288-c-k-c0xffffffff-no-rj-mo"
          timestamp="3 days ago"
          channelUrl="https://www.youtube.com/c/SanskarTiwari"  
            />
            <VideoRow
              title="Build a Flutter News App with NewsApi Org | Flutter Tutorial For Beginners"
          views="33k"
          subs="1.4M"
          image="https://i.ytimg.com/vi/aaGcER1uUoE/maxresdefault.jpg"
          channel="Sanskar Tiwari"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhFApbsFe2s2E2H0CL1Nr5WjNXrxPRtfsleJopI=s288-c-k-c0xffffffff-no-rj-mo"
          timestamp="3 days ago"
          channelUrl="https://www.youtube.com/c/SanskarTiwari"  
            />
            <VideoRow
              title="Build a Flutter News App with NewsApi Org | Flutter Tutorial For Beginners"
          views="33k"
          subs="1.4M"
          image="https://i.ytimg.com/vi/aaGcER1uUoE/maxresdefault.jpg"
          channel="Sanskar Tiwari"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhFApbsFe2s2E2H0CL1Nr5WjNXrxPRtfsleJopI=s288-c-k-c0xffffffff-no-rj-mo"
          timestamp="3 days ago"
          channelUrl="https://www.youtube.com/c/SanskarTiwari"  
            />
            <VideoRow
              title="Build a Flutter News App with NewsApi Org | Flutter Tutorial For Beginners"
          views="33k"
          subs="1.4M"
          image="https://i.ytimg.com/vi/aaGcER1uUoE/maxresdefault.jpg"
          channel="Sanskar Tiwari"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhFApbsFe2s2E2H0CL1Nr5WjNXrxPRtfsleJopI=s288-c-k-c0xffffffff-no-rj-mo"
          timestamp="3 days ago"
          channelUrl="https://www.youtube.com/c/SanskarTiwari"  
            />
        </div>
    );
}

export default SearchPage;
