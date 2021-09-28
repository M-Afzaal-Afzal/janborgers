import React, {useEffect, useState} from 'react';
import {Box, Checkbox, Container, FormControlLabel, FormGroup, Stack} from "@mui/material";
import Image from "next/image";
import {traits} from "../../data/traits";

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

    return (
        <Box py={'4rem'}>

            <Container maxWidth={'xxl'}>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: "250px 1fr",
                    gridGap: '1rem',
                }}>

                    {/* Filters section container*/}
                    <Stack top={0} position={'static'} direction={'column'} spacing={1}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByBackground}
                                                                 onChange={filterHandler.bind(this, 'background')}/>}
                                              label="Background"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByBody}
                                                                 onChange={filterHandler.bind(this, 'body')}/>}
                                              label="Body"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByClothes}
                                                                 onChange={filterHandler.bind(this, 'clothes')}/>}
                                              label="Clothes"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByEyes}
                                                                 onChange={filterHandler.bind(this, 'eyes')}/>}
                                              label="Eyes"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByHairStyle}
                                                                 onChange={filterHandler.bind(this, 'hairStyle')}/>}
                                              label="Hair Style"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByHeadGears}
                                                                 onChange={filterHandler.bind(this, 'headGears')}/>}
                                              label="Head Gears"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredBySunGlasses}
                                                                 onChange={filterHandler.bind(this, 'sunGlasses')}/>}
                                              label="Sun Glasses"/>
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByWings}
                                                                 onChange={filterHandler.bind(this, 'wings')}/>}
                                              label="Wings"/>
                        </FormGroup>

                    </Stack>

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