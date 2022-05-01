// most are copy from profile page. Duplicated code existed. Could be changed.
// email, and signature cannot been changed now
import {CardMedia, Grid, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {Link, useParams} from "react-router-dom";
import {addFollowing, findUserByUsername} from "../../services/auth-service"
import {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useProfile} from "../../ProfileProvider";
import * as service from "../../services/auth-service";
import SecureContent from "../../SecureContent";

const OthersProfile = () => {
    const { id } = useParams(); //id === username here
    const [otherspro, setOtherspro] = useState()
    const {profile, updateFollowings} = useProfile();
    // const [waiting, setWaiting] = useState(true)
    const findUser = async () =>{
        const response = await findUserByUsername(id)
        setOtherspro(response)
        // setWaiting(false)
    }
    useEffect(() => {
        findUser()
    }, [])

    const handleFollow = async () => {
        // prevent double follow
        if (otherspro.followers.includes(profile.username)) {
            alert('You already followed!')
        }
        else {
            // add OTHER as SELF's following
            try {
                await updateFollowings(
                    id,
                    otherspro.identity
                )
            } catch (e) {
                alert('update following failed')
            }
            // add SELF as OTHER's follower
            try {
                await service.addFollowing(
                    otherspro.username,
                    profile.username,
                    otherspro.identity
                )
            } catch (e) {
                alert('update followers failed')
            }
        }
    }

    const Houses = () => {
        if (otherspro.houses) {
            return (
                <>
                    <Box sx={{fontSize : 'h4.fontSize'}}>Houses Owned</Box>
                    <br/>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        {otherspro.houses.map((house) => {
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
                </>
            )
        }
        else {
            return (
                <>
                    <Box sx={{fontSize: 'h5.fontSize', color: 'yellowgreen'}}>Your House List is Empty.</Box>
                    <br/>
                    <Box sx={{fontSize: 'h5.fontSize'}}>Release Your First House!</Box>
                </>
            )
        }
    }

    return (
        <>
            {otherspro && <Grid container direction="column" item xs={7} align="center">
                <Box sx={{fontSize : 'h3.fontSize'}}>{`${otherspro.firstName}'s Profile`}</Box>
                <br/>
                <SecureContent>
                    <Button size="small" onClick={handleFollow}>
                        {`Follow ${otherspro.firstName}`}
                    </Button>
                </SecureContent>
                <Box>
                    <div>
                        <TextField id='firstname'
                                   label='Frist Name'
                                   margin='normal'
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue={otherspro.firstName}>
                        </TextField>
                    </div>
                    <div>
                        <TextField id='lastname'
                                   label='Last Name'
                                   margin='normal'
                                   InputProps={{
                                       readOnly: true,
                                   }}
                                   defaultValue={otherspro.lastName}>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="aboutyou"
                            label={`About ${otherspro.firstName}`}
                            multiline
                            rows={4}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={otherspro.aboutyou}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="location"
                            label={`${otherspro.firstName}'s Location`}
                            multiline
                            rows={2}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={otherspro.location}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="languageyouspeak"
                            label={`Languages ${otherspro.firstName} Speak`}
                            multiline
                            rows={2}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={otherspro.languages}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="yourjob"
                            label={`${otherspro.firstName}'s Job`}
                            multiline
                            rows={2}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={otherspro.jobs}
                        >
                        </TextField>
                    </div>
                    <br/>
                    <br/>
                </Box>
                <div>
                    {otherspro.identity === 'host' && <Houses />}
                </div>
            </Grid>}
        </>
    )
}

export default OthersProfile;