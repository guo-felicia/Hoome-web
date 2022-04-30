import * as React from 'react';
import Input from '@mui/material/Input';
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {useRef, useState} from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {useProfile} from "../../ProfileProvider";

export default function SignupPage() {
    const passwordRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const navigate = useNavigate();
    const {signup} = useProfile();
    const [role, setRole] = useState('');
    const handleSignup = async () => {
        try {
            await signup(
                emailRef.current.value,
                usernameRef.current.value,
                passwordRef.current.value,
                role
            )
            navigate('/profile')
        } catch (e) {
            alert('sign up failed')
        }
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }

    return (
        <Card>
            <CardContent>
                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <Box sx={{fontSize : 'h3.fontSize'}} m={3} >Welcome to Hoome</Box>
                    <Box sx={{fontSize : 'h5.fontSize'}} mb={2} color={"gray"}>Please Sign Up</Box>
                    <Input inputRef={emailRef} placeholder="Email"/>
                    <br/>
                    <Input inputRef={usernameRef} placeholder="Username"/>
                    <br/>
                    <Input inputRef={passwordRef} placeholder="Password"/>
                    <br/>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="selectRole-label">Role</InputLabel>
                            <Select labelId="selectRole-label" id="selectRole" value={role} label="Select Your Role" onChange={handleRoleChange}>
                                <MenuItem value={'host'}>Host</MenuItem>
                                <MenuItem value={'tenant'}>Tenant</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <br/>
                    <br/>
                    <Button variant="outlined" className="align-content-center mt-3" onClick={handleSignup}>Sign Up</Button>
                    <br/>
                    <p className="text-secondary">Already have an account?
                        <Button size="small">
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                Login
                            </Link>
                        </Button></p>
                    <br/>
                </Grid>
            </CardContent>
        </Card>
    );
}