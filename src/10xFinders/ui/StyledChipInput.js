import React from "react";
import Chip from "@mui/material/Chip";
import ChipInput from "material-ui-chip-input";
import { adaptV4Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme(adaptV4Theme({
    overrides: {
        MuiOutlinedInput: {
            root: {
                "& $notchedOutline": {
                    borderColor: "#8DB0E3"
                },
                "&:hover $notchedOutline": {
                    borderColor: "#356BBA",
                    borderWidth: "2px",
                },
                "&$focused $notchedOutline": {
                    borderColor: "#356BBA"
                }
            }
        }
    }
}));

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        fontFamily: "GTWalsheimPro-Medium",
        textTransform: "inherit",
        fontSize: "clamp(14px, .875rem, 20px)",
        marginRight: ".78125vmin",
        height: "fit-content",
        padding: "0 1px",
        backgroundColor: '#356BBA',
        '&:hover': {
            backgroundColor: '#1B4077',
        }
    },
    label: {
        padding: "4.5px .625vw 4.5px .625vw",
    },
    chipContainer: {
        minHeight: "34px",
    },
    outlined: {
        padding: "0",
        "& input": {
            padding: "0",
            minHeight: "42px",
        }
    },
    inputRoot: {
        borderRadius: "5px",
        '&$outlined': {
            padding: "0 .520833333vw"
        },
    },
    chip: {
        margin: "0 .78125vmin 0 0"
    }
}));

function StyledChipInput(props) {
    const classes = useStyles();
    const chipRenderer = ({ chip, className, handleClick, handleDelete }, key) => (
        <Chip
            classes={{
                root: classes.root,
                label: classes.label,
            }}
            className={className}
            key={key}
            label={chip}
            onClick={handleClick}
            onDelete={handleDelete}
            disableRipple
            clearInputValueOnChange
            deleteIcon={<ClearIcon style={{ color: "white", height: "clamp(14px, .875rem, 20px)" }} />}
        />
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ChipInput
                    classes={{
                        chipContainer: classes.chipContainer,
                        outlined: classes.outlined,
                        inputRoot: classes.inputRoot,
                        chip: classes.chip,
                    }}
                    chipRenderer={chipRenderer}
                    disableUnderline
                    variant="outlined"
                    fullWidth
                    value={props.value}
                />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export {StyledChipInput};