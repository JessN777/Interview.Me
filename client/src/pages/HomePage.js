import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Card,
  CardMedia,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../global";
import { SAMPLE_COMPANIES } from "./constants";

const companyProfiles = SAMPLE_COMPANIES;

const HomePage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [open, setOpen] = useState(false);

  const handleCompanySelection = (companyName, companyValues) => {
    setGlobalState("companyName", companyName);
    setGlobalState("companyValues", companyValues);
    navigate("/position");
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    setGlobalState("companyName", formValues.companyName);
    setGlobalState("companyValues", formValues.companyValues);
    navigate("/position");
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Typography>
        Internships are a great way to gain work experience and transition into
        a role post-graduation. Our team has built an application to provide you
        with feedback to ace the behavioral interview. We will help you better
        structure your response, align with the company’s values and leave a
        strong lasting impression.
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        To begin, choose the company you are applying to. Or, submit a new
        company.
      </Typography>
      <Paper
        elevation={0}
        style={{
          display: "flex-grow",
          flexGrow: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Grid container>
          {companyProfiles.map((company) => (
            <Grid item key={company.companyName}>
              <Button
                sx={{ textTransform: "none" }}
                onClick={() =>
                  handleCompanySelection(
                    company.companyName,
                    company.companyValues
                  )
                }
              >
                <Card elevation={3} sx={{ minWidth: 350, maxWidth: 350 }}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={company.pictureUrl}
                    alt="amazon"
                  />
                </Card>
              </Button>
            </Grid>
          ))}
          <Grid item key="new">
            <Button sx={{ textTransform: "none" }} onClick={handleOpen}>
              <Card
                elevation={3}
                sx={{
                  minWidth: 350,
                  maxWidth: 350,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Submit a New Company
                </Typography>
              </Card>
            </Button>
          </Grid>
        </Grid>

        <Dialog open={open} onClose={handleOpen}>
          <DialogTitle>Submit a New Company</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please input the name of the company, along with a short
              description of what they do.
            </DialogContentText>
            <TextField
              name="companyName"
              fullWidth
              label="Company Name"
              placeholder="Eg. Unity Technologies"
              multiline
              variant="filled"
              value={formValues.companyName || ""}
              onChange={handleFormChange}
            />
            <TextField
              name="companyValues"
              fullWidth
              label="Company Info"
              placeholder="A company known for developing the Unity Game Engine, and for being leaders in the RT3D creation space."
              multiline
              variant="filled"
              value={formValues.companyValues || ""}
              onChange={handleFormChange}
            />
          </DialogContent>
          <DialogActions style={{ justifyContent: "center" }}>
            <Button
              onClick={handleFormSubmit}
              sx={{ textTransform: "none", color: "black" }}
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  );
};

export default HomePage;
