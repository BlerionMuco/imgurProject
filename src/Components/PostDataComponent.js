import React from 'react'
import Typography from '@mui/material/Typography';

const PostDataComponent = ({ post }) => {
    const data = ["title", "description", "ups", "downs", "scores"];

    return (
        <div>
            {data.map((d) => {
                return (
                    <div>
                        {post[d] && <Typography id="modal-modal-title" variant="h6" component="h2">
                            {d.charAt(0).toUpperCase() + d.slice(1)} : {post[d]}
                        </Typography>
                        }
                    </div>

                )
            })}
        </div>
    )
}

export default PostDataComponent