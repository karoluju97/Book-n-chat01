import React, {useState} from 'react';
import './Login.css'
import {auth} from './firebase'
import login from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [profilePic, setprofilePic] = useState('');
const dispatch = useDispatch();

const register = () => {
    if (!username){
        return alert("Please enter a username")
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: username,
            photoURL: profilePic,
        })
        .then(() =>{
            dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: username,
                    photoUrl: profilePic,
            }))
        })
    }).catch((error) => alert(error));

};

const loginToWebApp = (e) => {
    e.preventDefault(); 

    auth.signInWithEmailAndPassword(email, password).then(userAuth => {
        dispatch(login({
            email:userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
        }))
    }).catch((error) => alert(error))
};

    return (
        <div className='login'>

            <img src='' alt=''/>

            <form>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Please enter a Username' type="text"/>

                <input value={profilePic} onChange={(e) => setprofilePic(e.target.value)}placeholder='Upload a profile pic (Optional)' type="text"/>

                <input value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Please enter an email address' type="email"/>

                <input value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Please enter a password' type="password"/>

                <button type="submit" onClick={loginToWebApp}>Sign In</button>
            </form>

            <p> Not a member? <span className='login_register' onClick={register}> Register Now</span></p>
            
        </div>
    )
}

export default Login
