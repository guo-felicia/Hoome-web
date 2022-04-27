import * as React from 'react';
import Input from '@mui/material/Input';
import {Grid} from "@mui/material";
import {useRef} from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {signup} from "../../services/auth-service";

export default function SignupPage() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate();
    const handleSignup = async () => {
        try {
            await signup(
                emailRef.current.value,
                usernameRef.current.value,
                passwordRef.current.value
            )
            console.log('finished sign up')
            navigate('/profile')
            console.log('navigate to profile')
        } catch (e) {
            alert('sign up failed')
        }
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