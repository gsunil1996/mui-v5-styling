import React from 'react';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const MuiBreakPoints = () => {
    const theme = useTheme();

    // theme.breakpoints.only: This function allows you to target a specific breakpoint range exclusively. It matches the specified breakpoint and ignores all others. For example, theme.breakpoints.only('sm') will match only the "sm" (small) breakpoint range.

    const textStyles = {
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


    //  // theme.breakpoints.up: This function matches the specified breakpoint and all larger breakpoints. It applies the defined styles for the specified breakpoint and every breakpoint above it. For example, theme.breakpoints.up('sm') will match the "sm" (small) breakpoint and all larger breakpoints, such as "md", "lg", and "xl".
    // const textStyles = {
    //     marginTop: "20px",
    //     fontWeight: 800,
    //     fontSize: "30px",
    //     color: "blue", // Default color
    //     [theme.breakpoints.up("xs")]: {
    //         color: "orange", // xs - orange
    //     },
    //     [theme.breakpoints.up("sm")]: {
    //         color: "red", // sm - red
    //     },
    //     [theme.breakpoints.up("md")]: {
    //         color: "green", // md - green
    //     },
    //     [theme.breakpoints.up("lg")]: {
    //         color: "pink", // lg - pink
    //     },
    //     [theme.breakpoints.up("xl")]: {
    //         color: "blue", // xl - blue
    //     },
    // };


    // // theme.breakpoints.down: This function matches the specified breakpoint and all smaller breakpoints. It applies the defined styles for the specified breakpoint and every breakpoint below it. For example, theme.breakpoints.down('md') will match the "md" (medium) breakpoint and all smaller breakpoints, such as "sm" and "xs".

    // const textStyles = {
    //     marginTop: "20px",
    //     fontWeight: 800,
    //     fontSize: "30px",
    //     color: "blue", // Default color
    //     [theme.breakpoints.down("lg")]: {
    //         color: "green", // xs, sm, md, and lg - green
    //     },
    //     [theme.breakpoints.down("xl")]: {
    //         color: "pink", // xs, sm, md, lg, and xl - pink
    //     },
    // };


    //     theme.breakpoints.only("sm"): This function matches the specified breakpoint exclusively.It will apply the defined styles only for the "sm" breakpoint and ignore all other breakpoints, including "md".If you want to target only the "sm" breakpoint and not have the styles applied for the "md" breakpoint, theme.breakpoints.only("sm") is the appropriate choice.

    //         theme.breakpoints.between("sm", "md"): This function matches a range of breakpoints, starting from the specified "sm" breakpoint and ending at the specified "md" breakpoint.It applies the defined styles for all breakpoints within that range, including both "sm" and "md".If you want the styles to be applied for both the "sm" and "md" breakpoints, theme.breakpoints.between("sm", "md") is suitable.

    // In general, if you have specific styles that need to be applied only for the "sm" breakpoint and not for "md" or other larger breakpoints, theme.breakpoints.only("sm") is a good choice.On the other hand, if you want styles to persist for a range of breakpoints, including "sm" and "md", use theme.breakpoints.between("sm", "md").

    // const textStyles = {
    //     marginTop: "20px",
    //     fontWeight: 800,
    //     fontSize: "30px",
    //     color: "blue", // Default color
    //     [theme.breakpoints.only("xs")]: {
    //         color: "orange", // xs - orange
    //     },
    //     [theme.breakpoints.between("sm", "md")]: {
    //         color: "red", // sm - red
    //     },
    //     [theme.breakpoints.between("md", "lg")]: {
    //         color: "green", // md - green
    //     },
    //     [theme.breakpoints.between("lg", "xl")]: {
    //         color: "pink", // lg - pink
    //     },
    //     [theme.breakpoints.up("xl")]: {
    //         color: "blue", // xl - blue
    //     },
    // };


    return (
        <div>
            <Box sx={textStyles}>MuiBreakPoints</Box>
        </div>
    );
}

export default MuiBreakPoints