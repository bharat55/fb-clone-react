import React from 'react';
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Post.css'

function Post({profilePic, image, userName, timeStamp, message}) {
    
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} alt="" className="post-avatar"/>
                <div className="post-top-info">
                    <h3>{userName}</h3>
                    <p>Timestamp..</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <div className="post-options">
                <div className="post-option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post;
