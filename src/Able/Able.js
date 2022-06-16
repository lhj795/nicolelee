import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
import clsx from 'clsx';
import { Typography, Grid } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
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
        bottom: '5%',
    }
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|jpg|svg)$/));

export default function Able(props) {
    const classes = useStyles(props);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>
                    <Base color='black' />
                    <img src={img['AbleStore02.png']} className={clsx(classes.imgMixBlendMode, classes.cover)} alt='' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <Grid container xs={12}>
                            <Grid item xs={5} />
                            <Grid item xs={2}>
                                <img className={classes.coverLogo} src={img['AbleLogo.svg']} alt='able' />
                            </Grid>
                            <Grid item xs={5} />
                            <Grid item xs={4} />
                            <Grid item xs={4}>
                                <Typography className={classes.coverCaption} variant="h5">
                                    Bringing Inclusivity to Retail
                                </Typography>
                            </Grid>
                            <Grid item xs={4} />
                        </Grid>
                        <Grid container xs={12} className={classes.coverDetails}>
                            <Grid item xs={2} />
                            <Grid item xs={3}>
                                <Typography variant="body1">
                                    <span className={classes.boldText}>Project</span>: Brown Risd Master of Arts in Design Engineering (MADE) Capstone Project
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body1">
                                    <span className={classes.boldText}>Role</span>: Product Design, Fabrication, Engineering
                                </Typography>
                            </Grid>
                            <Typography variant="body1">
                                <span className={classes.boldText}>Tools</span>: Arduino, Adobe Suite, Figma, Rapid Prototyping, Wood and Metal Fabrication
                            </Typography>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>
                    </div>

                    {/* abstract */}
                    <div className={classes.abstractContainer}>

                    </div>

                    {/* design process */}
                    <div className={classes.designProcessContainer}>

                    </div>


                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}