import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Home, Add, Edit, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Sidebar Toggle Button in Top Right */}
            <IconButton 
                onClick={toggleDrawer} 
                sx={{ position: "fixed", top: 20, right: 20, zIndex: 1300 }}
            >
                <Menu fontSize="large" />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={toggleDrawer} transitionDuration={500} sx={{ "& .MuiDrawer-paper": { transition: "transform 0.4s ease-in-out" } }} >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/")}>
                            <ListItemIcon><Home /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/add-user")}>
                            <ListItemIcon><Add /></ListItemIcon>
                            <ListItemText primary="Add User" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/edit-user/1")}>
                            <ListItemIcon><Edit /></ListItemIcon>
                            <ListItemText primary="Edit User" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
