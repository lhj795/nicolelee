import React, {useState} from 'react';
import withStyles from '@mui/styles/withStyles';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Icon from '@mui/material/Icon';
import EllipsisDefault from './img/EllipsisDefaultImage.svg'
import EllipsisHover from './img/EllipsisHoverImage.svg'


const Button10x = withStyles((theme) => ({
    root: {
        fontFamily: "GTWalsheimPro-Medium",
        fontSize: 'clamp(14px, .875rem, 20px) !important',
        height: '42px',
    },
    text: {
        color: "#356BBA !important",
        "&:hover" :{
            color: "#1B4077 !important",
        },
        "&:selected" :{
            color: "#152845 !important",
        },
        "&:disabled" :{
            color: "rgba(53, 107, 186, .5)",
        }
    },
    outlined: {
        borderColor: "#356BBA",
        borderWidth: "2px",
        color: "#356BBA",
        "&:hover" :{
            borderColor: "#1B4077",
            borderWidth: "2px",
            color: "#1B4077",
            backgroundColor: "white",
        },
        "&:selected" :{
            borderColor: "#152845",
            borderWidth: "2px",
            color: "#152845",
        },
        "&:disabled" :{
            borderColor: "rgba(53, 107, 186, .5)",
            color: "rgba(53, 107, 186, .5)",
        }
    },
    contained: {
        color:"#FFFFFF",
        backgroundColor: "#356BBA",
        boxShadow: "none",
        "&:hover" :{
            backgroundColor: "#1B4077",
            boxShadow: "none",
        },
        "&:selected" :{
            backgroundColor: "#152845",
            boxShadow: "none",
        },
        "&:disabled" :{
            backgroundColor: "rgba(53, 107, 186, .5)",
            color: "rgba(255,255,255,.5)",
            boxShadow: "none",
        }
    },
    label:{
        textTransform:"capitalize !important",
    }
}))(Button);

// TODO chips aren't buttons and shouldn't be using it...
const ProtoChip = withStyles((theme) => ({
    root: {
        fontFamily: "GTWalsheimPro-Medium !important",
        textTransform: "inherit !important",
        fontSize:"clamp(12px, .75rem, 18px) !important",
        padding: "5px .625vw 5px .625vw !important",
        marginRight: ".78125vmin !important",
        backgroundColor: '#356BBA !important',
        '&:hover': {
          backgroundColor: '#1B4077 !important',
        },
    },
    outlined: {
        color: "#356BBA !important",
        borderRadius: "500px !important",
        borderColor: "#356BBA !important",
    },
    contained: {
        color: "#FFFFFF !important",
        borderRadius: "500px !important",
    }
}))(Button);

const RedChip = withStyles((theme) => ({
    root: {
        fontFamily: "GTWalsheimPro-Medium !important",
        textTransform: "inherit !important",
        fontSize:"clamp(12px, .75rem, 18px) !important",
        padding: "5px .625vw 5px .625vw !important",
        marginRight: ".78125vmin !important",
        "&:hover" :{
            backgroundColor: "#B71208 !important",
        },
    },
    contained: {
        color: "#FFFFFF !important",
        backgroundColor: "#D5342A !important",
        borderRadius: "500px !important",
    }
}))(Button);

const chipStyles = makeStyles(({
    icon: {
        fontSize:"clamp(12px, .75rem, 18px)",
        color: "#FFFFFF",
    },
    iconRoot: {
        height: 10,
        width: 30,
    },
    root: {
        color: 'white'
    },
}));

const ellipsisStyles = makeStyles(({
    ellipsis: {
        padding: 0,
        margin: 0,
    },
    iconRoot: {
        textAlign: 'center'
    }
}));


function Chip(props){
    const classes = chipStyles();
    const [hovered, setHovered] = useState(false);

    const {inNotList, toggleNot, remove, ...passedProps} = props;
    const Mychip = inNotList ? RedChip : ProtoChip;
    const body = (
        <Mychip
            variant="contained"
            disableElevation
            classes={{
                root: classes.root
            }}
            {...passedProps}
        >
        {props.children}
        </Mychip>

    );
    const body2 = (
        <Mychip
            variant="contained"
            disableElevation
            {...passedProps}
        >
        {props.children}
        <IconButton classes={{root: classes.iconRoot}} onClick={toggleNot}>
            <BlockRoundedIcon className={classes.icon} />
        </IconButton>
        <IconButton classes={{root: classes.iconRoot}} onClick={remove}>
            <ClearRoundedIcon className={classes.icon} />
        </IconButton>
        </Mychip>

    );
    return <ButtonGroup
        onMouseEnter={() => {setHovered(true)}}
        onMouseLeave={() => {setHovered(false)}}
    >
        {hovered ? body2 : body}
    </ButtonGroup>
}

function Ellipsis(props) {
    const classes = ellipsisStyles();
    const [active, setActive] = useState(false);
    const onHover = (event) => {
        setActive(true);
    };
    const onLeave = (event) => {
        setActive(false)
    };
    const EllipsisIcon = (active) ? EllipsisHover : EllipsisDefault;
    return (
    <Icon disableRipple disableTouchRipple disableFocusRipple classes={{root: classes.iconRoot}}>
        <img
            className={classes.ellipsis}
            src={EllipsisIcon}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            alt="menu icon"
        />
    </Icon>
    );
}

export {Button10x, Chip, Ellipsis}
