import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import ImageComponent from './ImageComponent';
import VideoComponent from './VideoComponent';
import PostDataComponent from './PostDataComponent'
import '../style/Modal.css'

export const ModalComponent = ({ onClose, open }) => {
    const post = useSelector(state => state.posts.postOnModal)
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal'>
                    {post.images && post.mp4 === undefined ? (
                        <ImageComponent post={post} />
                    ) : (
                        <VideoComponent post={post} />
                    )}
                    <PostDataComponent post={post} />
                </Box>
            </Modal>
        </div >
    );
}