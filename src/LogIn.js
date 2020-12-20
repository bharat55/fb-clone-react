import React from 'react'
import './LogIn.css'

function LogIn() {
    const signIn = () => {

    }
    return (
        <div div className='log-in'>
            <div className="log-in-logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                ></img>
                <h4>
                    Facebook clone created by Bharat Rathor 
                </h4>
            </div>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default LogIn
