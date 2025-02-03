import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Grid,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const categories = ["All", "Cardiology", "Neurology"];
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    { src: "https://via.placeholder.com/600x400?text=Image+1", category: "Cardiology" },
    { src: "https://via.placeholder.com/600x400?text=Image+2", category: "Neurology" },
    { src: "https://via.placeholder.com/600x400?text=Image+3", category: "Cardiology" }
    // Add more images...
  ];

  return (
    <Box component="section" id="gallery" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mb: 4 }}>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'contained' : 'outlined'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Box>
        <Grid container spacing={2}>
          {images
            .filter(img => activeCategory === "All" || img.category === activeCategory)
            .map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={image.src}
                  alt="Gallery"
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 2,
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedImage(image.src)}
                />
              </Grid>
            ))}
        </Grid>
        <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)} maxWidth="lg">
          <DialogContent sx={{ position: 'relative', p: 0 }}>
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage}
                alt="Enlarged"
                sx={{ width: '100%', height: 'auto' }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Gallery;
