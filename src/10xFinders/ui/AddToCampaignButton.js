import React from 'react';
import { styled } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { MenuItem, FormControl, ListSubheader, Select, InputBase } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    selectMenu: {
        width: '13.85vw',
    },
    placeholderText: {
        zIndex: '1',
        color: '#8DB0E3',
        fontFamily: 'GTWalsheimPro-Medium',
        fontSize: '.75rem',
        position: 'relative',
    },

}));

const SelectInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 5,
        maxHeight: '39px !important',
        minHeight: '39px !important',
        backgroundColor: 'white',
        border: '1px solid #8DB0E3',
        padding: '1px 32px 1px 12px',
        alignItems: 'center',
        display: 'flex',
        transition: theme.transitions.create(['border-color']),
        fontFamily: 'GTWalsheimPro-Regular',
        fontSize: '.875rem',
        '&:hover': {
            border: '2px solid #356BBA',
            outline: 'none',
            padding: '0px 31px 0px 11px',
        },
        '&:focus': {
            border: '2px solid #356BBA',
            padding: '0px 31px 0px 11px',
        },
    },
}));

export default function MultiSelect(props) {
    const classes = useStyles();
    const groups = Object.keys(props.options);
    const opts = [];
    for (const header of groups) {
        if (props.options[header].length > 0) {
            opts.push(
                <ListSubheader
                    className={classes.placeholderText}
                    key={header}
                >
                    {header}
                </ListSubheader>
            )
            for (const item of props.options[header]) {
                opts.push(
                    <MenuItem className={classes.optMenu} key={header + ':' + item.id} value={{ item: item, type: header }}>{item.name}</MenuItem>
                );
            }
        }
    }
    return (
        <FormControl fullWidth={true}>
            <Select
                value={opts}
                input={<SelectInput />}
                style={{minHeight: '42px'}}
                MenuProps={{
                    classes: {
                        paper: classes.selectMenu
                    }
                }}
                variant={'outlined'}
                displayEmpty={true}
                renderValue={(value) => {
                    return <p
                        className={classes.placeholderText}
                    >select component</p>
                }}
                onChange={(event) => {
                    const value = event.target.value;
                    if (props.cb) {
                        props.cb(value);
                    }
                }}
                // endAdornment={<TriangleAdornment />}
            >
                {opts}
            </Select>
        </FormControl>
    );
}
MultiSelect.defaultProps = {
    options: {
        cars:
            [
                { name: 'Acura', id: 1 },
                { name: 'Tesla', id: 2 },
                { name: 'Audi', id: 3 },
                { name: 'Honda', id: 4 },
            ],
        planes:
            [
                { name: 'DC-5', id: 1 },
                { name: 'Boeing', id: 2 },
                { name: 'Lockheed', id: 3 },
                { name: 'SuperSuit', id: 4 },
            ],
        countries:
            [
                { name: 'USA', id: 1 },
                { name: 'Mexico', id: 2 },
                { name: 'Canada', id: 3 },
                { name: 'Cuba', id: 4 },
            ],

    }
};
MultiSelect.propTypes = {
    options: PropTypes.any.isRequired,
    cb: PropTypes.any,
};
