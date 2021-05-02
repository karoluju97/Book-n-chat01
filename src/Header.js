import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch } from 'react-redux'
import { auth } from './firebase';
import { logout }  from './features/userSlice'
import { Avatar } from '@material-ui/core';

function Header() {
    const dispatch = useDispatch()

const logoutofApp = () => {
    dispatch(logout())
    auth.signOut()
};

    return (
        <div className='header'>
            <div className='header_left'>
             <img src="https://ibb.co/PjLJ1Zt" alt="Book n Chat"/>

                <div className='header_search'>
                    <SearchIcon />
                    <input placeholder='search' type="text"/>
                </div>

            </div>

            <div className='header_right'>
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={MessageIcon}title='Messages'/>
                <HeaderOptions Icon={NotificationsIcon}title='Notifications'/>
                <HeaderOptions Icon={SettingsIcon}title='Settings'/>
                <HeaderOptions Icon={Avatar}title='profile' onClick={logoutofApp}/>
            </div>
        </div>
    )
}

export default Header
