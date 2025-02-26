import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ text, color, onClick }) => {
    return (
        <MuiButton variant="contained" color={color} onClick={onClick}>
            {text}
        </MuiButton>
    );
};

export default Button;
