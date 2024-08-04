import React, { useEffect, useState } from 'react';

interface ImageData {
    id: string;
    imageUrl: string;
    caption: string;
}

interface AstroJoeInstagramFeedProps {
    account: string;
}

const AstroJoeInstagramFeed: React.FC<AstroJoeInstagramFeedProps> = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        // Fetch images from Instagram API
        const fetchImages = async () => {
            try {
                const response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=IGQWRQUl81X29rLWxmYTY1Mm9mMFZAUcm51SjYzX2VNdG4xbnFzLVoxM0NNWWNxX3ZAfTEx2NVBON2NkdDFUN29sUERhR3JHd0pIZAGRnajF6WnhyNThaUE9ma1dqMU1VN1hqWndfS19XYldyNFllQXZATN0hpcmN5M2MZD`);
                const data = await response.json();
                const imageData = data.data.map((item: { id: string; images: { standard_resolution: { url: string } }; caption: { text: string } }) => ({
                    id: item.id,
                    imageUrl: item.images.standard_resolution.url,
                    caption: item.caption ? item.caption.text : '',
                }));
                setImages(imageData);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <div key={image.id}>
                    <img src={image.imageUrl} alt={image.caption} />
                    <p>{image.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default AstroJoeInstagramFeed;