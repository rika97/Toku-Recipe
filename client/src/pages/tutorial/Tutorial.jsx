import React from 'react';
import { Typography, Button } from '@mui/material';
import imgstock from '../../assets/stocklist.png';
import imgshop from '../../assets/shoppinglist.png';
import imgrecipes from '../../assets/recipespage.png';
import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <div align="center">
      <div>
        <Typography variant="h2" sx={{mt: 6}} color="primary">How to use Toku</Typography>
        <Typography variant="h5" color="textSecondary">It's simple!</Typography>
        <Typography variant="h6">Search recipes: </Typography>
        <img src={imgrecipes} width="500px"/>
        <Typography variant="h6">Create shopping list: </Typography>
        <img src={imgshop} width="500px"/>
        <Typography variant="h6">Create stock list: </Typography>
        <img src={imgstock} width="500px"/>
      </div>
      <Button sx={{mt: 2, mb: 6}}variant="contained" onClick={()=> {
        navigate('/help');
      }}>Go Back</Button>
    </div>
  )
}

export default Tutorial