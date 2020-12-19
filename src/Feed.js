import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
              profilePic={''}
              image={''}
              userName={''}
              timeStamp={''}
              message={''}
            />
        </div>
    )
}

export default Feed
