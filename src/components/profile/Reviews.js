import * as React from 'react';
import Box from "@mui/material/Box";

const EmptyReviews = () => {
    return(
        <Box sx={{ m: 5 }}>
            <Box sx={{ fontSize: 'h3.fontSize'}}>Reviews List</Box>
            <br/>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize', color: 'yellowgreen'}}>The Reviews List is now Empty</Box>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize'}}>Go and Make your First Reviews!</Box>
        </Box>
    )
}

export default function Reviews() {
    // HD here. Just the initial no data page.
    return(
        <EmptyReviews/>
    )
}