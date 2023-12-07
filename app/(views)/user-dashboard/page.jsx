"use client";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import HeroSection from "../../components/sections/cart/heroSection";
import MainContainer from "../../components/layout/mainContainer";
import { createTheme } from "@material-ui/core/styles";
function UserDashboard() {
  const [ratevalue, setratevalue] = useState(2);
  const [value, setValue] = useState("1");
  const theme = createTheme({
    // Customize the MUI theme here
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HeroSection title="User Dashboard" />
      <MainContainer>
        <Box
          className="my-20 md:p-10 p-5 mx-auto lg:w-3/4 w-full"
          sx={{ typography: "body1" }}
        >
          <TabContext value={value}>
            <Box>
              <TabList
                className=""
                TabIndicatorProps={{ style: { display: "none" } }}
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
              >
                <Tab
                  label="Login"
                  value="1"
                  className={`md:w-1/3 text-[16px] uppercase  transition duration-150 `}
                  sx={{
                    color: "gray.500",
                    "&.Mui-selected": {
                      backgroundColor: "#080808 !important",
                      color: "white",
                    },
                  }}
                />
                <Tab
                  className={`md:w-1/3 text-[16px] uppercase  transition duration-150 `}
                  label="REGISTER"
                  value="2"
                  sx={{
                    color: "gray.500",
                    "&.Mui-selected": {
                      backgroundColor: "#080808 !important",
                      color: "white",
                    },
                  }}
                />
                <Tab
                  className={`md:w-1/3 w-full text-[16px] uppercase  transition duration-150 `}
                  label="RESET PASSWORD "
                  value="3"
                  sx={{
                    color: "gray.500",
                    "&.Mui-selected": {
                      backgroundColor: "#080808 !important",
                      color: "white",
                    },
                  }}
                />
              </TabList>
            </Box>
            <TabPanel className="py-16 md:px-16 " value="1">
              <div className="py-10   w-full">
                <form action="#" className="space-y-8">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-5 text-lg font-medium text-center text-white  bg-black  hover:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login
                  </button>
                </form>
              </div>
            </TabPanel>
            <TabPanel className="py-16 md:px-16 " value="2">
              <div className="py-10  w-full">
                <form action="#" className="space-y-8">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="userName"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="username"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="password"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="Repeat password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-5 text-lg font-medium text-center text-white  bg-black  hover:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            </TabPanel>
            <TabPanel className="py-6 md:px-16" value="3">
              <div className="py-10   w-full">
                <form action="#" className="space-y-8">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="block p-3 w-full text-sm text-black  border border-gray-300  "
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 text-lg font-medium text-center text-white  bg-black  hover:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    New Password
                  </button>
                </form>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </MainContainer>
    </>
  );
}

export default UserDashboard;
