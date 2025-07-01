import React, { useState } from "react";
import { Divider, RadioGroup, Typography, FormControl, FormControlLabel, Radio, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuCard from "./MenuCard";

const categories = ["pizza", "biryani", "burger", "chicken", "rice"];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];
const menu = [1, 1, 1, 1, 1, 1];

function RestaurantDetails() {
  const [foodType, setFoodType] = useState("all");
  const [foodCategory, setFoodCategory] = useState(categories[0]);

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-2">Home/India/Indian Fast Food/3</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <img 
                className="w-full h-[40vh] object-cover rounded" 
                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Restaurant" 
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img 
                className="w-full h-[40vh] object-cover rounded" 
                src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Restaurant Interior" 
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <p className="text-gray-500 flex items-center gap-3 mt-2">
            <LocationOnIcon />
            <span>Malappuram, Kerala</span>
          </p>
          <p className="text-gray-500 flex items-center gap-3 mt-1">
            <CalendarMonthIcon />
            <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
          </p>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component="fieldset">
                <RadioGroup
                  onChange={(e) => {
                    setFoodType(e.target.value);
                    handleFilter(e);
                  }}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel 
                      key={item.value} 
                      value={item.value} 
                      control={<Radio />} 
                      label={item.label} 
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component="fieldset">
                <RadioGroup
                  onChange={(e) => {
                    setFoodCategory(e.target.value);
                    handleFilter(e);
                  }}
                  name="food_category"
                  value={foodCategory}
                >
                  {categories.map((item) => (
                    <FormControlLabel 
                      key={item} 
                      value={item} 
                      control={<Radio />} 
                      label={item.charAt(0).toUpperCase() + item.slice(1)} 
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item, index) => (
            <MenuCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RestaurantDetails;