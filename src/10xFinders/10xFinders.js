import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
import clsx from 'clsx';
import { Typography, Grid, Box, Collapse, Modal } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GridFormat, Heading } from '../components/ui/UIComponents';
import { UILibrary } from './ui/TenExUI';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { MarketMobile, MarketWeb } from './MarketResearch';

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
    },
    coverContainer: {
        top: '0',
        height: 'fit-content',
        width: '100%',
        color: '#0B1F3D',
        background: '#C6D8ED',
        zIndex: '-1',
        position: 'relative',
        overflowX: 'hidden',
    },
    coverLogo: {
        paddingTop: '25vh',
        width: '100%',
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
        marginTop: '2.5vh',
    },
    personaLabel: {
        marginRight: '24px',
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    competitor: {
        borderTop: '1.5px solid #C6DFFF',
        borderRight: '1.5px solid #C6DFFF',
        padding: '1vmin',
    },
    competitorLast: {
        border: '1.5px solid #C6DFFF',
        borderLeft: 'none',
        padding: '1vmin',
    },
    competitorLogo: {
        padding: '1vmin 0',
        margin: 'auto',
        height: () => {
            if (window.innerWidth > 1200) {
                return '2.5vh'
            } else {
                return '2vh';
            }
        },
    },
    borders: {
        borderTop: '1.5px solid #C6DFFF',
        padding: '1vmin',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bordersLast: {
        border: '1.5px solid #C6DFFF',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '1vmin',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleOpen: {
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        border: '2px solid #356BBA'
    },
    circleClosed: {
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        border: '2px solid #356BBA',
        background: '#356BBA',
    },
    negMargin: {
        marginTop: '-5vh',
    },
    IABox: {
        border: '1.5px solid #C6DFFF',
        borderTop: '10px solid #356BBA',
        padding: '1vmin',
    },
    // IALine: {
    //     width: '1px',
    //     background: '#C6DFFF',
    //     height: '3vmin',
    // },
    // IALine2: {
    //     width: '85%',
    //     background: '#C6DFFF',
    //     height: '1px',
    //     marginTop: '-3vmin',
    // },
    // IALine3: {
    //     width: '1px',
    //     background: '#C6DFFF',
    //     height: '1.5vmin',
    //     padding: '0',
    // },
    // IA: {
    //     objectFit: 'cover',
    //     width: '100%',
    // },
    // textAlign: {
    //     textAlign: 'center',
    //     textTransform: 'uppercase',
    // },
    caption: {
        lineHeight: '1.5',
    },
    pZ: {
        paddingTop: '0 !important',
    },
    alignBottom: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    alignSelf: {
        alignSelf: 'flex-start'
    },
    color1: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#1B4077',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color2: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#356BBA',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color3: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#8DB0E3',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color4: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#D4E2F8',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color5: {
        height: '5vmin',
        marginBottom: '1vmin',
        background: '#152845',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color6: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#757575',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color7: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#FFFFFF',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color8: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#F2F7FF',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color9: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#007745',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color10: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#FFD633',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color11: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#D5342A',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    color12: {
        height: '5vmin',
        minHeight: '30px',
        marginBottom: '1vmin',
        background: '#631A89',
        boxShadow: '0px 5px 5px rgb(174 188 209 / 50%)',
    },
    zIndex: {
        zIndex: '1',
    },
    journeyItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    journeyImg: {
        height: '3rem',
        width: 'auto',
    },
    journeyNum: {
        color: '#c4c4c4',
        fontFamily: 'NeueHaasDisplayRoman',
        fontSize: 'clamp(20px, 1.563rem, 25px)',
        lineHeight: '1.125',
        textDecoration: 'none',
    },
    infoArch: {
        width: '100%',
    }
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|jpg|svg|mp4)$/));

