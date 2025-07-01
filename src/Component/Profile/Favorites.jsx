import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";

function Favorites() {
  return (
    <div>
      <h1 className='text-xl text-center py-7 font-semibold'>Favorites Page</h1>
      <div className="flex flex-wrap justify-center gap-3">
        {[1, 1, 1].map((item, index) => (
          <RestaurantCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;