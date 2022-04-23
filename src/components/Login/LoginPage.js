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
    return (
        <Card>
            <CardContent>
                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <Box sx={{fontSize : 'h3.fontSize'}} m={3} >Welcome to Hoome</Box>
                    <Box sx={{fontSize : 'h5.fontSize'}} mb={2} color={"gray"}>Please Login</Box>
                    <Input ref={usernameRef} className="mt-4 mb-4 ms-4 me-4" placeholder="Username"/>
                    <br/>
                    <Input ref={passwordRef} placeholder="Password"/>
                    <br/>
                    <br/>
                    <Button variant="outlined">Log in</Button>
                    <br/>
                    <p className="text-secondary">Don't have an account?
                        <Button size="small">
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                    Sign Up
                            </Link>
                        </Button></p>
                    <br/>
                </Grid>
            </CardContent>
        </Card>
    );
}