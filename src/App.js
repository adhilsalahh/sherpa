import './App.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
// import Navbar from './Component/Navbar/Navbar';
// import Home from './Component/Home/Home';
// import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
// import Cart from './Component/Cart/Cart';
// import Profile from './Component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { getUser } from './Component/State/Authentication/Action';
import { useSelector, useDispatch } from 'react-redux';
// import { store } from './Component/State/store';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth, jwt, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
