import React from 'react';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

function RestaurantCard() {
  const navigate = useNavigate();
  const isOpen = true;
  const isFavorite = false;

  const handleCardClick = () => {
    navigate("/restaurant/mumbai/indian-fast-food/3");
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    console.log('Toggle favorite');
  };

  return (
    <Card className="w-[18rem] cursor-pointer" onClick={handleCardClick}>
      <div className={`${isOpen ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img 
          className='w-full h-[10rem] rounded-t object-cover' 
          src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=400" 
          alt="Restaurant" 
        />
        <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={isOpen ? "success" : "error"}
          label={isOpen ? "open" : "closed"}
        />
        <div className='p-4 textPart lg:flex w-full justify-between'>
          <div className='space-y-1'>   
            <p className='font-semibold text-lg'>Indian Fast Food</p>
            <p className='text-gray-500 text-sm'>
              Craving it all? Dive into our good food...
            </p>
          </div>
          <div>
            <IconButton onClick={handleFavoriteClick}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
        </div>
      </div> 
    </Card>
  );
}

export default RestaurantCard;