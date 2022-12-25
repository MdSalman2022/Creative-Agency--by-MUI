import React from 'react';
import { Box, Grid, IconButton, Tab, Tabs } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../../components/CreativeCard/CreativeCard';
import { cardData } from './cardData';



const OurWorks = ({ title, colored }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ my: 5, mb: 10 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 5,
            }}>
                <SectionTitle title="Here are some of" colored="our works"
                    sx={{
                        textAlign: 'left',
                    }}
                />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2,
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{

                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                        '& .Mui-selected': {
                            color: 'primary.green',
                            fontWeight: 'bold',
                        },
                        '& .MuiButtonBase-root': {
                            textTransform: 'capitalize',
                        }


                    }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Mobile App" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                            mr: 2,
                            color: 'primary.main'
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton sx={{
                            border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                            color: 'primary.main'
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 2}
                        >
                            <ArrowBackIcon sx={{
                                transform: 'rotate(180deg)',
                            }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* card section  */}

            <Grid container spacing={3} justifyContent="center">
                {
                    cardData[value].map(image => (
                        <Grid item>
                            <CreativeCard image={image} />

                        </Grid>
                    ))
                }
            </Grid>

        </Box >
    );
};

export default OurWorks;