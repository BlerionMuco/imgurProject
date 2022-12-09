import * as React from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export const SelectComponent = React.memo(({ label, menuItems, value, funx, type, name }) => {
    return (
        <Grid item xs={6} md={3} sx={{ p: "5px 15px 5px 5px" }}>
            {type === "select"
                ?
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={funx}
                        name={name}
                        size="small"
                    >
                        {menuItems && menuItems.map((menuItem, index) => (
                            <MenuItem key={index} value={menuItem.value}>{menuItem.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                :
                <FormControlLabel
                    size="small"
                    control={<Switch size="small" value={value} onChange={funx} name={name} />}
                    label={label}
                />
            }
        </Grid>
    );
})