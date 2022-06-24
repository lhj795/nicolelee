import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Switch from '@mui/material/Switch';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: 48,
        // height: 24,
        width: "clamp(44px, 2.5vmin, 50px)",
        height: "clamp(20px, 1.25vmin, 26px)",
        padding: 0,
      },
    switchBase: {
        padding: 2,
        '&$checked': {
          transform: 'translateX(24px)',
          color: "#ffffff",
          '& + $track': {
            backgroundColor: '#356BBA',
            opacity: 1,
            border: 'none',
          },
        },
      },

  thumb: {
    width: "clamp(16px, 1vmin, 20px)",
    height: "clamp(16px, 1vmin, 20px)",
    color: "#ffffff",
    border: 'none',
    boxShadow: "2px 2px 4px rgba(21, 40, 69, 0.15) !important",
  },
  track: {
    boxShadow: "inset 2px 2px 4px rgba(27, 64, 119, 0.3) !important",
    borderRadius: 24 / 2,
    backgroundColor: "#D4E2F8",
    opacity: 1,
    position: "absolute",
  },
  checked: {},
}));

function StyledSwitch(props){
    const classes = useStyles();
    return (
        <Switch
    focusVisibleClassName={classes.focusVisible}
    disableRipple
    classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
    }}
    {...props}
        />
    );
};

export {StyledSwitch};