import React from "react";
import { Link } from "react-router-dom";
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

function Categories({ Icon, label, link }) {
  return (
   <Link to={link} style={{ textDecoration: "none" }}>
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "white",
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
    </Link>
  );
}

export default function CategoriesBlock() {
   const chores = [
    { Icon: CleaningServicesIcon, label: "Mopping", link: "/tasks/mopping" },
    { Icon: DeckIcon, label: "Dusting", link: "/tasks/dusting" },
    { Icon: IronIcon, label: "Ironing", link: "/tasks/ironing" },
    { Icon: HouseIcon, label: "Organizing", link: "/tasks/organizing" },
    { Icon: LocalLaundryServiceIcon, label: "Laundry", link: "/tasks/laundry" },
    { Icon: PetsIcon, label: "Walk", link: "/tasks/walk" },
    { Icon: FastfoodIcon, label: "Feeding", link: "/tasks/feeding" },
    { Icon: LocalHospitalIcon, label: "Vet Visit", link: "/tasks/vet-visit" },
    { Icon: ShowerIcon, label: "Bathing", link: "/tasks/bathing" },
  ];

  return (
   
      <Grid container spacing={2} justifyContent="center">
        {chores.map((chore, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <Categories Icon={chore.Icon} label={chore.label} link={chore.link} />
          </Grid>
        ))}
      </Grid>
  );
}
