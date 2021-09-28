import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";

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
    return (
        <Stack direction={'column'} spacing={1}>
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
    );
};

export default SideBar;