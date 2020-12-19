import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="message-sender">
            <div className="message-sender-top">
                <Avatar />
                <form>
                    <input className="message-sender-input"
                        placeholder={" Whats on your mind?"}
                        value={input}
                        onChange={(e) => {setInput(e.target.value)}}
                    />
                    <input
                        placeholder={"Image url (optional)"}
                        value={imageUrl}
                        onChange={(e) => {setImageUrl(e.target.value)}}
                    />
                    <button onClick={handleSubmit} type="submit" >
                        Hidden submit
                     </button>
                </form>
            </div>
            <div className="message-sender-bottom">
                <div className="message-sender-option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Vedio</h3>
                </div >
                <div className="message-sender-option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photos/videos</h3>
                </div >
                <div className="message-sender-option">
                    <SentimentVerySatisfiedIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div >
            </div>
        </div>
    )
}

export default MessageSender 
