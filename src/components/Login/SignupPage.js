import * as React from 'react';
import Input from '@mui/material/Input';
import {Grid} from "@mui/material";
import {useRef} from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";

export default function LoginPage() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    return (
        <Card>
            <CardContent>
                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <Box sx={{fontSize : 'h3.fontSize'}} m={3} >Welcome to Hoome</Box>
                    <Box sx={{fontSize : 'h5.fontSize'}} mb={2} color={"gray"}>Please Sign Up</Box>
                    <Input ref={emailRef} placeholder="Email"/>
                    <br/>
                    <Input ref={usernameRef} placeholder="Username"/>
                    <br/>
                    <Input ref={passwordRef} placeholder="Password"/>
                    <br/>
                    <br/>
                    <Button variant="outlined" className="align-content-center mt-3">Sign Up</Button>
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