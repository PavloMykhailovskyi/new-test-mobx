import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

export const DotsLoader = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => (prevDots.length >= 3 ? '' : prevDots + '.'));
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return <Typography variant="h3">Loading{dots}</Typography>;
};
