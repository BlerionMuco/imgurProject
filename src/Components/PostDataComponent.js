import React from 'react'
import Typography from '@mui/material/Typography';

const PostDataComponent = ({ post }) => {
    const data = ["title", "description", "ups", "downs", "scores"];

    return (
        <div>
            {data.map((d) => (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {d} : {post[d]}
                </Typography>
            ))}
        </div>
    )
}

export default PostDataComponent