import React from 'react';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { styles } from './Styles';

const MuiStyling = () => {
    const theme = useTheme();
    const classes = styles(theme);
    return (
        <div>
            <h1>Mui styling</h1>
            <Box sx={classes.textStyles}>Styles In Different page with media queries</Box>
            <Box sx={classes.getTextStyles}>Styles In Different page with MUI Breakpoints</Box>
        </div>
    )
}

export default MuiStyling