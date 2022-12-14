import React, { useState } from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../global";

const samplePositions = [
  ["Software Developer", "Placeholder Traits"],
  ["Account Manager", "Placeholder Traits"],
  ["Strategy Consultant", "Placeholder Traits"],
  ["Barista", "Placeholder Traits"],
  ["Partner", "Placeholder Traits"],
  ["Business Analyst", "Placeholder Traits"],
  ["Copywriter", "Placeholder Traits"],
  ["Product Manager", "Placeholder Traits"],
  ["HR Specialist", "Placeholder Traits"],
  ["Talent Coordinator", "Placeholder Traits"],
];

const PositionPage = () => {
  const navigate = useNavigate();
  const handlePositionSelect = (position) => {
    setGlobalState("companyPosition", position);
    navigate("/questions");
  };

  const [positionValue, setPositionValue] = useState(samplePositions[0][0]);
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <Paper style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Grid container>
          {samplePositions.map((position, index) => (
            <Grid item key={position[0]}>
              <Card
                sx={{
                  backgroundColor: hoverIndex === index ? "lightblue" : "white",
                  height: 50,
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
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {position[0]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePositionSelect(positionValue)}
        >
          Submit
        </Button>
      </div>
    </Paper>
  );
};

export default PositionPage;
