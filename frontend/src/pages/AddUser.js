import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/userApi";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(user);
            navigate("/");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Paper sx={{ p: 4, borderRadius: 2, width: "400px" }} elevation={3}>
                {/* Back to Home Button */}
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ArrowBack />}
                    onClick={() => navigate("/")}
                    sx={{
                        mb: 2,
                        bgcolor: "#FF7043",
                        "&:hover": { bgcolor: "#D84315" },
                        fontWeight: "bold"
                    }}
                >
                    Back to Home
                </Button>

                {/* Add User Form */}
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Add User
                </Typography>
                <TextField 
                    label="Name" 
                    name="name" 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    value={user.name} 
                    onChange={handleChange} 
                />
                <TextField 
                    label="Email" 
                    name="email" 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    value={user.email} 
                    onChange={handleChange} 
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    onClick={handleSubmit}
                >
                    Add User
                </Button>
            </Paper>
        </Box>
    );
};

export default AddUser;
