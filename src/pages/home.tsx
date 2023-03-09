import { useList } from '@pankod/refine-core';
import {Typography, Box, Stack} from '@pankod/refine-mui'


import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  ThreadCard,
  TopAgent
} from 'components';

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight= {700} color="#11142D">
        Upcoming 
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title= "Basketball Court Construction Project"
          value= "Construction Finished"
          series={[100, 0]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title= "Days until next HOA Fee Collection (March 31, 2023)"
          value="23 Days"
          series={[30, 70]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title= "Community Pool Construction Project"
          value="Architecht Hired"
          series={[10, 90]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title= "Subdivision Gate Renovation Project"
          value="Gathering Funds (₱56,000 out of ₱130,000)"
          series={[43, 57]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
    </Box>
  )
}
export default home