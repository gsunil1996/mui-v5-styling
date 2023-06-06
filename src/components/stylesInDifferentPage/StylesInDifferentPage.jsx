import React from 'react';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { textStyles, getTextStyles } from './Styles';

const StylesInDifferentPage = () => {
    const theme = useTheme();
    const dynamicTextStyles = getTextStyles(theme);
    return (
        <div>
            <Box sx={textStyles}>Styles In Different page with media queries</Box>
            <Box sx={dynamicTextStyles}>Styles In Different page with MUI Breakpoints</Box>
        </div>
    )
}

export default StylesInDifferentPage