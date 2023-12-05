'use client'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}
function Sidebar({products, setproducts  }) {
  const [value, setValue] = useState([100, 500]);

  const [filterProducts, setfilterProducts] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const sortedProducts = products
    .filter(product => product.price >= value[0] && product.price <= value[1])
    .sort((a, b) => a.price - b.price);
    setfilterProducts(sortedProducts)
  };


  return (
    <div className="mb-10  ">
             <ul className="text-xl text-gray-500 mb-11 p-5  ">
                <h4 className="text-black text-2xl mb-5">Colors</h4>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">red (5)</li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">blue (5)</li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">green (5)</li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">yellow (5)</li>
              
            </ul>

            <ul className="text-xl text-gray-500 p-5 mb-8">
                <h4 className="text-black text-2xl mb-5">MATERIAL
</h4>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">MATERIAL
 (5)</li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">Wood (30) </li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">Glass (5)</li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">Metal (5)</li>
                <li className="text-sm mb-2 cursor-pointer transition duration-300 hover:text-black">Steel (5)</li>
               
            </ul>
            <Box sx={{ width: '100%' }} >
              <h4 className='text-2xl mb-3'>PRICE</h4>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        style={{ color: 'black' }}
        min={10}
        max={1000}
      />
    </Box>
        <div className='flex justify-between'>
        <button className='text-black font-bold' onClick={()=>setproducts(filterProducts)}>APPLY</button>
          <span className='flex gap-2'>
              <p>{value[0]}$  </p>
              -
              <p>{value[1]}$</p>
          </span>
         
        </div>
        
    </div>
  )
}

export default Sidebar