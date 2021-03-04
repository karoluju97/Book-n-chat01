import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src="http://ibb.co/88Fcjvc" alt="logo"/>

                <div className='header_search'>
                    <SearchIcon />
                    <input type="text"/>
                </div>

            </div>

            <div className='header_right'>
                <HeaderOptions icon={HomeIcon} title='Home'/>
                <HeaderOptions icon={MessageIcon}title='Messages'/>
                <HeaderOptions icon={NotificationsIcon}title='Notifications'/>
                <HeaderOptions icon={SettingsIcon}title='Settings'/>
                <HeaderOptions avatar="" title='profile'/>
            </div>
        </div>
    )
}

export default Header
