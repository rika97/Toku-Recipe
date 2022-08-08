import React, { useEffect } from 'react';
import { Box, Typography, Paper, CircularProgress, Divider, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { getPost, getPostsBySearch } from '../../../actions/posts';
import UserSidebar from '../../../components/navbar/UserSidebar';

const RecipeDetails = () => {
  const [open, setOpen] = React.useState(true);
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if(post) {
      dispatch(getPostsBySearch({ search: 'none', ingredients: post?.ingredients.join(',') }));
    }
  }, [post]);

  if(!post) return "no post";

  if(isLoading) {
    return (
    <Paper elevation={0}>
      <Box sx={{mt: 20}}display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="7em" />
      </Box>
      <Box sx={{mt: 5}} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h4" color="primary">Loading Recipe 🥕</Typography>
      </Box>
    </Paper>
    );
  };

  const recommendedPosts = posts.filter(({_id}) => _id !== post._id);

  const openPost = (id) => navigate(`/recipebook/${id}`);

  const drawerWidth = 240;

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
          <Paper>
            <div>
              <Button sx={{mb: 2}} color="primary" onClick={()=>navigate("/recipebook")}>
                <ArrowBackIosNewIcon />&nbsp;Back to Recipes
              </Button>
              <div>
                <Typography variant="h4" component="h2">{post.title}</Typography>
                <Typography variant="body1">Created by: {post.userName || "Anonymous Cook"}</Typography>
                <Typography variant="h6" color="primary">Difficulty: {post.difficulty}, Total Time: {post.preptime+post.cooktime} mins</Typography>
                <Typography gutterBottom variant="h6" color="textSecondary" component="h2">Ingredients: {post.ingredients.map((ingredient) => `• ${ingredient} `)}</Typography>
              </div>
              <div>
                <img width="300px" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
              </div>
              <div>
                <Typography variant="body2" color="textSecondary">Prep Time: {post.preptime} mins, Cook Time: {post.cooktime} mins </Typography>
                <Typography variant="body2" color="textSecondary">Category: {post.category}, Cuisine: {post.cuisine}</Typography>
                <Typography variant='body1'>Details: </Typography>
                <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
              </div>
            </div>
            {/* <Divider />
            {recommendedPosts.length && (
              <div>
                <Typography gutterBottom variant="h5" color="primary">You might also like:</Typography>
                <div>
                  {recommendedPosts.map(({ title, difficulty, preptime, cooktime, userName, likes, selectedFile, _id }) => (
                    <div style={{ margin: '10px', cursor: "pointer"}} onClick={() => openPost(_id)} key={_id}>
                      <Typography gutterBottom variant="h6">{title}</Typography>
                      <img src={selectedFile} width="200px" />
                      <Typography variant="subtitle1">Likes: {likes.length}</Typography>
                      <Typography variant="subtitle1">Difficulty: {difficulty}</Typography>
                      <Typography variant="subtitle1">Total Time: {preptime+cooktime} mins</Typography>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </Paper>
        </Main>
      </Box>
    </div>
  )
}

export default RecipeDetails;
