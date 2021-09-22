import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import {Box, Button, Container, IconButton, Stack, Typography} from "@mui/material";

export default function Index() {
    return (
        <Box>

            <Box sx={{
                // background: `url(/bg.png) no-repeat center/cover`,
                minHeight: "100vh",
                width: '100%',
                p: '1rem 1.5rem',
                position: 'relative',
            }}>
                {/* Optimized background image*/}
                <Image priority={true} src={'/bg.png'} layout={'fill'} objectFit={'cover'}/>

                <Box sx={{
                    zIndex: '5',
                    position: 'relative',
                }}>

                    {/* Header*/}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: "1fr 1fr 1fr",
                    }}>
                        {/* Box for jsut spacing purpose*/}
                        <Box/>

                        {/*central logo in the header*/}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            color: '#fff',
                            fontWeight: 'bold',
                            border: '1px solid #eee',
                        }}>
                            Logo
                        </Box>

                        {/* Right side social icons on header*/}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                            <Stack direction={'row'} spacing={2}>
                                <IconButton sx={{
                                    color: "#fff"
                                }}>
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton sx={{
                                    color: "#fff"
                                }}>
                                    <FacebookIcon/>
                                </IconButton>
                                <IconButton sx={{
                                    color: "#fff"
                                }}>
                                    <TwitterIcon/>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                    {/*     Header End*/}

                    {/* Hero Buttons Section*/}
                    <Box sx={{
                        alignItems: 'flex-end',
                        display: 'flex',
                        flexDirection: 'column',
                        mt: '2rem',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Button sx={{
                                mb: '1rem'
                            }} color={'primary'} variant={'contained'}>
                                Connect Wallet
                            </Button>

                            <Button fullWidth color={'secondary'} variant={'contained'}>
                                Mint
                            </Button>
                        </Box>
                    </Box>

                </Box>

            </Box>

            {/* Text Section*/}

            <Container maxWidth={'xxl'}>

                <Box p={'5rem 1rem'}>

                    <Typography variant={'body1'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum optio, sint. Consequuntur
                        deleniti dicta fugit ipsam iure magni nemo nesciunt nostrum omnis placeat ratione,
                        repellendus soluta totam vero voluptate voluptatem!
                    </Typography>

                </Box>
            </Container>

        </Box>
    );
}
