import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="story-reel">
            <Story 
              image={"https://picsum.photos/200/300?grayscale"}
              profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKopUg0IsnfDVuuZaxJZxU93w1a3sDdWgTzw&usqp=CAU"}
              title="Bharat"
            />
            <Story 
              image={"https://picsum.photos/id/237/200/300"}
              profileSrc={""}
              title="Ashvin"
            />
            <Story 
              image={"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
              profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKopUg0IsnfDVuuZaxJZxU93w1a3sDdWgTzw&usqp=CAU"}
              title="Ajay"
            />
            <Story 
              image={"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
              profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKopUg0IsnfDVuuZaxJZxU93w1a3sDdWgTzw&usqp=CAU"}
              title="Ashwin"
            />
            <Story 
              image={"https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
              profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKopUg0IsnfDVuuZaxJZxU93w1a3sDdWgTzw&usqp=CAU"}
              title="Tarun"
            />
        </div>
    )
}

export default StoryReel
