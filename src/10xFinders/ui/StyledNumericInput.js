import React from 'react';
import NumericInput from 'react-numeric-input';

function format(num) {
    return num + ' day(s)';
}

export function StyledNumericInput(props) {
    return (
        <NumericInput
            format={format}
            min={props.min}
            value={props.value}
            onChange={props.onChange}
            style={{
                wrap: {
                    padding: '0',
                    borderRadius: '6px 3px 3px 6px',
                    height: "32px",
                },
                input: {
                    boxShadow: 'inset 2px 2px 4px rgba(64, 98, 149, 0.1) !important',
                    color: '#333333',
                    width: "100%",
                    borderColor: "#8DB0E3",
                    marginRight: "4",
                    display: 'block',
                    fontWeight: "100",
                    fontFamily: "GTWalsheimPro-Medium",
                    fontSize: ".75rem",
                    height: "32px",
                    padding: "0px 26px 0px 0px",
                    textAlign: "end",
                },
                'input:focus': {
                    border: '1px solid #356BBA',
                    outline: 'none'
                },
                'input:not(.form-control)': {
                    border: '1px solid #8DB0E3',
                    borderRadius: "5px",
                },
                arrowUp: {
                    borderColor: "#8DB0E3 #8DB0E3 transparent transparent",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    transform: "rotate(315deg)",
                    boxSizing: "border-box",
                    top: "50%",
                    left: "50%",
                    height: "7px",
                    width: "7px",
                },
                arrowDown: {
                    borderColor: "#8DB0E3 #8DB0E3 transparent transparent",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    transform: "rotate(135deg)",
                    boxSizing: "border-box",
                    left: "50%",
                    top: "calc(50% - 3.5px)",
                    height: "7px",
                    width: "7px",
                },
                btn: {
                    width: "21px",
                    border: "1px solid #8DB0E3",
                    background: "transparent",
                    boxShadow: "none",
                    right: "0",
                },
                'btn:hover': {
                    background: 'none',
                    borderColor: "#356BBA"
                },

                'btn:active': {
                    background: 'none',
                    borderColor: "#356BBA",
                    boxShadow: "none",
                },
                btnDown: {
                    bottom: "0",
                    top: "calc(50% - 0.5px)",
                    borderWidth: "1px",
                    borderRadius: "0 0 5px 0",
                    borderColor: "#8DB0E3",
                },
                btnUp: {
                    top: "0",
                    bottom: "calc(50% - 0.5px)",
                    borderWidth: "1px",
                    borderRadius: "0 5px 0 0",
                    borderColor: "#8DB0E3",
                },
            }}
        />
    );
}