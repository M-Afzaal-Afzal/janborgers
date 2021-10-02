import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const TextSection = () => {
    return (
        <Box sx={{
            background: theme => theme.palette.secondary.main,
        }}>
            <Container maxWidth={'xxl'}>

                <Box p={'5rem 1rem'}>

                    <Typography sx={{
                        color: '#fff',
                        fontSize: '1.3rem',
                    }} variant={'body1'}>
                        The cryptocorn have emerged from the depths of the enchanted forest. They show their full beauty
                        in
                        the moonlight when the Bitcoin and Ethereum moon has risen. Get a part of this incredible
                        community
                        and join the club. Mint your own cryptocorn or buy and trade on opensea.
                    </Typography>

                </Box>
            </Container>
        </Box>
    );
};

export default TextSection;