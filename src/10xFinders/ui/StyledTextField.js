import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#8DB0E3',
                    borderWidth: '1px',
                },
                '&:hover fieldset': {
                    borderColor: '#356BBA',
                    borderWidth: '2px',
                    transition: 'none',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#356BBA',
                    borderWidth: '2px',
                },
                "& $input": {
                    padding: "2px 0 0 15px",
                },
            },
            '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
                padding: "5px"
            },
            borderRadius: '5px',
            boxShadow: 'inset 2px 2px 4px rgba(64, 98, 149, 0.05) !important',
            fontFamily: 'GTWalsheimPro-Medium !important',
            fontSize: 'clamp(12px, .75rem, 18px) !important',
            height: '42px',
            marginTop: '0',
        },
        input: {
            "&::placeholder": {
                color: '#8DB0E3',
                opacity: '1',
            },
            "&&& $input": {
                padding: "5px"
            },
            color: '#152845',
            fontSize: 'clamp(12px, .75rem, 18px)',
        },
        textfield_label: {
            color: '#8DB0E3',
            fontSize: 'clamp(12px, .75rem, 18px)',
            fontFamily: 'GTWalsheimPro-Medium',
        },
    }))
;


export function StyledTextField(props) {
    const classes = useStyles();
    const ourInputProps = {
        classes: {
            root: classes.root,
            input: classes.input,
        },
    };
    const ourinputProps = {
        autoComplete:"chrome-off"
    };
    const newInputProps = {...props.InputProps, ...ourInputProps};
    const newinputProps = {...props.inputProps, ...ourinputProps};
    return (
        <TextField
            variant="outlined"
            className={classes.root}
            InputLabelProps={{className: classes.textfield_label}}
            style={{
                backgroundColor: '#ffffff',
                width: '100%',
            }}
            {...props}
            InputProps={newInputProps}
            inputProps={newinputProps}
        />
    );
};

const underlinedStyles = makeStyles((theme) => ({
    underlinedTextFieldRoot: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#8DB0E3',
                borderWidth: '0 0 1px 0',
            },
            '&:hover fieldset': {
                borderColor: '#356BBA',
                borderWidth: '0 0 2px 0',
                transition: 'none',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#356BBA',
                borderWidth: '0 0 2px 0',
            },
            "& $input": {
                padding: "0 0 4px 0",
            },
            alignItems: "end",
        },
        borderRadius: '0',
        fontFamily: 'GTWalsheimPro-Medium',
        height: '42px',
        marginTop: '0',
    },
    input: {
        "&::placeholder": {
            color: '#8DB0E3',
            opacity: '1',
        },
        color: '#152845',
        fontSize: 'clamp(12px, .75rem, 18px)',
    },
    textfield_label: {
        color: '#8DB0E3',
        fontSize: 'clamp(12px, .75rem, 18px)',
        fontFamily: 'GTWalsheimPro-Medium',
    },
}));

export function UnderlinedTextField(props) {
    const classes = underlinedStyles();
    const ourInputProps = {
        classes: {
            root: classes.underlinedTextFieldRoot,
            input: classes.input,
        },
    };
    
    const ourinputProps = {
        autoComplete:"chrome-off"
    };

    const newInputProps = {...props.InputProps, ...ourInputProps};
    const newinputProps = {...props.inputProps, ...ourinputProps};

    return (
        <TextField
            variant="outlined"
            className={classes.underlinedTextFieldRoot}
            InputLabelProps={{className: classes.textfield_label}}
            style={{
                backgroundColor: '#ffffff',
                width: '100%',
                height: 'clamp(38px, 2.1863vmin, 44px)',
            }}
            {...props}
            InputProps={newInputProps}
            inputProps={newinputProps}
            placeholder={props.placeholder}
        />
    )
}