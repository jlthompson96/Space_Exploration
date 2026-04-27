import React, { Suspense } from "react";
import { AppBar, CircularProgress, MenuItem, Toolbar, Typography, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton, Theme } from "@mui/material";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from '../assets/favicon_io/android-chrome-512x512.png';
// ⚡ Bolt: Code Splitting - Lazy load route components to reduce initial bundle size
const NasaAPOD = React.lazy(() => import("./APOD"));
const MarsPhotos = React.lazy(() => import("./MarsPhotos"));
const NASANews = React.lazy(() => import("./NASANews"));

const CommonAppBar = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { link: "/apod", text: "APOD" },
        { link: "/marsRoverPhotos", text: "Mars Rover Photos" },
        { link: "/nasaNews", text: "NASA News" }
    ];

    return (
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt="BullRun Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                            <MenuIcon sx={{ paddingLeft: '10px' }} />
                        </IconButton>
                        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                            <List>
                                {menuItems.map((item, index) => (
                                    <ListItem button key={index} component={Link} to={item.link} onClick={handleDrawerToggle}>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    menuItems.map((item, index) => (
                        <MenuItem key={index}><Typography variant="h6"><Link to={item.link} style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>{item.text}</Link></Typography></MenuItem>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

const App = () => {
    return (
        <Router>
            <CommonAppBar />
            <Routes>
                {/* ⚡ Bolt: Wrap lazy components in Suspense with CircularProgress fallback */}
                <Route path="/apod" element={<Suspense fallback={<CircularProgress />}><NasaAPOD /></Suspense>} />
                <Route path="/marsRoverPhotos" element={<Suspense fallback={<CircularProgress />}><MarsPhotos /></Suspense>} />
                <Route path="/nasaNews" element={<Suspense fallback={<CircularProgress />}><NASANews /></Suspense>} /> {/* Add the new route */}
            </Routes>
        </Router>
    );
};

export default App;