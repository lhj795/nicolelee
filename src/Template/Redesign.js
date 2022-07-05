import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
// import clsx from 'clsx';
import { Typography, Grid, Collapse } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GridFormat, Heading } from '../components/ui/UIComponents';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box } from '@mui/system';

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
        maxWidth: '100vw',
        overflowX: 'hidden',
        height: 'fit-content',
    },
    imgMixBlendMode: {
        mixBlendMode: 'hard-light',
    },
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
    },
    coverContainer: {
        top: '0',
        height: 'fit-content',
        width: '100%',
        color: '#0B1F3D',
        background: '#C6D8ED',
        zIndex: '-1',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    designProcessContainer: {
        marginTop: '10vh',
        color: '#C6D8ED'
    },
    designProcessBg: {
        background: '#C6D8ED',
        height: 'fit-content',
        color: '#0B1F3D',
        mixBlendMode: 'color',
        backdropFilter: 'invert(1)',
    },
    designProcesses: {
        border: '1px solid #333333',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    designProcess: {
        border: '1px solid #333333',
        margin: '1vh !important',
        padding: '1vh !important',
        width: 'calc(50% - 2.75vh)',
        textAlign: 'center',
    },
    designProcessLine: {
        width: 'calc(100% + 24px)',
        height: '1px',
        background: '#333333',
    },
    persona: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
    },
    personaDemo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: (props) => {
            if (window.innerWidth < 1200) {
                return ''
            } else {
                return '2.5vh';
            }
        },
    },
    displayNone: {
        display: () => {
            if (window.innerWidth < 1200) {
                return 'none'
            } else {
                return 'block';
            }
        },
    },
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|gif|svg|mp4)$/));

