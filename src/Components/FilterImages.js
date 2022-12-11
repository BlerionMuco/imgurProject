import React, { useState } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../style/FilterImage.css";
import ModalFilterComponent from "./ModalFilterComponent";

const FilterImages = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false);

    const handleOpen = (post) => {
        setOpenFilterModal(true);
    };
    const handleClose = () => {
        setOpenFilterModal(false);
    };

    return (
        <Grid container spacing={2} className="filterImage__container">
            <Grid item xs={12}>
                <Button className="filterImage__button" color="primary" onClick={handleOpen} variant="contained">
                    Filter
                </Button>
            </Grid>

            {openFilterModal && (
                <ModalFilterComponent open={openFilterModal} onClose={handleClose} />
            )}
        </Grid>
    );
};

export default FilterImages;
