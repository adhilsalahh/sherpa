import React from 'react'
import { Card, Chip, IconButton } from '@mui/material';
import img1 from '../Restaurant/pexels-photo-3184192.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function RestaurantCard() {
  return (
    
    <Card className=" w-[18rem]">
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img className='w-full h-[10rem] rounded object-cover:' src={img1} alt="" />

        <Chip size="small"
        className="absolute top-2 left-2"
        color={true?"success":"error"}
        label={true?"open":"closed"}
        />
    <div className='p-4 textPart lg:flex w-full justify-between '>
      <div className='space-y-1'>   
        <p className='font-semibold text-lg'>Indian Fast Food</p>
        <p  className='text-gray-500 text-sm'> Carving it all ? Dive into our glood fia..</p>

      </div>
      <div>
        <IconButton>
          {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
        </IconButton>
      </div>


    </div>
      </div> 
    </Card>
    

  )
}

export default RestaurantCard
