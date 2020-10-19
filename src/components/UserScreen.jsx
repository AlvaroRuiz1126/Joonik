import React, { useEffect, useState } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CardContent from './CardContent';
import TransitionsModal from './AddPost';
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 20
    },
    button: {
        display: 'block',
        alignItems: 'flex-end'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const UserScreen = ({history}) => {
    const classes = useStyles();
    const [openUser, setOpenUSer] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [post, setPost] = useState(null);

    const handleClick = () => {
      setOpenUSer(!openUser);
    };

    const handleModal = () => {
        setOpenModal(!openModal);
    }

    if(post === null){
        getPost().then(data => {
            if(Array.isArray(data)){
                setPost(data)
            }
        });
    };

    useEffect(() => {}, [openUser, post, openModal]);

    console.log(post);
    
    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={`${JSON.parse(localStorage.getItem('token')).name}`} />
                {openUser ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openUser} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} onClick={() => history.push('/email')}>
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
                        {post!==null ? post.map((item, i) => (<CardContent key={i} className={classes.card} image={item.image} title={item.title} content={item.content} />)) : <CircularProgress />}
                    </div>
                </Grid>

                <Button className={`${classes.button}`} variant="contained" color="primary" onClick={handleModal}>
                    ADD NEW
                </Button>

                {openModal && <TransitionsModal open={openModal} handleModal={handleModal} />}

            </Grid>
        </div >
    );
};

export default UserScreen;