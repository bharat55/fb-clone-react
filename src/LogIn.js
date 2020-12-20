import React from 'react'
import './LogIn.css'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import {useStateValue} from './StateProvider';

function LogIn() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).
        then((result) => {
            console.log(result.user);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).
        catch((error) => alert(error.message));
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
