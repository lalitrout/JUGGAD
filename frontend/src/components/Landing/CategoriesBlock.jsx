import React from "react";
import { Grid } from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DeckIcon from "@mui/icons-material/Deck";
import IronIcon from "@mui/icons-material/Iron";
import HouseIcon from "@mui/icons-material/House";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import Categories from "./Categories";
import PetsIcon from "@mui/icons-material/Pets";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ShowerIcon from "@mui/icons-material/Shower";

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
    <Grid container spacing={2}>
      {chores.map((chore, index) => (
        <Grid item key={index}>
          <Categories Icon={chore.Icon} label={chore.label} />
        </Grid>
      ))}
    </Grid>
  );
}
