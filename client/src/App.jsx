import React from 'react';
import { Landing, Auth, Contact, Account, Coupons, Shoppinglist, Stockbook, Recipebook, RecipeDetails, Help, Tutorial, Reportbugs, Terms, Privacy, Error } from './pages';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './App.css';

const App = () => {
  const ProtectedRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
      user?<Outlet />: <Navigate to="/auth"/>
    )
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#689f38'
      },
      success: {
        main: '#0097a7'
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId='' >
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/auth" element={JSON.parse(localStorage.getItem('profile')) ? <Navigate to="/coupons" /> : <Auth/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/account" element={<Account />}/>
              <Route path="/coupons" element={<Coupons />}/>
              <Route path="/shoppinglist" element={<Shoppinglist />}/>
              <Route path="/shoppinglist/search" element={<Shoppinglist />}/>
              <Route path="/stockbook" element={<Stockbook />}/>
              <Route path="/stockbook/search" element={<Stockbook />}/>
              <Route path="/recipebook" element={<Recipebook/>} />
              <Route path="/recipebook/search" element={<Recipebook />} />
              <Route path="/recipebook/:id" element={<RecipeDetails />} />
              <Route path="/help" element={<Help />}/>
              <Route path="/tutorial" element={<Tutorial />}/>
              <Route path="/reportbugs" element={<Reportbugs />}/>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
    </ThemeProvider>

  )
}

export default App;
