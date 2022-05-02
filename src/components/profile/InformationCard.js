import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Avatar, CardMedia,
    Divider, Grid,
    List,
    ListItem,
    ListItemButton, Stack,
    TextField, Toolbar
} from "@mui/material";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
// import {profile, signin, updateUser, updateUserInfo} from "../../services/auth-service";
import {useProfile} from "../../ProfileProvider";

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
                                <Link to="/profile/questions" style={{textDecoration: 'none'}}>
                                    <Typography color={"black"}>
                                        Questions
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

export default function ProfilePage() {
    // const [currentUser, setCurrentUser] = useState({})
    const {profile, updateProfile} = useProfile()
    const [edit, setEdit] = useState(false)
    let host = false;
    if (profile && profile.identity) {
        if (profile.identity === 'host') {
            host = true
        }
    }
    // const navigate = useNavigate()
    // const fetchProfile = async () => {
    //     try {
    //         await checkLoggedIn()
    //     }
    //     catch (e) {
    //         navigate('/')
    //     }
    // }
    // fetchProfile()
    // useEffect(() => {
    //     console.log('how to make you work')
    // }, [checkLoggedIn])
    
    const ProfileInfoEdit = () => {
        const handleSave = async () => {
            try {
                let newProfile;
                    if (profile.identity === 'host') {
                        newProfile = {email: profile.email, identity: profile.identity, username: profile.username, password: passwordRef.current.value,
                        firstName: firstNameRef.current.value, lastName: lastNameRef.current.value,
                        aboutyou: aboutyouRef.current.value, location: locationRef.current.value,
                        languages: languagesRef.current.value, jobs: jobsRef.current.value, followers: profile.followers,
                        followings: profile.followings, houses: profile.houses}
                    }
                else {
                        newProfile = {email: profile.email, identity: profile.identity, username: profile.username, password: passwordRef.current.value,
                            firstName: firstNameRef.current.value, lastName: lastNameRef.current.value,
                            aboutyou: aboutyouRef.current.value, location: locationRef.current.value,
                            languages: languagesRef.current.value, jobs: jobsRef.current.value, followers: profile.followers,
                            followings: profile.followings}
                }
                await updateProfile(
                    newProfile
                )
                setEdit(false)
            } catch (e) {
                alert('save profile failed')
            }
        }
        const handleCancel = () => {
            setEdit(false)
        }
        const passwordRef = useRef();
        const firstNameRef = useRef();
        const lastNameRef = useRef();
        const aboutyouRef = useRef();
        const locationRef = useRef();
        const languagesRef = useRef();
        const jobsRef = useRef();
        return (
            <Grid container direction="column" item xs={7} align="center">
                <Box sx={{fontSize : 'h3.fontSize'}}>{`Hello, ${profile.firstName}`}</Box>
                <br/>
                <>
                    <Grid container direction="column" item xs={7} align="center">
                        <div>
                            <TextField id='password'
                                       label='Password'
                                       margin='normal'
                                       inputRef={passwordRef}
                                       defaultValue={profile.password}>
                            </TextField>
                        </div>
                        <div>
                            <TextField id='nameText'
                                       label='Frist Name'
                                       margin='normal'
                                       inputRef={firstNameRef}
                                       defaultValue={profile.firstName}>
                            </TextField>
                        </div>
                        <div>
                            <TextField id='nameText'
                                       label='Last Name'
                                       margin='normal'
                                       inputRef={lastNameRef}
                                       defaultValue={profile.lastName}>
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                id="aboutyou"
                                label="About You"
                                multiline
                                rows={4}
                                margin="normal"
                                inputRef={aboutyouRef}
                                defaultValue={profile.aboutyou}
                            >
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                id="location"
                                label="Your Location"
                                multiline
                                rows={2}
                                margin="normal"
                                inputRef={locationRef}
                                defaultValue={profile.location}
                            >
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                id="languageyouspeak"
                                label="Languages You Speak"
                                multiline
                                rows={2}
                                margin="normal"
                                inputRef={languagesRef}
                                defaultValue={profile.languages}
                            >
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                id="yourjob"
                                label="Your Job"
                                multiline
                                rows={2}
                                margin="normal"
                                inputRef={jobsRef}
                                defaultValue={profile.jobs}
                            >
                            </TextField>
                        </div>
                        <br/>
                        <Toolbar sx={{ justifyContent: "space-between" }}>
                            <Button variant="outlined" onClick={handleSave}>
                                Saved
                            </Button>
                            <Button variant="outlined" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Toolbar>
                    </Grid>
                </>
                <br/>
            </Grid>
        )
    }
    
    // email, and signature cannot been changed now
    const ProfileInfo = () => {
        return (
            <Grid container direction="column" item xs={7} align="center">
                <Box sx={{fontSize : 'h3.fontSize'}}>{`Hello, ${profile.firstName}`}</Box>
                <br/>
                <Button variant="text" onClick={() => {setEdit(true)}}>Edit Your Profile</Button>
                <Box>
                    <div>
                        <TextField id='email'
                                   label='Email'
                                   margin='normal'
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue={profile.email}>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='password'
                                   label='Password'
                                   margin='normal'
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue={profile.password}>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='firstname'
                                   label='Frist Name'
                                   margin='normal'
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue={profile.firstName}>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='lastname'
                                   label='Last Name'
                                   margin='normal'
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue={profile.lastName}>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="aboutyou"
                            label="About You"
                            multiline
                            rows={4}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={profile.aboutyou}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="location"
                            label="Your Location"
                            multiline
                            rows={2}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={profile.location}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="languageyouspeak"
                            label="Languages You Speak"
                            multiline
                            rows={2}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={profile.languages}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="yourjob"
                            label="Your Job"
                            multiline
                            rows={2}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={profile.jobs}
                        >
                        </TextField>
                    </div>
                </Box>
            </Grid>
        )
    }

    const Houses = () => {
        if (profile.houses) {
            return (
                <>
                    <Box sx={{fontSize : 'h4.fontSize'}}>Houses You Own</Box>
                    <br/>
                    <Stack direction="row" spacing={2}>
                        {profile.houses.map((house) => {
                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={house.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {house.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {house.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            {house.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </Stack>
                    <br/>
                    <Button size="small" color="secondary">
                        <Link to="/newhouse" style={{ textDecoration: 'none' }}>
                            <p className='mg10px'>Release a New House</p>
                        </Link>
                    </Button>
                </>
            )
        }
        else {
            return (
            <>
                <Box sx={{fontSize: 'h5.fontSize', color: 'yellowgreen'}}>Your House List is Empty.</Box>
                <br/>
                <Box sx={{fontSize: 'h5.fontSize'}}>Release Your First House!</Box>
                <br/>
                <Button size="small" color="secondary">
                    <Link to="/newhouse" style={{ textDecoration: 'none' }}>
                        <p className='mg10px'>Release a New House</p>
                    </Link>
                </Button>
            </>
            )
        }
    }
    
    return (
        <>
            <br/>
            <br/>
            {profile && <Grid container spacing={2}>
                <Grid item xs={0} md={2}>

                </Grid>
                <Grid item xs={6} md={3}>
                    <SideBar/>
                </Grid>
                <Grid item xs={0} md={1}>

                </Grid>
                <Grid item xs={6} md={6} justifyContent="center">
                    {edit && <ProfileInfoEdit/>}
                    {!edit && <ProfileInfo/>}
                </Grid>
                <br/>
                <Grid item xs={12}>
                    {host && <Houses/>}
                </Grid>
            </Grid>}
        </>
    )
}

const SideBar = ()  => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}