import * as React from 'react';
import Box from "@mui/material/Box";
import * as service from "../../services/Question-service";
import {useProfile} from "../../ProfileProvider";
import {useEffect, useState} from "react";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

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

export default function Questions() {
    const {profile} = useProfile()
    const [question, setQuestion] = useState([]);
    const getQuestions = async () => {
        const questions = await service.findQuestionByUser(profile.username, profile.firstName);
        setQuestion(questions);
    }
    useEffect(() => {
        if (profile) {
            getQuestions()
        }
    }, [])
    // HD here. Just the initial no data page.
    return(
        <Box sx={{ m: 5 }}>
            <Box sx={{ fontSize: 'h3.fontSize'}}>Qestions You Posted</Box>
            <br/>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        {question.map((q) => {
                            return (
                                <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={q.question} />
                                        </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </nav>
            </Box>
        </Box>
    )
}