export default function TenEx(props) {
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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [open4, setOpen4] = useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);

    const [open5, setOpen5] = useState(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);

    const [open6, setOpen6] = useState(false);
    const handleOpen6 = () => setOpen6(true);
    const handleClose6 = () => setOpen6(false);

    const [open7, setOpen7] = useState(false);
    const handleOpen7 = () => setOpen7(true);
    const handleClose7 = () => setOpen7(false);

    const [open8, setOpen8] = useState(false);
    const handleOpen8 = () => setOpen8(true);
    const handleClose8 = () => setOpen8(false);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>

                    <Base color='black' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <Box
                            sx={{
                                width: { xs: '90vw', lg: '51vw' },
                                right: { xs: '5vw', lg: '0' },
                                position: 'absolute',
                                transition: '0.3s'
                            }}
                        >
                            <img className={classes.imgFitContent} src={img['Cover.svg']} alt='10xFinders' />
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item lg={2} md={1} xs={1} />
                            <Grid className={classes.zIndex} item lg={3} md={4} xs={10}>
                                <Box sx={{marginTop: { lg: '0', md: '25vh', xs: '10vh' },}}>
                                <img className={classes.coverLogo} src={img['TenExLogo.svg']} alt='10xFinders' />
                                </Box>
                            </Grid>
                            <Grid item lg={7} md={7} xs={1} />
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
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
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
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
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
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Iteration</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Use discoveries to create wireframes and define the information architecture, and constant iterations.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Collaborate</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Receive feedback from both recruiting and the developing perspectives, then re-iterate design to its final state
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
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

                    {/* the problem and persona */}
                    <div>
                        <Heading
                            header='THE PROBLEM'
                            headerLg={3}
                            captionLg={5}
                            caption='As an individual with no prior knowledge in the recruiting industry, I was required to understand the workflow of recruiters and especially their pain points. In every step of the design process, I consistently studied the target audience by working alongside company recruiters and participating in client meetings. '
                            caption3='I found that a lot of the recruiting tasks are repetitive and tedious. Recruiters are faced with hundreds of tasks everyday. They use multiple softwares to keep track of projects and candidates such as an ATS (Applicant Tracking System). Even after candidates are sourced through the ATS algorithm, recruiters still feel the need to check each resume to validate the candidate’s fitting. This is because existing platforms fall short in targeting and the ATS database become obsolete over time. Let’s walk through Daniel’s recruiting workflow to take a deeper look.'
                        />
                        <GridFormat>
                            <Grid item xs={3} md={2} lg={1}>
                                <img src={img['Daniel.svg']} className={classes.imgFitContent} alt='Daniel Turner' />
                            </Grid>
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={8} md={9} />
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid className={classes.persona} item xs={10} lg={5}>
                                <Typography variant='h3'>Daniel Turner</Typography>
                                <div className={classes.personaDemo}>
                                    <div className={classes.personaLabel}>
                                        <Typography variant='body1'>Title</Typography>
                                        <Typography variant='body1'>Location</Typography>
                                        <Typography variant='body1'>Client</Typography>
                                        <Typography variant='body1'>Goals</Typography>
                                    </div>
                                    <div>
                                        <Typography variant='body1'>Head of Recruiting at XYZ Agency</Typography>
                                        <Typography variant='body1'>New York City</Typography>
                                        <Typography variant='body1'>Candle.com: E-Commerce / Product Retail</Typography>
                                        <Typography variant='body1'>
                                            1. Complete hire of software engineers for Candle.com within a tight time budget of 3 weeks. <br />
                                            2. Market agency services to companies in New York City.
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                        </GridFormat>
                        <GridFormat>
                            <Grid className={classes.journeyItem} sx={{ height: { xs: '39vh', md: '20vmin', lg: '27vh' } }} item xs={10} lg={4}>
                                <img src={img['Journey01.svg']} className={classes.journeyImg} alt='Planning' />
                                <div className={classes.journeyNum}>01</div>
                                <Typography variant='body2'>Planning</Typography>
                                <Typography variant='body1'>
                                    Daniel starts off by identifying the hiring objectives. Candle.com needs to fill a senior software
                                    engineer who has experience with Python and who preferably had worked in a related industry. With this information Daniel
                                    builds an ideal candidate profile.
                                </Typography>
                            </Grid>
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid className={classes.journeyItem} sx={{ height: { xs: '39vh', md: '20vmin', lg: '27vh' } }} item xs={10} lg={4}>
                                <img src={img['Journey02.svg']} className={classes.journeyImg} alt='Planning' />
                                <div className={classes.journeyNum}>02</div>
                                <Typography variant='body2'>Sourcing</Typography>
                                <Typography variant='body1'>
                                    Using the created candidate profile, Daniel searches for hundreds of potential candidates and put them in a list. He uses
                                    both Applicant Tracking, and manually searching and saving the results of candidates into the CRM system.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid className={classes.journeyItem} sx={{ height: { xs: '39vh', md: '20vmin', lg: '27vh' } }} item xs={10} lg={4}>
                                <img src={img['Journey03.svg']} className={classes.journeyImg} alt='Planning' />
                                <div className={classes.journeyNum}>03</div>
                                <Typography variant='body2'>Screening</Typography>
                                <Typography variant='body1'>
                                    Even after candidates are sourced through the ATS algorithm or searched manually, Daniel still feel the need to check each
                                    resume to validate the fitting. This is because the ATS database become obsolete over time and existing platforms fall
                                    short in targeting.
                                </Typography>
                            </Grid>
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid className={classes.journeyItem} sx={{ height: { xs: '39vh', md: '20vmin', lg: '27vh' } }} item xs={10} lg={4}>
                                <img src={img['Journey04.svg']} className={classes.journeyImg} alt='Planning' />
                                <div className={classes.journeyNum}>04</div>
                                <Typography variant='body2'>Interviewing</Typography>
                                <Typography variant='body1'>
                                    Daniel funneled down 3,000 candidates in to 200 based on his evaluation of profiles and the availability of contact
                                    information. Daniel reach out to them to inform about the job opening. Then, he schedules and interviews candidates who
                                    were interested.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid className={classes.journeyItem} sx={{ height: { xs: '39vh', md: '20vmin', lg: '27vh' } }} item xs={10} lg={4}>
                                <img src={img['Journey05.svg']} className={classes.journeyImg} alt='Planning' />
                                <div className={classes.journeyNum}>05</div>
                                <Typography variant='body2'>Verifying & Hiring</Typography>
                                <Typography variant='body1'>
                                    Daniel interviewed 10 people. He now has to do a second screening where he re-evaluates the intereviewees' qualification
                                    based on elements such as skills, availability, salary requirements, among others that are appropriate to the Candle.com's
                                    needs.
                                </Typography>
                            </Grid>
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid className={classes.journeyItem} sx={{ height: { xs: '39vh', md: '20vmin', lg: '27vh' } }} item xs={10} lg={4}>
                                <img src={img['Journey06.svg']} className={classes.journeyImg} alt='Planning' />
                                <div className={classes.journeyNum}>06</div>
                                <Typography variant='body2'>Business Development</Typography>
                                <Typography variant='body1'>
                                    Aside from hiring, Daniel also work on projects where in this instance, he search for companies that may need hiring
                                    services or recently had a vacancy. He then creates a list of these companies to reach out for potential contract
                                    agreements.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* market research */}
                    <div>
                        <Heading
                            header='MARKET RESEARCH'
                            headerLg={4}
                            caption='After learning about the recruiting workflow, I observed what resources my company recruiters use, as well as research 
                            other widely used recruitment-assistant platforms. '
                            caption3='In this process I identified the advantages and challenges of each product in order to find design opportunities to 
                            fulfill areas that leading platforms are not reaching, and learn which experiences are the most convenient for recruiters.'
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item xs={10}>
                                <Box sx={{ display: { xs: 'flex', lg: 'none' } }}><MarketMobile /></Box>
                            </Grid>
                        </GridFormat>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}><MarketWeb /></Box>
                    </div>

                    {/* competitor analysis */}
                    <div>
                        <Heading
                            header='COMPETITOR ANALYSIS'
                            headerLg={3}
                            caption='Whereas in market research I looked into products that focuses on one specific feature such as applicant tracking, 
                            customer management, and recruiting strategies, in competitor analysis I looked into products that has similar features to 
                            10xFinders. '
                            caption3='The majority of the features were similar to 10xFinders’ vision, however the key differences were 1. Ability to acquire 
                            business information verified by credible sources such as Crunchbase and Glassdoor. 2. Showing useful metrics on customer engagement 
                            rather than ineffective and/or unreliable metrics. 3. Accessibility to business insights on hires, vacancies, and promotions from 
                            companies.'
                            caption5='Aside from learning successful and challenging features, I was also able to see how each product structured their user 
                            experience, which I later referenced to structure the 10xFinders information architecture.'
                            captionLg={5}
                        />
                        <GridFormat>
                            <Grid item xs={10} lg={8}>
                                <img src={img['Competitor.svg']} className={classes.imgFitContent} alt='Outreach' />
                            </Grid>
                            {/* <Grid item sx={{ overflowX: 'scroll' }} lg={8} xs={10}>
                                <Grid sx={{ minWidth: '700px' }} container spacing={0}>
                                    <Grid item xs={2} />
                                    <Grid className={classes.alignCenter} item xs={2}>
                                        <img src={img['Market02.svg']} className={classes.competitorLogo} alt='Outreach' />
                                    </Grid>
                                    <Grid className={classes.alignCenter} item xs={2}>
                                        <img src={img['Competitor02.svg']} className={classes.competitorLogo} alt='hiretual' />
                                    </Grid>
                                    <Grid className={classes.alignCenter} item xs={2}>
                                        <img src={img['Competitor03.svg']} className={classes.competitorLogo} alt='upsider' />
                                    </Grid>
                                    <Grid className={classes.alignCenter} item xs={2}>
                                        <img src={img['Competitor04.svg']} className={classes.competitorLogo} alt='interseller' />
                                    </Grid>
                                    <Grid className={classes.alignCenter} item xs={2}>
                                        <img src={img['Competitor05.svg']} className={classes.competitorLogo} alt='humanpredictions' />
                                    </Grid>
                                    <Grid className={classes.competitor} item xs={2}><Typography variant='body1'>Business Insights</Typography></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.competitor} item xs={2}><Typography variant='body1'>Engagement Metrics</Typography></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.competitor} item xs={2}><Typography variant='body1'>Company Information</Typography></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.competitor} item xs={2}><Typography variant='body1'>Email Campaigns</Typography></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.competitor} item xs={2}><Typography variant='body1'>Automated Sourcing</Typography></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleOpen} /></Grid>
                                    <Grid className={classes.borders} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.competitorLast} item xs={2}><Typography variant='body1'>Internal / Integrated ATS</Typography></Grid>
                                    <Grid className={classes.bordersLast} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.bordersLast} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.bordersLast} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.bordersLast} item xs={2}><div className={classes.circleClosed} /></Grid>
                                    <Grid className={classes.bordersLast} item xs={2}><div className={classes.circleClosed} /></Grid>
                                </Grid>
                            </Grid> */}
                        </GridFormat>
                    </div>

                    {/* solution */}
                    <div>
                        <Heading
                            header='SOLUTION'
                            headerLg={3}
                            caption='10xFinders is the first recruiting platform to provide a comprehensive view of the market. Recruiters may run 
                            multi-dimensional searches, encompassing a database of over 1 million people, companies, technology stack, jobs, turnovers and 
                            recent press on company acquires, fundraisings, etc.'
                            caption3='With 10xFinders, recruiters can easily search for candidates by experience and company attributes like stack, stage, and 
                            industry, identify candidates with hidden availability, research ideal companies to recruit from, identify potential referral 
                            targets and detect turnover at target companies.'
                            caption5='My role with the product was understanding the problem, looking into the users for their needs and pain points, 
                            researching the market, then designing the most ideal user experience on the platform. I was responsible for the design process 
                            starting from ideation to execution including information architecture, wire framing, designing the brand guidelines, creating 
                            mockups, and frontend implementation.'
                            captionLg={5}
                        />
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h3'>Targeted search using advanced smart filters</Typography>
                            </Grid>
                        </GridFormat>
                        <img src={img['Solution01.svg']} className={clsx(classes.imgFitContent, classes.negMargin)} alt='people search' />
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h3'>Detail candidate profile page with experience details, career events and hire engagments</Typography>
                            </Grid>
                        </GridFormat>
                        <img src={img['Solution02.svg']} className={clsx(classes.imgFitContent, classes.negMargin)} alt='candidate profile' />
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h3'>Automated email campaigns with personalized variables sent to candidates on a set schedule</Typography>
                            </Grid>
                        </GridFormat>
                        <img src={img['Solution03.svg']} className={clsx(classes.imgFitContent, classes.negMargin)} alt='campaign' />
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h3'>Overview of Job Market</Typography>
                            </Grid>
                        </GridFormat>
                        <img src={img['Solution04.svg']} className={clsx(classes.imgFitContent, classes.negMargin)} alt='job search' />
                    </div>

                    {/* IA */}
                    <div className={classes.margin2}>
                        <div>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Information Architecture</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        Based on the MVP identified during all hands discussion and references gathered from competitor analysis, I created the
                                        10xFinders information architecture to construct the navigation structure of the application.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <img src={img['IA.svg']} className={classes.infoArch} alt='Information Architecture' />
                                    {/* <Grid className={classes.alignBottom} container spacing={3}>
                                <Grid item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Onboarding</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • Sign up with Gmail <br/>
                                            • Create a workspace <br/>
                                            • Invite members
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={10}/>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine}/></Grid>
                                <Grid item xs={10}/>
                                <Grid className={classes.pZ} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Dashboard</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={10}/>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine}/></Grid>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine3}/></Grid>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine3}/></Grid>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine3}/></Grid>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine3}/></Grid>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine3}/></Grid>
                                <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={12}><div className={classes.IALine2}/></Grid>
                                <Grid className={clsx(classes.pZ, classes.alignSelf)} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Company</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • Sign up with Gmail <br/>
                                            • Create a workspace <br/>
                                            • Invite members
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid className={clsx(classes.pZ, classes.alignSelf)} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>People</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • People Search <br/>
                                            • Search Filters <br/>
                                            • Sort by x,y,z
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid className={clsx(classes.pZ, classes.alignSelf)} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Jobs</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • Job Search <br/>
                                            • Search Filters <br/>
                                            • Sort by x,y,z
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid className={clsx(classes.pZ, classes.alignSelf)} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Events</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • Event Search <br/>
                                            • Search Filters <br/>
                                            • Sort by x,y,z <br/>
                                            • Graph Insights
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid className={clsx(classes.pZ, classes.alignSelf)} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Schedule</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • Schedule Search
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid className={clsx(classes.pZ, classes.alignSelf)} item xs={2}>
                                    <div className={classes.IABox}>
                                        <Typography className={classes.textAlign} variant='body1'>Campaigns</Typography>
                                        <Typography className={classes.caption} variant='caption'>
                                            <br/>
                                            • Campaign Search <br/>
                                            • Search Filters <br/>
                                            • Sort by x,y,z 
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid> */}
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* Wireframes */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Wireframes</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        Before moving on to hi-fidelity prototypes, I used the information architecture to sketch wireframes. This helps me better
                                        layout components on the frame, as well as accelerate the prototyping process.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                                <GridFormat>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>People Search</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Candidate Profile</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Campaigns List</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Campaign</Typography>
                                    </Grid>
                                </GridFormat>
                            </Box>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <img src={img['Wireframes.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* Hi Fidelity Prototype */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Hi Fidelity Prototype</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        Using 10xFinders Brand Guideline and UI Assets, I created higher fidelity prototype using Adobe XD. All frames were
                                        interactive and included dynamic elements which were later implemented in the product.
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} />
                            </GridFormat>
                            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                                <GridFormat>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>People Search</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Candidate Profile</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Campaigns List</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Campaign</Typography>
                                    </Grid>
                                </GridFormat>
                            </Box>
                            <GridFormat>
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen} item xs={10} lg={2}>
                                    <img src={img['HiFi01.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['HiFi01.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen2} item xs={10} lg={2}>
                                    <img src={img['HiFi02.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open2}
                                    onClose={handleClose2}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['HiFi02.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen3} item xs={10} lg={2}>
                                    <img src={img['HiFi03.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open3}
                                    onClose={handleClose3}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open2}
                                        onClose={handleClose3}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['HiFi03.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen4} item xs={10} lg={2}>
                                    <img src={img['HiFi04.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open4}
                                    onClose={handleClose4}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open4}
                                        onClose={handleClose4}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['HiFi04.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                            </GridFormat>
                        </div>

                        {/* Frontend Implementation */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Frontend Implementation</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        After final iteration of the design, my team went over it thoroughly, then implemented the design on the platform using
                                        React. The designs were changed as I adjusted them to fit the content from real data.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                                <GridFormat>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>People Search</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Candidate Profile</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Campaigns List</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='caption'>Campaign</Typography>
                                    </Grid>
                                </GridFormat>
                            </Box>
                            <GridFormat>
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen5} item xs={10} lg={2}>
                                    <img src={img['Frontend01.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open5}
                                    onClose={handleClose5}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open5}
                                        onClose={handleClose5}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['Frontend01.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen6} item xs={10} lg={2}>
                                    <img src={img['Frontend02.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open6}
                                    onClose={handleClose6}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open6}
                                        onClose={handleClose6}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['Frontend02.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen7} item xs={10} lg={2}>
                                    <img src={img['Frontend03.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open7}
                                    onClose={handleClose7}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open7}
                                        onClose={handleClose7}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['Frontend03.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid sx={{ cursor: 'pointer' }} onClick={handleOpen8} item xs={10} lg={2}>
                                    <img src={img['Frontend04.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                </Grid>
                                <Modal
                                    open={open8}
                                    onClose={handleClose8}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    disableAutoFocus
                                >
                                    <Box
                                        open={open8}
                                        onClose={handleClose8}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{
                                            width: { lg: '50vw', xs: '100vw' },
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <img src={img['Frontend04.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    </Box>
                                </Modal>
                            </GridFormat>
                        </div>

                        {/* responsive layout */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Responsive Layout</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        10xFinders is a web applications that users primarily use on their personal/work laptop or desktop. To produce the best
                                        experience for users with different devices, I’ve designed a responsive system with different screen resolutions.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <Typography variant='body2'>4k Screen<br /><br /></Typography>
                                </Grid>
                                <img src={img['Responsive01.svg']} className={classes.imgFitContent} alt='4k' />
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <Typography variant='body2'>1920 * 1080<br /></Typography>
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={1} lg={2} />
                                <Grid item lg={8} xs={10}>
                                    <img src={img['Responsive02.svg']} className={classes.imgFitContent} alt='1920 * 1080' />
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
                                <Grid item xs={10} lg={6}>
                                    <Typography variant='body2'>1336 * 768<br /></Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={1} lg={3} />
                                <Grid item xs={10} lg={6}>
                                    <img src={img['Responsive03.svg']} className={classes.imgFitContent} alt='1336 * 768' />
                                </Grid>
                                <Grid item xs={1} />
                            </GridFormat>
                        </div>

                        {/* brand guideline */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Brand Guideline</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        As the sole designer on team, I was also responsible for creating the brand guideline for UI components, typography, logo
                                        and other marketing materials.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}><Typography variant='body2'>10xFinders Palette</Typography></Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color1} />
                                    <Typography variant='caption'>#1B4077</Typography>
                                </Grid>
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color2} />
                                    <Typography variant='caption'>#356BBA</Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color3} />
                                    <Typography variant='caption'>#8DB0E3</Typography>
                                </Grid>
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color4} />
                                    <Typography variant='caption'>#D4E2F8</Typography>
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color5} />
                                    <Typography variant='caption'>#152845</Typography>
                                </Grid>
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color6} />
                                    <Typography variant='caption'>#757575</Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color7} />
                                    <Typography variant='caption'>#FFFFFF</Typography>
                                </Grid>
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color8} />
                                    <Typography variant='caption'>#F2F7FF</Typography>
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color9} />
                                    <Typography variant='caption'>#007745</Typography>
                                </Grid>
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color10} />
                                    <Typography variant='caption'>#FFD633</Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color11} />
                                    <Typography variant='caption'>#D5342A</Typography>
                                </Grid>
                                <Grid item xs={5} lg={2}>
                                    <div className={classes.color12} />
                                    <Typography variant='caption'>#631A89</Typography>
                                </Grid>
                                <Grid item xs={2} />
                            </GridFormat>
                        </div>

                        {/* logo */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={4}>
                                    <Typography variant='h3'>Logo</Typography>
                                </Grid>
                                <Grid item xs={4} />
                            </GridFormat>
                            <GridFormat>
                                <Grid item xs={3} md={2} lg={1}>
                                    <img src={img['Logo01.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    <Typography variant='caption'>Gradient</Typography>
                                </Grid>
                                <Grid item xs={3} md={2} lg={1}>
                                    <img src={img['Logo02.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    <Typography variant='caption'><br />Solid</Typography>
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item xs={10} md={5} lg={3}>
                                    <img src={img['Logo03.svg']} className={classes.imgFitContent} alt='Wireframes' />
                                    <Typography variant='caption'><br />Full Character</Typography>
                                    {/* <Grid container spacing={3}>
                                    <Grid item xs={2}>
                                        <div className={classes.IABox}>
                                            <Typography className={classes.textAlign} variant='body1'>Onboarding</Typography>
                                            <Typography className={classes.caption} variant='caption'>
                                                <br/>
                                                • Sign up with Gmail <br/>
                                                • Create a workspace <br/>
                                                • Invite members
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10}/>
                                    <Grid className={clsx(classes.alignCenter, classes.pZ)} item xs={2}><div className={classes.IALine}/></Grid>
                                    <Grid item xs={10}/>
                                    <Grid className={classes.pZ} item xs={2}>
                                        <div className={classes.IABox}>
                                            <Typography className={classes.textAlign} variant='body1'>Dashboard</Typography>
                                        </div>
                                    </Grid>
                                </Grid> */}
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* UI components */}
                        <div className={classes.margin2}>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>UI Components</Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        They’re interactive. Try them yourself!
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} />
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <UILibrary />
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* user testing */}
                        <div>
                            <Heading
                                header='USER TESTING'
                                headerLg={3}
                                caption='After implementing each iteration, I presented the design to my team, reiterated based on feedbacks, then implemented the 
                            final design on the server. With the final design, I spoke with 6 clients who were active on the platform to receive the first-hand 
                            experience as the direct user. To share the feedbacks with my team in which all members were in remote locations, I used 
                            collaboration tools including the Google Suite and Notion.'
                                captionLg={5}
                            />
                            <GridFormat>
                                <Grid item lg={8} xs={10}><img src={img['UserTesting01.png']} className={classes.imgFitContent} alt='excel sheet' /></Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}><img src={img['UserTesting02.png']} className={classes.imgFitContent} alt='summary' /></Grid>
                            </GridFormat>
                            <div className={classes.margin} >
                                <GridFormat>
                                    <Grid item xs={10} lg={5}>
                                        <Typography variant='h3'>Redesigns based on Feedback</Typography>
                                        <Typography variant='body1'>
                                            <br />
                                            Here is an example of redesigned pages including “Lists” page and “Lists filter” on “People” Page.
                                        </Typography>
                                    </Grid>
                                </GridFormat>
                                <GridFormat>
                                    <Grid item lg={8} xs={10}><img src={img['UserTesting03.svg']} className={classes.imgFitContent} alt='redesign 1' /></Grid>
                                </GridFormat>
                                <GridFormat>
                                    <Grid item lg={8} xs={10}><img src={img['UserTesting04.png']} className={classes.imgFitContent} alt='redesign 2' /></Grid>
                                </GridFormat>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}