import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
// import { useGetGasInsightQuery } from "state/api";  
import state from "state";


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId); 
  const { data } = useGetUserQuery(userId);
  // const id = '65d3f03bb2e7265f5b029608'
  // const {gasData} = useGetGasInsightQuery(id);
  // console.log(gasData)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSidebarOpen} 
      ></Sidebar>
      <Box flexGrow={1} >
        <Navbar
          user={data || {}}
          isSidebarOpen={isSideBarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
