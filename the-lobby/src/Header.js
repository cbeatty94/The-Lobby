import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className='header__icon' />
            </IconButton>

            <img
                className="header__logo"
                src="https://www.seekpng.com/png/detail/9-91731_free-icons-png-halo-master-chief-clipart.png"
                alt='Master Chief Lobby Logo'
            />

            <IconButton>
                <ForumIcon fontSize="large" className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header
