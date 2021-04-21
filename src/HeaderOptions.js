import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css'
import {useSelector } from 'react-redux'
import {selectUser} from './features/userSlice'

function HeaderOptions({ avatar, Icon, title, onClick}) {

    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className='headerOptions'>
            {Icon && <Icon className='headerOption_icon'/>}
            {avatar && (
                <Avatar className='headerOption_icon' src={user?.photoUrl}>{user?.email[0]}</Avatar> 
             ) }
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
