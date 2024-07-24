import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, CardMedia, CircularProgress } from '@mui/material';

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

function NasaAPOD() {
    const [apodData, setApodData] = useState<{ title: string; date: string; url: string; explanation: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(APOD_URL)
            .then(response => {
                setApodData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching the data", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container maxWidth="md">
            {apodData && (
                <Card>
                    <CardMedia
                        component="img"
                        alt={apodData.title}
                        height="500px"
                        image={apodData.url}
                        title={apodData.title}
                        style={{ objectFit: 'contain' }}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {apodData.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {apodData.date}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {apodData.explanation}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
}

export default NasaAPOD;

