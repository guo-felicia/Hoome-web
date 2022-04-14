import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    TextField
} from "@mui/material";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <div className={"d-flex justify-content-center mb-3"}>
                <img alt="avatar" src="tempImage.png" className={"rounded-circle fs-5 img-fluid "}/>
            </div>
            <div>
                <Link to="/profile/updatephoto" style={{ textDecoration: 'none' }}>
                    <Typography color={"black"} align={"center"}>
                        <u>Update Photo</u>
                    </Typography>
                </Link>
            </div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/following" style={{ textDecoration: 'none' }}>
                                    <Typography color={"black"}>
                                        Following
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/followers" style={{ textDecoration: 'none' }}>
                                    <Typography color={"black"}>
                                        Followers
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/review" style={{ textDecoration: 'none' }}>
                                    <Typography color={"black"}>
                                        Review
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/favorites" style={{ textDecoration: 'none' }}>
                                    <Typography color={"black"}>
                                        Favorites
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding className="mt-4 ms-2 mb-2">
                            <TextField
                                id="outlined-multiline-static"
                                label="Personal Signature"
                                multiline
                                rows={4}
                            />
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </CardContent>
        <CardActions>
            <Button size="small">
                <Link to="/profile/privatepolicy" style={{ textDecoration: 'none' }}>
                        Privacy Policy
                </Link>
            </Button>
        </CardActions>
    </React.Fragment>
);

const Aboutyou = () => {
    return (
        <div>
            <label htmlFor="aboutyou" className="form-label">About You</label>
            <textarea className="form-control" id="aboutyou" rows="4"/>
        </div>
    )
}

const YourLocation =  () => {
    return (
        <div>
            <label htmlFor="yourlocation" className="form-label">Your Location</label>
            <textarea className="form-control" id="yourlocation" rows="1"/>
        </div>
    )
}

const Languages = () => {
    return (
        <div>
            <label htmlFor="languagesyouspeak" className="form-label">Languages You Speak</label>
            <textarea className="form-control" id="languagesyouspeak" rows="1"/>
        </div>
    )
}

const Jobs = () => {
    return(
        <div>
            <label htmlFor="yourjob" className="form-label">Your Job</label>
            <textarea className="form-control" id="yourjob" rows="1"/>
        </div>
    )
}

const EditProfile = () => {
    // HD in 2 button. Should actually send information back to server, then get from server
    return (
        <>
            <div className="mt-5 mb-5">
                <Aboutyou/>
            </div>
            <div className="mt-5 mb-4">
                <YourLocation/>
            </div>
            <div className="mt-4 mb-4">
                <Languages/>
            </div>
            <div className="mt-4 mb-4">
                <Jobs/>
            </div>
            <Button variant="contained">
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Typography color={"white"}>
                        Saved
                    </Typography>
                </Link>
            </Button>
            <Button variant="outlined" className="float-end">
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Typography color={"blue"}>
                        Cancel
                    </Typography>
                </Link>
            </Button>
        </>
    )
}

const ProfileInfo = () => {
    const username = "Caelan"; // HD now
    return (
        <div className="ms-5">
            <h2 className="fst-italic mb-5">{`Hello, ${username}`}</h2>
            <Link to="/profile/editprofile" style={{ textDecoration: 'none' }}>
                <Typography color={"black"}>
                    <u>Edit Your Profile</u>
                </Typography>
            </Link>
        </div>
    )
}

const ProfileInfoEdit = () => {
    const username = "Caelan"; // HD now
    return (
        <div className="ms-5">
            <h2 className="fst-italic mb-5">{`Hello, ${username}`}</h2>
            <EditProfile/>
        </div>
    )
}


export default function ProfilePage() {
    return (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} marginTop={5} marginBottom={5}>
            <Box gridColumn="span 4" marginLeft={15}>
                <SideBar/>
            </Box>
            <Box gridColumn="span 8" marginRight={15}>
                <ProfileInfo/>
            </Box>
        </Box>
    )
}

export function EditProfilePage() {
    return(
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} marginTop={5} marginBottom={5}>
            <Box gridColumn="span 4" marginLeft={15}>
                <SideBar/>
            </Box>
            <Box gridColumn="span 8" marginRight={15}>
                <ProfileInfoEdit/>
            </Box>
        </Box>
    )
}

const SideBar = ()  => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}