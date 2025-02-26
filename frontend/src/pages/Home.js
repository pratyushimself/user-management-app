import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/userApi";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box, CircularProgress } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        setLoading(true); // Show loader
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            await deleteUser(id);
            loadUsers();
            Swal.fire("Deleted!", "The user has been deleted.", "success");
        }
    };

    return (
        <Box sx={{ p: 4 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                {/* Centered Welcome Text */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4caf50", textTransform: "uppercase" }}>
                        Welcome to the Database 📊
                    </Typography>
                </Box>

                {/* Add User Button */}
                <Button 
                    variant="contained" 
                    color="secondary" 
                    startIcon={<Add />}  
                    sx={{ 
                        mb: 2, 
                        bgcolor: "#673AB7", 
                        "&:hover": { 
                            bgcolor: "#512DA8", 
                            transform: "scale(1.05)", 
                            transition: "0.3s ease-in-out" 
                        } 
                    }} 
                    onClick={() => navigate("/add-user")}
                >
                    Add User
                </Button>

                {/* Loader Animation */}
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
                    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>ID</strong></TableCell>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Email</strong></TableCell>
                                    <TableCell><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <TableRow
                                            key={user.id}
                                            component={motion.tr}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <TableCell>{user.id}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="outlined"
                                                    color="warning"
                                                    startIcon={<Edit />}
                                                    sx={{ 
                                                        mr: 1,
                                                        "&:hover": { 
                                                            transform: "scale(1.1)", 
                                                            transition: "0.2s ease-in-out",
                                                            color: "#512DA8",
                                                            borderColor: "#512DA8"
                                                        } 
                                                    }}
                                                    onClick={() => navigate(`/edit-user/${user.id}`)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button 
                                                    variant="outlined" 
                                                    color="error" 
                                                    startIcon={<Delete />}
                                                    sx={{ 
                                                        "&:hover": { 
                                                            transform: "scale(1.1)", 
                                                            transition: "0.2s ease-in-out",
                                                            color: "#D84315",
                                                            borderColor: "#D84315"
                                                        } 
                                                    }}
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">No Users Found</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </motion.div>
        </Box>
    );
};

export default Home;
