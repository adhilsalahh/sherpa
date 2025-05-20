import { Card } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material';

function OrderCard() {
  return (
    <div>
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16'  src=" https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div>
                    <p>Biryani</p>
                    <p>$399</p>
                </div>
            </div>
            <div>
                <Button  className="cursor-not-allowed">
                    Completed
                </Button>
            </div>

        </Card>
      
    </div>
  )
}

export default OrderCard

