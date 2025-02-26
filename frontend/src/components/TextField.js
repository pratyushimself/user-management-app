import React from "react";
import { TextField as MuiTextField } from "@mui/material";

const TextField = ({ label, name, value, onChange }) => {
    return (
        <MuiTextField
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
        />
    );
};

export default TextField;
