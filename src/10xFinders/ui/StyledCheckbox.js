import React from 'react';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        padding: "0 !important"
    },
    icon: {
        borderRadius: '10%',
        marginRight: ".520833333vw",
        width: "min(20px,1.041666666vw)",
        height: "min(20px, 1.041666666vw)",
        minWidth: "16px",
        minHeight: "16px",
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
            boxShadow: 'none',
            background: '#EBEBEB',
        },
    },
    checkedIcon: {
        backgroundColor: '#356BBA',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        boxShadow: 'inset 0 0 0 2px rgba(53,107,186,1) !important',
        '&:before': {
            display: 'block',
            width: 20,
            height: 20,
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
export function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple={true}
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}
