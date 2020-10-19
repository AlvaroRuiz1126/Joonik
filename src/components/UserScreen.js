import React, { useEffect, useState } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { getPost } from '../services/apiService';
import {
    Button,
    CircularProgress,
    Collapse,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from '@material-ui/core';
import CardContent from './CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
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
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState(null);

    const handleClick = () => {
      setOpen(!open);
    };

    if(post === null){
        getPost().then(data => {
            if(Array.isArray(data)){
                setPost(data)
                console.log(data, "HOLAAAA");
            }
        });
    };

    useEffect(() => {
    }, [open, post]);

    console.log(post);
    
    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={`${JSON.parse(localStorage.getItem('token')).name}`} />
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
                        {post!==null ? post.map(item => (<CardContent key={item.title} image={item.image} title={item.title} content={item.content} />)) : <CircularProgress />}
                    </div>
                </Grid>

                <Button className={`${classes.button}`} variant="contained" color="primary">
                    ADD NEW
                </Button>

            </Grid>
        </div >
    );
};

export default UserScreen;