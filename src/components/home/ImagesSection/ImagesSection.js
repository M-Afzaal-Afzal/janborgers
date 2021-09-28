import React, {useEffect, useState} from 'react';
import {Box, Container, Fab, Popover} from "@mui/material";
import Image from "next/image";
import {traits} from "../../../data/traits";
import SideBar from "./SideBar";

const ImagesSection = () => {

    const [selectedTraits, setSelectedTraits] = useState(traits.allImages);

    const [isFilteredByBackground, setIsFilteredByBackground] = useState(false);
    const [isFilteredByBody, setIsFilteredByBody] = useState(false);
    const [isFilteredByClothes, setIsFilteredByClothes] = useState(false);
    const [isFilteredByEyes, setIsFilteredByEyes] = useState(false);
    const [isFilteredByHairStyle, setIsFilteredByHairStyle] = useState(false);
    const [isFilteredByHeadGears, setIsFilteredByHeadGears] = useState(false);
    const [isFilteredBySunGlasses, setIsFilteredBySunGlasses] = useState(false);
    const [isFilteredByWings, setIsFilteredByWings] = useState(false);

    // Applied filters
    const [appliedFilters, setAppliedFilters] = useState([]);

    useEffect(() => {
        if (appliedFilters.length) {
            let updatedTraits = [];
            appliedFilters.forEach((trait) => {
                updatedTraits = [...updatedTraits, ...traits[`${trait}Images`]];
            })
            setSelectedTraits(updatedTraits);
        } else {
            setSelectedTraits(traits.allImages);
        }

        console.log(appliedFilters)
    }, [appliedFilters.length])

    // apply filters handler

    const appliedFiltersHandler = (filterName) => {
        if (appliedFilters.includes(filterName)) {
            const filteredAppliedFilters = appliedFilters.filter((value => value !== filterName));
            setAppliedFilters(filteredAppliedFilters);
        } else {
            const filteredAppliedFilters = [...appliedFilters, filterName];
            setAppliedFilters(filteredAppliedFilters);
        }
    }

    // Filterby Handler

    const filterHandler = (filterName) => {
        switch (filterName) {
            case 'background': {
                setIsFilteredByBackground((prevState => !prevState));
                appliedFiltersHandler('background')

                break;
            }
            case 'body': {
                setIsFilteredByBody((prevState => !prevState));
                appliedFiltersHandler('body')

                break;
            }
            case 'clothes': {
                setIsFilteredByClothes((prevState => !prevState));
                appliedFiltersHandler('clothes')
                break;
            }
            case 'eyes': {
                setIsFilteredByEyes((prevState => !prevState));
                appliedFiltersHandler('eyes')
                break;
            }
            case 'hairStyle': {
                setIsFilteredByHairStyle((prevState => !prevState));
                appliedFiltersHandler('hairStyles')
                break;
            }
            case 'headGears': {
                setIsFilteredByHeadGears((prevState => !prevState));
                appliedFiltersHandler('headGears')
                break;
            }
            case 'sunGlasses': {
                setIsFilteredBySunGlasses((prevState => !prevState));
                appliedFiltersHandler('sunGlasses')
                break;
            }
            case 'wings': {
                setIsFilteredByWings((prevState => !prevState));
                appliedFiltersHandler('wings')

                break;
            }
        }
    }

    // Mobile nav popover handler

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box py={'4rem'}>

            <Container maxWidth={'xxl'}>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: "250px 1fr",
                    },
                    gridGap: '1rem',
                }}>

                    {/* Mobile nav --- Filters */}
                    <Box sx={{
                        display: {
                            xs: 'block',
                            lg: 'none',
                        }
                    }} display={'flex'} justifyContent={'flex-end'}>
                        <Fab aria-describedby={id} onClick={handleClick} color="secondary" variant="extended">
                            {/*<NavigationIcon sx={{ mr: 1 }} />*/}
                            Filters
                        </Fab>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Box p={2}>

                                <SideBar
                                    filterHandler={filterHandler}
                                    isFilteredByBackground={isFilteredByBackground}
                                    isFilteredByBody={isFilteredByBody}
                                    isFilteredByClothes={isFilteredByClothes}
                                    isFilteredByEyes={isFilteredByEyes}
                                    isFilteredByHairStyle={isFilteredByHairStyle}
                                    isFilteredByHeadGears={isFilteredByHeadGears}
                                    isFilteredBySunGlasses={isFilteredBySunGlasses}
                                    isFilteredByWings={isFilteredByWings}
                                />
                            </Box>
                        </Popover>
                    </Box>

                    {/* Filters section container*/}
                    <Box sx={{
                        display: {
                            xs: 'none',
                            lg: 'block',
                        }
                    }}>
                        <SideBar
                            filterHandler={filterHandler}
                            isFilteredByBackground={isFilteredByBackground}
                            isFilteredByBody={isFilteredByBody}
                            isFilteredByClothes={isFilteredByClothes}
                            isFilteredByEyes={isFilteredByEyes}
                            isFilteredByHairStyle={isFilteredByHairStyle}
                            isFilteredByHeadGears={isFilteredByHeadGears}
                            isFilteredBySunGlasses={isFilteredBySunGlasses}
                            isFilteredByWings={isFilteredByWings}
                        />
                    </Box>

                    {/* Images section container */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridGap: '8px',
                        maxHeight: '100vh',
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': {
                            width: '10px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f1f1f1'
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#555',
                        },
                        '&::-webkit-scrollbar-thumb ': {
                            background: '#888',
                        }
                    }}>

                        {
                            selectedTraits.map((imgSrc, index) => (
                                <Box key={imgSrc + index} sx={{
                                    background: '#eee',
                                    position: 'relative',
                                    height: '250px',
                                }}>
                                    <Image src={imgSrc} layout={'fill'} objectFit={'cover'}/>

                                </Box>
                            ))
                        }

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default ImagesSection;