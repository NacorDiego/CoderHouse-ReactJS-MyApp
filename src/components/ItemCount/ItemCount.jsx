import { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';


function Counter( {stock} ) {
    const [num, setNum] = useState(1);

    const sumar = () => {
        setNum(num + 1)
    }

    const restar = () => {
        if (num > 1) {
            setNum(num - 1)
        }
    }
    return (
        <Box sx={{marginRight: '8px'}}>
            <Paper sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Button variant={stock > num ? "text" : "disabled"} size="small" onClick={sumar} sx={{maxHeight:'30.75px'}}>
                    <Typography variant="h6" component="span">+</Typography>
                </Button>
                <Box sx={{
                    width: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <p>{num}</p>
                </Box>
                <Button variant={num > 1 ? "text" : "disabled"} size="small" onClick={restar} sx={{maxHeight:'30.75px'}}>
                    <Typography variant="h6" component="span">-</Typography>
                </Button>
            </Paper>
        </Box>
    );
}

export default Counter;