import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";

const Footer = () => {
    return (
        <Box sx={{
            background: theme => theme.palette.secondary.main,
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: '1fr 1fr 1fr',
                        gridGap: '1rem',
                    },
                    alignItems: 'center',
                    placeItems: 'center',
                    py: '1.5rem',
                }}>
                    {/* For layout purpose*/}
                    <Box/>

                    <Box>
                        {/*    Logo */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            color: '#fff',
                            background: 'rgb(255,255,255)',
                            borderRadius: '50%',
                            padding: '6px',
                            fontWeight: 'bold',
                            width: '180px',
                            height: '180px',
                            // border: '1px solid #eee',
                        }}>
                            <Image src={'/logo.png'} width={180} height={180}/>
                        </Box>
                    </Box>

                    <Box>
                        {/*     Copy right text*/}
                        <Box sx={{
                            width: '100%',
                        }}>

                            <Typography color={'#fff'} variant={'body1'}>
                               Copyright &copy; by {' '}
                                <Typography component={'a'} sx={{
                                    color: '#fff'
                                }} variant={'body1'}>
                                    cryptocorn.club
                                </Typography> {" "}
                                2021.
                            </Typography>

                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;