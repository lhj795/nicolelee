import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
import clsx from 'clsx';
import { Typography, Grid, Box, Collapse } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { GridFormat, Heading } from '../components/ui/UIComponents';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    imgMixBlendMode: {
        mixBlendMode: () => {
            if (window.innerWidth > 1200) {
                return 'hard-light'
            } else {
                return '';
            }
        },
    },
    cover: {
        height: '75vh',
        width: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.6)',
        backdropFilter: 'invert(1)',
        mixBlendMode: () => {
            if (window.innerWidth > 1200) {
                return 'color-dodge'
            } else {
                return '';
            }
        },
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
        paddingTop: 'clamp(10px, 3vh, 30px)',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    coverDetails: {
        position: 'absolute',
        bottom: '0',
    },
    designProcessContainer: {
        marginTop: '10vh',
    },
    designProcessBg: {
        background: '#333333',
        height: 'fit-content',
        color: 'white',
        mixBlendMode: () => {
            if (window.innerWidth > 1200) {
                return 'color'
            } else {
                return '';
            }
        },
        backdropFilter: 'invert(1)',
    },
    designProcess: {
        border: '1px solid white',
        padding: '1vh 0',
        textAlign: 'center',
    },
    arrows: {
        display: 'flex',
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
        height: () => {
            if (window.innerWidth > 1200) {
                return '100vh'
            } else {
                return '';
            }
        },
        width: () => {
            if (window.innerWidth <= 1200) {
                return '100%'
            } else {
                return '';
            }
        },
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
        width: '100%',
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
        height: 'fit-content',
        minHeight: '100vh',
        background: '#0A191F',
        marginLeft: '0',
        color: 'white',
        marginBottom: '10vh',
        mixBlendMode: () => {
            if (window.innerWidth > 1200) {
                return 'color'
            } else {
                return '';
            }
        },
        backdropFilter: () => {
            if (window.innerWidth > 1200) {
                return 'invert(1)'
            } else {
                return '';
            }
        },
    },
    appCoverTitle: {
        color: 'white !important',
        lineHeight: '0.4',
    },
    appCaptions: {
        display: 'flex',
        flexDirection: 'row',
    },
    appCaption: {
        color: 'white',
        width: '50%',
    },
    appVid: {
        marginTop: '-48px',
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
        height: () => {
            if (window.innerWidth > 1200) {
                return '100vh'
            } else {
                return '200px';
            }
        },
        transitio: '0.3s',
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
        margin: () => {
            if (window.innerWidth > 1200) {
                return '-20vh 0 10vh 0'
            } else {
                return '0';
            }
        },
    },
    negMargin2: {
        margin: () => {
            if (window.innerWidth > 1200) {
                return '-50vh 0 10vh 0'
            } else {
                return '0';
            }
        },
    },
    padding: {
        padding: '10vmin',
        width: 'calc(100% - 20vmin)',
        height: 'calc(100% - 20vmin)',
    }
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|jpg|svg|mp4)$/));

function Cover(props) {
    const classes = useStyles(props);

    return (
        <div style={{ height: props.customHeight, flexDirection: props.textBottom }} className={clsx(classes.margin, classes.maxHeight)}>
            <img src={img[props.img]} className={clsx(classes.imgMixBlendMode, classes.imgFitContent, classes.positionAbsolute)} alt='' />
            <Typography style={{ color: props.color, lineHeight: props.lineHeight, textAlign: props.textAlign, zIndex: props.zIndex, padding: '0 24px' }} variant='h1'>{props.title}</Typography>
        </div>
    )
}

