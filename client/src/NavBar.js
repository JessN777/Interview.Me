import React from "react";
import { AppBar, Toolbar, Typography, Breadcrumbs, Link } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function NavBar() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="https://en.wikipedia.org/wiki/Spider-Man"
        >
          Select a Company
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://en.wikipedia.org/wiki/Spider-Man"
        >
          Select a Role
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://en.wikipedia.org/wiki/Spider-Man"
        >
          Input Your Questions
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://en.wikipedia.org/wiki/Spider-Man"
        >
          Practice Your Interview
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://en.wikipedia.org/wiki/Spider-Man"
        >
          Feedback
        </Link>
      </Breadcrumbs>
    </div>
  );
}
