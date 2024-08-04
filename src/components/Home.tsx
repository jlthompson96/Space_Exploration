// I want to create a homepage that talks about the app and what it does use the Header.tsx for inofrmation on what the app does and how to use it.

import React from 'react';
import { Container, Typography } from '@mui/material';

const MainHome: React.FC = () => {
    return (
        <Container>
            <Typography variant='h3' color='primary' padding='20px'>Welcome to Space Explorer</Typography>
            <Typography variant='h5' color='secondary' padding='20px'>The Space Explorer app is a simple web application that provides you with the latest news from NASA and the Astronomy Picture of the Day</Typography>
            <Typography variant='body1' color='secondary' padding='20px'>Click on the links in the navigation bar to view the different sections of the app.</Typography>
        </Container>
    );
};

export default MainHome;