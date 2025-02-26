import React, { useEffect, useState } from "react";
import { Box, Typography, Link, Slide } from "@mui/material";

const Footer = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {  // Show footer when scrolled 200px
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Slide direction="up" in={visible} mountOnEnter unmountOnExit>
            <Box sx={{ 
                position: "fixed", 
                bottom: 0, 
                left: 0, 
                width: "100%", 
                textAlign: "center", 
                p: 2, 
                bgcolor: "grey.900", 
                color: "white",
                boxShadow: "0px -2px 10px rgba(0,0,0,0.2)"
            }}>
                <Typography variant="body1">© 2025 Your Name. All rights reserved.</Typography>
                <Box sx={{ mt: 1 }}>
                    <Link href="https://github.com/yourusername" target="_blank" sx={{ color: "white", mx: 1 }}>GitHub</Link>
                    <Link href="https://linkedin.com/in/yourprofile" target="_blank" sx={{ color: "white", mx: 1 }}>LinkedIn</Link>
                    <Link href="mailto:your@email.com" sx={{ color: "white", mx: 1 }}>Email</Link>
                </Box>
            </Box>
        </Slide>
    );
};

export default Footer;
