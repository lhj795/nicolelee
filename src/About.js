import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from './Base';
import { Typography, Grid } from '@mui/material';
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
        mixBlendMode: 'color',
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
                <Grid container spacing={3}>
                    <Grid item xs={2} />
                    <Grid className={classes.justifyCenter} item xs={4}>
                        <Typography variant='h2'>반가워요! Get to know me</Typography>
                        <Typography variant='body1'>
                            <br />Here’s my TLDR.
                            <br /><br />
                            I recently finished my studies at Brown University and RISD in Master of Arts in Design Engineering (MADE). In this past year I’ve
                            learned from professors in Industrial Design, Brown School of Engineering, critics from IBM, IDEO, Giant Shoulders, Shaper and
                            UrbanLeaf. From lectures, workshops and projects led by technical and industry experts, I gained a significant amount of skills in
                            UX design, software engineering and electrical engineering, as well as hone in my collaboration skills in working successfully
                            within interdisciplinary practices.
                            <br /><br />
                            While and before I was in the MADE program, I worked as a product designer and frontend engineer at 10xFinders, a recruiting
                            software company. Being the sole designer on team, I always worked very closely with clients and stakeholders for real user
                            feedback and efficient implementation of design iterations.
                            <br /><br />
                            Born and raised in Seoul, Korea, then starting at a young age, I moved to the USA to the Upstate NY → Midwest → West Coast → and
                            now back in the East Coast. Growing up I had been exposed to a lot of different cultures and lifestyles. I find this background
                            extremely useful in my practice.
                            <br /><br />
                            This being said, my life revolves around human connection. My driving force of inspiration heavily relies on the human, the user. I
                            believe in order to bring creative ideas and innovative solutions to life, it is crucial to recognize the connection between design,
                            business, technology and the user.
                            <br /><br />
                            Outside of studio you can find me cooking up latest food and cocktail recipes and scouting Spiderman merch.
                        </Typography>
                        <Typography variant='body1'><br/>
                        <a href={Resume} target="blank">Resume</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <img className={classes.imgFitContent} src={Nicole} alt='Nicole in her natural state' />
                    </Grid>
                </Grid>

            </ThemeProvider>
        </StyledEngineProvider>
    );
}