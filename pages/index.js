import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import {Box, IconButton, Stack} from "@mui/material";

export default function Index() {
    return (
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

            </Box>

        </Box>
    );
}
