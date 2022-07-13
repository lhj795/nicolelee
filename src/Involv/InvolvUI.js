import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const PrimaryButton = styled(Button)({
    fontFamily: "Karla-Bold",
    fontSize: '1rem',
    backgroundColor: "#F08F4B",
    height: 42,
    borderRadius: 21,
    color: 'white',
    width: '100%',
    boxSizing: "border-box",
    padding: "4px 0px",
    "&:hover": {
        backgroundColor: "#F08F4B",
    },
});

const SecondaryButton = styled(Button)({
    fontFamily: "Karla-Bold",
    fontSize: '1rem',
    backgroundColor: "white",
    color: "#F08F4B",
    border: '2px solid #F08F4B',
    height: 42,
    borderRadius: 21,
    width: '100%',
    boxSizing: "border-box",
    padding: "4px 0px",
    "&:hover": {
        backgroundColor: "white",
    },
});

export { PrimaryButton, SecondaryButton }