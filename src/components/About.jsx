import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const About = () => {
  const features = [
    'State-of-the-art facilities',
    'Highly skilled medical professionals',
    'Comprehensive care across multiple specialties'
  ];

  return (
    <Box component="section" id="about" sx={{ py: 8, backgroundColor: '#f9fafb' }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 4,
            alignItems: 'center'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
              alt="Medical Team"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary">
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Medilab is committed to providing exceptional healthcare services with a focus on patient-centered care.
              Our team of experienced professionals utilizes cutting-edge technology to deliver the highest quality
              medical treatments.
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {features.map((item, index) => (
                <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <CheckCircle2 size={20} color="#1976d2" />
                  <Typography variant="body2">{item}</Typography>
                </Box>
              ))}
            </Box>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
