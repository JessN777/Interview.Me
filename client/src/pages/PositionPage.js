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
  { position: "Software Developer", description: "Placeholder Traits" },
  { position: "Account Manager", description: "Placeholder Traits" },
  { position: "Strategy Consultant", description: "Placeholder Traits" },
  { position: "Barista", description: "Placeholder Traits" },
  { position: "Partner", description: "Placeholder Traits" },
  { position: "Business Analyst", description: "Placeholder Traits" },
  { position: "Copywriter", description: "Placeholder Traits" },
  { position: "Product Manager", description: "Placeholder Traits" },
  { position: "HR Specialist", description: "Placeholder Traits" },
  { position: "Talent Coordinator", description: "Placeholder Traits" },
  { position: "Talent Recruiter", description: "Placeholder Traits" },
  { position: "Investment Banker", description: "Placeholder Traits" },
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
          Interview
        </Typography>
        <Typography>
          Listen to the question asked. Use the speaker button to replay the
          interview question again. Use the microphone button to record you
          response. Press the microphone button again to stop recording your
          response.
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
                handlepositionSelection(position.position, position.description)
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
  );
};

export default PositionPage;
