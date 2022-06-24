import React from 'react';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Radio from '@mui/material/Radio';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        marginRight: ".520833333vw",
        width: 'clamp(16px, 1.04166666vw, 32px)',
        height: 'clamp(16px, 1.04166666vw, 32px)',
        boxShadow: 'inset 0 0 0 1px rgba(141,176,227,1) !important',
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '1px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ffffff',
            boxShadow: 'inset 0 0 0 2px rgba(53,107,186,1) !important',
        },
        'input:disabled ~ &': {
            boxShadow: 'none !important',
            background: '#EBEBEB',
        },
    },
    checkedIcon: {
        backgroundColor: '#356BBA',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        boxShadow: 'inset 0 0 0 2px rgba(53,107,186,1) !important',
        '&:before': {
            display: 'block',
            width: 'clamp(16px, 1vmin, 32px)',
            height: 'clamp(16px, 1vmin, 32px)',
            backgroundImage: 'radial-gradient(#fff,#fff 0%,transparent 0%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#1B4077',
            opacity: '1',
            boxShadow: 'inset 0 0 0 2px rgba(27,64,119,1) !important',
        },
    },
});

// Inspired by blueprintjs
export function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
            icon={<span className={classes.icon}/>}
            {...props}
        />
    );
}
