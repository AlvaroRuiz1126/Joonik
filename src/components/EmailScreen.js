import React, { useEffect, useState } from 'react';
import { getTokenByEmail } from '../services/apiService';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

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

const EmailScreen = ({history}) => {
    const classes = useStyles();
    const [emailState, setEmailState] = useState({
        email: ''
    });

    const {email} = emailState;

    const handleInputChange = ({target}) => {
        setEmailState({
            ...emailState,
            [target.name]: target.value
        });
    };

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const error = emailRegex.test(email);

    const handleSubmit = () => {
        
        getTokenByEmail(emailState)
        .then(data => {
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }

            localStorage.setItem('token', JSON.stringify(data));
        });

        history.push('/password');
    };

    useEffect(() => {}, [email]);

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
                        <TextField 
                            id="outlined-basic" 
                            id="standard-name"
                            label="Name"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            margin="normal"
                            helperText={!error ? "Name needs to be an email" : "Perfect!"}
                            error={error}
                        />
                    </form>

                    <Button className={classes.root} variant="contained" color="primary" onClick={handleSubmit}>
                        NEXT
                    </Button>
                </Grid>
                
            </Grid>
    );
};

export default EmailScreen;