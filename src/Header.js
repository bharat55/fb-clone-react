import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar, IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";


function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header-left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                ></img>
                <div className="header-input">
                    <SearchIcon />
                    <input />
                </div>
            </div>
            <div className="header-center">
                <div className="header-option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisorAccountIcon fontSize="large" />
                </div>
            </div>
            <div className="header-right">
                <div className="header-info">
                    <Avatar />
                    <h4>Bharat Rathor</h4>
                </div>
                <IconButton >
                    <AddIcon />
                </IconButton >
                <IconButton >
                    <ForumIcon />
                </IconButton>
                <IconButton >
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton >
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
