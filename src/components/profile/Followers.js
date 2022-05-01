import * as React from 'react';
import Box from "@mui/material/Box";
import {useProfile} from "../../ProfileProvider";
import {Link, useNavigate} from "react-router-dom";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const EmptyFollowers = () => {
    return(
        <Box sx={{ m: 5 }}>
            <Box sx={{ fontSize: 'h3.fontSize'}}>Followers List</Box>
            <br/>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize', color: 'yellowgreen'}}>The Followers List is now Empty</Box>
            <br/>
        </Box>
    )
}

export default function Followers() {
    // HD here. Just the initial no data page.
    const {profile} = useProfile()
    const navigate = useNavigate()
    if (profile) {
        return(
            <Box sx={{ m: 5 }}>
                <Box sx={{ fontSize: 'h3.fontSize'}}>Following List</Box>
                <br/>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            {profile.followers.map((follower) => {
                                return (
                                    <ListItem disablePadding>
                                        <Link to={`/profile/${follower}`}>
                                            <ListItemButton>
                                                <ListItemText primary={follower} />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </nav>
                </Box>
            </Box>
        )
    }
    else {
        alert('you havent login in')
        navigate('/login')
    }
}