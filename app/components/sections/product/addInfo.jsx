'use client'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Fade, Zoom } from 'react-reveal';
import { useRef } from 'react';
import baseUrl from '@/public/BaseUrl';

function AddInfo({  productId }) {
  const formRef = useRef(null);
  const [value, setValue] = useState('1');
  const [Allreviews, setAllreviews] = useState([]);
    const [ratevalue, setratevalue] = useState(2);
    const GetProductReview = async () => {
      try {
          const response = await fetch(`${baseUrl}/api/product/review/${productId}`
        )
        const data = await response.json();
        
        setAllreviews(data)
   
      } catch (error) {
        console.error('Error fetching data 1:', error);
        return null;
      }
    };

    useEffect(() => {
      GetProductReview();
    }, [Allreviews]);

    const [review, setreview] = useState({
      comment:"",
      email:"",
      name:"",
      rate:ratevalue,
    });
    
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleChangeForm = (e)=>{
    setreview({...review , [e.target.name] : e.target.value})
  }

  //post review to api 
   const handleReview =  ()=>{
      axios.post(`http://localhost:3000/api/product/review/${productId}`,review).then((response) => {
          
      });
   
   }

  const handleClick = (e)=>{
    e.preventDefault();
    handleReview()
    formRef.current.reset();
  }

  useEffect(() => {
    setreview((prevReview) => ({
      ...prevReview,
      rate: ratevalue,
    }));

  }, [ratevalue]);

  return (
    <Box className="my-20 md:p-10 p-5" sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList className=''  TabIndicatorProps={{style: {display: "none"}}} onChange={handleChange} aria-label="lab API tabs example">
          <Tab className={` text-[12px] uppercase text-gray-500 transition duration-150 ${value === "1" ? 'bg-black  !text-white font-bold ' : ''}`} label="Description" value="1" />
          <Tab className={`text-[12px] uppercase text-gray-500 transition duration-150 ${value === "2" ? 'bg-black  !text-white font-bold ' : ''}`} label="ADDitional INFORMATION" value="2" />
          <Tab className={`text-[12px] uppercase text-gray-500 transition duration-150 ${value === "3" ? 'bg-black  !text-white font-bold ' : ''}`} label="reviews " value="3" />
        </TabList>
      </Box>
      <TabPanel className='py-16' value="1">
        <Fade>
        <h2 className='text-md font-medium text-lg mb-4'>DESCRIPTION</h2>
        <p className='text-sm text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames.

        </p>
        </Fade>
       
      </TabPanel>
      <TabPanel className='py-16' value="2">
        <h2 className='text-md font-medium text-lg mb-4'>ADDITIONAL INFORMATION</h2>
        <Fade>
        <ul className='text-sm text-gray-500'>
            <li>Weight : 2 kg</li>
            <li>Dimensions : 10 × 10 × 15 cm</li>
            <li>Color : Grey</li>
            <li>Material : Chrome</li>
        </ul>
        </Fade>
      
      </TabPanel>
      <TabPanel className='py-16' value="3">
     <h2 className='text-md font-medium text-lg mb-4'>{Allreviews.length} REVIEW FOR DECORATIVE ROOSTER</h2> 
     
        {
          Allreviews.map((review)=>{
                return(
                  <Zoom>

                  
                  <div className='flex gap-5 mb-8'>
                  <img className=' object-cover w-[80px] h-[80px]  ' src='/images/user.png'/>
                  <div className='text-gray-500 text-sm'>
                  <span className="text-amber-300 mb-2">
                           {
                           [...Array(review.rate)].map((star)=>{
                              return(
                                <FontAwesomeIcon icon={faStar}/>
                           
                              )
                            })
                           }
                           
                             
                  </span>
                  <h4 className='user-title my-2'>{review.name} – {review.email}</h4>
                  <p>{review.comment}</p>
                  </div>
      
                 </div>
                 </Zoom>
                )
          })
        }
      <div>
            <h4 className='text-md font-medium text-lg mb-3'>ADD A REVIEW</h4>
            <p className='text-sm text-gray-500'>Your email address will not be published. Required fields are marked *</p>
      <form ref={formRef} onSubmit={handleClick}>
        
     
            <Box

      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography className='mb-3' component="legend">Your rating *</Typography>
      <Rating
        name="simple-controlled"
        value={ratevalue}
        onChange={(e, newValue) => {
          setratevalue(newValue);
         
        }}
      />

    </Box>
    <div className="py-8 lg:py-16  md:w-1/2 w-full">
      <div  className="space-y-8">
          <div>
          <div class="sm:col-span-2 mb-5">
              <label for="message" className="block mb-2 text-sm font-medium ttext-black">Your review *</label>
              <textarea id="message" name='comment' onChange={handleChangeForm} rows="6" className="block p-3 w-full text-sm text-black  border border-gray-300  " ></textarea>
          </div>

              <label for="email" className="block mb-2 text-sm font-medium text-black ">Your Email</label>
              <input type="email" onChange={handleChangeForm} name='email' id="email" className="block p-3 w-full text-sm text-black  border border-gray-300  " required/>
          </div>
          <div>
              <label for="Name" className="block mb-2 text-sm font-medium text-black">Nane</label>
              <input type="text" onChange={handleChangeForm} name='name' id="Name" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
          </div>
        
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white  bg-black sm:w-fit hover:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </div>
  </div>

    </form> 
      </div>
      </TabPanel>
    </TabContext>
  </Box>

  )
}

export default AddInfo

