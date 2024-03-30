import { Container, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './APOD.css';

const NasaApod = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        generateStars(); // Call the function to generate stars when the component mounts
    }, []);

    const generateStars = () => {
        const numStars = 50; // Adjust this number based on the density of stars you desire
        const starsContainer = document.querySelector('.stars');

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            if (starsContainer) {
                starsContainer.appendChild(star);
            }
            positionStar(star);
        }
    };

    const positionStar = (star: HTMLDivElement) => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 2 + 1; // Adjust the range of star sizes here

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
    };
    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key={{NASA_API_KEY}}');
                if (!response.ok) {
                    throw new Error('Failed to fetch APOD');
                }
                const data = await response.json();
                setApodData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching APOD:', error);
                setLoading(false);
            }
        };

        fetchApod();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!apodData) {
        return <div>Error fetching APOD</div>;
    }

    return (
        <div className='stars'>
            <Container>
                <Paper elevation={3} sx={{ padding: '40px', marginTop: '100px', backgroundColor: '#292929', color: ' #FFFFFF' }}>
                    <Typography variant='h3'>{(apodData as { title: string }).title}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', columnGap: '5%' }}>
                        <img style={{ height: '50%', width: '50%' }} src={(apodData as { url: string }).url} alt={(apodData as { title: string }).title} />
                        <Typography variant='body1'>{(apodData as { explanation: string }).explanation}</Typography>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default NasaApod;
