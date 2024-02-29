import { Box } from '@mui/material'
import React from 'react'
import Header from 'components/Header'
import BreakdownChart from 'components/BreakdownChart'

const Breakdown = () => {
  return (
    <Box m={"1.5rem 2.5 rem"} >
      <Header title={"Breakdown"} subtitle={"Breakdown of sales by Category"} ></Header>
      <Box mt={"40px"} height="75vh" >
          <BreakdownChart />
      </Box>
    </Box>
  )
}

export default Breakdown
