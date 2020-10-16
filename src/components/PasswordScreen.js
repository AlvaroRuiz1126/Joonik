import React from 'react'
import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Grid, 
    makeStyles, 
    TextField 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 30
    }
}));

export default function PasswordScreen() {
    const classes = useStyles();
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
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
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
                        <Button className={classes.root} variant="contained" color="primary">
                                SIGN IN
                        </Button>
                    </Grid>
                </form>
            </Grid>

        </Grid>
    );
};
