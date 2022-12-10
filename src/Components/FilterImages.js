import React, { useState } from 'react'
import { SelectComponent } from './SelectComponent';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/slice';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../style/FilterImage.css'

const FilterImages = () => {
    const [state, setState] = useState({ section: "hot", window: "day", viral: false, mature: false, sort: "viral" })
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setState(prevState => ({
            ...prevState,
            [event.target.name]: [event.target.value]
        }));
    };

    const onClick = () => {
        dispatch(getPosts(state))
    }

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
        <Grid container spacing={2} className="filterImage__container">
            {fields &&
                fields.map((field, index) => {
                    return (
                        <SelectComponent key={index} {...field} funx={handleChange} />
                    )
                })
            }
            <Grid item xs={12} >
                <Button color="primary" onClick={onClick} variant="contained">Filter</Button>
            </Grid>
        </Grid>
    )
}


export default FilterImages