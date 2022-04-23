import * as React from 'react';
import Box from "@mui/material/Box";


const EmptyFavorites = () => {
    return(
        <Box sx={{ m: 5 }}>
            <Box sx={{ fontSize: 'h3.fontSize'}}>Favorites List</Box>
            <br/>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize', color: 'yellowgreen'}}>The Favorites List is now Empty</Box>
            <br/>
            <Box sx={{ fontSize: 'h5.fontSize'}}>Go and Find your First Favorite!</Box>
        </Box>
    )
}


export default function Favorites() {
    // HD here. Just the initial no data page.
    return(
        <EmptyFavorites/>
    )
}