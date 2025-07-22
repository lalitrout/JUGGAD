import React from "react";
import { Box, Grid, Typography, Link, Button} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SatisfactionGuarantee = () => {

  return (
    <Box
      sx={{
        mt: 4,
        pt: 3,
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 6, sm: 8 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          color: "#547bc9ff",
        }}
      >
        Your satisfaction,{" "}
        <Box component="span" sx={{ color: "#1138a1ff" }}>
          guaranteed
        </Box>
      </Typography>

      {/* Features */}
      <Grid container spacing={4}>
        {/* Item 1 */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Happiness Pledge
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "#333" }}>
            If you're not satisfied,{" "}
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: 500, color: "#1b5e20" }}
            >
              we’ll work to make it right.
            </Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2.5,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <CheckCircleOutlineIcon
              sx={{ color: "#66bb6a", fontSize: 28, mr: 1 }}
            />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Happiness pledge
            </Typography>
          </Box>
        </Grid>

        {/* Item 2 */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Vetted Taskers
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "#333" }}>
            Taskers are always background checked before joining the platform.
          </Typography>
        </Grid>

        {/* Item 3 */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Dedicated Support
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "#333" }}>
            Friendly service when you need us – every day of the week.
          </Typography>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default SatisfactionGuarantee;
