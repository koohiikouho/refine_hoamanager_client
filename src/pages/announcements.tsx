import React from 'react'
import { Add } from '@mui/icons-material';
import { useList } from '@pankod/refine-core';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useMemo } from "react";

import { ThreadCard, CustomButton} from 'components';

const Announcements = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography fontSize={25}
        fontWeight={750}
        color="#11142d">
          All Announcements
          </Typography>
          <CustomButton
          title="Add Announcement"
          handleClick={() => navigate('/announcements/create')} 
          backgroundColor="#005F80"
          color="#fcfcfc"
          icon={<Add />}
          />

      </Stack>
    </Box>
  )
}

export default Announcements