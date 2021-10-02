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
                        fontSize: '1.6rem',
                    }} variant={'body1'}>
                        The cryptocorn have emerged from the depths of the enchanted forest.
                        <br/>
                        They show their full beauty
                        in
                        the moonlight when the Bitcoin and Ethereum moon has risen.
                        <br/>
                        Become a part of this incredible
                        community
                        and join the club. <br/>
                        Mint your own cryptocorn or buy and trade on opensea.
                    </Typography>

                </Box>
            </Container>
        </Box>
    );
};

export default TextSection;