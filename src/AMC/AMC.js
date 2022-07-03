import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
import clsx from 'clsx';
import { Typography, Grid } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GridFormat, Heading } from '../components/ui/UIComponents';

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
        margin: '35vh 0 10vh 0',
    },
    margin3: {
        margin: '50vh 0 0 0',
    },
    pZ: {
        paddingLeft: '0 !important',
    },
    maxHeight: {
        height: '100vh',
        display: 'flex'
    },
    imgMixBlendMode: {
        mixBlendMode: 'hard-light',
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
    positionAbsolute: {
        position: 'absolute',
    },
    justifyCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    cover: {
        height: '70vh',
        position: 'absolute',
        right: '0',
        top: '5vh',
    },
    coverContainer: {
        position: 'absolute',
        top: '0',
        height: '75vh',
        width: '100%',
        color: '#FFFFFF',
        background: '#881B32',
        zIndex: '-1',
    },
    coverLogo: {
        paddingTop: '25vh',
        width: '100%',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    coverDetails: {
        position: 'absolute',
        bottom: '0',
    },
    abstractContainer: {
        marginTop: '75vh',
    },
    designProcessContainer: {
        marginTop: '10vh',
        color: '#CE2540'
    },
    designProcessBg: {
        background: '#CE2540',
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
        padding: '2vh !important',
        width: 'calc(100% - 16px)',
        textAlign: 'center',
    },
    designProcessLine: {
        width: 'calc(100% + 24px)',
        height: '1px',
        background: '#FFFFFF',
    },
    lineContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0 !important',
    },
    arrow: {
        border: '1px solid white',
        borderBottom: 'none',
        height: '2.5vh',
        marginBottom: '-16px',
        width: '63%',
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
    appCover: {
        background: '#CE2540',
        height: '100vh',
        margin: '30vh 0 10vh 0',
    },
    ticketCover: {
        background: '#CE2540',
        height: '80vh',
        margin: '30vh 0 10vh 0',
    },
    coverTitleWhite: {
        color: 'white',
        lineHeight: '0.8',
        padding: '0 24px',
        height: '100vh',
    },
    valet: {
        lineHeight: '1',
        textAlign: 'right',
        color: '#CE2540',
    },
    valetCaption: {
        lineHeight: '1',
        textAlign: 'right',
        color: '#333333',
    },
    concessionCaption: {
        color: 'white',
        left: 'calc(16.6666666vw + 72px)',
        marginTop: '10vh'
    },
    giftshopCaption: {
        color: 'black',
        right: '8.33333vw',
        marginTop: '85vh',
        zIndex: '1',
    },
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
        <div style={{ height: props.customHeight, flexDirection: props.textBottom, background: props.bg }} className={clsx(classes.margin, classes.maxHeight)}>
            <img src={img[props.img]} className={clsx(classes.imgMixBlendMode, classes.imgFitContent, classes.positionAbsolute)} alt='' />
            <Typography style={{ color: props.color, lineHeight: props.lineHeight, textAlign: props.textAlign, zIndex: props.zIndex, padding: '0 24px' }} variant='h1'>{props.title}</Typography>
        </div>
    )
}

