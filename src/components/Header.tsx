import { AppBar, MenuItem, Toolbar, Typography, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton, Theme } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from '../assets/favicon_io/favicon-32x32.png';

const CommonAppBar = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { link: "/apod", text: "APOD" },
        { link: "/marsRoverPhotos", text: "Mars Rover Photos" },
        { link: "/nasaNews", text: "NASA News" }
    ];

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        transition: 'color 0.3s',
    };

    const linkHoverStyle = {
        color: '#9d70ff',
    };

    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index}>
                                <Typography variant="h6">
                                    <Link
                                        to={item.link}
                                        style={hoveredIndex === index ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        {item.text}
                                    </Link>
                                </Typography>
                            </MenuItem>
                        ))}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default CommonAppBar;