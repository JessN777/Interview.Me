import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  IconButton,
  Box,
  withStyles,
} from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 0, paddingBottom: "15px" }}>
      <AppBar position="static" style={{ height: "50px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Position
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Questions
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Interview
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Feedback
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
