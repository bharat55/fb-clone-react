import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Widgets.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


function Widgets() {
    return (
        <div className="widgets">
            <div className="developer-info">
                <img src='IMG_20201116_225414.jpg' alt="Bharat Rathor"/>    
                <h4>Bharat Rathor (Software Developer) </h4>
            </div>
            <div className="developer-skills">
                <h3 className='tab-heading'> Skills </h3>
                <ul>
                    <li>Ruby</li>
                    <li>Rails</li>
                    <li>React</li>
                    <li>javaScript, jQuery</li>
                    <li>Git</li>
                    <li>Html, css</li>
                </ul>
            </div>
            <div className="contact-options">
                <h3 className='tab-heading'>
                    Contact Details
                </h3>
                <div className='contact-option-icons'>
                    <div className='icon-with-link'>
                        < IconButton >
                        <EmailIcon />
                        </IconButton>
                       <p>bharat.rathor.5074@gmail.com</p>
                    </div>
                    <div className='icon-with-link'>
                        < IconButton >
                        <LinkedInIcon />
                        </IconButton>
                        <p>www.linkedin.com/in/bharat-rathor-4b519b112</p>
                    </div>
                    <div className='icon-with-link'>
                        < IconButton >
                        <GitHubIcon />
                        </IconButton>
                        <p>https://github.com/bharat55/</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widgets;
