// most are copy from profile page. Duplicated code existed. Could be changed.
// email, and signature cannot been changed now
import {Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {useParams} from "react-router-dom";
import {findUserByUsername} from "../../services/auth-service"
import {useEffect, useState} from "react";

const OthersProfile = () => {
    const { id } = useParams(); //id === username here
    const [otherspro, setOtherspro] = useState()
    // const [waiting, setWaiting] = useState(true)
    const findUser = async () =>{
        const response = await findUserByUsername(id)
        setOtherspro(response)
        // setWaiting(false)
    }
    useEffect(() => {
        findUser()
    }, [])
    return (
        <>
            {otherspro && <Grid container direction="column" item xs={7} align="center">
                <Box sx={{fontSize : 'h3.fontSize'}}>{`${otherspro.firstName}'s Profile`}</Box>
                <br/>
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
                </Box>
            </Grid>}
        </>
    )
}

export default OthersProfile;