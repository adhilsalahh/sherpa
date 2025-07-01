import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

const demo = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground Beef", "Bacon Strip"],
  },
  {
    category: "Bread",
    ingredients: ["Hamburger Buns"],
  },
  {
    category: "Vegetables",
    ingredients: ["Lettuce", "Tomato Slices", "Pickles", "Onion Slices"],
  },
  {
    category: "Condiments",
    ingredients: ["Ketchup"],
  },
];

function MenuCard() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleCheckBoxChange = (ingredient) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(item => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected ingredients:', selectedIngredients);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between w-full">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover rounded"
                src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Burger"
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-lg">Burger</p>
                <p className="font-bold">₹199</p>
                <p className="text-gray-400">Delicious burger with fresh ingredients</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 flex-wrap">
              {demo.map((item, index) => (
                <div key={index}>
                  <p className="font-semibold mb-2">{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((ingredient) => (
                      <FormControlLabel
                        key={ingredient}
                        control={
                          <Checkbox 
                            checked={selectedIngredients.includes(ingredient)}
                            onChange={() => handleCheckBoxChange(ingredient)} 
                          />
                        }
                        label={ingredient}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button variant="contained" type="submit">
                Add to Cart
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MenuCard;