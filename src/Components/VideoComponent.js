import React from 'react'
import Typography from '@mui/material/Typography';

const VideoComponent = ({ post }) => {
    return (
        <Typography id="modal-modal-title" variant="h6" component="h2">
            <video
                style={{ width: "270px", borderRadius: "10px" }}
                autoPlay
                loop
                muted
                poster={post.mp4}
            >
                <source
                    src={post.mp4}
                    type="video/mp4"
                />
            </video>
        </Typography>
    )
}

export default VideoComponent