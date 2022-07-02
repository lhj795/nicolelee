import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({
    wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
        position: 'fixed',
        width: 'calc(100% - 32px)',
        // zIndex: '100',
        mixBlendMode: 'overlay',
    },
    home: {
        textDecoration: 'none',
        fontFamily: 'NeueHaasDisplayRoman',
        fontSize: 'clamp(20px, 1.563rem, 25px)',
        cursor: 'pointer',
    },
    navBarItem: {
        fontFamily: 'NeueHaasDisplayRoman',
        fontSize: 'clamp(16px, 1.25rem, 20px)',
        lineHeight: '1.25',
    },
    navBarItemHover: {
        fontFamily: 'NeueHaasDisplayMedium',
        fontSize: 'clamp(16px, 1.25rem, 20px)',
        lineHeight: '1.25',
    },
    link: {
        textDecoration: 'none',
    },
    navBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    }
}));

function NavBarItem(props) {
    const classes = useStyles();
    const [active, setActive] = useState(false);

    const onHover = (event) => {
        setActive(true);
    };
    const onLeave = (event) => {
        setActive(false)
    };

    const hoveredStyle = (active) ? classes.navBarItemHover : classes.navBarItem;
    const selectedStyle = (props.children===props.selected) ? classes.navBarItemHover : hoveredStyle;


    return (
        <Link 
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={classes.link}
            to={props.link}
            style={{color: props.color}}
        >
            <div className={selectedStyle}>
                {props.children}
            </div>
        </Link>
    )
}

export default function Base(props) {
    const classes = useStyles(props);
    
    return (
        <div className={classes.wrap} style={{filter: props.filter, zIndex: props.zIndex, mixBlendMode: props.mixBlendMode}}>
            <Link className={classes.home} style={{color: props.color}} to='/'>
                Nicole Lee
            </Link>
            <div className={classes.navBar}>
                <NavBarItem
                    link={'/'}
                    children={'Home'}
                    color={props.color}
                />
                <NavBarItem
                    link={'/About'}
                    children={'About'}
                    color={props.color}
                />
            </div>
        </div>
    );
}
