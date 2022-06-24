import React, { useState, useEffect } from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { TypographyTheme } from '../../components/ui/Typography';

const ValueLabelTextTheme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: "rgba(0,0,0,0)",
            contrastText: '#356BBA',
        },
    },
}));

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        flexDirection: "column",
    },
    root: {
        width: "100%",
    },
    txtArea: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-end',
    },
    mi: {
        fontSize: 'clamp(12px, .75rem, 18px)',
        fontFamily: 'GTWalsheimPro-Medium',
        color: '#152845',
        marginTop: "-.5rem",
    },
    label: {
        fontFamily: 'GTWalsheimPro-Medium',
        fontSize: 'clamp(12px, .75rem, 18px)',
        color: '#152845',
        marginBottom: '10px',
    },
}));

const StyledSlider = styled(Slider)({
    color: '#356BBA',
    height: 5,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 12,
        width: 12,
        backgroundColor: '#356BBA',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#356BBA',
        fontFamily: "GTWalsheimPro-Medium",
        fontSize: 'clamp(12px, .75rem, 18px)',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

export function LocationSearch(props) {
    const classes = useStyles();
    const [text] = useState("");
    const [setOptions] = useState([]);
    const [autoComplete] = useState();
    const [distance, setDistance] = useState(50);

    useEffect(() => {
        const req = { input: text, types: ["(cities)"] };
        if (autoComplete && text.length > 0) {
            autoComplete.getPlacePredictions(req, (values) => {
                setOptions(values);
            });
        }
    }, [autoComplete, text, setOptions]);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.box}>
                    <Typography variant="h4"> {props.name} </Typography>
                
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={ValueLabelTextTheme}>
                            <StyledSlider
                                defaultValue={100}
                                value={distance}
                                aria-labelledby={props.name + "-location-slider"}
                                valueLabelDisplay="auto"
                                min={1}
                                max={300}
                                onChange={(e, sliderValue) => {
                                    setDistance(sliderValue);
                                }}
                            />
                        </ThemeProvider>
                    </StyledEngineProvider>
                    <div className={classes.txtArea}>
                        <p className={classes.mi}>units</p>
                    </div>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

