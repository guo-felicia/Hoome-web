import * as React from 'react';
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {ADD_HOUSE} from "../../reducers/House-reducer";
import * as service from '../../services/Houses-service';
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useProfile} from "../../ProfileProvider";


export default function PostNewHouse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {profile, updateProfile} = useProfile()
    /*
    img: String,
    location: String,
    title: String,
    description: String,
    star: Number,
    price: String,
    total: String
     */
    const imgRef = useRef();
    const locationRef = useRef();
    const titleRef = useRef();
    const descripRef = useRef();
    const priceRef = useRef();
    const totalRef = useRef();

    const addNewHouseHandler = async ()=>{
        let house = {img: imgRef.current.value, location: locationRef.current.value, title: titleRef.current.value,
            description: descripRef.current.value, star: 5, price: priceRef.current.value, total: totalRef.current.value,
        postby: profile.username}
        const newHouse = await service.createHouses(house)
        dispatch({
            type: ADD_HOUSE,
            newHouse: newHouse
        });
        try {
            let newProfile = {email: profile.email, username: profile.username, password: profile.password,
                firstName: profile.firstName, lastName: profile.lastName,
                aboutyou: profile.aboutyou, location: profile.location,
                languages: profile.languages, jobs: profile.jobs}
            await updateProfile(
                newProfile
            )
        } catch (e) {
            alert('save profile failed')
        }
        navigate('/profile')
    }

    return(
        <Grid container direction="column" item xs={7} align="center">
            <br/>
            <Box sx={{fontSize : 'h3.fontSize'}}>Release a New House</Box>
            <br/>
            <Grid container direction="column" item xs={7} align="center">
                <div>
                    <div>
                        <TextField id='houseimage'
                                   label='House Image Link'
                                   margin='normal'
                                   inputRef={imgRef}
                                   defaultValue=''>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='houselocation'
                                   label='House Location'
                                   margin='normal'
                                   inputRef={locationRef}
                                   defaultValue=''>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='housetitle'
                                   label='House Title'
                                   margin='normal'
                                   inputRef={titleRef}
                                   defaultValue=''>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='housedescrip'
                                   label='House Description'
                                   margin='normal'
                                   multiline
                                   rows={4}
                                   inputRef={descripRef}
                                   defaultValue=''>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='houseprice'
                                   label='House Price'
                                   margin='normal'
                                   inputRef={priceRef}
                                   defaultValue=''>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='housetotal'
                                   label='House Total Price'
                                   margin='normal'
                                   inputRef={totalRef}
                                   defaultValue=''>
                        </TextField>
                    </div>
                    <br/>
                    <Button variant="text" onClick={() => {addNewHouseHandler()}}>Release</Button>
                    <br/>
                    <br/>
                </div>
            </Grid>
        </Grid>
    )
}