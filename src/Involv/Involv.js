import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
import clsx from 'clsx';
import { Typography, Grid, Box, Collapse } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { GridFormat, Heading } from '../components/ui/UIComponents';
import { PrimaryButton, SecondaryButton } from './InvolvUI';

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
        objectFit: 'cover',
    },
    imgFitContent2: {
        height: '100%',
        maxWidth: '100vw',
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
        background: '#2D3142',
        zIndex: '-1',
        position: 'relative',
        overflowX: 'hidden',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    designProcessContainer: {
        marginTop: '10vh',
        color: '#2D3142'
    },
    designProcessBg: {
        background: '#2D3142',
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
    designProcess2: {
        border: '1px solid white',
        margin: '1vh !important',
        padding: '1vh !important',
        width: 'calc(100% - 2.75vh)',
        textAlign: 'center',
    },
    activismColor: {
        color: '#487D84',
        margin: '1vmin 0'
    },
    activismDesc: {
        margin: '0 0 2vmin 0',
    },
    consumerColor: {
        color: '#F08F4B',
        margin: '1vmin 0'
    },
    icon: {
        height: '4.573rem',
        margin: '1.5vmin 0',
        objectFit: 'contain',
        fontSize: '3.815rem',
        color: '#555555'
    },
    icon2: {
        height: 'calc(3.126rem - 1vmin)',
        margin: '1.5vmin 0',
        objectFit: 'contain',
        fontSize: '2.441rem',
        color: '#555555'
    },
    solutionTop: {
        color: '#487D84',
        margin: '1vmin 0 0 0'
    },
    solutionBottom: {
        color: '#F08F4B',
        margin: '0 0 1vmin 0'
    },
    solutionDesc: {
        margin: '1.75vmin 0'
    },
    involvColor: {
        color: '#F08F4B',
    }
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
                                width: { xs: '100vw', lg: 'fit-content' },
                                height: { xs: 'fit-content', lg: '65vh' },
                                right: { xs: '0', lg: '10%' },
                                transform: { xs: 'none', lg: 'translate(10%, 0)' },
                                position: 'absolute',
                                transition: '0.3s'
                            }}
                        >
                            <img className={classes.imgFitContent2} src={img['Cover02.png']} alt='Involv' />
                        </Box>
                        <Grid sx={{ position: 'relative', color: 'white' }} container spacing={3}>
                            <Grid item lg={2} xs={1} />
                            <Grid className={classes.zIndex} item lg={3} xs={10}>
                                <Box sx={{ fontSize: { lg: '3.815rem', xs: '3.052rem' }, fontFamily: 'Lora-Bold', paddingTop: '25vh' }}>
                                    involv
                                </Box>
                            </Grid>
                            <Grid item lg={7} xs={1} />
                            <Grid item xs={1} lg={2} />
                            <Grid className={classes.zIndex} item xs={10} lg={4}>
                                <Typography variant='h4'>
                                    Conscious Consumption
                                    <br />with Measurable Impact
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid className={classes.zIndex} item xs={10} lg={4}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Project</span>: Professional + Oxfam America Creative Jam; Design for Social Impact
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                            <Grid className={classes.zIndex} item xs={10} lg={2} >
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Role</span>: Concept, Research, Design
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                            <Grid className={classes.zIndex} item xs={10} lg={2} >
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Tools</span>: Adobe XD, Illustrator, After Effects
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
                                        Abstract
                                    </Typography>
                                    {showDesc ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                                <Collapse in={showDesc} timeout="auto" unmountOnExit>
                                    <Typography className={(showDesc) ? '' : classes.displayNone} variant='body1'>
                                        <br />
                                        COVID-19 has transformed our lives in many ways; one is the surge in digital activism; another is conversion to online
                                        shopping. These combined led to ‘involv’, a shopping experience that connects users to brands based on personalized values.
                                        Consumers are increasingly conscious about the brands that act on societal, environmental or political issues, and are
                                        eager to play a part. And there are many businesses creating measurable impact. Involv serves to bridge the gap between
                                        brands and consumers.
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
                                        This was an accelerated week-long project done for the design competition, Professional + Oxfam America Creative Jam. In a
                                        team of three members, I was responsible for concept generation, market research, and UI/UX design. The prompt of the
                                        competition was “name and design an app that turns personal values into actions that have a measurable benefit. Use
                                        technology to make supporting causes more than just a  transactional experience.” My team placed 5th place among 97
                                        contesting teams.
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
                                    <Grid item xs={12} />
                                    <Grid item xs={2} />
                                    <Grid item xs={3}>
                                        <div className={classes.designProcesses}>
                                            <div className={classes.designProcess}>
                                                <Typography variant='body1'>Consumer Market Analysis</Typography>
                                            </div>
                                            <div className={classes.designProcess}>
                                                <Typography variant='body1'>Brand & NGO Research</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div className={classes.designProcesses}>
                                            <div className={classes.designProcess2}>
                                                <Typography variant='body1'>Minimum Viable Product (MVP)</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div className={classes.designProcesses}>
                                            <div className={classes.designProcess}>
                                                <Typography variant='body1'>Lo-Fi Prototyping</Typography>
                                            </div>
                                            <div className={classes.designProcess}>
                                                <Typography variant='body1'>Final Iteration</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2} />
                                </Grid>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12} />
                                <Grid item xs={12} lg={12} />
                                <Grid item xs={1} lg={2} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Learning</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Research on shifting consumer behavior, and business and NGOs that support various societal, environmental, and political causes.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item xs={1} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Concept</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Brand mission statement, values, how might we questions, desired outcomes, then hypothesize success metrics and build MVP.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                                <Grid item xs={1} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Collaborate</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Information Architecture, Wireframes, UI components design, final interactive prototype mock-up.
                                        <br />{(mobile) ? [] : <br />}
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
                            captionLg={4}
                            caption='Despite the recent surge in sociopolitical and environmental activisms, many people have hard time participating due to lack 
                            of knowledge, trust, medium, or motivation. However, there are ways to overcome those challanges through an essential activity of shopping.'
                        />
                        <GridFormat alignItems='flex-end'>
                            <Grid item xs={10} lg={3}>
                                <Typography className={classes.activismColor} align='center' variant='h4'>
                                    Why do or don’t people <br /> partake in activism?
                                </Typography>
                                <img src={img['Problem01.svg']} className={clsx(classes.imgFitContent, classes.activismColor)} alt='activism' />
                                <Typography className={classes.activismColor} variant='h3'>
                                    Safety
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    People want to feel safe participating in large scale protests or volunteer works in and out of their homes.
                                </Typography>
                                <Typography className={classes.activismColor} variant='h3'>
                                    Financial Resources
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    Some people cannot afford to donate, or would rather spend it on their friends and family.
                                </Typography>
                                <Typography className={classes.activismColor} variant='h3'>
                                    Transparency
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    People want to invest in trustworthy organizations, and know where their donation goes.
                                </Typography>
                                <Typography className={classes.activismColor} variant='h3'>
                                    Lack of Knowledge
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    Those who want to donate or participate often do not have the knowledge or media to do so.
                                </Typography>
                            </Grid>
                            <Grid item sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column-reverse', margin: '1vmin 0' }} lg={2}>
                                <img src={img['Solution03.svg']} className={classes.icon} alt='knowledge' />
                                <img src={img['Solution02.svg']} className={classes.icon} alt='transparency' />
                                <Typography align='center' className={classes.icon} variant='h4'>$$</Typography>
                                <img src={img['Solution01.svg']} className={classes.icon} alt='home' />
                            </Grid>
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item xs={10} lg={3}>
                                <Typography className={classes.consumerColor} align='center' variant='h4'>
                                    What are the current<br />consumer behaviors?
                                </Typography>
                                <img src={img['Problem02.svg']} className={clsx(classes.imgFitContent, classes.consumerColor)} alt='activism' />
                                <Typography className={classes.consumerColor} variant='h3'>
                                    Social Distancing
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    People prefer purchasing items at their homes as they embraced social distancing.
                                </Typography>
                                <Typography className={classes.consumerColor} variant='h3'>
                                    Expenses
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    Consumer loyalty is falling, and there is a trend to buy lower price items rather than from a certain brand.
                                </Typography>
                                <Typography className={classes.consumerColor} variant='h3'>
                                    Conscious Consumers
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    Consumers are more aware of brands and products that best fits their values, health, or financial standings.
                                </Typography>
                                <Typography className={classes.consumerColor} variant='h3'>
                                    Supporting Brands
                                </Typography>
                                <Typography className={classes.activismDesc} variant='body1'>
                                    Consumers are more willing than ever to support and buy from local and/or minority owned businesses.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* solution */}
                    <div>
                        <Heading
                            header='SOLUTION'
                            headerLg={4}
                            captionLg={4}
                            caption='With the rising activism and shifting consumer behavior, there is a design opportunity to combine the aligning traits from 
                            each to create an experience that answers the question, how might we make supporting causes and movements more appealing and 
                            accessible to today’s  consumers?'
                        />
                        <GridFormat alignItems='center'>
                            <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
                                <img src={img['Solution01.svg']} className={classes.icon2} alt='home' />
                                <Typography align='center' className={classes.icon2} variant='h4'>$$</Typography>
                                <img src={img['Solution02.svg']} className={classes.icon2} alt='home' />
                                <img src={img['Solution03.svg']} className={classes.icon2} alt='home' />
                            </Grid>
                            <Grid item xs={10} lg={2}>
                                <Typography className={classes.solutionTop} variant='h3'>
                                    Safety
                                </Typography>
                                <Typography className={classes.solutionBottom} variant='h3'>
                                    Social
                                </Typography>
                                <Typography className={classes.solutionTop} variant='h3'>
                                    Financial Resources
                                </Typography>
                                <Typography className={classes.solutionBottom} variant='h3'>
                                    Expenses
                                </Typography>
                                <Typography className={classes.solutionTop} variant='h3'>
                                    Transparency
                                </Typography>
                                <Typography className={classes.solutionBottom} variant='h3'>
                                    Conscious Comsumers
                                </Typography>
                                <Typography className={classes.solutionTop} variant='h3'>
                                    Lack of Knowledge
                                </Typography>
                                <Typography className={classes.solutionBottom} variant='h3'>
                                    Supporting Brands
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'flex', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ opacity: { xs: '0', lg: '1' } }}>
                                <img src={img['Solution04.svg']} className={classes.icon} alt='home' />
                            </Grid>
                            <Grid item xs={10} lg={4}>
                                <Typography className={classes.solutionDesc} variant='body1'>
                                    {(mobile) ? '• ' : []}Encourage consumers to shop from and participate in activisms and activist brands at the comfort and safety of their home.
                                </Typography>
                                <Typography className={classes.solutionDesc} variant='body1'>
                                    {(mobile) ? '• ' : []}Facilitate a platform for a variety of brands from low to high price rages, supporting different values and causes.
                                </Typography>
                                <Typography className={classes.solutionDesc} variant='body1'>
                                    {(mobile) ? '• ' : []}Input detailed information of different brands and NGOs, and clearly reflect how users' actions responds to supporting them.
                                </Typography>
                                <Typography className={classes.solutionDesc} variant='body1'>
                                    {(mobile) ? '• ' : []}Remove the barrier to supporting the community through an intuitive experience, plus a feel good factor to shopping & giving back.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* prototypes */}
                    <Box className={classes.margin}>
                        <GridFormat alignItems='center'>
                            <Grid item xs={10} lg={2}>
                                <video className={classes.imgFitContent} src={img['App01.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop id="video" />
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h3'>Onboarding<br /></Typography>
                                <Typography variant='body1'>
                                    <br />
                                    When initially downloading the app, the user will sign up for an account and proceed to onboard by selecting areas of interest
                                    that they feel most passionate about, and then receive a brief introduction to how involv works to help them support their
                                    values and causes. The categories were chosen based on the 12 most recognized global issues on digital media.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h3'>Shop<br /></Typography>
                                <Typography variant='body1'>
                                    <br />
                                    Involv consists of three main features - Explore, My Involvement, and Shop. On the shopping page, users may discover activist
                                    brands that share similar values as them, as well as learn about rising issues.
                                    <br /><br />
                                    On a brand’s page, the user may learn about the brand’s main values, see what causes they support, and view their products.
                                    When making a purchase, the user receives reward points.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={1} />
                            <Grid item xs={10} lg={2}>
                                <video className={classes.imgFitContent} src={img['App02.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop id="video" />
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={2}>
                                <video className={classes.imgFitContent} src={img['App03.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop id="video" />
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h3'>My <span className={classes.involvColor}> Involv</span>ement<br /></Typography>
                                <Typography variant='body1'>
                                    <br />
                                    On this page, users may see a summary of how their actions have created an impact - either through making purchases from
                                    supporting brands or donations to organizations.
                                    <br /><br />
                                    The reward points are divided into 3 large categories - environment, human rights and welfare, each with its subcategories.
                                    When tapping on one, the user can see a detailed breakdown of reward points earned from purchases, and choose to redeem points
                                    towards future purchases, or donate through the app to the NGO of their choice. Whereas the Shop page primarily focuses on
                                    discovering brands, the My Involvement page allows the user to search for or find recommended products that support a specific
                                    category.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h3'>Explore<br /></Typography>
                                <Typography variant='body1'>
                                    <br />
                                    The Explore page connects the user to various organizations that support the issues they are passionate about. After tapping on
                                    a criteria, the user can select an organization to learn more, and proceed to the organization website, or directly make a
                                    donation through the app and earn points.
                                    <br /><br />
                                    Involv aims to help users make better purchasing decisions, and follows the goal of “
                                    <span className={classes.boldText}>helping each other, while helping ourselves</span>.”
                                </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={1} />
                            <Grid item xs={10} lg={2}>
                                <video className={classes.imgFitContent} src={img['App04.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop id="video" />
                            </Grid>
                        </GridFormat>
                    </Box>

                    {/* wireframes */}
                    <div>
                        <GridFormat>
                            <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
                            <Grid item xs={10} lg={6}>
                                <Typography variant='h3'>Wireframes</Typography>
                            </Grid>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={10} lg={6}>
                            <img src={img['Wireframe.png']} className={classes.imgFitContent} alt='Wireframe' />
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* IA */}
                    <Box className={classes.margin}>
                        <GridFormat>
                            <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
                            <Grid item xs={10} lg={6}>
                                <Typography variant='h3'>Information Architecture</Typography>
                            </Grid>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={10} lg={6}>
                            <img src={img['IA2.svg']} className={classes.imgFitContent} alt='Wireframe' />
                            </Grid>
                        </GridFormat>
                    </Box>

                    {/* project documentation */}
                    <Box className={classes.margin}>
                        <GridFormat>
                            <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
                            <Grid item xs={10} lg={6}>
                                <Typography variant='h3'>Project Documentation</Typography>
                                <Typography variant='body1'>This is what the design panels saw on our XD Documentation!</Typography>
                            </Grid>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={5} lg={2}>
                                <PrimaryButton onClick={() => window.open('https://xd.adobe.com/view/8223fed3-4e9c-472c-892d-9fadac77fc9f-d770/screen/00328b0f-5f40-4501-8b3b-1604ae2be451/', '_blank')}  >XD Prototype</PrimaryButton>
                            </Grid>
                            <Grid item xs={5} lg={2}>
                                <SecondaryButton onClick={() => window.open('https://www.facebook.com/adobecreativejam/videos/3306745376071451/', '_blank')}  >Presentation (20:20~)</SecondaryButton>
                            </Grid>
                            <Grid item xs={1} lg={3}/>
                            <Grid item xs={1} lg={1}/>
                            <Grid item xs={10} lg={12}>
                            <img src={img['Documentation.svg']} className={classes.imgFitContent} alt='Wireframe' />
                            </Grid>
                        </GridFormat>
                    </Box>

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}