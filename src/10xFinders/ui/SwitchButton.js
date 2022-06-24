import React, { useContext } from 'react';
import { SearchContext } from './SearchBase';
import { getSelf } from './Utils';
import { StyledSwitch } from '../components/ui/StyledSwitch';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        flexDirection: "column",
    }
}));

export default function SwitchButton(props) {
    const classes = useStyles();
    const { sensors, setSensors } = useContext(SearchContext);
    const currentValue = (() => {
        const me = sensors.filter(x => getSelf(x, props));
        if (me.length === 1) {
            return [...me[0].value][0];
        } else {
            return false;
        }
    })();
    const cb = (event) => {
        const value = event.target.checked;
        if (value === null || value === undefined) {
            return;
        }
        if (value) {
            const newData = {
                label: props.label || props.name,
                value: new Set([value]),
                fieldName: props.fieldName,
                include: "and",
            };
            setSensors([...sensors.filter(x => !getSelf(x, props)), newData]);
        } else {
            setSensors([...sensors.filter(x => !getSelf(x, props))]);
        }
    }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.box}>
                    <Typography variant="h4"> {props.name} </Typography>
                    <StyledSwitch
                        checked={currentValue}
                        onChange={cb}
                        name={props.name}
                        inputProps={{ 'aria-label': props.name }}
                    />
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

SwitchButton.propTypes = {
    name: PropTypes.string.isRequired, // the name of this sensor
    fieldName: PropTypes.string.isRequired, // the property in elastic to query against
    disabled: PropTypes.bool, // TODO
    label: PropTypes.string, // the name to be displayed in the chip for filters, otherwise the name is used
}
