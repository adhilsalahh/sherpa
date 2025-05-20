import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
function EventsCard() {
  return (
    <div>
        <Card>
            <CardMedia sx={{height:200}} image='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400'/>
            <CardContent>

                <Typography variant='h5' component={"div"}>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2' >
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'> Feruary 14, 2024 12:00 AM </p>
                    <p className='text-sm text-red-500'> Feruary 15, 2024 12:00 AM </p>

                </div>

            </CardContent>

            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
      
    </div>
  )
}

export default EventsCard
