import React, { useState } from 'react';
import { Link } from "react-router-dom";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({
}));

export default function Base(props) {
    const classes = useStyles(props);
    
    return (
        <div className={classes.wrap}>
        </div>
    );
}