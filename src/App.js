import React, {useEffect} from 'react';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header'
import HomeFeed from './HomeFeed';
import { useSelector } from 'react-redux'
import Login from './Login'
import Sidebar from './Sidebar'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import Post from './Post'

function App() {

const user = useSelector(selectUser)
const dispatch = useDispatch()

useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if(userAuth){
        //logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
    } else{
      //user logged out

      dispatch(logout());
    }
  })
}, [])

return ( 
<div className="app">
        {/*Header*/}
      <Header/>
      {!user ? ( <Login /> ) : (
        <div className="app_body"> 
      <Sidebar/>
      <HomeFeed/>
      <Post />

      </div>
      )}
    </div>
    
  );
}

export default App;
