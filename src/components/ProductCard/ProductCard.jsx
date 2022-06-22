import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Tooltip, Rating } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Counter from '../Counter/Counter';

export default function MediaCard( { imgPath, model, price, rating } ) {

    return (
        <Grid item xs={4} sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Card sx={{ width: 300 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                     }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={imgPath}
                        alt="green iguana"
                        margin="0"
                        sx={{ width: '150px' }}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {model}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div" marginTop={4}>
                        ${price}
                    </Typography>
                    <Box
                        marginTop={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <Rating name="read-only" value={rating} precision={0.5} readOnly />
                        <Typography variant="body1" component="span">
                            ({rating})
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginY: '15px'
                }}>
                    <Tooltip title="Add to cart">
                        <Button size="small" variant="contained" sx={{
                            marginLeft: '8px'
                        }}>
                            <ShoppingCart fontSize="small" />
                            <Typography>
                                +
                            </Typography>
                        </Button>
                    </Tooltip>
                    <Counter stock={10}/>
                </CardActions>
            </Card>
        </Grid>
    );
}
