import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Jena Karlis",
    position: "Store Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    text: "I'm impressed with the quality of care I received at Medilab. The doctors were knowledgeable and attentive, and the staff was incredibly friendly and helpful.",
  },
  {
    name: "Matt Brandon",
    position: "Freelancer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1974&q=80",
    rating: 4,
    text: "The facilities at Medilab are top-notch, and the medical team is highly skilled. I felt well taken care of throughout my entire treatment process.",
  },
  {
    name: "John Larson",
    position: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1974&q=80",
    rating: 5,
    text: "I've been a patient at Medilab for years, and I'm always impressed by their commitment to providing the best possible care. Highly recommended!",
  },
  {
    name: "Anna Smith",
    position: "Teacher",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=2070&q=80",
    rating: 4,
    text: "Medilab's staff is exceptional and their attention to detail makes all the difference. I felt truly cared for.",
  },
  {
    name: "David Johnson",
    position: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    text: "An outstanding healthcare facility with state-of-the-art equipment and top-notch professionals.",
  },
];

export function Testimonials() {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "#f9fafb" }} id="testimonials">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Patients Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ overflow: "hidden" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} sx={{ color: "#FFC107" }} />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
