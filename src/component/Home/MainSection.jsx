import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.xceed.me/blog/wp-content/uploads/2016/08/29122435/ellenallien-1.jpg')`, // Remplace par ton image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFDFE',
        height: '100vh', // Remplit toute la hauteur de l'écran
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: "'Bebas Neue', sans-serif", // Police festive
          fontSize: { xs: '2rem', sm: '4rem', md: '5rem' }, // Responsivité
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)', // Ajout d'un effet de texte
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
          maxWidth: '600px', // Limite la largeur du texte
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
        }}
      >
        L'institution Matlgache, offrant des soirées inoubliables avec une ambiance survoltée.
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
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          ':hover': {
            backgroundColor: '#D13D9A',
          },
          marginTop: '20px',
        }}
      >
        Découvrir nos événements
      </Button>
    </Box>
  );
};

export default MainSection;
