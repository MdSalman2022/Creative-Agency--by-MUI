
import { imageListClasses } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';

const brands = [
    'https://i.ibb.co/sKWQJZK/xiaomi.png"',
    'https://i.ibb.co/B6Q5CP5/Samsung-Orig-Wordmark-BLUE-RGB.png',
    'https://i.ibb.co/GdzjP1f/apple.png',
    'https://i.ibb.co/sP3gVTM/oppo.png',
    'https://i.ibb.co/FxXmKKD/oneplus.png',
]

const BrandsWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '4rem',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',

    '& > img': {
        height: '100px',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '1rem',
        },
    }
}))


const Brands = () => {
    return (
        <BrandsWrapper>
            {
                brands.map((brand, i) => (
                    <img key={i} src={brand} alt="brands" />
                ))
            }

        </BrandsWrapper>
    );
};

export default Brands;