export default function Able(props) {
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
                    <img src={img['AbleStore02.png']} className={clsx(classes.imgMixBlendMode, classes.cover)} alt='able store' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <Grid container spacing={3}>
                            <Grid item xs={3} md={4} lg={5} />
                            <Grid item xs={6} md={4} lg={2}>
                                <img className={classes.coverLogo} src={img['AbleLogo.svg']} alt='able' />
                            </Grid>
                            <Grid item xs={3} md={4} lg={5} />
                            <Grid item xs={1} lg={4} />
                            <Grid item xs={10} lg={4}>
                                <Typography className={classes.coverCaption} variant='h4'>
                                    Bringing Inclusivity to Retail
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={4} />
                        </Grid>
                        <Grid container spacing={3} className={classes.coverDetails}>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={3}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Project</span>: Brown Risd Master of Arts in Design Engineering (MADE) Capstone Project
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={10} lg={2}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Role</span>: Product Design, Fabrication, Engineering
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={10} lg={3}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Tools</span>: Arduino, Adobe Suite, Figma, Rapid Prototyping, Wood and Metal Fabrication
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
                            <Grid onClick={() => setShowDesc(!showDesc)} item xs={10} lg={5}>
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
                                        Environment drives motivation. When an environment incites positive emotional stimuli, it is only natural for
                                        one to seek it out more frequently. Marginalized groups with disability who are unable to be a part of services
                                        have to take an extra step to adjust their behaviors. Their pain points are slow to be addressed for implementation,
                                        as enough profit could be established without performing accessibility. Yet, what corporations fail to realize is
                                        that practicing inclusivity may enhance the experience for all, which is an investment for higher profit and corporate
                                        social responsibility. This project explores a B2B concept, serving as a bridge between visually impaired shoppers
                                        and retailers. With a strong basis of user research, the team reconstructs the perspectives apart from the
                                        preconceptions, and tackles the unjust nature of today's shopping experience through various medium of design and
                                        engineering.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                            <Grid onClick={() => setShowDesc2(!showDesc2)} item xs={10} lg={3}>
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
                                        The team executed service design, experience design and product design to address the needs of visually impaired shoppers
                                        foremost, and also to appeal to the retailers and the sighted. The solution comprises a scope of products to achieve
                                        accessibility. In every step of the journey, the team consistently consulted, co-designed and tested creations with users
                                        to reflect real needs and pain points. I participated in every part of the project from research, execution to testing,
                                        and led the team in deploying various methods of fabrication and engineering to design and build prototypes.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* design process */}
                    <div className={classes.designProcessContainer}>
                        <Grid container spacing={2}>
                            <Grid item xs={1} lg={2} />
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h5'>DESIGN PROCESS</Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                        </Grid>
                        <div className={classes.designProcessBg}>
                            <Grid sx={{ display: { xs: 'none', lg: 'flex', } }} container spacing={2}>
                                <Grid item xs={12} />
                                <Grid item lg={2} />
                                <Grid item xs={2}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>Networking</Typography>
                                </Grid>
                                <Grid item lg={8} xs={10} />
                                <Grid item xs={3} />
                                <Grid item xs={3}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>User Interviews</Typography>
                                </Grid>
                                <Grid item xs={6} />
                                <Grid item xs={4} />
                                <Grid item xs={2}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>Concept Generation</Typography>
                                </Grid>
                                <Grid item xs={5} />
                                <Grid item xs={5} />
                                <Grid item xs={2}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>Concept Testing</Typography>
                                </Grid>
                                <Grid item xs={5} />
                            </Grid>
                            <Grid sx={{ display: { xs: 'none', lg: 'flex', } }} container className={classes.arrows} spacing={0}>
                                <Grid item xs={7} />
                                <Grid item xs={2}>
                                    <div className={classes.arrowUp} />
                                    <div className={classes.arrowUpPointer} />
                                </Grid>
                                <Grid item xs={3} />
                            </Grid>
                            <Grid sx={{ display: { xs: 'none', lg: 'flex', } }} container spacing={3}>
                                <Grid item xs={7} />
                                <Grid item xs={1}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>Prototyping</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>User Testing</Typography>
                                </Grid>
                            </Grid>
                            <Grid sx={{ display: { xs: 'none', lg: 'flex', } }} container spacing={0}>
                                <Grid item xs={7} />
                                <Grid item xs={2}>
                                    <div className={classes.arrowDown} />
                                    <div className={classes.arrowDownPointer} />
                                </Grid>
                                <Grid item xs={3} />
                            </Grid>
                            <Grid sx={{ display: { xs: 'none', lg: 'flex', } }} container spacing={3}>
                                <Grid item xs={9} />
                                <Grid item xs={1}>
                                    <Typography className={classes.designProcess} variant='subtitle1'>Final Iteration</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item sx={{ display: { xs: 'block', lg: 'none', } }} xs={12} />
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={10} lg={2}>
                                    <Typography variant='body2'>Learning</Typography>
                                    <Typography variant='body1'>
                                        <br />Recruiting participants from online communities, local vision rehabilitation center and personal connections.{(mobile) ? <br /> : []}
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ display: { xs: 'block', lg: 'none', } }} xs={1} />
                                <Grid item sx={{ display: { xs: 'block', lg: 'none', } }} xs={1} />
                                <Grid item xs={10} lg={2}>
                                    <Typography variant='body2'>Concept</Typography>
                                    <Typography variant='body1'>
                                        <br />Sketching concepts based on user interviews and discussion on potential directions.{(mobile) ? <br /> : []}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item sx={{ display: { xs: 'block', lg: 'none', } }} xs={1} />
                                <Grid item xs={10} lg={2}>
                                    <Typography variant='body2'>Agile Prototyping</Typography>
                                    <Typography variant='body1'>
                                        <br />Iterations on prototypes designed and tested with participants.{(mobile) ? <br /> : []}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={12} />
                                <Grid item xs={12} />
                            </Grid>
                        </div>
                    </div>

                    {/* the problem */}
                    <div>
                        <Heading
                            header='THE PROBLEM'
                            headerLg={4}
                            caption='Picture apparel shopping. While many may consider it to be effortless and even stress relieving, those with vision loss 
                        can find it daunting. An activity such as apparel shopping — in which vision is imperative to the experience — is often a very 
                        difficult task for those who rely on other senses. In a setting that is meant to promote convenience and stress-relief, visually 
                        impaired individuals become dependent, stressed and intimidated because the environment and the service is negligent of their 
                        needs. '
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <img src={img['Problem01.png']} className={classes.imgFitContent} alt='google search of clothing stores' />
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body1'>
                                    Today’s shopping experience <span className={classes.boldText}>lacks inclusivity</span> for visually impaired shoppers,
                                    <span className={classes.boldText}> emphasizing heavily on visuals rather than paying more attention to other sensory palettes</span>
                                    , which are just as important in communicating their brand identity.
                                    <br />
                                    <br />
                                    With the aging population there is a growing need for visually impaired people. In fact, cases in the U.S. are projected to
                                    double by 2050 to more than 8 million. Despite these metrics, many retailers are not redesigning store experience for it
                                    compromises store profit. As seen in the google search photos, retailers make sure they display as many items per square foot
                                    as possible, creating a
                                    <span className={classes.boldText}> cluttered and potentially dangerous environment</span>.
                                    <br />
                                    <br />
                                    Not only that, they have to compete against the massively expanding e-commerce industry and emerging virtual apparel via NFT,
                                    causing retailers to focus more on designing digital shopping experiences than in-person.
                                    <br />
                                    <br />
                                    Why did our team choose to intervene in the brick-and-mortar space?
                                    According to studies many visually impaired and their family members go through depression, and
                                    <span className={classes.boldText}> shopping is known to be one of the most helpful coping mechanisms. Visually impaired also
                                        prefer in-person shopping</span> for they base their purchasing decision on feeling the clothes themselves rather than relying
                                    on online descriptions and reviews.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item sx={{ display: { xs: 'block', lg: 'none', } }} xs={1} />
                            <Grid className={classes.textAlignRight} item xs={10} lg={3}>
                                <img src={img['Problem02.png']} className={classes.imgFitContent} alt='NIH Aricle' />
                                <div className={classes.smallMarginTop}>
                                    <Typography variant='caption'><br />Article from <span> </span>
                                        <Link to='https://www.nei.nih.gov/about/news-and-events/news/visual-impairment-blindness-cases-us-expected-double-2050'>
                                            National Institutes of Health
                                        </Link>
                                    </Typography>
                                </div>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid className={classes.textAlignRight} item xs={10} lg={8}>
                                <img src={img['Problem03.png']} className={classes.imgFitContent} alt='google search of clothing stores' />
                                <Typography variant='caption'>
                                    left: ecommerce  websites; right: NFT
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* user research */}
                    <div>
                        <Heading
                            header='USER RESEARCH'
                            headerLg={4}
                            caption='To fully understand the first hand experiences of the visually impaired shoppers, we interviewed 10 people with varying 
                            conditions, where most had severe loss in vision with little to no perception of light and color. In the interviews we aimed to 
                            answer the following questions:'
                            caption2='What are the existing entry barriers?'
                            caption3='What are the important decision making factors in shopping?'
                            caption4='What are the common pain points, needs and wants?'
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <img src={img['UserResearch01.png']} className={classes.imgFitContent} alt='meeting with users' />
                                <br />
                                <Typography variant='caption' className={classes.textAlignRight}>
                                    <br />
                                    left: remote user interview with an individual who fits target audience
                                    <br />
                                    right: meeting at the INSIGH Vision Rehabilitation with Director of Assistive Technology and Vision Rehabilitation Teacher
                                </Typography>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <img src={img['UserResearch02.png']} className={classes.imgFitContent} alt='meeting with users' />
                                <br />
                                <Typography variant='caption' className={classes.textAlignRight}>
                                    <br />
                                    Discussion Guide for Interview Questions
                                </Typography>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <img src={img['UserResearch03.png']} className={classes.imgFitContent} alt='meeting with users' />
                                <br />
                                <Typography variant='caption' className={classes.textAlignRight}>
                                    <br />
                                    Interview documentation from 10 participants
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* persona */}
                    <div>
                        <div>
                            <Heading
                                header='PERSONA'
                                headerLg={3}
                                caption='From interviews we extracted insight from trending comments. First, shopping becomes a chore to rely on others, asking 
                                for descriptions and opinions per item, which is time consuming and inconvenient. Second, regardless of past familiarity, stores 
                                change category layout so frequently that she has to relearn the structure every visit. Third, store interior is often cluttered 
                                with items and crowds which cause confusion and risk injuries. Empathetic customer service, affordability and clear layout are 
                                prioritized over brand name or distance proximity.'
                                caption3='All of our designs were designed for this specific persona of a young female rather than taking the approach to solve for all 
                                visually impaired groups, which could end up solving for nobody. We then proceeded to expand the user base by testing with people 
                                who were both within and out of the persona including the sighted, the male and the elderly, measure the successes and failures, 
                                and make reiterations. '
                                captionLg={5}
                            />
                        </div>
                        <GridFormat>
                            <Grid item xs={10} lg={4}>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <img src={img['Amanda.png']} className={classes.imgFitContent} alt='meeting with users' />
                                    </Grid>
                                    <Grid item xs={9} lg={6}>
                                        <Box><Typography variant='h3'>Amanda Williams</Typography></Box>
                                        <div className={classes.personaDemo}>
                                            <Box sx={{ marginRight: { xs: '10px', lg: '0' } }}>
                                                <Typography variant='body1'>Age</Typography>
                                                <Typography variant='body1'>Location</Typography>
                                                <Typography variant='body1'>Job</Typography>
                                                <Typography variant='body1'>Vision</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant='body1'>32</Typography>
                                                <Typography variant='body1'>Boston, MA</Typography>
                                                <Typography variant='body1'>Unemployed</Typography>
                                                <Typography variant='body1'>Legally blind since age 5</Typography>
                                            </Box>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Typography variant='body2'><br />Bio<br /><br /></Typography>
                                <Typography variant='body1'>
                                    Meet Amanda. She lost her vision at a young age but that didn’t stop her passion for fashion. She needs to buy a set of spring
                                    clothes for the upcoming season, but finds it difficult to do so because of inaccessible and pricey stores that are immediately
                                    around her area, and she has to rely on her sister every time shopping. She hopes for a way to explore with more independence
                                    and confidence, even in unfamiliar stores.
                                </Typography>
                            </Grid>
                            <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                            <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                            <Grid item xs={10} lg={4}>
                                <div className={classes.personaMotivation}>
                                    <div><Typography variant='body2'>Motivation</Typography></div>
                                    <div className={classes.br} />
                                    <div><Typography variant='body1'>Brand</Typography></div>
                                    <div className={classes.personaBar}>
                                        <div className={classes.personaBrand} />
                                    </div>
                                    <div><Typography variant='body1'>Price</Typography></div>
                                    <div className={classes.personaBar}>
                                        <div className={classes.personaPrice} />
                                    </div>
                                    <div><Typography variant='body1'>Customer Service</Typography></div>
                                    <div className={classes.personaBar}>
                                        <div className={classes.personaCustomer} />
                                    </div>
                                    <div><Typography variant='body1'>Efficiency</Typography></div>
                                    <div className={classes.personaBar}>
                                        <div className={classes.personaEfficiency} />
                                    </div>
                                    <div><Typography variant='body1'>independence</Typography></div>
                                    <div className={classes.personaBar}>
                                        <div className={classes.personaIndependence} />
                                    </div>
                                    <div><Typography variant='body1'>Technology</Typography></div>
                                    <div className={classes.personaBar}>
                                        <div className={classes.personaTech} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body2'><br />Frustrations</Typography>
                                <Typography variant='body1'>
                                    <br />
                                    • Malls are overstimulating with cluttered and crowded environment.<br />
                                    • Risk of injuries from protruding objects in stores.
                                </Typography>
                            </Grid>
                            <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                            <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body2'><br />Goal</Typography>
                                <Typography variant='body1'>
                                    <br />
                                    • Buy spring clothes for the upcoming season.<br />
                                    • Be able to do so  without family or store associate assistance.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* market research */}
                    <div>
                        <Heading
                            header='MARKET RESEARCH'
                            headerLg={4}
                            caption='As mentioned, Able is an agency concept providing B2B services that designs an accessible shopping experience for brands who 
                        share a similar vision. To showcase this business model, we conducted in-depth market research and chose Uniqlo to mockup our designs.'
                            bold=' Uniqlo was found to be within our persona’s budget, preferred style and age group as well as to be an advocate of inclusivity and 
                        accessibility.'
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item xs={10} lg={5}>
                                <img src={img['MarketResearch01.png']} className={classes.imgFitContent} alt='market research' />
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={10} lg={4}>
                                <img src={img['MarketResearch02.png']} className={classes.imgFitContent} alt='uniqlo' />
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item lg={8} xs={10}>
                                <Typography variant='body1'>
                                    The agency provides a
                                    <span className={classes.boldText}> versatile scope of products and services to give partnering brands easier approaches
                                        to incorporate and invest</span>. For customers to revisit, shopping has to be enjoyable before, throughout, and after
                                    visiting the store. Therefore we offer a range of choices across our products, based on different purposes and budgets,
                                    all designed to addressing our users and make the experience also better for existing shoppers.
                                </Typography>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid sx={{ overflowX: 'scroll' }} item xs={10} lg={8}>
                                <Grid sx={{ width: '100%', minWidth: '700px', }} container spacing={3} className={classes.textAlignCenter}>
                                    <Grid item xs={3}>
                                        <Typography variant='body2'>
                                            Recognition of Item
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body2'>
                                            Reservation & Suggestion
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body2'>
                                            Sample out of Store
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body2'>
                                            Sensory Enhancement
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <img src={img['MarketResearch03.svg']} className={classes.mRImg} alt='Recognition of Item' />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <img src={img['MarketResearch04.svg']} className={classes.mRImg} alt='Reservation & Suggestion' />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <img src={img['MarketResearch05.svg']} className={classes.mRImg} alt='Sample out of Store' />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <img src={img['MarketResearch06.svg']} className={classes.mRImg} alt='Sensory Enhancement' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.mRBar} />
                                    </Grid>
                                    <Grid item xs={3} />
                                    <Grid item xs={3} />
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Price Tag & Hanger
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            App Integration
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Multisensory Magazine
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Multisensorty Station
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.mRDollar}>
                                            <div><Typography variant='h3'>$</Typography></div>
                                            <div><Typography variant='h3'>$$</Typography></div>
                                            <div><Typography variant='h3'>$$$</Typography></div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Removes barrier to entry, guarantees independence for navigation and shopping.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Invites customers to visit via mobile app service to view recommended products in advance
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Builds brand loyalty and expand customer segment for brand to customer relationship
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body1'>
                                            Full store experience with exploration for both the visually impaired and sighted shoppers.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* solution */}
                    <div>
                        <Heading
                            header='SOLUTION'
                            headerLg={3}
                            caption='Able is a design agency concept that provides solutions to address the needs of visually impaired shoppers foremost, and also 
                        to appeal to the retailers and the sighted. The solution comprises a scope of products including a mobile app, multisensory magazine, 
                        assistive hanger, assistive price tag, multisensory experience and a pop-up store. The driving force behind this project was the team 
                        members’ enduring empathy in people. It was the emotional resonance of the members with users and the endeavor to utilize creativity to 
                        formulate a path to a more ideal shopping experience.'
                            captionLg={5}
                        />

                        {/* App */}
                        <div>
                            <Box className={classes.appCover}>
                                <Grid container spacing={3}>
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={11}>
                                        <Typography className={classes.appCoverTitle} variant='h1'>Mobile App</Typography>
                                    </Grid>
                                    <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={12} />
                                    <Grid item xs={12} />
                                    <Grid item xs={1} lg={2} />
                                    <Grid item xs={10} lg={3}>
                                        <Typography variant='body1'>
                                            Shopping doesn’t always start the moment one walks into a store. It can be getting invited to an event, a new season coming up,
                                            or getting a bonus from work. The Able mobile app allows users to
                                            <span className={classes.boldText}> discover nearby accessible stores, browse items in advance personalized by user’s size,
                                                budget, style, and occasion, and pick out items to later try them on in the store along with other additional items </span>
                                            by relevance and popularity.
                                            <br /><br />
                                            The app is also used in the store. The user can navigate around the store by sections to find an item they are looking for and scan the item to get a text/audio description.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={12} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={5}>
                                        <video className={clsx(classes.imgFitContent, classes.appVid)} src={img['App01.mp4']} autoPlay muted loop id="video" />
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid item xs={1} lg={6} />
                                    <Grid item xs={10} lg={5} className={clsx(classes.textAlignCenter, classes.appCaptions)}>
                                        <Typography className={classes.appCaption} variant='caption'>onboarding</Typography>
                                        <Typography className={classes.appCaption} variant='caption'>browsing</Typography>
                                    </Grid>
                                    <Grid item xs={12} />
                                </Grid>
                            </Box>
                            <GridFormat>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='body1'>
                                        Able app was designed following the WCAG 2.1 accessibility guidelines and user feedback. Our
                                        <span className={classes.boldText}> users in fact said the app was extra descriptive and helpful, yet simple unlike
                                            other typical e-commerce platforms. </span>
                                        With the device accessibility setting, user may access information using text to speech feature. Check out the demo video on right
                                        to see and hear what our users get on the app.
                                        <br /><br />
                                        <span className={classes.boldText}>Existing e-commerce platforms:</span>
                                        <br />
                                        • Information overload from unnecessary information and advertisements
                                        <br />
                                        • Inaccurate descriptions using abstract words for colors or patterns
                                        <br /><br />
                                        <span className={classes.boldText}>Able app:</span>
                                        <br />
                                        • more accurate description of clothing
                                        <br />
                                        • made more legible using white text on black backgroun
                                        <br />
                                        • better word choices for colors
                                        <br /><br />
                                    </Typography>
                                    <Typography variant='caption'>
                                        video1: user testing
                                        <br />
                                        video2:  iOS accessibility setting → text to speech feature interpreting html elements including text and images.
                                        <br /><br /><br />
                                    </Typography>
                                    <video className={classes.imgFitContent} src={img['App03.mp4']} controls id="video" />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={3}>
                                    <video className={classes.imgFitContent} src={img['App02.mp4']} controls id="video" />
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* magazine */}
                        <div>
                            <Cover
                                img='MultisensoryMagazine01.png'
                                title='Multisensory Magazine'
                                lineHeight='.81'
                                textAlign='right'
                                textBottom='column'
                            />
                            <Box className={classes.margin2}>
                                <Grid container spacing={3}>
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={5}>
                                        <img src={img['MultisensoryMagazine02.png']} className={classes.imgFitContent} alt='magazine prototype' />
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={3}>
                                        <Typography variant='body1'>
                                            Taking a further step in providing assistance outside of the store, we created the multisensory magazine in which
                                            readers can not only view products, but <span className={classes.boldText}> hear, feel and smell the items prior to
                                                store visit</span>. It has scratch and sniff stickers with curated scents based on the brand identity and style, sample
                                            fabric to feel the item, and a QR code to the corresponding item details accessible by the Able app. The magazine
                                            encourages shoppers at home to  book an appointment to visit the store based on sample items, and to explore brands that
                                            support inclusivity.
                                            <br /><br />
                                            During research, we discovered that users tend to stick to a few stores that they are already comfortable with, and to
                                            counter that we proposed this magazine to evoke curiosity and motivation to visit stores and give new brands a try.
                                            Able magazine can be requested through the Able app. The magazine was designed and prototyped by my teammate Sarah
                                            Cheon (MADE ’22) woo hoo!
                                            <br /><br />
                                        </Typography>
                                        <Typography variant='caption'>
                                            left: magazine prototype with sample fabrics and scratch and sniff stickers. <br />
                                            right: magazine request page on Able app.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={2}>
                                        <img src={img['MultisensoryMagazine03.png']} className={classes.imgFitContent} alt='magazine subscription via app' />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>


                        {/* store */}
                        <div>
                            <Cover
                                img='AbleStore01.jpg'
                                title='Able Store'
                                lineHeight='.8'
                                textAlign='right'
                                color='white'
                                textBottom='column'
                                customHeight='77vh !important'
                            />
                            <Grid container spacing={3}>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='body1'>
                                        Let’s go to the Able Store. The store is a place for partnering brands to showcase not only their products, but also
                                        their values on accessibility and inclusivity curated by Able’s products. All elements of the store including the item
                                        displays, pathways, doorways, fitting rooms were designed <span className={classes.boldText}> accessible for visually
                                            impaired and wheelchair shoppers following the ADA guidelines. </span>
                                        <br /><br />
                                        When designing the store, we started off by looking into existing pop-up store designs, accessibility guidelines, then
                                        created our first draft of the store layout. Then, we applied design elements to remove our users’ pain points. For
                                        example, the item display is divided into 5 sections - tops, pants, outerwear, intimates and sports - in which
                                        <span className={classes.boldText}> each section has its distinct flooring material</span>. This speaks to the pain
                                        point that clothing <span className={classes.boldText}> store layout is often confusing, and it is difficult to locate
                                            items </span> without assistance. In addition, we added tactile floorings in front of the racks, using different
                                        patterns for each section. This is an additional touchpoint to <span className={classes.boldText}> remove confusion
                                            and to prevent injuries</span>. We referenced public infrastructures such as train stations that also use tactile
                                        pavings to reference the measurements and patterns used, and then to design ours.
                                        <br /><br />
                                    </Typography>
                                    <Typography variant='caption'>
                                        right 1: store interior<br />
                                        right 2: tactile pavings<br />
                                        bottom 1: documentation of relevant ADA guidelines<br />
                                        bottom 2: final design layout with references<br />
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={5}>
                                    <img src={img['AbleStore02.png']} className={classes.imgFitContent} alt='able store interior' />
                                    <img src={img['AbleStore03.png']} className={classes.imgFitContent} alt='tactile paving' />
                                </Grid>
                            </Grid>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <img src={img['AbleStore04.png']} className={classes.imgFitContent} alt='ADA Guideleines' />
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item lg={8} xs={10}>
                                    <img src={img['AbleStore05.png']} className={classes.layout} alt='final layout design' />
                                </Grid>
                            </GridFormat>
                            <Grid container spacing={3}>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={3}>
                                    <img src={img['AbleStore06.png']} className={classes.imgFitContent} alt='tactile paving scale model' />
                                </Grid>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid className={classes.justifyContent} item xs={10} lg={4}>
                                    <img src={img['AbleStore07.png']} className={classes.imgFitContent} alt='tactile paving scale model' />
                                    <Typography variant='body1'>
                                        {(mobile) ? <br /> : []}
                                        Tactile paving models were designed, 3d modeled, printed scaled and live size for testing. Testings will be displayed later.
                                        <br /><br />
                                        Design and prototypes by Trista Zhong, team 3d printing queen :)
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={4}>
                                    <img src={img['AbleStore08.png']} className={classes.imgFitContent} alt='tactile paving scale model' />
                                </Grid>
                            </Grid>
                        </div>

                        {/* tactile store map */}
                        <div>
                            <Cover
                                img='TactileMap01.png'
                                title='Tactile Store Map'
                                lineHeight='.645'
                                textAlign='right'
                                color='black'
                                textBottom='column-reverse'
                                zIndex='1'
                            />
                            <Grid container spacing={3}>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='body1'>
                                        Upon store arrival, shoppers will be instructed on how to browse the store by a store associate. Otherwise,
                                        shoppers may learn by referencing the map from downloading the app via QR code or the tactile map located at the
                                        entrance to learn the store layout and method of exploration.
                                        <br /><br />
                                        The surplus materials from the pop up store construction will be used to make this map, which indeed will help the
                                        visually impaired to <span className={classes.boldText}> identify and remember sections according to the flooring
                                            materials</span>. All sections and the building facade are <span className={classes.boldText}> protruded with
                                                braille labels for tactile reading. </span>
                                        <br /><br />
                                        My team tested multiple iterations of the map with users and the final design choices from user feedback include:<br />
                                        • using universal symbols (i.e. 🎵🎶)<br />
                                        • braille labeling for those who are unfamiliar with symbols<br />
                                        • using minimal color, yet colors that have strong contrast for individuals with limited vision<br /><br />
                                    </Typography>
                                    <Typography variant='caption'>
                                        bottom: testing earlier iterations with user
                                        <br /><br />
                                    </Typography>
                                </Grid>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={1} />
                                <Grid item xs={10} lg={5}>
                                    <img src={img['TactileMap02.png']} className={classes.imgFitContent} alt='Tactile Map' />
                                </Grid>
                            </Grid>
                            <Grid className={classes.alignItemsEnd} container spacing={3}>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={10} lg={5}>
                                    <img src={img['TactileMap03.png']} className={classes.imgFitContent} alt='Tactile Map user testing' />
                                </Grid>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={10} lg={5}>
                                    <img src={img['TactileMap04.png']} className={classes.imgFitContent} alt='Tactile Map' />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item xs={10} lg={5}>
                                    <img src={img['TactileMap04.png']} className={classes.imgFitContent} alt='Tactile Map' />
                                </Grid>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={10} lg={5}>
                                    <img src={img['TactileMap03.png']} className={classes.imgFitContent} alt='Tactile Map' />
                                </Grid>
                            </Grid>
                        </div>

                        {/* hanger */}
                        <div>
                            <Cover
                                img='AssistiveHanger01.png'
                                title='Assistive Hanger'
                                lineHeight='.81'
                                textAlign='right'
                                color='#333333'
                                textBottom='column'
                                zIndex='1'
                            />
                            <Grid container spacing={3}>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item lg={12} />
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item lg={2} />
                                <Grid item lg={8} xs={12}>
                                    <video className={clsx(classes.imgFitContent, classes.appVid)} src={img['AssistiveHangerDemo.mp4']} autoPlay muted loop id="video" />
                                </Grid>
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item lg={2} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item lg={12} />
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={10} lg={5}>
                                    <Typography variant='body1'>
                                        The hanger has a text cutout at the center to see and/or feel the size quickly. Underneath is a built-in NFC chip in
                                        which customers can scan the item with their smartphone with or without the Able app to get a detailed text/audio
                                        description. We also used a color coding system, allowing shoppers to identify size easily even from a distance.
                                        <br /><br />
                                        In this project, we were given an opportunity to partner with a local clothing store The Matchbox located in Fox
                                        Point, Providence. We tested our hangers and app at the store with local shoppers, as well as with our stakeholders at
                                        INSIGHT Vision Rehabilitation center for usability and effectiveness. The hanger was proven to be
                                        <span className={classes.boldText}> useful to both visually impaired and sighted shoppers, offering quick capturing of
                                            size as well as online information that guaranteed efficiency and independence</span>.
                                        <br /><br />
                                    </Typography>
                                    <Typography sx={{ display: { xs: 'none', lg: 'block' } }} variant='caption'>
                                        right: site testing with sighted participants at The Matchbox<br />
                                        bottom left: team Able working hard in the Brown Design Workshop!<br />
                                        bottom center: concept testing with earlier iteration with stakeholder at INSIGHT<br />
                                        bottom right: site testing with stakeholder! She was very satisfied with the experience<br />
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item lg={1} />
                                <Grid item xs={10} lg={4}>
                                    <img src={img['AssistiveHanger02.png']} className={classes.imgFitContent} alt='Assistive Hanger user testing' />
                                </Grid>
                            </Grid>
                            <img src={img['AssistiveHanger03.png']} className={classes.imgFitContent} alt='Assistive Hanger user testing' />
                        </div>

                        {/* price tag */}
                        <div className={classes.margin}>
                            <Typography style={{ padding: '0 24px' }} variant='h1'>Assistive Price Tag</Typography>
                            <GridFormat>
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item lg={1} />
                                <Grid item xs={10} lg={6}>
                                    <img src={img['Pricetag01.png']} className={clsx(classes.imgFitContent, classes.margin2)} alt='Price Tag' />
                                </Grid>
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item lg={1} />
                            </GridFormat>
                            <Grid container spacing={1}>
                                <Grid item xs={1} lg={2} />
                                <Grid item lg={8} xs={10}>
                                    <img src={img['Pricetag02.png']} className={classes.imgFitContent} alt='Price Tag' />
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={4} lg={3}>
                                    <Typography variant='body2'>Embossing</Typography>
                                    <Typography variant='body1'>Size & Price</Typography>
                                </Grid>
                                <Grid item xs={3} lg={3}>
                                    <Typography variant='body2'>Braille</Typography>
                                    <Typography variant='body1'>Size & Price</Typography>
                                </Grid>
                                <Grid item xs={3} lg={2}>
                                    <Typography variant='body2'>QR Code</Typography>
                                    <Typography variant='body1'>Item page</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={12} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={4}>
                                    <img src={img['Pricetag03.png']} className={classes.imgFitContent} alt='Price Tag' />
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid className={classes.justifyContent} item xs={10} lg={4}>
                                    <div>
                                        <Typography variant='body1'>
                                            When we go shopping, some of the most important factors to buy an item or even trying one on are price and size.
                                            The price tag was carefully designed using the contrasting colors and typeface for legibility and quickly acquiring
                                            these information. Inside the tag, shoppers may scan the QR code that will take them to the according page on our
                                            app to acquire text/audio description. The size, price, and QR code are embossed and/or written in braille. Our
                                            test participants indeed appreciated these design choices for they were
                                            <span className={classes.boldText}> easily able to read all key information, which was before one of the most
                                                frustrating parts of shopping</span>.
                                            <br /><br />
                                        </Typography>
                                        <Typography sx={{ display: { xs: 'none', lg: 'block', } }} variant='caption'>
                                            top: detail photos of embossing, braille and QR code<br />
                                            left: concept testing with earlier prototype with stakeholder<br />
                                            bottom left: price tag on The Matchbox’s merchandise, displayed in store<br />
                                            bottom right: Me on the laser cutter making the price tags! Don’t forget to put a smile on in the shop! :3
                                        </Typography>
                                    </div>
                                    <img src={img['Pricetag04.png']} className={classes.imgFitContent} alt='Price Tag' />
                                </Grid>
                            </Grid>
                        </div>

                        {/* multisensory station */}
                        <div>
                            <Cover
                                img='MultisensoryStation01.png'
                                title='Multisensory Station'
                                lineHeight='.645'
                                textAlign='left'
                                color='#333333'
                                textBottom='column-reverse'
                                zIndex='1'
                            />
                            <Grid container spacing={3}>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={3}>
                                    <img src={img['MultisensoryStation02.png']} className={classes.imgFitContent} alt='Multisensory Station' />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={3}>
                                    <Typography variant='body1'>
                                        At the center of the store is the multisensory station, where shoppers can bring items regardless of store
                                        merchandize or their own clothes, place the clothing in front of the sensor, and depending on the item color,
                                        it will play a designated tune.
                                        <br /><br />
                                        For the visually impaired, this experience allows them to <span className={classes.boldText}> feel the joy of
                                            perceiving color using hearing which is often their dominant receptor</span>. Joy was in fact one of the key
                                        emotions we aimed to trigger since in-store shopping was seen as a chore and very much not enjoyable.
                                        <br /><br />
                                        This experience is really less so about accurately helping one pick out color, which is already achieved by our
                                        assistive products, but more so about encouraging visually impaired and sighted shoppers to explore and play
                                        during shopping.
                                        <br /><br />
                                    </Typography>
                                    <Typography variant='caption'>
                                        upper left: multisensory station mockup hung from ceiling, sensors grounded in a white housing<br />
                                        right: working prototype demonstration
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={4}>
                                    <video className={classes.imgFitContent} src={img['MultisensoryVid01.mp4']} controls id="video" />
                                </Grid>
                            </Grid>
                            <div className={classes.negMargin}>
                                <Grid className={classes.arrows} container spacing={3}>
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={4}>
                                        <img src={img['MultisensoryStation03.png']} className={classes.imgFitContent} alt='Multisensory Station user testing' />
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={4}>
                                        <Typography variant='body1'>
                                            Our team was able to test the working prototype with 3 sighted participants, who found the experience to be fun and
                                            engaging. Some interesting feedbacks were:
                                            <br /><br />
                                            <span className={classes.italic}>“I could also easily see this being used for child education. Being able to hear color
                                                seems like a great way to learn and play with color!”
                                                <br /><br />
                                                “As a person who loves music, I think this would be awesome if the partnering store had to option choose the tune to
                                                narrate their brand through music and communicate with customers.”</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <Grid className={classes.arrows} container spacing={3}>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={10} lg={3}>
                                    <div>
                                        <Typography variant='body1'>
                                            I took the main role in designing, prototyping and testing the multisensory station and boy it was a HUGE learning
                                            experience for me!
                                            <br /><br />
                                            I deployed various tools to create the prototype using C++ programing with Arduino, schematics design for
                                            energetically efficient wiring of solenoids, RGB sensor and ultrasonic sensor, 3d modeling with SolidWorks to
                                            design the housing, Cura to designate the right 3d printing settings so that the housing can durably and safely
                                            host all electrical parts.
                                            <br /><br />
                                        </Typography>
                                        <Typography sx={{ display: { xs: 'none', lg: 'block', } }} variant='caption'>
                                            right: code setup on Arduino IDE<br />
                                            right bottom: schematics diagram<br />
                                            left: screenshot on SolidWorks and Cura
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={10} lg={5}>
                                    <img src={img['MultisensoryStation04.png']} className={classes.imgFitContent} alt='Multisensory Station user testing' />
                                </Grid>
                                <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                <Grid item xs={1} />
                                <Grid sx={{ display: { xs: 'none', lg: 'block', } }} item lg={6} />
                                <Grid item xs={10} lg={5}>
                                    <img src={img['MultisensoryStation05.png']} className={clsx(classes.imgFitContent, classes.padding)} alt='Multisensory Station user testing' />
                                </Grid>
                            </Grid>
                            <Box className={classes.negMargin2}>
                                <Grid container alignItems='center' spacing={3}>
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid xs={10} lg={4}>
                                        <img src={img['MultisensoryStation06.png']} className={classes.imgFitContent2} alt='Multisensory Station print setup' />
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={3}>
                                        <Typography variant='body1'>
                                            You might be wondering, why is this thing a semi-cone shaped? After doing multiple sound tests on rapidly
                                            prototyped housings using different materials , I discovered that the metal keys cannot be suspended at a 90
                                            degrees angle since the nails that hold them together puts too much force on the metal, making the key vibration
                                            dimmer. I decided the housing to have a 20 degrees slope throughout so that the keys have minimized pressure
                                            applied to itself.
                                            <br /><br />
                                        </Typography>
                                        <Typography sx={{ display: { xs: 'none', lg: 'block', } }} variant='caption'>
                                            upper left: cross-section view of the housing. The housing was designed with the minimum material needed to reduce
                                            printing time, but still durable to hold all parts<br />
                                            left: setting up on Cura using customized settings on wall thickness, infill density and infill pattern for maximum
                                            durability.<br />
                                            bottom: different housing testing using wood, acrylic and metal<br />
                                            right: sound test with the final prototype
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className={classes.negMargin2}>
                                <Grid className={classes.alignItemsEnd} container spacing={0}>
                                    <Grid item xs={1} lg={3} />
                                    <Grid item xs={10} lg={6}>
                                        <img src={img['MultisensoryStation07.png']} className={classes.imgFitContent} alt='Multisensory Station user testing' />
                                    </Grid>
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid sx={{ display: { xs: 'block', lg: 'none', } }} item xs={1} />
                                    <Grid item xs={10} lg={3}>
                                        <video className={classes.imgFitContent} src={img['MultisensoryVid02.mp4']} controls id="video" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                        {/* learning outcomes */}
                        <Heading
                            header='LEARNING OUTCOMES'
                            headerLg={4}
                            caption='In this project we practiced so many disciplines of design and engineering including ux research, editorial design, 
                            graphic design, product design, rapid prototyping, interaction design, interior design, architecture, electrical engineering, 
                            software engineering and all of these for accessibility. My teammates and I taught ourselves as well as each other to acquire 
                            these skills to bring our designs to life.'
                            caption3='Furthermore, we had to learn to be humble and educate ourselves in how to design and even interact with users. With 
                            fewer resources to draw inspiration from due to the problem space being focused on a marginalized user group, we took an extra 
                            step to conduct research from direct resources including multiple accessibility guidelines, real users, and industry experts to 
                            make effective and empathetic design decisions.'
                            captionLg={4}
                        />

                    </div>

                </div>

            </ThemeProvider>
        </StyledEngineProvider>
    );
}