export default function Redesign(props) {
    const classes = useStyles(props);

    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 1200) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, []);

    const mobileTrueFalse = (window.innerWidth < 1200) ? false : true;

    const [showDesc, setShowDesc] = useState(mobileTrueFalse);
    const [showDesc2, setShowDesc2] = useState(mobileTrueFalse);

    const pZElem = (mobile) ? '' : classes.pZ;

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>

                    <Base color='black' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <Box
                            sx={{
                                width: { xs: '90vw', lg: '48vw' },
                                right: { xs: '5vw', lg: '9vw' },
                                position: 'absolute',
                                transition: '0.3s'
                            }}
                        >
                            <img src={img['Cover.svg']} className={classes.cover} alt='10xFinders' />
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={3} xs={10}>
                                <img className={classes.coverLogo} src={img['TenExLogo.svg']} alt='10xFinders' />
                            </Grid>
                            <Grid item lg={7} xs={1} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h4'>
                                    Job Recruiting made Faster and Simpler
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Role</span>: Research, UI/UX Design, Frontend Develepment
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={10} lg={4} >
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Tools</span>: Adobe XD, After Effects, Illustrator, React
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* abstract */}
                    <div>
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12} />
                            <Grid item lg={2} xs={1} />
                            <Grid onClick={() => setShowDesc(!showDesc)} item xs={10} lg={4}>
                                <Box
                                    sx={{ display: "flex" }}
                                    alignItems="center"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant='body2'>
                                        Commpany Mission
                                    </Typography>
                                    {showDesc ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                                <Collapse in={showDesc} timeout="auto" unmountOnExit>
                                    <Typography className={(showDesc) ? '' : classes.displayNone} variant='body1'>
                                        <br />
                                        10xFinders integrate all of a recruiter's daily tasks into one platform. We focus on streamlining and accelerating the
                                        hiring workflow to increase talent engagements, thus more hires. 10xFinders' main features include super-targeted talent
                                        search and sourcing, business insights on hires, promotions and vacancies from companies all over the world and multi-step
                                        email campaigns with customization and metrics.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                            <Grid onClick={() => setShowDesc2(!showDesc2)} item xs={10} lg={4}>
                                <Box
                                    sx={{ display: "flex" }}
                                    alignItems="center"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant='body2'>
                                        Involvement
                                    </Typography>
                                    {showDesc2 ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                                <Collapse in={showDesc2} timeout="auto" unmountOnExit>
                                    <Typography variant='body1'>
                                        <br />
                                        My team comprised of expert recruiters, the software engineer, and me. As the sole design advocate of the business solution, I
                                        was responsible for thoroughly researching the market and the target audience. In every step of the process, I worked alongside
                                        my team members and participated in client meetings to study the recruiting workflow and develop a user task flow. I worked on
                                        projects including logo, marketing materials, company website, and software UI/UX.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* design process */}
                    <div className={classes.designProcessContainer}>
                        <Grid container>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={8}>
                                <Typography variant='h5'>DESIGN PROCESS</Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                        </Grid>
                        <div className={classes.designProcessBg}>
                            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} />
                                <Grid item xs={4} />
                                <Grid item xs={6}>
                                    <div className={classes.arrow} />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={2} />
                                <Grid item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Research</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Strategy</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Structure</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Iterations</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Present</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Revise</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Implement</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Test</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item sx={{ display: { xs: 'none', lg: 'flex' } }} lg={12} />
                                <Grid item xs={12} lg={12} />
                                <Grid item xs={1} lg={2} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Learning</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        All hands discussion, market research, competitor analysis, user journey mapping and then formulating MVP.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Iteration</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Use discoveries to create wireframes and define the information architecture, and constant iterations.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Collaborate</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Receive feedback from both recruiting and the developing perspectives, then re-iterate design to its final state
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Communicate</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Implement each design iterations on company server , then speak with users for any feedback.
                                        <br /><br />
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={12} />
                            </Grid>
                        </div>
                    </div>

                    {/* the problem */}
                    <div>
                        <Heading
                            header='THE PROBLEM'
                            headerLg={4}
                            caption='Many workers and offices around the world have experienced an impact from the pandemic. Teams adapted to hybrid and remote 
                            working, onboarding remote collaboration tools such as Slack, Miro, or Zoom to make up for their workflow. What couldn’t be made up 
                            for are those interpersonal connection one shared with a co-worker. '
                            captionLg={4}
                        />
                    </div>

                    {/* user persona */}
                    <div>
                        <Heading
                            header='USER PERSONA'
                            headerLg={4}
                            caption='After defining our problem statement - hybrid work takes away collegial moments and interpersonal connections among 
                            coworkers - we interviewed 9 workers around the world in remote, hybrid, and/or on-site work environments to dig deeper into the 
                            problem. All participants regularly met with team members in which they participated or led the meetings. Based on the most trending 
                            insights, I created the following persona.'
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item lg={4} xs={10}>
                                <Grid alignItems='flex-end' container spacing={3}>
                                    <Grid item xs={3}>
                                        <img src={img['Persona01.svg']} className={classes.imgFitContent} alt='Paul ' />
                                    </Grid>
                                    <Grid item lg={6} xs={9}>
                                        <Typography variant='h3'>Paul Emerson</Typography>
                                        <div className={classes.personaDemo}>
                                            <div>
                                                <Typography variant='body1'>Age</Typography>
                                                <Typography variant='body1'>Seniority</Typography>
                                                <Typography variant='body1'>Archetype</Typography>
                                            </div>
                                            <div>
                                                <Typography variant='body1'>29</Typography>
                                                <Typography variant='body1'>Senior Level</Typography>
                                                <Typography variant='body1'>WFH in Cambria, CA</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body1'>
                                    Paul moved back home once the office went hybrid. Ever since, he attended meetings via video conferencing.
                                    He participates in internal meetings where he collaborates with teammates around the world in North America, Europe, and
                                    Asia. He occasionally leads meetings with clients.
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body2'>{(mobile) ? [] : <br />}Wants</Typography>
                                <Typography variant='body1'>
                                    {(mobile) ? [] : <br />}
                                    • Be professional with clients, more casual with teammates. <br />
                                    • Elevate motivation and focus during WFH.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body2'>{(mobile) ? [] : <br />}Frustrations</Typography>
                                <Typography variant='body1'>
                                    {(mobile) ? [] : <br />}
                                    • Feeling fatigue from video conferencing. <br />
                                    • Difficult to work within East Coast time.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* solution */}
                    <div>
                        <Heading
                            header='SOLUTION'
                            headerLg={4}
                            caption='Lightly is a remote collaboration tool that curates a similar atmosphere for co-workers in remote areas. Lightly 
                            comes with two essential parts: the Lightly Lamp, and Lightly web platforms. The lamp and interface 
                            cues different lights by user settings on the color, duration, and work modes. With Lightly, co-workers in different locations and 
                            time zones can more efficiently and enthusiastically engage in meetings.'
                            captionLg={4}
                        />
                    </div>

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}