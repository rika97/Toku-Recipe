import React, { useState } from 'react';
import { Box, Typography, Container, Grow, Grid, Paper, AppBar, Toolbar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Posts from '../../../components/Posts/Posts';
import RecipeForm from '../../../components/Form/RecipeForm';
import SearchRecipes from '../../../components/Search/SearchRecipes';
import Paginate from '../../../components/Paginate';
import UserSidebar from '../../../components/navbar/UserSidebar';
import { getPostsBySearch } from '../../../actions/posts';

function useQuery() {
  return new URLSearchParams(useLocation().search);
};


const Recipebook = () => {

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const page = query.get('page') || 1;

  const user = JSON.parse(localStorage.getItem('profile'));

  const drawerWidth = 240;

  const [open, setOpen] = React.useState(true);

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <UserSidebar open={open} setOpen={setOpen} pageTitle="Recipes" />
        <Main open={open}>
          <DrawerHeader />
            <Grow in>
              <Grid container justify="center" alignItems='flex-start' spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                  <Paper elevation={6}>
                    <Toolbar position="static" sx={{ justifyContent: "center"}} color="inherit">
                      <div>
                          <Button variant="outlined" onClick={()=>{
                            dispatch(getPostsBySearch({ userName: user?.result?.userName }));
                            navigate(`/recipebook/search?searchQuery=none&ingredients=none&category=none&cuisine=none&difficulty=none&name=${user?.result?.userName || 'none'}`);
                          }}>🧄 My Recipes</Button>
                          <Button variant="outlined" onClick={() => {
                            navigate('/recipebook');
                          }}>🥑 Explore All</Button>
                      </div>
                    </Toolbar>
                  </Paper>
                  <Posts setCurrentId={setCurrentId} />
                  <Toolbar position="static" sx={{ justifyContent: "center"}} color="inherit">
                    <Paginate page={page} justify="center"/>
                  </Toolbar>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <AppBar position="static" color="inherit" sx={{mb: 2}}>
                    <SearchRecipes />
                  </AppBar>
                  <RecipeForm currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Grow>
        </Main>
      </Box>
    </div>
  )
}

export default Recipebook;
