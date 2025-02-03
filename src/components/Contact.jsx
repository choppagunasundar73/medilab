import React from 'react';
import {
  Button,
  TextField,
  Container,
  Box,
  Typography
} from '@mui/material';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  const contactDetails = [
    { icon: MapPin, text: 'A108 Adam Street, New York, NY 535022' },
    { icon: Phone, text: '+1 5589 55488 55' },
    { icon: Mail, text: 'info@example.com' }
  ];

  return (
    <Box component="section" id="contact" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 4
          }}
        >
          <Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                {contactDetails.map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                  >
                    <item.icon size={20} color="#1976d2" />
                    <Typography variant="body2">{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                height: 256,
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176767818314!2d-73.98823908459375!3d40.74844197932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1643656239122!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box>
          </Box>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField label="Your Name" variant="outlined" fullWidth />
            <TextField label="Your Email" variant="outlined" fullWidth type="email" />
            <TextField label="Subject" variant="outlined" fullWidth />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
            />
            <Button variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
