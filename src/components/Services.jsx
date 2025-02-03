import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Heart, Stethoscope, Clock, UserCog, Activity } from 'lucide-react';

export const Services = () => {
  const services = [
    { icon: Heart, title: "Comprehensive Care" },
    { icon: Stethoscope, title: "Expert Diagnostics" },
    { icon: Clock, title: "24/7 Emergency" },
    { icon: UserCog, title: "Specialized Treatment" },
    { icon: Activity, title: "Health Monitoring" },
  ];

  return (
    <Box component="section" id="services" sx={{ py: 8, backgroundColor: '#f9fafb' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            We provide comprehensive healthcare services.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ textAlign: 'center', py: 4, px: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'primary.light',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <service.icon size={24} color="#1976d2" />
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Service description...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
