import { createTheme } from '@mui/material/';

export const TypographyTheme = createTheme(({
    typography: {
        h1: {
            fontFamily: 'GTWalsheimPro-Bold',
            fontSize: 'clamp(20px, 1.25rem, 26px)',
            letterSpacing: "0",
            color: "#152845",
        },
        h2: {
            fontFamily: 'GTWalsheimPro-Bold',
            color: "#152845",
            fontSize: "clamp(16px, 1rem, 22px)",
            lineHeight: "1.25",
        },
        h3: {
            fontFamily: 'GTWalsheimPro-Medium',
            color: "#152845",
            fontSize: "clamp(16px, 1rem, 22px)",
            lineHeight: "1.25",
        },
        h4: {
            fontFamily: 'GTWalsheimPro-Medium',
            color: "#152845",
            fontSize: "clamp(14px, .875rem, 22px)",
            lineHeight: "1.25",
            fontWeight: "unset",
            margin: "1.04166666vw 0 .520833333vw 0"
        },
        h5: {
            fontFamily: 'GTWalsheimPro-Bold',
            color: "#152845",
            fontSize: "clamp(12px, .75rem, 20px)",
            lineHeight: "1.25",
        },
        body1: {
            fontFamily: 'GTWalsheimPro-Medium',
            color: "#152845",
            fontSize: "clamp(12px, .75rem, 20px)",
            lineHeight: "1.25",
        },
        body2: {
            fontFamily: 'GTWalsheimPro-Regular',
            color: "#152845",
            fontSize: "clamp(12px, .75rem, 20px)",
            lineHeight: "1.25",
        },
        caption: {
            fontFamily: 'GTWalsheimPro-Regular',
            color: "#757575",
            fontSize: "clamp(12px, .75rem, 20px)",
            lineHeight: "1.5",
            letterSpacing: "0",
        },
        subtitle1: {
            fontFamily: 'GTWalsheimPro-Medium',
            color: "#356BBA",
            fontSize: "clamp(12px, .75rem, 20px)",
            lineHeight: "1.25",
        },
        button: {
            fontFamily: 'GTWalsheimPro-Bold',
            fontSize: "clamp(12px, .75rem, 20px)",
            lineHeight: "1.25",
            textTransform: "none",
        }
    },
    palette: {
        primary: {
          main: '#0971f1',
          darker: '#053e85',
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
      },
}));

