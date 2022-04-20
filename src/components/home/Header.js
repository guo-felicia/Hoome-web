import React, {useState} from 'react'
import '../../style/Header.css'
import Icon from '../../img/brandicon.png';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import * as action from "../../reducers/reducer";

function Header() {
    const history = useNavigate();
    const [dispatch] = useStateValue();
    const [endPoint, setEndPoint] = useState('');
    
    
    const onChangeHandler = (e) => {
        setEndPoint(e.target.value)
    }
    
    const submitHandler = e => {
        e.preventDefault()
        history('/search')
        
        dispatch({
            type: action.SET_SEARCH_TERM,
            term: endPoint
        })
    }
    
    return (
        <div className='header'>
            
            {/*LOGO OF THE WEBSITE*/}
            <Link to='/'>
                <img className="header__icon"
                     src={Icon}
                     alt=""
                />
            </Link>
            
            {/*SEARCH BAR*/}
            <form className='header__center' onSubmit={submitHandler}>
                <input type="text"
                       value={endPoint}
                       onChange={onChangeHandler}
                       placeholder="Try search Bos ~"/>
                <button type='submit'
                        onClick={submitHandler}>
                    <SearchIcon/></button>
            </form>
            
            {/*AVATAR & USER*/}
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