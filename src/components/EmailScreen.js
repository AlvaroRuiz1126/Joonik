import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { getTokenByEmail } from '../services/apiService';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 30
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const EmailScreen = () => {
    const classes = useStyles();
    const [emailState, setEmailState] = useState({
        email: ''
    });

    const {email} = emailState;

    useEffect(() => {}, [email]);

    const handleInputChange = ({target}) => {
        //console.log(target.value);
        setEmailState({
            ...emailState,
            [target.name]: target.value
        });
    };

    const handleSubmit = () => {
        getTokenByEmail(emailState)
        .then(data => {
            //console.log(data); // JSON data parsed by `data.json()` call
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }

            localStorage.setItem('token', JSON.stringify(data));
        }
    ) 
};

    //useFetch();
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={10}>
                <form>
                    <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={email} autoComplete="off" onChange={handleInputChange} />
                </form>
                <Button className={classes.root} variant="contained" color="primary" onClick={handleSubmit}>
                    NEXT
                </Button>
            </Grid>
            
        </Grid>
    );
};

export default EmailScreen;