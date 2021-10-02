import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const RoadmapSection = () => {
    return (

        <Box id={'roadmap'} py={'6rem'} sx={{
            background: (theme) => theme.palette.primary.main,
        }}
        >
            <Container maxWidth={'xxl'}>

                <Typography fontSize={'2.5rem'} fontWeight={'bold'} mb={'3rem'}
                            textAlign={'center'}
                            variant={'h1'}
                            sx={{
                                color: '#fff',
                            }}
                >
                    Roadmap
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: '1fr 1fr',
                        xxl: '1fr 1fr 1fr 1fr',},
                    gridGap: '1rem',
                }}>

                    <Box sx={{
                        background: '#fff',
                        borderRadius: '10px',
                        padding: '2rem 1rem',
                        position: 'relative',
                        textAlign: 'center',
                    }}>

                        {/*<Typography sx={{*/}
                        {/*    py: '1rem',*/}
                        {/*    fontSize: '1.3rem',*/}
                        {/*    fontWeight: 'bold',*/}
                        {/*}} variant={'h1'}>*/}
                        {/*    Heading*/}
                        {/*</Typography>*/}

                        Pay for food for the cryptocorns

                        {/* Top Label*/}
                        <Box sx={{
                            position: 'absolute',
                            top: -25,
                            left: '50%',
                            transform: 'translate(-50%,0)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            background: 'rgb(5,2,47)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                        }}>
                            10%
                        </Box>

                    </Box>

                    <Box sx={{
                        background: '#fff',
                        borderRadius: '10px',
                        padding: '2rem 1rem',
                        position: 'relative',
                        textAlign: 'center',
                    }}>

                        {/*<Typography sx={{*/}
                        {/*    py: '1rem',*/}
                        {/*    fontSize: '1.3rem',*/}
                        {/*    fontWeight: 'bold',*/}
                        {/*}} variant={'h1'}>*/}
                        {/*    Heading*/}
                        {/*</Typography>*/}

                        Preserve the enchanted forest fort he next years

                        {/* Top Label*/}
                        <Box sx={{
                            position: 'absolute',
                            top: -25,
                            left: '50%',
                            transform: 'translate(-50%,0)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            background: 'rgb(5,2,47)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                        }}>
                            20%
                        </Box>

                    </Box>

                    <Box sx={{
                        background: '#fff',
                        borderRadius: '10px',
                        padding: '2rem 1rem',
                        position: 'relative',
                        textAlign: 'center',
                    }}>

                        {/*<Typography sx={{*/}
                        {/*    py: '1rem',*/}
                        {/*    fontSize: '1.3rem',*/}
                        {/*    fontWeight: 'bold',*/}
                        {/*}} variant={'h1'}>*/}
                        {/*    Heading*/}
                        {/*</Typography>*/}

                        The club opens , starting to get special access to our partner launchpads and investor community.

                        {/* Top Label*/}
                        <Box sx={{
                            position: 'absolute',
                            top: -25,
                            left: '50%',
                            transform: 'translate(-50%,0)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            background: 'rgb(5,2,47)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                        }}>
                            50%
                        </Box>

                    </Box>

                    <Box sx={{
                        background: '#fff',
                        borderRadius: '10px',
                        padding: '2rem 1rem',
                        position: 'relative',
                        textAlign: 'center',
                    }}>

                        {/*<Typography sx={{*/}
                        {/*    py: '1rem',*/}
                        {/*    fontSize: '1.3rem',*/}
                        {/*    fontWeight: 'bold',*/}
                        {/*}} variant={'h1'}>*/}
                        {/*    Heading*/}
                        {/*</Typography>*/}

                        Release breeding features for 3D cryptocorn´s and provide land fort he cryptorn´s in the virtual cryptoforest.

                        {/* Top Label*/}
                        <Box sx={{
                            position: 'absolute',
                            top: -25,
                            left: '50%',
                            transform: 'translate(-50%,0)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            background: 'rgb(5,2,47)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                        }}>
                            100%
                        </Box>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default RoadmapSection;