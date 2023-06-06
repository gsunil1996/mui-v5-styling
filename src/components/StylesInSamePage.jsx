import React from 'react';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const StylesInSamePage = () => {

    // using media queries
    const textStyles = {
        marginTop: "20px",
        fontWeight: 800,
        fontSize: "30px",
        color: "blue", // Default color
        "@media (max-width: 599px)": {
            color: "orange", // xs - orange
        },
        "@media (min-width: 600px) and (max-width: 959px)": {
            color: "red", // sm - red
        },
        "@media (min-width: 960px) and (max-width: 1279px)": {
            color: "green", // md - green
        },
        "@media (min-width: 1280px) and (max-width: 1919px)": {
            color: "pink", // lg - pink
        },
        "@media (min-width: 1920px)": {
            color: "blue", // xl - blue
        },
    };

    // using breakpoints
    const theme = useTheme();
    const textStyles1 = {
        marginTop: "20px",
        fontWeight: 800,
        fontSize: "30px",
        color: "blue", // Default color
        [theme.breakpoints.only("xs")]: {
            color: "orange", // xs - orange
        },
        [theme.breakpoints.only("sm")]: {
            color: "red", // sm - red
        },
        [theme.breakpoints.only("md")]: {
            color: "green", // md - green
        },
        [theme.breakpoints.only("lg")]: {
            color: "pink", // lg - pink
        },
        [theme.breakpoints.only("xl")]: {
            color: "blue", // xl - blue
        },
    };

    return (
        <div>
            <Box sx={textStyles}>Styles In SamePage with media queries</Box>
            <Box sx={textStyles1}>Styles In SamePage with MUI Breakpoints</Box>
        </div>
    )
}

export default StylesInSamePage