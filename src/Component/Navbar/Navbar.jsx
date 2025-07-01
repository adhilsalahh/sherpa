import { Avatar, Badge, IconButton } from '@mui/material'; 
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from "@mui/material/colors";
import './Navbar.css'; 
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const isAuthenticated = Boolean(auth.jwt);

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate("/my-profile");
    } else {
      navigate("/account/login");
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
      <div className='flex items-center space-x-4'>
        <li 
          className='logo font-semibold text-gray-300 text-2xl cursor-pointer'
          onClick={handleLogoClick}
        >
          Zepto Food
        </li>
      </div>
      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
        </div>
        <div>
          {isAuthenticated ? (
            <Avatar 
              sx={{ bgcolor: "white", color: pink.A400, cursor: "pointer" }}
              onClick={handleProfileClick}
            >
              {auth.user?.fullName?.charAt(0) || 'U'}
            </Avatar>
          ) : (
            <IconButton onClick={handleProfileClick}>
              <Person />
            </IconButton>
          )}
        </div>
        <div>
          <IconButton onClick={handleCartClick}>
            <Badge color='secondary' badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;