import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
// import clsx from 'clsx';
import { Typography, Grid, Box, Collapse } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    margin: {
        margin: '30vh 0 10vh 0',
    },
    margin2: {
        margin: '20vh 0 10vh 0',
    },
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
    },
    cover: {
        height: '70vh',
        position: 'absolute',
        right: '0',
        top: '5vh',
        mixBlendMode: 'color',
    },
    coverContainer: {
        top: '0',
        height: 'fit-content',
        width: '100%',
        color: 'white',
        background: '#3B4255',
        zIndex: '-1',
        position: 'relative',
        overflowX: 'hidden',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    designProcessContainer: {
        marginTop: '10vh',
        color: '#356BBA'
    },
    designProcessBg: {
        background: '#356BBA',
        height: 'fit-content',
        color: 'white',
        mixBlendMode: 'color',
        backdropFilter: 'invert(1)',
    },
    designProcesses: {
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    designProcess: {
        border: '1px solid white',
        margin: '1vh !important',
        padding: '1vh !important',
        width: 'calc(50% - 2.75vh)',
        textAlign: 'center',
    },
    arrow: {
        border: '1px solid white',
        borderBottom: 'none',
        height: '2.5vh',
        marginBottom: '-16px',
        width: '67.5%',
        margin: 'auto'
    },
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|svg|mp4)$/));

export default function Involv(props) {
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

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>

                    <Base color='black' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <Box
                            sx={{
                                width: { xs: '90vw', lg: '50vw' },
                                right: { xs: '5vw', lg: '0' },
                                position: 'absolute',
                                transition: '0.3s'
                            }}
                        >
                            <img className={classes.imgFitContent} src={img['Cover.png']} alt='10xFinders' />
                        </Box>
                        <Grid sx={{position: 'relative', filter: 'invert(1)', mixBlendMode: 'difference', color: 'black'}} container spacing={3}>
                            <Grid item lg={2} xs={1} />
                            <Grid className={classes.zIndex} item lg={3} xs={10}>
                                <Box sx={{fontSize: {lg: '3.815rem', xs: '3.052rem'}, fontFamily: 'Lora-Bold', paddingTop: '25vh'}}>
                                    involv
                                </Box>
                            </Grid>
                            <Grid item lg={7} xs={1} />
                            <Grid item xs={1} lg={2} />
                            <Grid className={classes.zIndex} item xs={10} lg={4}>
                                <Typography variant='h4'>
                                    Job Recruiting made Faster and Simpler
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid className={classes.zIndex} item xs={10} lg={4}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Role</span>: Research, UI/UX Design, Frontend Develepment
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid className={classes.zIndex} item xs={10} lg={4} >
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
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h5'>DESIGN PROCESS</Typography>
                            </Grid>
                            <Grid item lg={2} xs={1} />
                        </Grid>
                        <div className={classes.designProcessBg}>
                            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
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
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Iteration</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Use discoveries to create wireframes and define the information architecture, and constant iterations.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Collaborate</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Receive feedback from both recruiting and the developing perspectives, then re-iterate design to its final state
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item lg={2} xs={10}>
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

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}