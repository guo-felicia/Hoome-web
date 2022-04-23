import * as React from 'react';
import Box from "@mui/material/Box";

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
    return(
        <EmptyFollowers/>
    )
}