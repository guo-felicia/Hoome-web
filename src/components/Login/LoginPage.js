import * as React from 'react';
import Input from '@mui/material/Input';
import {Grid} from "@mui/material";
import {useRef} from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export default function LoginPage() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    return (
        <Card>
            <CardContent>
                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <h2 className="mt-4 mb-4 ms-4 me-4">Welcome to Hoome</h2>
                    <h5 className="text-black">Please Login</h5>
                    <Input ref={usernameRef} className="mt-4 mb-4 ms-4 me-4" placeholder="Username"/>
                    <Input ref={passwordRef} className="mb-4 ms-4 me-4" placeholder="Password"/>
                    <Button variant="outlined" className="align-content-center mt-3">Log in</Button>
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