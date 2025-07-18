import React from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: '#f0f4f8', py: 8, px: 2 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        fontWeight="bold"
        color="primary.main"
        gutterBottom
      >
        How it works
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={6}
        justifyContent="center"
        alignItems="center"
        mt={6}
      >
        {/* Step 1 */}
        <Box textAlign="center" maxWidth={300} px={2}>
          <InsertDriveFileOutlinedIcon sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} fontWeight="bold" color="#0d47a1" gutterBottom>
            1. Create a Gig
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign up for free, set up your Gig, and offer your work to our global audience.
          </Typography>
        </Box>

        {/* Step 2 */}
        <Box textAlign="center" maxWidth={300} px={2}>
          <EditOutlinedIcon sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} fontWeight="bold" color="#0d47a1" gutterBottom>
            2. Deliver great work
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get notified when you get an order and use our system to discuss details with customers.
          </Typography>
        </Box>

        {/* Step 3 */}
        <Box textAlign="center" maxWidth={300} px={2}>
          <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} fontWeight="bold" color="#0d47a1" gutterBottom>
            3. Get paid
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get paid on time, every time. Payment is available for withdrawal as soon as it clears.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HowItWorks;
