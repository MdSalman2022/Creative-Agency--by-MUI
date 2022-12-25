import React from 'react';
import { Box, styled } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';

const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))


const Branding = () => {
    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, magnam.
                </Typography>
                <Typography sx={{ my: 5 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, modi.
                </Typography>
                <Button sx={{
                    width: '50%',
                }}>
                    Hire Us
                </Button>
            </Stack>

            <Box sx={{
                width: '50%',
                display: ['none', 'none', 'block'],
                display: [
                    'none', // 0px
                    'none', // 600px
                    'block', // 960px
                ]
            }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="" style={{ width: '10%' }} />
            </Box>

        </BrandingWrapper>
    );
};

export default Branding;