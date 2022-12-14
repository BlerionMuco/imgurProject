import React, { useState, useCallback } from 'react'
import { SelectComponent } from './SelectComponent';
import { useDispatch } from 'react-redux';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getPosts } from '../redux/slice';
import { Button } from '@mui/material';

const ModalFilterComponent = ({ onClose = null, open = true }) => {
    const [state, setState] = useState({ section: "hot", window: "day", viral: false, mature: false, sort: "viral" });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.type === "change") {
            setState(prevState => ({
                ...prevState,
                [event.target.name]: [event.target.checked]
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                [event.target.name]: [event.target.value]
            }));
        }

    };

    const filterPosts = useCallback(() => {
        dispatch(getPosts(state));
        onClose();
    },
        [state, dispatch, onClose],
    )


    const fields = [
        {
            type: "select",
            menuItems:
                [
                    { label: "Hot", value: "hot" },
                    { label: "Top", value: "top" },
                    { label: "User", value: "user" },
                ],
            label: "Section type..",
            name: "section",
            value: state["section"],
        },
        {
            type: "select",
            menuItems:
                [
                    { label: "Viral", value: "viral" },
                    { label: "Top", value: "top" },
                    { label: "Time", value: "time" },
                ],
            label: "Sort type",
            name: "sort",
            value: state["sort"]
        },
        {
            type: "select",
            menuItems:
                [
                    { label: "Day", value: "day" },
                    { label: "Week", value: "week" },
                    { label: "Month", value: "month" },
                    { label: "Year", value: "year" },
                    { label: "All", value: "all" },
                ],
            label: "Window type",
            name: "window",
            value: state["window"]
        },
        {
            type: "switch",
            label: "Show viral",
            name: "viral",
            value: state["viral"]
        },
        {
            type: "switch",
            label: "Show mature",
            name: "mature",
            value: state["mature"]
        },
    ]

    return (


        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='modal'>
                {fields &&
                    fields.map((field, index) => {
                        return (
                            <SelectComponent key={index} {...field} funx={handleChange} />
                        )
                    })
                }
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <Button onClick={onClose} color="error" size="medium" variant="text">
                            Close
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Button onClick={filterPosts} color="success" size="medium" variant="text">
                            Done
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </Modal>
    )
}

export default ModalFilterComponent