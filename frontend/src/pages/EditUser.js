import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const EditUser = () => {
    const { id } = useParams();  
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserById(id);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, user);
            navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
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

                {/* Edit User Form */}
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Edit User
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
                    Save Changes
                </Button>
            </Paper>
        </Box>
    );
};

export default EditUser;
