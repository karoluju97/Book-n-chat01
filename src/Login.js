import React, {useState} from 'react'
import './Login.css'
import {auth} from './firebase'
import login from '../src/features/userSlice'

function Login() {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [profilePic, setprofilePic] = useState('');
const dispatch = useDispatch();

const register = () => {
    if (!username){
        return alert("Please enter a full name")
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: username,
            photoUrl: profilePic,
        })
        .then(() =>{
            dispatch (login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: username,
                    photoUrl: profilePic,
            }))
        })
    })

};

const loginToWebApp = (e) => {
    e.preventDefault(); 
};

    return (
        <div className='login'>

            <img src='' alt=''/>

            <form>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Please enter a Username' type="text"/>

                <input value={profilePic} onChange={(e) => setprofilePic(e.target.value)}placeholder='Upload a profile pic (Optional)' type="text"/>

                <input value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Please enter an email address' type="password"/>

                <input value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Please enter a password' type="password"/>


                <button type='submit' onClick={loginToWebApp}>Sign In</button>
            </form>

            <p> Not a member? <span className='login_register' onClick={register}> Register Now</span></p>
            
        </div>
    )
}

export default Login
