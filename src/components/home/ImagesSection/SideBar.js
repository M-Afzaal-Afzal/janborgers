import React, {useState} from 'react';
import { Stack} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

const SideBar = ({
                     filterHandler,
                     isFilteredByBackground,
                     isFilteredByBody,
                     isFilteredByClothes,
                     isFilteredByWings,
                     isFilteredByEyes,
                     isFilteredBySunGlasses,
                     isFilteredByHairStyle,
                     isFilteredByHeadGears
                 }) => {

    const [isOpenBackgrounds, setIsOpenBackgrounds] = useState(false);
    const [isOpenBodies, setisOpenBodies] = useState(false);
    const [isOpenClothes, setisOpenClothes] = useState(false);
    const [isOpenEyes, setisOpenEyes] = useState(false);
    const [isOpenHairStyles, setisOpenHairStyles] = useState(false);
    const [isOpenHeadGears, setisOpenHeadGears] = useState(false);
    const [isOpenSunGlasses, setisOpenSunGlasses] = useState(false);
    const [isOpenWings, setisOpenWings] = useState(false);

    const handleClick = (name) => {
        switch (name) {
            case 'background': {
                setIsOpenBackgrounds(!isOpenBackgrounds);
                break;
            }

            case 'body': {
                setisOpenBodies(!isOpenBodies);
                break;
            }

            case 'cloth': {
                setisOpenClothes(!isOpenClothes);
                break;
            }

            case 'eye': {
                setisOpenEyes(!isOpenEyes);
                break;
            }

            case 'hairStyle': {
                setisOpenHairStyles(!isOpenHairStyles);
                break;
            }

            case 'headGear': {
                setisOpenHeadGears(!isOpenHeadGears);
                break;
            }

            case 'sunGlass': {
                setisOpenSunGlasses(!isOpenSunGlasses);
                break;
            }

            case 'wing': {
                setisOpenWings(!isOpenWings);
                break;
            }

        }

    };

    // Background Traits Options

    const backgroundTraits = [
        `Blue`,
        `Dark Red`,
        `Green`,
        `Grey`,
        `Olive`,
        `Orange`,
        `Purple`,
        `Rose`,
        `Turqouise`,
        `Yellow`,
    ];

    // Bodies traits
    const bodiesTraits = [
        `beige`,
        `black`,
        `brown`,
        `grey`,
        `white`,
    ];

    // clothes traits
    const clothesTraits = [
      `jumper_blue-ether`,
        `jumper_green-ether`,
        `jumper_pink-ether`,
        `jumper_red-ether`,
        `polo_grey-ether`,
        `polo_orange-bitcoin`,
        `Scarf_purple`,
        `skirt_black-ether`,
        `skirt_yellow-bitcoin`,
        `top_green-bitcoin`,
    ];

    // Eyes Traits
    const eyesTraits = [
        `afraid`,
        `angry`,
        `cute`,
        `lookaround`,
        `pensive`,
    ];

    // Hair Styles Traits
    const hairStylesTraits = [
      `A1_pink`,
      `A2_blue`,
      `A3_red`,
      `A4_rainbow`,
      `A5_brown`,
      `A6_green`,
      `B1_pink`,
      `B2_lightbrown`,
      `B3_rainbow`,
      `B4_lightblue`,
      `B5_lightgreen`,
      `B6_lightyellow`,
      `C1_rainbow`,
      `C2_brown`,
      `C3_turqouise`,
      `C4_pink`,
      `C5_yellow`,
      `C6_green`,
      `D1_red`,
      `D2_lightbrown`,
      `D3_turqouise`,
      `D4_rainbow`,
      `D5_blue`,
      `D6_green`,
      `E1_lightblue`,
      `E2_red`,
      `E3_yellow`,
      `E4_purple`,
      `E5_lightbrown`,
      `E6_rainbow`,
    ];

    //Head Gears Traits
    const headGearsTraits = [
        `horn_orange`,
        `horn_pink`,
        `horn_rainbow`,
        `horn_yellow`,
        `horn-grey`,
        `horn-turqouise`,
    ];

    // Sunglasses Traits
    const sunGlassesTraits = [
      `blue`,
      `women`
    ];

    // Wings Traits
    const wingsTraits = [
        `coral`,
        `feathergrey`,
        `lightblue`,
        `mint`,
        `outline`,
        `rainbow`,
        `yellow`,
    ];

    return (
        <Stack direction={'column'} spacing={1}>

            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                // subheader={
                //     <ListSubheader component="div" id="nested-list-subheader">
                //         Nested List Items
                //     </ListSubheader>
                // }
            >

                <ListItemButton onClick={handleClick.bind(this,'background')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Backgrounds" />
                    {isOpenBackgrounds ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenBackgrounds} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        {
                            backgroundTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }

                    </List>
                </Collapse>

                {/* Bodies collapse item*/}
                <ListItemButton onClick={handleClick.bind(this,'body')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Bodies" />
                    {isOpenBodies ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenBodies} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            bodiesTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

                {/* Clothes collapse items */}
                <ListItemButton onClick={handleClick.bind(this,'cloth')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Clothes" />
                    {isOpenClothes ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenClothes} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            clothesTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

                {/* Eyes collapse items */}
                <ListItemButton onClick={handleClick.bind(this,'eye')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Eyes" />
                    {isOpenEyes ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenEyes} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            eyesTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

                {/* Hair styles collapse items */}
                <ListItemButton onClick={handleClick.bind(this,'hairStyle')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Hair Styles" />
                    {isOpenHairStyles ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenHairStyles} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            hairStylesTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

                {/* Head Gears collapse items */}
                <ListItemButton onClick={handleClick.bind(this,'headGear')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Head Gear" />
                    {isOpenHeadGears ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenHeadGears} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            headGearsTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

                {/* Sun Glasses collapse items */}
                <ListItemButton onClick={handleClick.bind(this,'sunGlass')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Sun Glasses" />
                    {isOpenSunGlasses ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenSunGlasses} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            sunGlassesTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

                {/* Wings collapse items */}
                <ListItemButton onClick={handleClick.bind(this,'wing')}>
                    {/*<ListItemIcon>*/}
                    {/*    <InboxIcon />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Wings" />
                    {isOpenWings ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isOpenWings} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            wingsTraits.map(trait => (
                                <ListItemButton key={trait} sx={{pl: 4}}>
                                    <ListItemText primary={trait}/>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>

            </List>



            {/*<FormGroup>*/}
            {/*    <FormControlLabel control={<Checkbox disableRipple checked={isFilteredByWings}*/}
            {/*                                         onChange={filterHandler.bind(this, 'wings')}/>}*/}
            {/*                      label="Wings"/>*/}
            {/*</FormGroup>*/}

        </Stack>
    );
};

export default SideBar;