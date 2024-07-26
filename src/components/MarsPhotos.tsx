import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, CircularProgress, Container } from '@mui/material';

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
const MARS_ROVER_PHOTOS_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${NASA_API_KEY}`;


function MarsPhotos() {
    interface Photo {
        id: string;
        img_src: string;
        earth_date: string;
        camera: {
            full_name: string;
        };
    }

    const [photos, setPhotos] = useState<Photo[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(MARS_ROVER_PHOTOS_URL)
            .then(response => {
                setPhotos(response.data.photos);
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
        <Container>
            <Grid container spacing={3}>
                {photos.map(photo => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={photo.camera.full_name}
                                height="200"
                                image={photo.img_src}
                                title={photo.camera.full_name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    {photo.earth_date}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {photo.camera.full_name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MarsPhotos;
