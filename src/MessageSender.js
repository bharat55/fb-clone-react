import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import firebase from 'firebase'
import db from './firebase'
import { useStateValue } from './StateProvider'


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        db.collection('posts').add(
            {
                message: input,
                image: imageUrl,
                timestamp: new Date().toUTCString(),
                profilePic: user.photoURL,
                username: user.displayName,
            }
        )
    }
    return (
        <div className="message-sender">
            <div className="message-sender-top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="message-sender-input"
                        placeholder={`Whats on your mind? ${user.displayName}`}
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
