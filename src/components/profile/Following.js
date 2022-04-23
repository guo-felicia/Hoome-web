import * as React from 'react';
import Box from "@mui/material/Box";

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
    return(
        <EmptyFollowing/>
    )
}