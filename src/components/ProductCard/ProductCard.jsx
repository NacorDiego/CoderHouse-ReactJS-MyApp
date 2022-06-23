import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Box } from '@mui/material';
import Counter from '../Counter/Counter';
import AddCartButton from '../AddCartButton/AddCartButton';
import ProductRating from '../ProductRating/ProductRating';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductName from '../ProductName/ProductName';
import './ProductCard.css';

export default function MediaCard( { imgPath, model, price, rating } ) {

    let stock = 10;

    return (
        //! SACAR EL PADDING-LEFT
        <Grid item xs={4} sx={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 320, marginRight: '0' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                     }}>
                    <CardMedia component="img" height="250" alt={`Imagen ${model}`} margin="0" image={imgPath} 
                    sx={{ width: '150px' }}/>
                </Box>
                <CardContent sx={{paddingLeft: '0'}}>
                    <Box sx={{ marginLeft: '16px', minHeight: '110px'}}>
                        <ProductName name={model} />
                    </Box>
                    <ProductPrice price={price} />
                    <Box
                        marginTop={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <Box sx={{ marginLeft: '16px', marginTop: '15px' }}>
                            <ProductRating rating={rating} />
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginY: '15px'
                }}>
                    <AddCartButton />
                    <Counter stock={stock} />
                </CardActions>
            </Card>
        </Grid>
    );
}
