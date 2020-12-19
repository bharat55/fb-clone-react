import React from 'react'
import SideBarRow from './SideBarRow'
import './SideBar.css'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
function SideBar() {
    return (
        <div className="side-bar">
            <SideBarRow imageUrl={'https://pbs.twimg.com/media/CUkqNGeUwAQBJeq.jpg'} title="Bharat Rathor" />
            <SideBarRow Icon={AddToPhotosIcon} title={"Covid19 Info center"}/>
            <SideBarRow Icon={EmojiFlagsIcon} title={"Pages"}/>
            <SideBarRow Icon={PeopleIcon} title={"Friends"}/>
            <SideBarRow Icon={ChatIcon} title={"Message"}/>
            <SideBarRow Icon={StorefrontIcon} title={"MarketPlace"}/>
            <SideBarRow Icon={VideoLibraryIcon} title={"videos"}/>
        </div>
    )
}

export default SideBar

