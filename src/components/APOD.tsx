import { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

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

    const isYouTubeLink = (url: string) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <><Typography variant='h3' align='center' padding='50px' color='primary'>
            Astronomy Picture of the Day (APOD)
        </Typography>
            <Container maxWidth="md" style={{ marginTop: '50px', marginBottom: '50px' }}>
                {apodData && (
                    <Card sx={{ paddingRight: '25px', paddingLeft: '25px' }}>
                        {isYouTubeLink(apodData.url) ? (
                            <ReactPlayer
                                url={apodData.url}
                                controls
                                width="100%"
                                height="500px"
                                style={{ paddingTop: '50px', paddingBottom: '50px' }} />
                        ) : (
                            <CardMedia
                                component="img"
                                alt={apodData.title}
                                height="500px"
                                image={apodData.url}
                                title={apodData.title}
                                style={{ objectFit: 'contain', paddingTop: '50px', paddingBottom: '50px' }} />
                        )}
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ padding: '10px' }}>
                                {apodData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ padding: '10px' }}>
                                {apodData.date}
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ padding: '10px', lineHeight: '1.75' }}>
                                {apodData.explanation}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Container></>
    );
}

export default NasaAPOD;

