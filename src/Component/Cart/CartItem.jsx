import React from 'react';
import { Chip, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CartItem() {
  const handleIncrement = () => {
    console.log('Increment item');
  };

  const handleDecrement = () => {
    console.log('Decrement item');
  };

  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
          <img 
            className='w-[5rem] h-[5rem] object-cover' 
            src="https://images.pexels.com/photos/3727196/pexels-photo-3727196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Food item" 
          />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
          <div className='space-y-1 lg:space-y-2 w-full'>
            <p>Biryani</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-0'>
                <IconButton onClick={handleDecrement}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                  5
                </div>
                <IconButton onClick={handleIncrement}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹1234</p>
        </div>        
      </div>
      <div className='pt-3 space-x-2'>
        {["bread", "spicy", "extra"].map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </div>
    </div>
  );
}

export default CartItem;