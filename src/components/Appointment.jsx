import React from 'react';
import {
  Button,
  TextField,
  Container,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';

export const Appointment = () => {
  const departments = ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics'];
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown'];

  return (
    <Box component="section" id="appointment" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box component="h2" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Make an Appointment
          </Box>
        </Box>
        <Box
          component="form"
          sx={{ maxWidth: 600, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 2 }}>
            <TextField label="Your Name" variant="outlined" fullWidth />
            <TextField label="Your Email" variant="outlined" fullWidth type="email" />
            <TextField label="Your Phone" variant="outlined" fullWidth type="tel" />
            <TextField label="Select Date" variant="outlined" fullWidth type="date" InputLabelProps={{ shrink: true }} />
          </Box>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select label="Department" defaultValue="">
              {departments.map((dept, index) => (
                <MenuItem key={index} value={dept.toLowerCase()}>
                  {dept}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Doctor</InputLabel>
            <Select label="Doctor" defaultValue="">
              {doctors.map((doctor, index) => (
                <MenuItem
                  key={index}
                  value={doctor.toLowerCase().replace(' ', '-')}
                >
                  {doctor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Message (Optional)"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth>
            Book Appointment
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Appointment;
