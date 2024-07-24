import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Space Explorer
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Gallery</Button>
                <Button color="inherit">Live Data</Button>
                <Button color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
