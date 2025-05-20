import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Card, IconButton, Button } from '@mui/material';

function AddressCard({ item, showButton }) {
  const handleSelectAddress = () => {
    console.log('Address selected:', item);
  };

  return (
    <Card className=" flex gap-5 w-64 p-5 bg-gray-800 text-white">
    <HomeIcon />
  <div className="space-y-3">
    <h1 className="font-semibold text-lg">Home</h1>
    <p className="text-gray-300">
      Kochi, New Shivam Building, 673638, Kerala, India
    </p>
    {showButton && (
      <Button
        variant="Outline"
        fullWidth
        onClick={handleSelectAddress(item)}
      >
        Select
      </Button>
    )}
  </div>
</Card>

  );
}

export default AddressCard;
