import React, {useState} from 'react'
import '../../style/Header.css'
import Icon from '../../img/brandicon.png';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import * as action from "../../reducers/House-reducer";
import Button from "@mui/material/Button";
import {useProfile} from "../../ProfileProvider";

function Header() {
    const history = useNavigate();
    const [{item}, dispatch] = useStateValue('');
    const [endPoint, setEndPoint] = useState('');
    const {signout} = useProfile()

    const logout = async () => {
        try {
            await signout()
        } catch (e) {

        }
        console.log()
        history('login')
    }

    const becomeHost = async () => {
        alert('havent completely implement this yet')
    }

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
    console.log(item)
    
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
                {/*<Link to="/login" style={{ textDecoration: 'none' }}>*/}
                {/*    <p className='mg10px'>Login</p>*/}
                {/*</Link>*/}
                <Button size="small" color="secondary">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <p className='mg10px'>Login</p>
                    </Link>
                </Button>
                <Button size="small" color="secondary" onClick={logout}>
                        <p className='mg10px'>Log out</p>
                </Button>
                {/*<Button size="small" color="secondary" onClick={becomeHost}>*/}
                {/*    <p className='mg10px'>Become a host</p>*/}
                {/*</Button>*/}
                <div className='mg10px'>
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                </div>
                <Link to='/profile'>
                    <div className='mg10px'>
                        <Avatar/>
                    </div>
                </Link>
            </div>
        
        </div>)
    
}

export default Header