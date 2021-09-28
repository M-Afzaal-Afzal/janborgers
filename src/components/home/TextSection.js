import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const TextSection = () => {
    return (
        <Container maxWidth={'xxl'}>

            <Box p={'5rem 1rem'}>

                <Typography variant={'body1'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum optio, sint. Consequuntur
                    deleniti dicta fugit ipsam iure magni nemo nesciunt nostrum omnis placeat ratione,
                    repellendus soluta totam vero voluptate voluptatem!
                </Typography>

            </Box>
        </Container>
    );
};

export default TextSection;