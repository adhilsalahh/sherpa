import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';

function EventsCard() {
  const handleDelete = () => {
    console.log('Delete event');
  };

  return (
    <div>
      <Card>
        <CardMedia 
          sx={{ height: 200 }} 
          image='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400'
          title="Indian Fast Food Event"
        />
        <CardContent>
          <Typography variant='h5' component="div">
            Indian Fast Food
          </Typography>
          <Typography variant='body2'>
            50% off on your first order
          </Typography>
          <div className='py-2 space-y-2'>
            <p>Mumbai</p>
            <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
            <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
}

export default EventsCard;