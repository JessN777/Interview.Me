import React, { useState } from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../global";

const samplePositions = [
  {
    position: "Software Developer",
    description:
      "computer programming and coding, software development, problem solving and logical thinking",
  },
  {
    position: "Account Manager",
    description:
      "listening, time management, communication, relationship building",
  },
  {
    position: "Strategy Consultant",
    description: "structured writing, creativity, problem solving",
  },
  {
    position: "Barista",
    description: "listening, time management, communication",
  },
  {
    position: "Partner",
    description: "realtionship building, communication, problem solving",
  },
  {
    position: "Business Analyst",
    description: "problem solving, structured writing, communication",
  },
  {
    position: "Copywriter",
    description: "problem solving, structured writing, communication",
  },
  {
    position: "Product Manager",
    description: "problem solving, structured writing, communication",
  },
  {
    position: "HR Specialist",
    description: "problem solving, structured writing, communication",
  },
  {
    position: "Talent Coordinator",
    description: "problem solving, structured writing, communication",
  },
  {
    position: "Talent Recruiter",
    description: "problem solving, structured writing, communication",
  },
  {
    position: "Investment Banker",
    description: "problem solving, structured writing, communication",
  },
];

const PositionPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  const handlepositionSelection = (position, description) => {
    //There is a delay between setting and getting
    setGlobalState("companyPosition", position);
    // setGlobalState("description", description);
    navigate("/questions");
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    setGlobalState("position", formValues.position);
    setGlobalState("description", formValues.description);
    navigate("/questions");

    setFormValues({});
  };

  const [positionValue, setPositionValue] = useState(
    samplePositions[0].position
  );
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <>
      <Paper
        sx={{
          ml: 20,
          mr: 20,
          backgroundColor: "lightblue",
          justifyItems: "center",
        }}
        elevation={0}
      >
        <Typography fontSize={60} align="center" variant="h6">
          Interview.ME
        </Typography>
        <Typography align="center" variant="h6">
          "Software to help you invest in your education"
        </Typography>
      </Paper>
      <Paper
        elevation={0}
        style={{ display: "flex", justifyContent: "center", padding: 0 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: "left",
              color: "black",
              fontWeight: "bold",
            }}
          >
            What Type Of Role Are You Applying To?
          </Typography>
          <Typography>
            Help us better understand how we can cater our feedback based on the
            type of role you are interviewing for.
          </Typography>
          <Grid container rowSpacing={5} columnSpacing={10}>
            {samplePositions.map((position, index) => (
              <Grid
                container
                alignItems="center"
                justify="center"
                item
                key={position.position}
                xs={3}
                onClick={() =>
                  handlepositionSelection(
                    position.position,
                    position.description
                  )
                }
              >
                <Card
                  align="center"
                  sx={{
                    backgroundColor: hoverIndex === index ? "green" : "white",
                    height: 100,
                    width: 300,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      setPositionValue(position[0]);
                      setHoverIndex(index);
                    }}
                    onChange={handleFormChange}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {position.position}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <TextField
            label="Position"
            variant="outlined"
            margin="normal"
            name="position"
            value={formValues.position || ""}
            onChange={handleFormChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            margin="normal"
            value={formValues.description || ""}
            name="Rescription"
            onChange={handleFormChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleFormSubmit(positionValue)}
          >
            Submit
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default PositionPage;
