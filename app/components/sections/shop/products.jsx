'use client'
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ProductCard from "../../widgets/productCard";
import Sidebar from "../../layout/sidebar";
function Products({products}) {
  const [sort, setSort] = useState('default');
  const [Allproducts, setproducts] = useState(products);

  const handleChange = (event) => {
    setSort(event.target.value);
    if (event.target.value==='asce') {
      const asce = [...products].sort((a, b) => a.price - b.price);
      setproducts(asce);
     
    }else if (event.target.value==='desc') {
      const desc = [...products].sort((a, b) => b.price - a.price);
      setproducts(desc);
  
    }else {
      setproducts(products);
     
    }
  };

  return (

    <>
        <div className="mt-8 md:grid grid-cols-4 gap-3 ">
          <div className="col-span-1">

          </div>
          <div className="col-span-3">
          <div className="md:flex justify-between  mb-8 ">
        <h4 className="text-gray-500 my-auto">Showing  {products.length} results</h4>

      <FormControl sx={{ m: 1, minWidth: 220   }} >
        <Select

          value={sort}
          onChange={handleChange}
          displayEmpty
          sx={{
            
            color: 'black', // set text color
            borderRadius: '0', // set border radius
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: "black",
            
            }
           
          }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="default"  className={`text-sm hover:bg-black hover:text-white transition duration-300 ${
            sort === "default" ? '!bg-black !text-white' : '' // add your custom class for the selected item
          }`}  >
            <em>Default Sorting</em>
          </MenuItem>
        
          <MenuItem className={`text-sm hover:bg-black hover:text-white transition duration-300 ${
            sort === 'asce' ? '!bg-black text-white' : '' // add your custom class for the selected item
          }`} value='asce'>Sort by price low to hight</MenuItem>
          <MenuItem className={`text-sm hover:bg-black hover:text-white transition duration-300 ${
            sort === 'desc' ? '!bg-black text-white' : '' // add your custom class for the selected item
          }`} value='desc'>Sort by price hight to low</MenuItem>
        </Select>
        
      </FormControl>

        </div>
          </div>
       <div className="col-span-1">
            <Sidebar products={products} setproducts={setproducts}/>
        </div> 
    
        <div className="col-span-3">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 "> 
            {
              
                Allproducts.map((product)=>{
                  return(
                  <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  mainImage={product.mainImage}
                  description={product.description}
                  galleryimages={product.galleryimages}
                  />
                  )
              })
          
              
              }
            
            </div>
       </div>
       </div>
    </>
   
  )
}

export default Products