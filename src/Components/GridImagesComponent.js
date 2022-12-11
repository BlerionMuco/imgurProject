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
import '../style/GridImage.css'

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
      <ImageList className="gridImage__listItem" cols={3}>
        {posts &&
          posts.map((post, index) => {
            return (
              <>
                {post.link && post.images && <ImageListItem
                  onClick={() => {
                    handleOpen(post);
                  }}
                  className="gridImage__imageListItem"
                  key={index}
                >
                  {post.link && post.images && <div>
                    {post.images[0].link.slice(-3) !== "mp4" ? (
                      <ImageComponent post={post} />
                    ) : (
                      <VideoComponent post={post} />
                    )}
                    <ImageListItemBar
                      className="gridImage__imageListItemBar"
                      title={post.title}
                      subtitle={post.author}
                      actionIcon={
                        <IconButton
                          className="gridImage__iconButton"
                          aria-label={`info about ${post.title}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </div>
                  }
                </ImageListItem>}
              </>


            );
          })}
      </ImageList>
      {open && <ModalComponent open={open} onClose={handleClose} />}
    </Box>
  );
};

export default TitlebarImageList;
