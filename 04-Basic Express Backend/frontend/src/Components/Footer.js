import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[0]
            : theme.palette.grey[0],
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"© 2023"}
          <Link color="inherit" href="/">
          Intelligent Automation Research Center
          </Link>{" "}
          . All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}