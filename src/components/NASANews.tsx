import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Container, Card, CardContent, Typography, Link } from '@mui/material';
import he from 'he';

interface NewsItem {
    title: string;
    date: string;
    description: string;
    link: string;
}

const NASA_NEWS_FEED = 'https://www.nasa.gov/news-release/feed/';

const NASANews: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(NASA_NEWS_FEED)
            .then(response => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(response.data, 'application/xml');
                const items = xml.querySelectorAll('item');
                const newsData: NewsItem[] = Array.from(items).map(item => ({
                    title: he.decode(item.querySelector('title')?.textContent ?? ''),
                    date: he.decode(item.querySelector('pubDate')?.textContent ?? ''),
                    description: he.decode(item.querySelector('description')?.textContent ?? ''),
                    link: he.decode(item.querySelector('link')?.textContent ?? ''),
                }));
                setNews(newsData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the data', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container>
            <Typography variant='h3' align='center' padding='50px' color='primary'>
                News at NASA
            </Typography>
            {news.map((item, index) => (
                <Card key={index} sx={{ margin: '25px' }}>
                    <CardContent>
                        <Typography variant="h5" padding='10px'>{item.title}</Typography>
                        <Typography variant="body2" padding='10px'>{item.date}</Typography>
                        <Typography variant="body1" padding='10px'>{item.description}</Typography>
                        <Link href={item.link} target="_blank" rel="noopener" padding='10px'>Read more</Link>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default NASANews;