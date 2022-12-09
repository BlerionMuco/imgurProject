import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { ModalComponent } from "./ModalComponent";
import { useDispatch } from "react-redux";
import { postOnModal } from "../redux/slice";
import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";

const TitlebarImageList = () => {
  const posts = useSelector((state) => state.posts.posts.data);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = (post) => {
    dispatch(postOnModal(post));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <ImageList xs={{ padding: "50px" }} cols={3}>
        {posts &&
          posts.map((post, index) => {
            return (
              <ImageListItem
                onClick={() => {
                  handleOpen(post);
                }}
                sx={{ margin: "8px" }}
                key={index}
              >
                {post.images && post.mp4 === undefined ? (
                  <ImageComponent post={post} />
                ) : (
                  <VideoComponent post={post} />
                )}
                <ImageListItemBar
                  sx={{ borderRadius: "10px" }}
                  title={post.title}
                  subtitle={post.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${post.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            );
          })}
      </ImageList>
      {open && <ModalComponent open={open} onClose={handleClose} />}
    </Box>
  );
};

export default TitlebarImageList;
