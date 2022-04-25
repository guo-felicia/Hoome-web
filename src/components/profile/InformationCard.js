import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Avatar,
    Divider, Grid,
    List,
    ListItem,
    ListItemButton,
    TextField, Toolbar
} from "@mui/material";
import {Link} from "react-router-dom";
import Favorites from "./Favorites";

const card = (
    <React.Fragment>
        <CardContent>
            <br/>
            <Avatar sx={{height: '220px', width: '220px', mx: 'auto'}}>
                <img alt="avatar" src="tempImage.png"/>
            </Avatar>
            <br/>
            <div>
                <Link to="/profile/updatephoto" style={{textDecoration: 'none'}}>
                    <Typography color={"black"} align={"center"}>
                        <u>Update Photo</u>
                    </Typography>
                </Link>
            </div>
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/following" style={{textDecoration: 'none'}}>
                                    <Typography color={"black"}>
                                        Following
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/followers" style={{textDecoration: 'none'}}>
                                    <Typography color={"black"}>
                                        Followers
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/review" style={{textDecoration: 'none'}}>
                                    <Typography color={"black"}>
                                        Review
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding className="mt-2 mb-2">
                            <ListItemButton>
                                <Link to="/profile/favorites" style={{textDecoration: 'none'}}>
                                    <Typography color={"black"}>
                                        Favorites
                                    </Typography>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <Box>
                                <TextField
                                    id="outlined-multiline-static"
                                    margin="normal"
                                    label="Personal Signature"
                                    multiline
                                    rows={4}
                                />
                            </Box>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </CardContent>
        <CardActions>
            <Button size="small">
                <Link to="/profile/privatepolicy" style={{textDecoration: 'none'}}>
                    Privacy Policy
                </Link>
            </Button>
        </CardActions>
    </React.Fragment>
);

const Aboutyou = () => {
    let dv = "old information";
    return (
        <TextField
            id="aboutyou"
            label="About You"
            multiline
            rows={4}
            defaultValue={dv}
            margin="normal"
        />
    )
}

const YourLocation = () => {
    let dv = "old information";
    return (
        <TextField
            id="location"
            label="Your Location"
            multiline
            rows={2}
            defaultValue={dv}
            margin="normal"
        />
    )
}

const Languages = () => {
    let dv = "old information";
    return (
        <TextField
            id="languageyouspeak"
            label="Languages You Speak"
            multiline
            rows={2}
            defaultValue={dv}
            margin="normal"
        />
    )
}

const Jobs = () => {
    let dv = "old information";
    return (
        <TextField
            id="yourjob"
            label="Your Job"
            multiline
            rows={2}
            defaultValue={dv}
            margin="normal"
        />
    )
}

const EditProfile = () => {
    // HD in 2 button. Should actually send information back to server, then get from server
    return (
        <>
            <Grid container direction="column" item xs={7} align="center">
                <div>
                    <Aboutyou/>
                </div>
                <div>
                    <YourLocation/>
                </div>
                <div>
                    <Languages/>
                </div>
                <div>
                    <Jobs/>
                </div>
                <br/>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Button variant="outlined">
                        <Link to="/profile" style={{textDecoration: 'none'}}>
                            <Typography color={"grey"}>
                                Saved
                            </Typography>
                        </Link>
                    </Button>
                    <Button variant="outlined">
                        <Link to="/profile" style={{textDecoration: 'none'}}>
                            <Typography color={"grey"}>
                                Cancel
                            </Typography>
                        </Link>
                    </Button>
                </Toolbar>
            </Grid>
        </>
    )
}

const ProfileInfo = () => {
    const username = "Caelan"; // HD now
    return (
        <Grid container direction="column" item xs={7} align="center">
            <Box sx={{fontSize: 'h3.fontSize'}}>{`Hello, ${username}`}</Box>
            <br/>
            <Link to="/profile/editprofile" style={{textDecoration: 'none'}}>
                <Typography color={"black"}>
                    <u>Edit Your Profile</u>
                </Typography>
            </Link>
        </Grid>
    )
}

const ProfileInfoEdit = () => {
    const username = "Caelan"; // HD now
    return (
        <Grid container direction="column" item xs={7} align="center">
            <Box sx={{fontSize: 'h3.fontSize'}}>{`Hello, ${username}`}</Box>
            <br/>
            <EditProfile/>
            <br/>
        </Grid>
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
                
                {/*TODO hide when other people check it*/}
                <Favorites/>
                
            </Box>
        </Box>
    )
}

export function EditProfilePage() {
    return (
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

const SideBar = () => {
    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}