"use client";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
function Filter({ products, categories, setallProducts }) {
  const [value, setValue] = useState(0);
  const [originalProducts, setOriginalProducts] = useState(products);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setallProducts(originalProducts);
    } else {
      const filteredProducts = products.filter((product) => {
        return product.categories.some((category) => category.id === newValue);
      });

      setallProducts(filteredProducts);
    }
  };
  return (
    <div className="filter mt-10   px-5 ">
      <Box sx={{ maxWidth: { xs: 450, sm: 780 } }}>
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: "black" } }}
          value={value}
          className=""
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          
        >
          <Tab
            className={`text-gray-500 ${
              value === 0 ? "tap-selected  !text-black font-bold " : ""
            }`}
            label="All"
          />
          {categories.map((category) => {
            return (
              <Tab
                className={`text-gray-500 ${
                  value === category.id
                    ? "tap-selected  !text-black font-bold "
                    : ""
                }`}
                label={category.name}
              />
            );
          })}
        </Tabs>
      </Box>
        
    </div>
  );
}

export default Filter;
