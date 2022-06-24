import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { TypographyTheme } from '../../components/ui/Typography';
import Typography from '@mui/material/Typography';
import { StyledTextField, UnderlinedTextField } from './StyledTextField';
import MultiSelect from './AddToCampaignButton';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    margin: {
        width: '20%',
        margin: '2vmin 2vmin 2vmin 0',
    }
}))
    ;

export const PaletteTheme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: '#356BBA',
        },
    },
}));

export const SmallSpacingTheme = createTheme(adaptV4Theme({
    spacing: (factor) => `${.520833333 * factor}vw`,
}));

export const RegularSpacingTheme = createTheme(adaptV4Theme({
    spacing: (factor) => `${1.04166666 * factor}vw`,
}));

export function UILibrary(props) {
    const classes = useStyles();
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>
                    <div>
                        <Typography variant='body2'>Inputs</Typography>
                        <div className={classes.row}>
                        <div className={classes.margin}><StyledTextField placeholder='hello world' /></div>
                        <div className={classes.margin}><MultiSelect /></div>
                        <div className={classes.margin}><UnderlinedTextField placeholder='hello world' /></div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
