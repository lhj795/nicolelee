import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from './Base';
import { Typography, Grid, Box } from '@mui/material';
import { TypographyTheme } from './components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import Nicole from './img/Nicole.png'
import Resume from './Nicole_Lee_Resume.pdf';

const useStyles = makeStyles(({
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
        zIndex: '0',
        mixBlendMode: {
            mixBlendMode: () => {
                if (window.innerWidth > 1200) {
                    return 'color'
                } else {
                    return '';
                }
            },
        },
    },
    justifyCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    base: {
        zIndex: '1',
        mixBlendMode: 'color',
    }
}));

export default function About(props) {
    const classes = useStyles(props);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>

                <Base className={classes.base} color='black' zIndex='1' mixBlendMode='darken'/>
                <Box sx={{paddingTop: {xs: '10vh', lg: '16px'}}}>
                <Grid container spacing={3}>
                    <Grid item xs={1} lg={2} />
                    <Grid className={classes.justifyCenter} item xs={10} lg={4}>
                        <Typography variant='h2'>반가워요! Get to know me</Typography>
                        <Typography variant='body1'>
                            <br />Here’s my TLDR.
                            <br /><br />
                            I have a BFA in Industrial Design from Rhode Island School of Design (RISD), and recently finished my MA in Design Engineering (MADE) at 
                            Brown University and RISD. I learned from professors in the RISD Architecture + Design Division, Brown School of Engineering, and critics 
                            from highly regarded corporations including IBM, IDEO, Giant Shoulders, Shaper, and UrbanLeaf. With their guidance, I worked on projects 
                            with local stakeholders, and gained a significant amount of skills in UX design, software engineering and embedded systems electronics. 
                            Being part of a multidisciplinary cohort, I also improved my collaboration skills to work as an effective team player.
                            <br /><br />
                            Meanwhile, I was a product designer and frontend engineer at 10xFinders, a recruiting SaaS and services company. Being the sole designer 
                            on the team, I single-handedly built the entire design system and the platform, always working closely with internal team members and clients.
                            <br /><br />
                            My driving force of creativity heavily relies on the user. I believe in order to bring innovative solutions to life, it is crucial to recognize 
                            the connection among human-centered design, technology, business, and ultimately their user.
                            <br /><br />
                            Outside of studio you can find me cooking up latest food / cocktail recipes and scouting Spiderman merch.
                        </Typography>
                        <Typography variant='body1'><br/>
                        <a href={Resume} target="blank">Resume</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} sx={{display: {xs: 'flex', lg: 'none'}}}/>
                    <Grid item xs={10} lg={5} sx={{marginTop: {xs: '0', lg: '-16px'}}}>
                        <img className={classes.imgFitContent} src={Nicole} alt='Nicole in her natural state' />
                    </Grid>
                </Grid>
                </Box>

            </ThemeProvider>
        </StyledEngineProvider>
    );
}