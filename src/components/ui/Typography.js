import { createTheme, adaptV4Theme } from '@mui/material/styles';
import './../../App.css';

export const TypographyTheme = createTheme(adaptV4Theme({
    typography:{
        h1: {
            fontFamily: 'NeueHaasDisplayXXThin',
            fontSize: 'clamp(61.04px, 7.451rem, 119.21px)',
            lineHeight: "1.125",
            textDecoration: "none",
        },
        h2: {
            fontFamily: 'NeueHaasDisplayMedium',
            fontSize: "clamp(25px, 2.441rem, 39.06px)",
            lineHeight: "1.125",
            textDecoration: "none",
        },
        h3: {
            fontFamily: 'NeueHaasDisplayMedium',
            fontSize: "clamp(20px, 1.563rem, 25px)",
            lineHeight: "1.125",
            textDecoration: "none",
        },
        h4: {
            fontFamily: 'NeueHaasDisplayMedium',
            fontSize: "clamp(16px, 1.25rem, 20px)",
            lineHeight: "1.125",
            textDecoration: "none",
        },
        body1: {
            fontFamily: 'NeueHaasDisplayThin',
            fontSize: "clamp(16px, 1.25rem, 20px)",
            lineHeight: "1.125",
            textDecoration: "none",
        },
        caption: {
            fontFamily: 'NeueHaasDisplayThin',
            color: "#757575",
            fontSize: "clamp(12px, 1rem, 16px)",
            lineHeight: "1.125",
            textDecoration: "none",
        },
        button: {
            fontFamily: 'NeueHaasDisplayRoman',
            fontSize: "clamp(16px, 1.25rem, 20px)",
            lineHeight: "1.25",
            textTransform: "none",
            textDecoration: "none",
        }
    },
}));