import React, { useState } from 'react'
import { getTokenByPassword } from '../services/apiService';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Grid, 
    makeStyles, 
    TextField 
} from '@material-ui/core';
import './../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 30
    }
}));

const PasswordScreen = ({history}) => {
    const classes = useStyles();
    const [passwordState, setPasswordState] = useState({
        password: ''
    });

    const {password} = passwordState;

    const handleBack = () => {
        history.push('/email');
    };

    const handleInputChange = ({target}) => {
        setPasswordState({
            ...passwordState,
            [target.name]: target.value
        });
    };

    const error = password;

    const handleSubmit = () => {
        if(error.length > 6){
            getTokenByPassword(passwordState)
            .then(data => {
                if(localStorage.getItem('token')){
                    localStorage.removeItem('token');
                }

                localStorage.setItem('token', JSON.stringify(data));
                localStorage.removeItem('email');
            });
        }

        history.push('/user');
    };

    return (
        <>
        <ArrowBackIosIcon className="icon" onClick={handleBack} />
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <p>{localStorage.getItem('email')}</p>

            <Grid item xs={6}>
                <form>
                    <TextField 
                        id="outlined-basic" 
                        label="Password"
                        value={password}
                        name="password"
                        type="password"
                        onChange={handleInputChange}
                        margin="normal"
                        helperText={(error.length < 6) ? "Minium six characters" : "Perfect!"}
                        error={error}
                    />

                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Rememeber Me"
                        labelPlacement="end"
                    />

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Button className={classes.root} variant="contained" color="primary" onClick={handleSubmit}>
                            SIGN IN
                        </Button>
                    </Grid>

                </form>
            </Grid>

        </Grid>
        </>
    );
};

export default PasswordScreen;