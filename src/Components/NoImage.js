import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import '../style/NoImage.css'

function Media(props) {
    const { loading = false } = props;

    return (
        <Grid className='noImage__content' container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : [1, 2, 3]).map((item, index) => (
                <Box key={index} sx={{ marginRight: 0.5, my: 5 }}>
                    {item &&
                        <Skeleton variant="rectangular" width={280} height={118} />
                    }
                    {item &&
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    }
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function NoImage() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media />
        </Box>
    );
}