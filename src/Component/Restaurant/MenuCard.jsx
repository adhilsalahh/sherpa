

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

// Data for the menu items
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
  const handleCheckBoxChange = (value) => {
    console.log(value);
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Burger"
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p>Burger</p>
                <p>$199</p>
                <p className="text-gray-400">Nice food</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        
        <AccordionDetails>
          <form>
            <div className="flex gap-4 flex-wrap">
              {demo.map((item, index) => (
                <div key={index}>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((ingredient) => (
                      <FormControlLabel
                        key={ingredient}
                        control={<Checkbox onChange={() => handleCheckBoxChange(ingredient)} />}
                        label={ingredient}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button variant="contained" type="submit">
                {"Add to Cart"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MenuCard;