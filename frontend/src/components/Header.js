import React from "react";
import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Header = () => {
    const theme = useTheme();
    
    return (
        <AppBar position="sticky" sx={{
            background: theme.palette.mode === "dark"
                ? "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(75,0,130,1) 50%, rgba(138,43,226,1) 100%)"
                : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 50%, rgba(230,230,250,1) 100%)",
            boxShadow: theme.palette.mode === "dark" 
                ? "0px 4px 15px rgba(75, 0, 130, 0.5)"
                : "0px 4px 15px rgba(211, 211, 211, 0.5)",
            height: "80px",
            display: "flex",
            justifyContent: "center"
        }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography 
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            textShadow: theme.palette.mode === "dark"
                                ? "2px 2px 10px rgba(138,43,226,0.6)"
                                : "2px 2px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        User Management Hub 🚀
                    </Typography>
                </motion.div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
