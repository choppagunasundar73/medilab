import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const doctors = [
  {
    name: "Dr. Walter White",
    specialty: "Chief Medical Officer",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=2070&q=80",
    description:
      "Specializing in innovative medical treatments with over 20 years of experience.",
    socialMedia: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Anesthesiologist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=2087&q=80",
    description:
      "Expert in anesthesiology with a focus on patient safety and comfort during procedures.",
    socialMedia: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Dr. William Anderson",
    specialty: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2078&q=80",
    description:
      "Renowned cardiologist specializing in advanced heart disease treatments and prevention.",
    socialMedia: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Dr. Amanda Jepson",
    specialty: "Neurosurgeon",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2070&q=80",
    description:
      "Leading neurosurgeon with expertise in complex brain and spine surgeries.",
    socialMedia: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  
];

export function Doctors() {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "#fff" }} id="doctors">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Expert Doctors
        </Typography>
        <Grid container spacing={4}>
          {doctors.map((doctor, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardMedia
                  component="img"
                  image={doctor.image}
                  alt={doctor.name}
                  sx={{
                    width: "100%",      // ensures the image fills the card's width
                    height: 250,        // fixed height (in pixels)
                    objectFit: "cover", // ensures the image covers the area without distortion
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.specialty}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {doctor.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                  <IconButton href={doctor.socialMedia.twitter}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href={doctor.socialMedia.facebook}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href={doctor.socialMedia.instagram}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href={doctor.socialMedia.linkedin}>
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Doctors;
