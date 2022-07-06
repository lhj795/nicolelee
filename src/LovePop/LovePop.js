import { Grid, StyledEngineProvider, ThemeProvider, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Base from '../Base';
import makeStyles from '@mui/styles/makeStyles';
import { TypographyTheme } from '../components/ui/Typography';
import { GridFormat } from '../components/ui/UIComponents';

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
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const img = importAll(require.context('./img', false, /\.(png|jpg|svg|mp4)$/));

export default function LovePop(props) {
    const classes = useStyles(props);

    var images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg"
    ];

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <Base className={classes.base} color='black' zIndex='1' mixBlendMode='darken' />
                <GridFormat>
                    <Grid item xs={10} lg={8}>
                        <Carousel
                            showArrows={true}
                        // onChange={onChange} 
                        // onClickItem={onClickItem} 
                        // onClickThumb={onClickThumb}
                        >
                            {images.map((item, index) => {
                                console.log(item);
                                return <div>
                                    <img className={classes.imgFitContent} src={img[item]} alt='10xFinders' />
                                    <Typography variant='body1'>Legend {index + 1}</Typography>
                                </div>;
                            })}
                        </Carousel>
                    </Grid>
                </GridFormat>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}