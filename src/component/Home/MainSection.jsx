import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.xceed.me/blog/wp-content/uploads/2016/08/29122435/ellenallien-1.jpg')`, 
        backgroundSize: { xs: 'contain', sm: 'cover' }, // Adjust image size for mobile
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        color: '#FFFDFE',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For layering effect
        paddingTop: '60px'
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: { xs: '2rem', sm: '4rem', md: '5rem' },
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
          animation: 'fadeIn 2s ease-out', // Fade-in animation for title
        }}
      >
        Bienvenue au PICO NIGHT CLUB
      </Typography>
      <Typography
        variant="h6"
        paragraph
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: { xs: '1rem', sm: '1.5rem' },
          maxWidth: '600px',
          textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
          opacity: 0.8,
          animation: 'fadeIn 2s ease-out 0.5s', // Fade-in for paragraph
        }}
      >
        L'institution Malgache, offrant des soirées inoubliables avec une ambiance survoltée.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#EA4CB0',
          color: '#FFFDFE',
          fontSize: { xs: '0.8rem', sm: '1rem' },
          padding: { xs: '8px 16px', sm: '10px 20px' },
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: '30px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
          ':hover': {
            backgroundColor: '#D13D9A',
            transform: 'scale(1.05)', // Dynamic scaling effect on hover
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
          },
          marginTop: '30px',
          transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
        }}
      >
        Découvrir nos événements
      </Button>

      {/* Adding dynamic background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          zIndex: -1, // To keep the background behind content
        }}
      />
    </Box>
  );
};

export default MainSection;
