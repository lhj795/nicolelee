import React from 'react';
import { Typography, Grid } from '@mui/material';
import { TypographyTheme } from './Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    imgMixBlendMode: {
        mixBlendMode: 'hard-light',
    },
    cover: {
        height: '75vh',
        width: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.6)',
        backdropFilter: 'invert(1)',
        mixBlendMode: 'color-dodge',
    },
    coverContainer: {
        position: 'absolute',
        top: '0',
        height: '75vh',
        width: '100%',
        color: 'white',
    },
    coverLogo: {
        paddingTop: '25vh',
        width: '100%',
    },
    coverCaption: {
        textAlign: 'center',
        paddingTop: '3vh',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    coverDetails: {
        position: 'absolute',
        bottom: '0',
    },
    abstractContainer: {
    },
    designProcessContainer: {
        marginTop: '10vh',
    },
    designProcessBg: {
        background: '#333333',
        height: 'fit-content',
        color: 'white',
        mixBlendMode: 'color',
        backdropFilter: 'invert(1)',
    },
    designProcess: {
        border: '1px solid white',
        padding: '1vh 0',
        textAlign: 'center',
    },
    arrows: {
        alignItems: 'center',
    },
    arrowUp: {
        border: '1px solid white',
        borderBottom: 'none',
        height: '2vh',
        width: 'calc(50% - 4px)',
        marginLeft: 'calc(25% - 8px)',
    },
    arrowUpPointer: {
        width: '1vh',
        height: '1vh',
        border: '1px solid white',
        borderTop: 'none',
        borderLeft: 'none',
        transform: 'rotate(45deg)',
        marginLeft: 'calc(75% - 11px - 0.5vh)',
        marginBottom: '2px',
        marginTop: 'calc(-1.5vh + 1px)',
    },
    arrowDown: {
        border: '1px solid white',
        borderTop: 'none',
        height: '2vh',
        width: 'calc(50% - 4px)',
        marginLeft: 'calc(25% - 12px + .5vh)',
    },
    arrowDownPointer: {
        width: '1vh',
        height: '1vh',
        border: '1px solid white',
        borderTop: 'none',
        borderLeft: 'none',
        transform: 'rotate(225deg)',
        marginLeft: 'calc(25% - 12px)',
        marginTop: '-1.9vh',
    },
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
    },
    imgFitContent2: {
        width: '100%',
        objectFit: 'cover',
    },
    layout: {
        height: '100vh',
        objectFit: 'contain',
        display: 'flex',
        margin: 'auto',
    },
    textAlignRight: {
        textAlign: 'right',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    smallMarginTop: {
        marginTop: '1vh',
    },
    personaDemo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',
        marginTop: 'clamp(-20px, -1.563rem, -25px)',
        justifyContent: 'space-between',
    },
    personaMotivation: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    personaBar: {
        height: '1.2vh',
        borderRadius: '.6vh',
        width: '100%',
        background: '#333333',
    },
    personaBrand: {
        height: '.8vh',
        width: '.8vh',
        background: 'white',
        borderRadius: '50%',
        margin: '.2vh 0 .2vh 15%',
    },
    personaPrice: {
        height: '.8vh',
        width: '.8vh',
        background: 'white',
        borderRadius: '50%',
        margin: '.2vh 0 .2vh 5%',
    },
    personaCustomer: {
        height: '.8vh',
        width: '.8vh',
        background: 'white',
        borderRadius: '50%',
        margin: '.2vh 0 .2vh 55%',
    },
    personaEfficiency: {
        height: '.8vh',
        width: '.8vh',
        background: 'white',
        borderRadius: '50%',
        margin: '.2vh 0 .2vh 90%',
    },
    personaIndependence: {
        height: '.8vh',
        width: '.8vh',
        background: 'white',
        borderRadius: '50%',
        margin: '.2vh 0 .2vh 90%',
    },
    personaTech: {
        height: '.8vh',
        width: '.8vh',
        background: 'white',
        borderRadius: '50%',
        margin: '.2vh 0 .2vh 80%',
    },
    br: {
        height: 'clamp(16px, 1rem, 20px)'
    },
    mRBar: {
        height: '2.5vh',
        background: 'linear-gradient(90deg, #ffffff, #D71618)',
    },
    mRDollar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mRImg: {
        height: '8vh',
    },
    appCover: {
        height: '100vh',
        background: '#0A191F',
        marginLeft: '0',
        color: 'white',
        marginBottom: '10vh',
        mixBlendMode: 'color',
        backdropFilter: 'invert(1)',
    },
    appCoverTitle: {
        color: 'white !important',
        lineHeight: '0.4',
    },
    appCaptions: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-72px',
    },
    appCaption: {
        color: 'white',
        width: '50%',
    },
    appVid: {
        marginTop: '-48px',
    },
    mLZ: {
        marginLeft: '0',
    },
    pLZ: {
        paddingLeft: '0 !important',
    },
    positionAbsolute: {
        position: 'absolute',
    },
    margin: {
        margin: '30vh 0 10vh 0',
    },
    margin2: {
        margin: '10vh 0 10vh 0',
    },
    maxHeight: {
        height: '100vh',
        display: 'flex'
    },
    justifyContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    alignItemsEnd: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    italic: {
        fontFamily: 'NeueHaasDisplayLightItalic',
        fontSize: 'clamp(20px, 1.563rem, 25px)',
    },
    negMargin: {
        margin: '-20vh 0 10vh 24px'
    },
    negMargin2: {
        margin: '-50vh 0 10vh 24px'
    },
    padding: {
        padding: '10vmin',
        width: 'calc(100% - 20vmin)',
        height: 'calc(100% - 20vmin)',
    },
}));

function Heading(props) {
    const classes = useStyles(props);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div style={{ margin: (window.innerWidth > 1200) ? '30vh 0 10vh 0' : '10vh 0 ww10vh 0' }}>
                    <Grid alignItems={props.alignItems} container spacing={3}>
                        <Grid item xs={1} lg={2} />
                        <Grid item lg={props.headerLg} xs={10}>
                            <Typography variant='h5'>
                                {props.header}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                        <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                        <Grid item lg={props.captionLg} xs={10}>
                            <Typography variant='body1'>
                                {props.caption}<span className={classes.boldText}>{props.bold}</span>
                                <br />
                                {props.caption2}
                                <br />
                                {props.caption3}
                                <br />
                                {props.caption4}
                                <br />
                                {props.caption5}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} lg={2} />
                    </Grid>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

function GridFormat(props) {
    return (
        <div style={{ margin: '5vh 0' }} >
            <Grid container spacing={3}>
                <Grid item xs={1} lg={2} />
                {props.children}
                <Grid item xs={1} lg={2} />
            </Grid>
        </div>
    )
}

export { Heading, GridFormat }