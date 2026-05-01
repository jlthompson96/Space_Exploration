import { AppBar, MenuItem, Toolbar, Typography, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton, Theme, CircularProgress, Box } from "@mui/material";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, lazy, Suspense } from 'react';
import logo from '../assets/favicon_io/android-chrome-512x512.png';

// ⚡ Bolt: Use React.lazy() to code-split top-level routes.
// This reduces the initial bundle size and improves load time by only downloading
// component code when the route is actually visited.
const NasaAPOD = lazy(() => import("./APOD"));
const MarsPhotos = lazy(() => import("./MarsPhotos"));
const NASANews = lazy(() => import("./NASANews"));

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
            {/* ⚡ Bolt: Wrap Routes in Suspense to provide a fallback UI while code-split chunks are downloading */}
            <Suspense fallback={
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            }>
                <Routes>
                    <Route path="/apod" element={<NasaAPOD />} />
                    <Route path="/marsRoverPhotos" element={<MarsPhotos />} />
                    <Route path="/nasaNews" element={<NASANews />} /> {/* Add the new route */}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;