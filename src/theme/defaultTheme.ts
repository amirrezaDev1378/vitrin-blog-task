import {createTheme} from "@mui/material";
import {responsiveFontSizes} from "@mui/material";

const defaultTheme = createTheme({
    typography: {
        body1: {
            fontSize: "0.8rem",
        },
        h5:{
            fontWeight:"100"
        },
        h3:{
            fontWeight:"150"
        }

    },
    palette: {
        success: {
            main: "#00E38C",
        },
        secondary:{
            main:"#8990AD"
        }
    },
});

export default responsiveFontSizes(defaultTheme);
