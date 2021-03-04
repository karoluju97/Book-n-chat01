import React from 'react';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './Header'
import HomeFeed from './HomeFeed';
import { useSelector } from 'react-redux'
import Login from './Login'

function App() {

const user = useSelector(selectUser)

return ( 
<div className="app">
        {/*Header*/}
      <Header/>

      {!user ? ( <Login /> ) : (
        <div className="app_body"> 

      {/*Feed*/}
      <HomeFeed/>
      </div>
      )}
    </div>
    
  );
}

export default App;
