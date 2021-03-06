import { createTheme } from '@mui/material/styles';
import './../../App.css';

export const TypographyTheme = createTheme(({
    typography: {
        h1: {
            fontFamily: 'NeueHaasDisplayXXThin',
            '@media (max-width:1200px)': {
                fontSize: '3.815rem',
                lineHeight: '1 !important',
                zIndex: '1',
            },
            fontSize: 'clamp(61.04px, 7.451rem, 119.21px)',
            lineHeight: '0.4',
            textDecoration: 'none',
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: 'NeueHaasDisplayMedium',
            fontSize: 'clamp(25px, 2.441rem, 39.06px)',
            lineHeight: '1.125',
            textDecoration: 'none',
        },
        h3: {
            fontFamily: 'NeueHaasDisplayMedium',
            fontSize: 'clamp(20px, 1.563rem, 25px)',
            '@media (max-width:1200px)': {
                fontSize: '1.25rem',
            },
            lineHeight: '1.125',
            textDecoration: 'none',
        },
        h4: {
            fontFamily: 'NeueHaasDisplayMedium',
            fontSize: 'clamp(31.25px, 1.953rem, 39.06px)',
            '@media (max-width:1200px)': {
                fontSize: '1.563rem',
            },
            lineHeight: '1.125',
            textDecoration: 'none',
        },
        h5: {
            fontFamily: 'NeueHaasDisplayThin',
            fontSize: 'clamp(48.83px, 3.052rem, 61.04px)',
            '@media (max-width:1200px)': {
                fontFamily: 'NeueHaasDisplayLight',
                fontSize: '1.953rem',
                lineHeight: '1.69',
            },
            lineHeight: '1.3',
            textDecoration: 'none',
        },
        body1: {
            fontFamily: 'NeueHaasDisplayRoman',
            fontSize: 'clamp(16px, 1rem, 20px)',
            lineHeight: '1.5',
            textDecoration: 'none',
        },
        body2: {
            fontFamily: 'NeueHaasDisplayBold',
            fontSize: 'clamp(16px, 1rem, 20px)',
            lineHeight: '1.125',
            textDecoration: 'none',
        },
        caption: {
            fontFamily: 'NeueHaasDisplayRoman',
            color: '#757575',
            fontSize: 'clamp(12px, 1rem, 16px)',
            lineHeight: '1.125',
            textDecoration: 'none',
        },
        subtitle1: {
            fontFamily: 'NeueHaasDisplayRoman',
            fontSize: 'clamp(12px, .8rem, 16px)',
            // lineHeight: '1.125',
            textDecoration: 'none',
        },
        button: {
            fontFamily: 'NeueHaasDisplayRoman',
            fontSize: 'clamp(16px, 1.25rem, 20px)',
            lineHeight: '1.25',
            textTransform: 'none',
            textDecoration: 'none',
        }
    },
}));