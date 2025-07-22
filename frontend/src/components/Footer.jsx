import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function JuggadFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 4,
        px: { xs: 2, sm: 6 },
        mt: 10,
        borderTop: "1px solid #ddd",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © Jugaad Solutions 2025
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
        <MuiLink href="/terms" underline="hover" color="text.secondary">
          Terms
        </MuiLink>
        <MuiLink href="/privacy" underline="hover" color="text.secondary">
          Privacy
        </MuiLink>
        <MuiLink href="/help" underline="hover" color="text.secondary">
          Help
        </MuiLink>
        <MuiLink href="/contact" underline="hover" color="text.secondary">
          Contact
        </MuiLink>
      </Stack>
    </Box>
  );
}
