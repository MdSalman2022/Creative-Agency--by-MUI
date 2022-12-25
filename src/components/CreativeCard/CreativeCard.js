import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';


const CreativeCard = ({ image }) => {


    const theme = useTheme()


    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth: '345px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="190"
                    image={image}

                    style={{
                        borderRadius: "10px"
                    }}
                />
                <CardContent
                    sx={{
                        p: 0,
                        pt: 4,
                        '&:last-child': {
                            pb: 0
                        },
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                    <Box>
                        <Typography gutterBottom variant="body" component="div" color="text-secondary" >
                            Web design
                        </Typography>
                        <Typography variant="body2" color="primary.main" fontWeight={600} fontSize={20}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton sx={{
                            border: `1px solid ${theme.palette.primary.main} `,
                            height: "30px",
                            width: "30px",
                            '& svg': {
                                color: 'primary.main'
                            }
                        }}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CreativeCard;