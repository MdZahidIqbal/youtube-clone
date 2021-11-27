import React from 'react';
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://cdn.pixabay.com/photo/2017/07/08/19/32/symbol-2485367__340.png"
            Channel="Web Programmer"
            verified
            subs="660k"
            noOfVideos={365}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the..."
            />
            <hr/>
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a free one hour training....check this out"
            timestamp="1hour"
            channel="Web Programmer"
            title="Let's Build a YouTube Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2016/03/09/09/17/desktop-1245714__340.jpg'
            />
            <VideoRow
            views="2.4M"
            subs="500K"
            description="Do you want a free three hour training....check this out"
            timestamp="3hour"
            channel="Web Programmer"
            title="Let's Build a Twitter Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468__340.jpg'
            />
            <VideoRow
            views="5.4M"
            subs="600K"
            description="Do you want a free one hour training....check this out"
            timestamp="1hour"
            channel="Web Programmer"
            title="Let's Build a Facebook Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312__340.jpg'
            />
            <VideoRow
            views="2.5M"
            subs="100K"
            description="Do you want a free two hour training....check this out"
            timestamp="2hour"
            channel="Web Programmer"
            title="Let's Build a TikTok Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558220__340.jpg'
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a free three hour training....check this out"
            timestamp="3hour"
            channel="Web Programmer"
            title="Let's Build a Tinder Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2017/06/26/13/03/webdesigner-2443766__340.jpg'
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a free one hour training....check this out"
            timestamp="1hour"
            channel="Web Programmer"
            title="Let's Build a NETFLIX Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920__340.jpg'
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a free one hour training....check this out"
            timestamp="1hour"
            channel="Web Programmer"
            title="Let's Build a Facebook Messenger Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2019/07/12/18/48/code-4333398__340.jpg'
            />
            <VideoRow
            views="6.4M"
            subs="659K"
            description="Do you want a free one hour training....check this out"
            timestamp="3hour"
            channel="Web Programmer"
            title="Let's Build a What'sApp Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2019/10/23/08/16/coding-4570799__340.jpg'
            />
            <VideoRow
            views="4M"
            subs="800K"
            description="Do you want a free three hour training....check this out"
            timestamp="3hour"
            channel="Web Programmer"
            title="Let's Build a Instagram Clone with REACT JS for Beginners"
            image='https://cdn.pixabay.com/photo/2017/06/28/10/06/binary-2450153__340.jpg'
            />
           
        </div>
    )
}

export default SearchPage;
