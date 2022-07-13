import React from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { TypographyTheme } from '../../components/ui/Typography';
import Typography from '@mui/material/Typography';
import { StyledTextField, UnderlinedTextField } from './StyledTextField';
import MultiSelect from './AddToCampaignButton';
import { StyledSwitch } from './StyledSwitch';
import { LocationSearch } from './LocationSearch';
import { Button10x } from './Buttons';
import { StyledChipInput } from './StyledChipInput';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        flexDirection: () => {
            if (window.innerWidth > 1200) {
                return 'row'
            } else {
                return 'column';
            }
        },
    },
    component: {
        width: () => {
            if (window.innerWidth > 1200) {
                return '20%'
            } else if (window.innerWidth > 600 && window.innerWidth <= 1200) {
                return '50%'
            } else {
                return '100%';
            }
        },
        margin: '2vmin 2vmin 2vmin 0',
    },
    margin: {
        marginTop: '3vmin'
    }
}));

export const PaletteTheme = createTheme(({
    palette: {
        primary: {
            main: '#356BBA',
        },
    },
}));

export const SmallSpacingTheme = createTheme(({
    spacing: (factor) => `${.520833333 * factor}vw`,
}));

export const RegularSpacingTheme = createTheme(({
    spacing: (factor) => `${1.04166666 * factor}vw`,
}));

export function UILibrary(props) {
    const classes = useStyles();
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div>
                    <Typography variant='body2'>Inputs</Typography>
                    <div className={classes.row}>
                        <div className={classes.component}><StyledTextField placeholder='outlined input' /></div>
                        <div className={classes.component}><MultiSelect /></div>
                        <div className={classes.component}><UnderlinedTextField placeholder='underlined input' /></div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <Typography variant='body2'>Buttons</Typography>
                    <div className={classes.row}>
                        <div className={classes.component}>
                            <Button10x fullWidth variant="contained">
                                Primary Button
                            </Button10x>
                            </div>
                        <div className={classes.component}>
                            <Button10x fullWidth variant="outlined">
                                Secondary Button
                            </Button10x>
                            </div>
                        <div className={classes.component}>
                            <Button10x fullWidth>
                                Tertiary Button
                            </Button10x>
                        </div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <Typography variant='body2'>Slider</Typography>
                    <div className={classes.row}>
                        <div className={classes.component}><LocationSearch /></div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <Typography variant='body2'>Switch</Typography>
                    <div className={classes.row}>
                        <div className={classes.component}><StyledSwitch /></div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <Typography variant='body2'>Chip</Typography>
                    <Typography variant='caption'>Try creating chips underneath!</Typography>
                    <div className={classes.row}>
                        <div className={classes.component}><StyledChipInput /></div>
                    </div>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
