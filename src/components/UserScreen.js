import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { getPost } from '../services/apiService';
import {
    Button,
    ButtonBase,
    Collapse,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 300,
    },
    image: {
        width: 64,
        height: 64,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    button: {
        display: 'block',
        alignItems: 'flex-end'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const UserScreen = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const functionPost = () => {
        getPost()
        .then(data => console.log(data));
    };

    functionPost();

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="User" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Collapse>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                        </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                        </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                        </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                        </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                        </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>

                <Button className={classes.button} variant="contained" color="primary">
                    ADD NEW
                </Button>

            </Grid>
        </div >
    );
};

export default UserScreen;