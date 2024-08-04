/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { css } from '@emotion/react';

const buttonStyle = css`
    &:hover {
        color: #9d70ff;
    }
`;

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Space Explorer
                </Typography>
                <Button css={buttonStyle} color="inherit">Home</Button>
                <Button css={buttonStyle} color="inherit">APOD</Button>
                <Button css={buttonStyle} color="inherit">Mars Rover Photos</Button>
                <Button css={buttonStyle} color="inherit">Satellite Tracker</Button>
                <Button css={buttonStyle} color="inherit">NASA News</Button>
                <Button css={buttonStyle} color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
