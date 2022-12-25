import React from 'react';
import { Box, Button, Container, Divider, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: "primary.main",
            py: 8,
        }}
        >
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        flex: 1
                    }}>
                        Creative Agency
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{
                            fontSize: '1.5rem',
                            color: 'rgba(255, 255, 255, 0.5)'
                        }}>
                            Creative Agency
                        </Typography>
                        <Button sx={{
                            bgcolor: 'primary.green',
                            ml: 2
                        }}>Get Started</Button>
                    </Box>
                </Box>
                <Divider sx={{
                    mt: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.5)'
                }} />
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant='p' color="#fff" >
                        Copyright 2021 Creative Agency All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;