export default function AMC(props) {
    const classes = useStyles(props);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>

                    <Base color='black' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <img src={img['AMCCover.png']} className={classes.cover} alt='10xFinders' />
                        <Grid container spacing={3}>
                            <Grid item xs={2} />
                            <Grid item xs={3}>
                                <img className={classes.coverLogo} src={img['AMCLogo.svg']} alt='10xFinders' />
                            </Grid>
                            <Grid item xs={7} />
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <Typography variant='h4'>
                                    Revolutionized Movie Watching Experience
                                </Typography>
                            </Grid>
                            <Grid item xs={4} />
                        </Grid>
                        <Grid container spacing={3} className={classes.coverDetails}>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Role</span>: RISD Industrial Design Advanced Studio: Business of Product Design - Final Project
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Role</span>: Research, Concept, Visual
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Tools</span>: Adobe Suite, Rhino
                                </Typography>
                            </Grid>
                            <Grid item xs={3} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* abstract */}
                    <div className={classes.abstractContainer}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} />
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <Typography variant='body2'>
                                    Abstract
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='body2'>
                                    Involvement
                                </Typography>
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={12} />
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <Typography variant='body1'>
                                    Going to the theater is not just about going into a dark room and watching a movie on a large screen. The journey starts
                                    when a person is interested in a movie and ends when walking out of the theater. AMC World is a comprehensive movie
                                    experience that reimagines every step of the journey to be better in quality and to be more enjoyable. AMC World offers an
                                    extended entertainment experience from the good old movie watching to virtual experiences of being part of a movie, then
                                    taking the memories to keep after the experience.
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='body1'>
                                    I was not affiliated or in any way officially connected with the AMC Theatres. This project was based solely on the
                                    research, ideation, and execution of my teammate Priyanshi Bareja and I. We both actively participated on every part of the
                                    project under the supervision of the co-founder of Ximedica, Aidan Petrie and his colleague Ayan Bhandari. As a student of
                                    RISD Industrial Design Advanced Studio, Business of Product Design, we were assigned to choose a brand and redesign the
                                    experience with the goal of 20% business growth.
                                </Typography>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>
                    </div>

                    {/* design process */}
                    <div className={classes.designProcessContainer}>
                        <Grid container>
                            <Grid item xs={2} />
                            <Grid item lg={8} xs={10}>
                                <Typography variant='h5'>DESIGN PROCESS</Typography>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>
                        <div className={classes.designProcessBg}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} />
                                <Grid item xs={2} />
                                <Grid item lg={8} xs={10}>
                                    <div className={classes.arrow} />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={2} />
                                <Grid item xs={4}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>User Research</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Brand Strategy</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid className={classes.lineContainer} item xs={1}>
                                    <div className={classes.designProcessLine} />
                                </Grid>
                                <Grid className={classes.pZ} item xs={3}>
                                    <div className={classes.designProcess2}>
                                        <Typography variant='body1'>Redesign</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={12} />
                                <Grid item xs={2} />
                                <Grid item xs={2}>
                                    <Typography variant='body2'>Learning</Typography>
                                </Grid>
                                <Grid item xs={3} />
                                <Grid className={classes.pZ} item xs={2}>
                                    <Typography variant='body2'>Redesign</Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={2} />
                                <Grid item xs={2} />
                                <Grid item xs={2}>
                                    <Typography variant='body1'>
                                        User survey, user interviews, site visits, user journey mapping and synthesis.
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} />
                                <Grid className={classes.pZ} item xs={2}>
                                    <Typography variant='body1'>
                                        Identifying areas of opportunity during the user journey to implement redesigns and introduce new experiences.
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={12} />
                                <Grid item xs={12} />
                            </Grid>
                        </div>
                    </div>

                    {/* user research */}
                    <div>
                        <Heading
                            header='USER RESEARCH'
                            headerLg={4}
                            caption='To identify business opportunities, my team deeply investigated the brand to understand its consumer basis, successes, and 
                            challenges. We visited sites with high visitors as well as low; visited competitor’s sites; conducted surveys and interviews on 
                            movie-goers. In this process we discovered that movie brands generally have similar to almost identical experience, which makes 
                            consumers not prioritize the theater brand when deciding to go to one.'
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item xs={4}>
                                <img src={img['UserResearch01.svg']} className={classes.imgFitContent} alt='AMC theaters' />
                                <Typography variant='caption'>
                                    <br />Credit: Patrick T. Fallon/Bloomberg via Getty Images
                                </Typography>
                            </Grid>
                            <Grid className={classes.justifyCenter} item xs={4}>
                                <Typography variant='body2'>AMC? Hmm yeah it's a great theater…</Typography>
                                <Typography variant='body1'>
                                    <br />AMC Entertainment Holdings, Inc. is an American movie theater chain that is the largest in the world, ahead of Regal
                                    and Cinemark Theatres. Despite their success, AMC fails to appeal to movie-goers as an outstanding brand over competitors.
                                    Movie-goers in fact, do not recognize a significant difference among brands and furthermore, brand is not really a critical
                                    factor in deciding a where to watch a movie.
                                </Typography>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item xs={4}>
                                <img src={img['UserResearch02.svg']} className={classes.imgFitContent} alt='research graph 1' />
                                <Typography variant='caption'>
                                </Typography>
                            </Grid>
                            <Grid className={classes.justifyCenter} item xs={4}>
                                <Typography variant='body2'>Do you regularly go to the movies?</Typography>
                                <Typography variant='body1'>
                                    <br />During the beginning stage of our research, a survey was conducted among 38 people between the ages of 20’s and 40’s.
                                    When asked how often they go to the movies, <br /><br />
                                </Typography>
                                <Typography variant='h2'>90.9%</Typography>
                                <Typography variant='body1'><br />answered that they visit the theater on a regular basis.</Typography>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item xs={4}>
                                <img src={img['UserResearch03.svg']} className={classes.imgFitContent} alt='research graph 1' />
                                <Typography variant='caption'>
                                </Typography>
                            </Grid>
                            <Grid className={classes.justifyCenter} item xs={4}>
                                <Typography variant='body2'>Do you care about the brand?</Typography>
                                <Typography variant='body1'>
                                    <br />However these movie-goers also answered that they do not care about which movie theater brand they go to when deciding
                                    to visit one. Rather, they care more about distance of theater from their location and show timings that works well for
                                    their party.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* design opportunity */}
                    <div>
                        <Heading
                            header='DESIGN OPPORTUNITY'
                            headerLg={4}
                            caption='In research, it was found that AMC Theatre offers various loyalty programs which differentiates the brand from competitors. 
                            AMC Theatres’ main consumers are frequent movie-goers. In other words, they are movie fanatics. Given this fact, the redesigned 
                            AMC experience focuses on their needs and demands. Our key values were to make the start-to-end journey memorable. Our mission is to offer a 
                            unique service that is superior to other brands.'
                            caption3='The opportunity area is increasing the time spent by customers by expanding the entertainment experience for the movie 
                            fanatics. The redesigns refines key attributes of the current services and products, and introduces new experiences. The main 
                            goal is to elevate the outcome of each experience and products’ effectiveness from the customers’ usual expectation. '
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item xs={1}>
                                <img src={img['Leah.svg']} className={classes.imgFitContent} alt='Leah' />
                            </Grid>
                            <Grid className={classes.persona} item xs={3}>
                                <Typography variant='h3'>Leah Solomon</Typography>
                                <div className={classes.personaDemo}>
                                    <div>
                                        <Typography variant='body1'>Job</Typography>
                                        <Typography variant='body1'>Location</Typography>
                                        <Typography variant='body1'>Archetype</Typography>
                                        <Typography variant='body1'>Goals</Typography>
                                    </div>
                                    <div>
                                        <Typography variant='body1'>Barista</Typography>
                                        <Typography variant='body1'>Metropolitan City</Typography>
                                        <Typography variant='body1'>The Superhero Geek</Typography>
                                        <Typography variant='body1'>
                                            1. Easily coordinate with friends to plan movie-going, <br />
                                            2. Collect superhero goods
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={2} />
                        </GridFormat>
                        <img src={img['DesignOpportunity01.svg']} className={classes.imgFitContent} alt='journey map' />
                        <GridFormat>
                            <Grid item xs={2}>
                                <Typography variant='body2'>Leah's visit at the new AMC</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='body1'>
                                    Leah's journey starts by receiving notification via AMC app on a recommended movie release, then invites her friend to
                                    reserve seats together. Upon entering the theater, Leah receives her premium admission pass. While waiting for the movie to
                                    start, Leah visits the entertainment zone, where she plays Marvel VR games. After the fun time at the entertainment zone,
                                    Leah enters
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='body1'>
                                    the auditorium where she finds her premium sofa seat. During the movie, Leah stops by the Sky Lounge located in the
                                    auditorium, to refill her cup of soda and use the restroom, without missing any scenes. In AMC, every item our customer
                                    receives do not go to waste. Leah leaves AMC with her movie poster printed ticket, and the reusable cup that is designed
                                    after her favorite character.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* solution */}
                    <div>
                        <Heading
                            header='SOLUTION'
                            headerLg={4}
                            caption='How was the goal of the project, 20% growth in the business, achieved? The proposal is increasing customer traction by 
                            lengthening the duration of an AMC visit. The experience comprises a wholistic service experience that focuses on convenience, 
                            comfort, and attraction for the movie fanatics. Designs include redesigns of existing experiences at the theater such as the arcade 
                            to increase engagement, redesigns of products including tickets, concession packaging themed after mainstream movies and added 
                            experiences including sky lounge, sofa seats and gift shop to attract the target consumer group.'
                            captionLg={4}
                        />

                        {/* app */}
                        <div>
                            <Grid className={classes.appCover} container>
                                <Typography className={clsx(classes.positionAbsolute, classes.coverTitleWhite)} variant='h1'>
                                    Mobile App
                                </Typography>
                                <Grid item xs={2} />
                                <Grid item xs={3}>
                                    <Typography className={classes.margin3} variant='body1' style={{ color: 'white' }}>
                                        The redesigned mobile app has added features including notifications on movies by user preference, and social
                                        interactions for remote ticket purchases with friends.
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid className={classes.justifyCenter} item xs={6}>
                                    <img src={img[`App01.svg`]} className={classes.imgFitContent} alt='AMC App' />
                                </Grid>
                            </Grid>
                            <GridFormat>
                                <Grid item xs={3}>
                                    <img src={img[`App02.svg`]} className={classes.imgFitContent} alt='AMC App' />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid className={classes.justifyCenter} item xs={4}>
                                    <Typography variant='body2'>
                                        Personalized Notifications
                                    </Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        From research findings that movie-goers prioritize movie show timings and distance over brand, the app features
                                        personalized notifications to alert users of their favorite movies releasing at their preferred theater
                                        locations and showings during preferred times.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                            <GridFormat>
                                <Grid item xs={3}>
                                    <img src={img[`App03.svg`]} className={classes.imgFitContent} alt='AMC App' />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid className={classes.justifyCenter} item xs={4}>
                                    <Typography variant='body2'>
                                        Remote Booking with Friends
                                    </Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        To ease the process of reserving seats with friends who are in remote locations, users may invite friends to
                                        choose preferred seats simultaneously, then check out separately.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* admission pass */}
                        <div>
                            <Grid className={classes.ticketCover} container>
                                <Typography className={clsx(classes.positionAbsolute, classes.coverTitleWhite)} variant='h1'>
                                    Admission Pass
                                </Typography>
                                <Grid item xs={2} />
                                <Grid item xs={3}>
                                    <Typography className={classes.margin2} variant='body1' style={{ color: 'white' }}>
                                        Movie tickets often get left as garbage. This was seen as an opportunity to make the ticket an artifact that the movie
                                        fanatics can keep in the memory of the movie as well as the theater experience.
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid className={classes.justifyCenter} item xs={6}>
                                    <img src={img[`Ticket01.svg`]} className={classes.imgFitContent} alt='AMC App' />
                                </Grid>
                            </Grid>
                            <GridFormat>
                                <Grid item xs={4}>
                                    <img src={img[`Ticket02.svg`]} className={classes.imgFitContent} alt='AMC App' />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid className={classes.justifyCenter} item xs={3}>
                                    <Typography variant='body2'>
                                        3 Tiered Admission System
                                    </Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        Going to the theater isn’t solely about watching a movie. It’s also the popcorn, the games or spending a good time with
                                        loved ones. You don’t really want to do that if you don’t want to watch a 2 hour long movie that you’re not interested in!
                                        <br /><br />
                                        The new admission pass removes this frustration. The passes are divided into 3 tiers: entertainment pass, general
                                        admission pass and premium pass.
                                        <br /><br />
                                        With the entertainment pass, customers may access the entertainment area, concession stands and gift shop. With the
                                        general admission pass, customers may access all of the area above and admission to their designated movie with the
                                        movie poster printed on the pass. With the premium pass, customers have an upgrade sofa seating for movies, and access
                                        to the Sky Lounge.
                                    </Typography>
                                </Grid>
                            </GridFormat>
                        </div>

                        {/* valet */}
                        <Grid className={classes.margin} container spacing={3}>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <Typography className={classes.valet} variant='h1'>Valet Service</Typography>
                                <Typography className={classes.valetCaption} variant='body1'>Providing convenience to all mobile movie-goers.</Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={5}>
                                <img src={img[`Valet.svg`]} className={classes.imgFitContent} alt='AMC App' />
                            </Grid>
                        </Grid>

                        {/* entry gates */}
                        <div>
                            <Cover
                                img='Gate01.svg'
                                title='Entry Gates'
                                lineHeight='.625'
                                textAlign='left'
                                color='white'
                                textBottom='column-reverse'
                                zIndex='1'
                            />
                            <Grid className={classes.margin} container spacing={3}>
                                <Grid item xs={2} />
                                <Grid className={classes.justifyCenter} item xs={4}>
                                    <Typography variant='body2'>Automated Entry System</Typography>
                                    <Typography variant='body1'>
                                        <br />During site visits at AMC, it was noticed that most theaters have a check in area where an employee checks the
                                        customer’s ticket and guide them towards the theater hall. With AMC’s value of innovation, why not make this automated?
                                        <br /><br />
                                        With a purchase of one of the AMC admission passes, the customer now may check in to the entertainment area through the
                                        newly designed entry gate. This system is hypothesized reducing the cost of labor that had only been needed for such a
                                        tedious task. For the customers, checking-in becomes quicker and autonomous.
                                        <br /><br />
                                        The design references various public transportation systems that use automated gate system to simulate the usual user
                                        behavior. The gate is streamlined to reflect AMC's brand guidelines and values.
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5}>
                                    <img src={img[`Gate02.svg`]} className={classes.imgFitContent} alt='AMC App' />
                                </Grid>
                            </Grid>
                        </div>

                        {/* concession */}
                        <div>
                            <Typography className={clsx(classes.positionAbsolute, classes.concessionCaption)} variant='body1'>
                                The entertainment area features AMC exclusive concessions stands. <br />
                                Concession offers gourmet food items that come in movie-themed packaging.
                            </Typography>
                            <Cover
                                img='Concession01.svg'
                                title='Concession'
                                lineHeight='.625'
                                textAlign='right'
                                color='white'
                                textBottom='column-reverse'
                                zIndex='1'
                            />
                            <img src={img[`Concession02.svg`]} className={classes.imgFitContent} alt='concession packaging' />
                            <img src={img[`Concession03.svg`]} className={classes.imgFitContent} alt='concession stands' />
                        </div>

                        {/* arcade */}
                        <div>
                            <Cover
                                img='Arcade01.svg'
                                title='ARCADE EXPERIENCE'
                                lineHeight='.64'
                                textAlign='left'
                                color='black'
                                textBottom='column-reverse'
                            />
                            <Grid container spacing={3}>
                                <Grid item xs={2} />
                                <Grid item xs={4} className={classes.justifyCenter}>
                                    <Typography variant='body2'>Reimagined Arcade Experience</Typography>
                                    <Typography variant='body1'>
                                        <br />During site visits at AMC, it was noticed theaters equipped with an arcade area barely has any engagement. The
                                        goal in the redesigned arcade is to take advantage of AMC’s value of innovation and introduce immersive gaming and
                                        movie experience via VR.
                                        <br /><br />
                                        The proposal is that games will be themed after mainstream movies. The target persona Leah now not only feels the joy
                                        to watch her favorite movie, but also be a part of it through immersive gaming experience.
                                        <br /><br />
                                        With increased operation of the arcade, it hypothesizes an increased time spent by customers thus increased revenue.
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5}>
                                    <img src={img[`Arcade02.svg`]} className={classes.imgFitContent} alt='AMC VR' />
                                </Grid>
                            </Grid>
                        </div>

                        {/* movie */}
                        <div>
                            <Cover
                                img='Theater01.svg'
                                title='Movie Experience'
                                lineHeight='.81'
                                textAlign='right'
                                color='white'
                                textBottom='column'
                                zIndex='1'
                            />
                            <Grid container spacing={3}>
                                <Grid item xs={12} />
                                <Grid item xs={5}>
                                    <img src={img[`Theater02.png`]} className={classes.imgFitContent} alt='chair' />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid className={classes.justifyCenter} item xs={3}>
                                    <Typography variant='body2'>
                                        Bringing the comfort of home to the theatre
                                    </Typography>
                                    <Typography variant='body1'>
                                        <br />Few things in life feel as cozy as snuggling up in your sofa to watch a movie. The new AMC Sofa emulates the
                                        comfort and togetherness of being at home,  Providing movie fanatics the best movie watching experience with their
                                        loved ones.
                                        <br /><br />
                                        We envision to position the AMC Sofas in the first row as well as the back rows of the theatre. With the comfort they
                                        provide, these special sofas develop a strong incentive for our customers to occupy the first few rows of our theatres
                                        as well.
                                    </Typography>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} />
                                <Grid item xs={12} />
                                <Grid item xs={2} />
                                <Grid className={classes.justifyCenter} item xs={3}>
                                    <Typography variant='body2'>
                                        Sky Lounge: An uninterrupted movie experience
                                    </Typography>
                                    <Typography variant='body1'>
                                        <br />A common frustration of watching a movie in the theatre is that we don't have control over the movie or the
                                        people around us. The Horizon Lounge will be AMC's one-of-a-kind answer to that problem. An area located inside the
                                        theatre itself, the lounge is the perfect spot for refreshments allowing customers to still watch their favorite movies
                                        without the frustrations of missing out the best part!
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={5}>
                                    <img src={img[`Theater03.svg`]} className={classes.imgFitContent} alt='sky lounge' />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} />
                                <Grid item xs={12} />
                                <Grid item xs={5}>
                                    <img src={img[`Theater04.svg`]} className={classes.imgFitContent} alt='chair' />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid className={classes.justifyCenter} item xs={3}>
                                    <Typography variant='body2'>
                                        Stubs Lounge
                                    </Typography>
                                    <Typography variant='body1'>
                                        <br />An added perk of purchasing the premium pass is having access to the stubs lounge where customers at any point
                                        after the movie, may visit, enjoy a drink and talk about the movie. (psst…with out spoiling the movie to anybody else!)
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        {/* gift shop */}
                        <div>
                            <Typography className={clsx(classes.positionAbsolute, classes.giftshopCaption)} variant='body1'>
                            After the movie, customers may visit the AMC gift shop <br/>
                            that offers movie novelty items to take back home with them. <br/>
                            Making this the perfect ending to the New AMC journey!<br/>
                            </Typography>
                            <Cover
                                img='GiftShop.svg'
                                title='Gift Shop'
                                lineHeight='.81'
                                textAlign='left'
                                color='black'
                                textBottom='column'
                                zIndex='1'
                            />
                        </div>

                    </div>

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}