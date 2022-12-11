import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../style/FilterImage.css";
import ModalFilterComponent from "./ModalFilterComponent";

const FilterImages = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const mainRef = useRef();

    const handleOpen = () => {
        setOpenFilterModal(true);
    };
    const handleClose = () => {
        setOpenFilterModal(false);
    };

    useEffect(() => {
        let scrollT = 0;
        const scrollCallback = (event) => {
            if (mainRef.current) {
                const clientRect = mainRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (clientRect.top < scrollT && clientRect.bottom - windowHeight <= 0) {
                    //Here the user has reached end of the page and here will be another
                    // function that will be called to change the state of page and after 
                    // to dispatch again the endpoint with page param +1.
                    //This will be explained on ReadMe file.
                    document.getElementById('FilterButton').style.display = 'none';
                }
                else {
                    document.getElementById('FilterButton').style.display = 'block';
                }
                scrollT = clientRect.top;
            }
        };
        window.addEventListener("scroll", scrollCallback);

        return () => {
            window.removeEventListener("scroll", scrollCallback);
        };
    }, []);

    return (
        <Grid container spacing={2} ref={mainRef} className="filterImage__container">
            <Grid id="FilterButton" item xs={12}>
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
