import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom'


function Header({ backButton }) {
    const navigate= useNavigate();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className='header__icon' />
                </IconButton>
            )}

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://www.seekpng.com/png/detail/9-91731_free-icons-png-halo-master-chief-clipart.png"
                    alt='Master Chief Lobby Logo'
                />
            </Link>
            <Link to="/chats">
                <IconButton>
                    <ForumIcon fontSize="large" className='header__icon' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
