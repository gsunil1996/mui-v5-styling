import React from 'react';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const InlineStyling = () => {
    const theme = useTheme();
    return (
        <div>
            <Box
                sx={{
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
                }}
            >
                StylesInSamePage and Inline and media queries
            </Box>

            <Box
                sx={{
                    marginTop: "20px",
                    fontWeight: 800,
                    fontSize: "30px",
                    color: "blue", // Default color
                    [theme.breakpoints.only("xs")]: {
                        color: "orange", // xs - orange
                    },
                    [theme.breakpoints.between("sm", "md")]: {
                        color: "red", // sm - red
                    },
                    [theme.breakpoints.between("md", "lg")]: {
                        color: "green", // md - green
                    },
                    [theme.breakpoints.between("lg", "xl")]: {
                        color: "pink", // lg - pink
                    },
                    [theme.breakpoints.up("xl")]: {
                        color: "blue", // xl - blue
                    },
                }}
            >
                StylesInSamePage and Inline with break points
            </Box>
        </div>
    )
}

export default InlineStyling