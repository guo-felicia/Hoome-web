import * as React from 'react';
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {ADD_HOUSE} from "../../reducers/House-reducer";
import * as service from '../../services/Houses-service';
import {useNavigate} from "react-router-dom";


export default function PostNewHouse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const house = {}
    const addNewHouseHandler = async (house)=>{
        const newHouse = await service.createHouses(house)
        dispatch({
            type: ADD_HOUSE,
            newHouse: newHouse
        });
        navigate('/profile')
    }

    return(
        <Box sx={{ m: 5 }}>
            <Box sx={{ fontSize: 'h3.fontSize'}}>Followers List</Box>
            <br/>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize', color: 'yellowgreen'}}>The Followers List is now Empty</Box>
            <br/>
        </Box>
    )
}