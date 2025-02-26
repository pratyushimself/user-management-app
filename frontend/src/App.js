import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"; // Import Footer
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: { main: "#4caf50" },
            secondary: { main: "#ff9800" },
        },
        typography: { fontFamily: "Arial, sans-serif" },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Sidebar />
                <Header />
                <div style={{ padding: "10px", textAlign: "right" }}>
                    <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                </Routes>
            </Router>
            <Footer /> {/* Add Footer at the bottom */}
        </ThemeProvider>
    );
}

export default App;
