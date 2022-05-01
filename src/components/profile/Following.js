import * as React from 'react';
import Box from "@mui/material/Box";
import {useProfile} from "../../ProfileProvider";
import {Link, useNavigate} from "react-router-dom";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const EmptyFollowing = () => {
    return(
        <Box sx={{ m: 5 }}>
            <Box sx={{ fontSize: 'h3.fontSize'}}>Following List</Box>
            <br/>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize', color: 'yellowgreen'}}>The Following List is now Empty</Box>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize'}}>Go and Find your First Following!</Box>
        </Box>
    )
}

export default function Following() {
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
                            {profile.followings.map((following) => {
                                return (
                                    <ListItem disablePadding>
                                        <Link to={`/profile/${following}`}>
                                            <ListItemButton>
                                                <ListItemText primary={following} />
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