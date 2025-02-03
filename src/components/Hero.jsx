import React from "react";
import { Activity, Users, Award } from "lucide-react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent
} from "@mui/material";

export const Hero = () => {
  const features = [
    {
      icon: Activity,
      title: "Expert Care",
      description:
        "Our team of specialists provides expert medical care with the latest technology."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description:
        "We focus on personalized care that puts our patients first."
    },
    {
      icon: Award,
      title: "Accredited Services",
      description:
        "Internationally recognized healthcare standards and practices."
    }
  ];

  return (
    <Box component="section" sx={{ pt: 10, pb: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Modern Healthcare
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Experience world-class healthcare with our team of expert professionals.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133"
              alt="Medical Professional"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 6 }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ textAlign: "center", py: 4 }}>
                  <CardContent>
                    <Icon size={40} color="#1976d2" />
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
