import * as React from 'react';
import Input from '@mui/material/Input';
import {Grid} from "@mui/material";
import {useRef} from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {signin} from "../../services/auth-service";

export default function LoginPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const handleSignin = async () => {
        try {
            await signin(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile")
        } catch (e) {
            alert('sign in failed')
        }
    }
    return (
        <Card>
            <CardContent>
                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <Box sx={{fontSize : 'h3.fontSize'}} m={3} >Welcome to Hoome</Box>
                    <Box sx={{fontSize : 'h5.fontSize'}} mb={2} color={"gray"}>Please Login</Box>
                    <Input inputRef={emailRef} className="mt-4 mb-4 ms-4 me-4" placeholder="Email"/>
                    <br/>
                    <Input inputRef={passwordRef} placeholder="Password"/>
                    <br/>
                    <br/>
                    <Button variant="outlined" onClick={handleSignin}>Log in</Button>
                    <br/>
                    <p className="text-secondary">Don't have an account?
                        <Button size="small">
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                    Sign Up
                            </Link>
                        </Button></p>
                    <br/>
                </Grid>
            </CardContent>
        </Card>
    );
}