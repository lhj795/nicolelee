import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const PrimaryButton = styled(Button) ({
    
        fontFamily: "DMSans-Bold !important",
        fontSize: 'clamp(14px, .875rem, 20px)',
        backgroundColor: "#757575 !important",
        borderRadius: "23px",
        border: "4px solid #757575 !important",
        boxSizing: "border-box",
        padding: "4px 0px",
        width: "180px",
        "&:hover" :{
            backgroundColor: "#333333 !important",
            border: "4px solid #333333 !important",
        },
    // text: {
    //     color: "#FFFFFF",
    // },
    // label:{
    //     textTransform:"capitalize",
    // }
});

const SecondaryButton = styled(Button) ({
        fontFamily: "DMSans-Bold",
        fontSize: 'clamp(14px, .875rem, 20px)',
        backgroundColor: "transparent",
        borderRadius: "23px",
        border: "4px solid #757575",
        boxSizing: "border-box",
        padding: "4px 0px",
        width: "180px",
        color: "#757575",
        "&:hover" :{
            backgroundColor: "#FFFFFF",
            color: "#333333",
            border: "4px solid #333333",
    },
    label:{
        textTransform:"capitalize",
    }
});

const SearchButton = styled(Button) ({
    root: {
        backgroundColor: "#757575",
        borderRadius: '4px',
        padding: "4px 0px",
        width: "100%",
        height: "100%",
        minWidth: "0",
        "&:hover" :{
            backgroundColor: "#333333",
        },
    },
});

export {PrimaryButton, SecondaryButton, SearchButton}