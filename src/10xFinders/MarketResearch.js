import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid } from '@mui/material';
import { GridFormat } from '../components/ui/UIComponents';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./Data";
import "./styles.css";

const useStyles = makeStyles(({
    journeyItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: '27vh'
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
    marketImg: {
        width: '68%',
    },
    spaceBetween: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|jpg|svg|mp4)$/));

export function MarketWeb(props) {
    const classes = useStyles(props);

    return (
        <GridFormat>
            <Grid item xs={2} />
            <Grid item xs={3}>
                <Typography variant='body2'>Use Cases</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body2'>What's Missing?</Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid className={classes.spaceBetween} item xs={2}>
                <img src={img['Market01.svg']} className={classes.marketImg} alt='LinkedIn Recruiter' />
                {/* <Typography variant='body2'>LinkedIn Recruiter</Typography> */}
                <Typography variant='body1'>Talent Sourcing, Engagement & Collaboration Platform</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    LinkedIn Recruiter is a subscription-based service where recruiters can find candidates among its user database.
                    Recruiters can connect with candidates using the InMail features, and share profiles with team members or clients.
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Despite its influence and scale with over 675 million users, LinkedIn Recruiter allows
                    <span className={classes.boldText}> up to only 150 InMail messages</span> per month. Recruiters
                    often need to reach out to thousands of candidates within a limited time for the most constructive talent placements.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid className={classes.spaceBetween} item xs={2}>
                <img src={img['Market02.svg']} className={classes.marketImg} alt='Outreach' />
                {/* <Typography variant='body2'>Outreach</Typography> */}
                <Typography variant='body1'>Customer Relationship Management (CRM)</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Outreach is a sales engagement platform, where users can engage with customers. Recruiters particularly use the sequence
                    feature in which they can customize email threads, and schedule them to be sent to candidates and companies.
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    One of the biggest issue with a CRM system is that its <span className={classes.boldText}>data expires over time</span>.
                    Meaning, candidate information previously scraped from resumes and social profiles could become obsolete with changes in a
                    candidate's title, location, contact information, and more.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid className={classes.spaceBetween} item xs={2}>
                <img src={img['Market03.svg']} className={classes.marketImg} alt='Greenhouse' />
                {/* <Typography variant='body2'>Greenhouse</Typography> */}
                <Typography variant='body1'>Application Tracking System (ATS)<br /><br /></Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Greenhouse is an intelligent talent acquisition software. It takes the CRM databases and creates an algorithm in which it
                    parses the candidate information into categories then scans it to determine the qualification according to the user's
                    guided limits.
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Many leading ATS platforms <span className={classes.boldText}> fall short in targeting</span>. For instance, a recruiter
                    could be looking for software engineers, yet the results may include candidates who are no longer software engineers,
                    or not qualify or certain technical skill(s).
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid className={classes.spaceBetween} item xs={2}>
                <img src={img['Market04.svg']} className={classes.marketImg} alt='Crunchbase' />
                {/* <Typography variant='body2'>Crunchbase</Typography> */}
                <Typography variant='body1'>Business Analytics Database<br /><br /></Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Crunchbase is a platform for acquiring business insights about companies. Crunchbase information includes company funding
                    stage, investments, scale, industry, news and founding members and individuals in leadership positions.
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    One difficulty that recruiters feel when using Crunchbase is that they have to <span className={classes.boldText}>
                        re-direct from the current operation </span> to the Crunchbase website to find information about companies of their
                    candidates, clients, and/or potential business partners are from.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid className={classes.spaceBetween} item xs={2}>
                <img src={img['Market05.svg']} className={classes.marketImg} alt='Glassdoor' />
                {/* <Typography variant='body2'>Glassdoor</Typography> */}
                <Typography variant='body1'>Jobs and Career Community<br /><br /></Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Glassdoor is a community where users anonymously review, submit or view salaries of their current or previous companies.
                    Whereas Crunchbase provides business information, Glassdoor provides how well  companies provides experiences for their
                    employees.
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1'>
                    Similar to when using Crunchbase, recruiters have to <span className={classes.boldText}> move out their current operation
                    </span> looking up company information.
                </Typography>
            </Grid>
        </GridFormat>
    );
}

export function MarketMobile(props) {
    const classes = useStyles(props);

    const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, useCase, missing, missingBold, missing2 } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <Typography textAlign='center' variant='caption'>{name}</Typography>
              <Typography variant='body2'><br/>Use Cases</Typography>
              <Typography variant='body1'>{useCase}</Typography>
              <Typography variant='body2'><br/>What's Missing?</Typography>
              <Typography variant='body1'>
                {missing}
                <span className={classes.boldText}>{missingBold}</span>
                {missing2}  
              </Typography>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}