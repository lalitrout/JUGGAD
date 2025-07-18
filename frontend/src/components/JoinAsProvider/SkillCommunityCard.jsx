import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SkillCommunityCard = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/register');
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        p: { xs: 2, md: 4 },
        my: 4,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Join our growing community of helpers
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}
      >
        Whether you've helped once or many times — every skill counts in changing lives.
      </Typography>

      {/* Removed the Grid/Image section */}

      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          What’s your way to help?
        </Typography>
          <Button
                     href="/auth"
                     variant="contained"
                     size="large"
                     sx={{
                       mt: 1,
                       borderRadius: "999px",
                       fontWeight: 600,
                       fontSize: "0.8rem",
                       background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
                       color: "#fff",
                       boxShadow: "0 4px 14px rgba(33, 150, 243, 0.4)",
                       textTransform: "none",
                       transition: "all 0.3s ease",
                       "&:hover": {
                         background: "linear-gradient(135deg, #1e88e5, #1565c0)",
                         boxShadow: "0 6px 20px rgba(21, 101, 192, 0.5)",
                         transform: "translateY(-2px)",
                       },
                     }}
                   >
                    Start Helping
                   </Button>
      </Box>
    </Box>
  );
};

export default SkillCommunityCard;
