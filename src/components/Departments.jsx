import React, { useState } from "react";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Heart, Brain, Baby, Eye, Stethoscope } from "lucide-react";

// Department data with id, name, description, and an icon component.
const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Expert care for your heart and cardiovascular system.",
    icon: <Heart size={20} />,
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Comprehensive treatment for neurological conditions.",
    icon: <Brain size={20} />,
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents.",
    icon: <Baby size={20} />,
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description: "Advanced eye care for vision preservation.",
    icon: <Eye size={20} />,
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    description: "Comprehensive care for adult health and wellness.",
    icon: <Stethoscope size={20} />,
  },
];

// A simple TabPanel component to display the selected department's info.
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`department-tabpanel-${index}`}
      aria-labelledby={`department-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Departments() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: "background.default",
      }}
      id="departments"
    >
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Departments
        </Typography>
        {/* Tabs for each department */}
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          aria-label="Department Tabs"
          sx={{
            mb: 4,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              minWidth: 120,
              mr: 4, // increased spacing between each tab
            },
          }}
        >
          {departments.map((dept, index) => (
            <Tab
              key={dept.id}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ color: "primary.main" }}>{dept.icon}</Box>
                  {dept.name}
                </Box>
              }
              id={`department-tab-${index}`}
              aria-controls={`department-tabpanel-${index}`}
            />
          ))}
        </Tabs>

        {/* Display the selected department's details in a centered Card */}
        {departments.map((dept, index) => (
          <TabPanel key={dept.id} value={selectedTab} index={index}>
            <Card
              sx={{
                maxWidth: 600,
                mx: "auto",
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                  {dept.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {dept.description}
                </Typography>
              </CardContent>
            </Card>
          </TabPanel>
        ))}
      </Container>
    </Box>
  );
}
