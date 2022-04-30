import React from 'react'
import './Header.css';
import Logo from '../../assets/masion.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){
    return (
        <div className="header">
            <img
                className="header__icon"
                src={Logo}
                alt="maison"
                />

                <div className="header__center">
                    <input type="text" />
                    <SearchIcon />
                </div>
                <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}