import React from 'react'
import './style/Header.css'
import Icon from './img/brandicon.png';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";

function Header() {
    return (<div className='header'>
        <Link to='/'>
            <img className="header__icon"
                 src={Icon}
                 alt=""
            />
        </Link>
        
        
        <div className='header__center'>
            <input type="text" placeholder="Start your search"/>
            <SearchIcon/>
        </div>
        
        <div className='header__right'>
            <p className='mg10px'>Become a host</p>
            <div className='mg10px'>
                <LanguageIcon/>
                <ExpandMoreIcon/>
            </div>
            <div className='mg10px'>
                <Avatar/>
            </div>
        </div>
    </div>)
}

export default Header