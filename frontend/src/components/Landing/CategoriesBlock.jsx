import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DeckIcon from "@mui/icons-material/Deck";
import IronIcon from "@mui/icons-material/Iron";
import HouseIcon from "@mui/icons-material/House";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PetsIcon from "@mui/icons-material/Pets";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ShowerIcon from "@mui/icons-material/Shower";

function Categories({ Icon, label }) {
  return (
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 2,
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 4,
        },
      }}
    >
      <Icon sx={{ fontSize: 40, color: "#1976d2" }} />
      <Typography mt={1} fontWeight="bold">
        {label}
      </Typography>
    </Box>
  );
}

export default function CategoriesBlock() {
  const chores = [
    { Icon: CleaningServicesIcon, label: "Mopping" },
    { Icon: DeckIcon, label: "Dusting" },
    { Icon: IronIcon, label: "Ironing" },
    { Icon: HouseIcon, label: "Organizing" },
    { Icon: LocalLaundryServiceIcon, label: "Laundry" },
    { Icon: PetsIcon, label: "Walk" },
    { Icon: FastfoodIcon, label: "Feeding" },
    { Icon: LocalHospitalIcon, label: "Vet Visit" },
    { Icon: ShowerIcon, label: "Bathing" },
  ];

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Chore Categories
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {chores.map((chore, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <Categories Icon={chore.Icon} label={chore.label} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
