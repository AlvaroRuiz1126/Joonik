import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField } from '@material-ui/core';
import { addPost } from '../services/apiService';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    input: {
        display: 'none',
    },
    root: {
        marginRight: 10
    },
}));

const TransitionsModal = ({ open, handleModal }) => {
    const classes = useStyles();
    const [postValues, setPostValues] = useState({
        title: '',
        content: '',
        image: null
    });

    const { title, content, image } = postValues;

    const handleInputChange = ({ target }) => {
        setPostValues({
            ...postValues,
            [target.name]: target.value
        });
    };

    const handleFile = ({ target }) => {
        setPostValues({
            ...postValues,
            [target.name]: target.files[0]
        });
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image, image.name);
        console.log(formData);
        addPost(formData).then(data => console.log(data));
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={`${classes.paper} modal`}>
                        <h2>Add a New Post</h2>
                        <form>
                            <div className="content-modal">
                                <TextField
                                    id="outlined-basic"
                                    label="Title"
                                    variant="outlined"
                                    name="title"
                                    value={title}
                                    onChange={handleInputChange}
                                    className={classes.root}
                                />

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Post Content"
                                    name="content"
                                    multiline
                                    rowsMax={4}
                                    variant="outlined"
                                    margin="normal"
                                    value={content}
                                    onChange={handleInputChange}
                                />

                                <input
                                    accept="image/*"
                                    className={`${classes.input} input-modal`}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    name="image"
                                    onChange={handleFile}
                                />

                                <label htmlFor="contained-button-file" className="label-modal">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                </Button>
                                </label>
                            </div>

                            <div className="button-modal">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                >
                                    Add Post
                            </Button>
                            </div>

                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default TransitionsModal;