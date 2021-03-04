import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src="./logo.jpg" alt="logo"/>

                <div className='header_search'>
                    <SearchIcon />
                    <input type="text"/>
                </div>

            </div>

            <div className='header_right'>


            </div>
        </div>
    )
}

export default Header
