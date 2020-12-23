import React, { useState, useEffect } from 'react';
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase"
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapShot) => 
            setPosts(snapShot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        );       
        
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                posts.map(post => (
                    <Post key={post.id}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    userName={post.data.username}
                    timeStamp={post.data.timestamp}
                    message={post.data.message}
                  />
                ))
            }
           
        </div>
    )
}

export default Feed
