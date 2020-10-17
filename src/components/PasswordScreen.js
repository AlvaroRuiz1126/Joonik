import React, { useEffect, useState } from 'react'
import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Grid, 
    makeStyles, 
    TextField 
} from '@material-ui/core';
import { getTokenByPassword } from '../services/apiService';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 30
    }
}));

const PasswordScreen = () => {
    const classes = useStyles();
    const [passwordState, setPasswordState] = useState({
        password: ''
    });

    const {password} = passwordState;

    //useEffect(() => {}, [password]);

    const handleInputChange = ({target}) => {
        //console.log(target.value);
        setPasswordState({
            ...passwordState,
            [target.name]: target.value
        });
    };

    const handleSubmit = () => {
        getTokenByPassword(passwordState)
        .then(data => {
            //console.log(data); // JSON data parsed by `data.json()` call
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }

            localStorage.setItem('token', JSON.stringify(data));
        })
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <p>email@email.com</p>

            <Grid item xs={6}>
                <form>
                    <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={password} onChange={handleInputChange} />
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
    );
};

export default PasswordScreen;