import React from "react";
import Typography from "@mui/material/Typography";

const ImageComponent = ({ post }) => {
  console.log({ post });
  return (
    <Typography id="modal-modal-title" variant="h6" component="h2">
      <img
        src={`${post.images[0].link.slice(-3) !== "mp4" ? post.images[0].link : post.images[0].gifv}?w=248&fit=crop&auto=format`}
        srcSet={`${post.images[0].link.slice(-3) !== "mp4" ? post.images[0].link : post.images[0].gifv}?w=248&fit=crop&auto=format&dpr=2 2x`}
        style={{ width: "300px" }}
        loading="lazy"
        alt={post.title}
      />
    </Typography>
  );
};

export default ImageComponent;
