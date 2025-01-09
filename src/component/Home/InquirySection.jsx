import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0px 0px 15px rgba(234, 76, 176, 0.6);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 25px rgba(234, 76, 176, 1);
  }
`;

const InquirySection = () => {
  return (
    <Box
      sx={{
        height: '100vh', // Pleine hauteur d'écran
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('https://www.grizette.com/wp-content/uploads/2018/12/BoiteDeNuit-Mtp_couv-DiaoDarius.jpeg')`, // Remplace par une vraie image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFDFE',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Titre */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
          marginBottom: '20px',
        }}
      >
        Renseignements
      </Typography>

      {/* Texte */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: { xs: '1rem', sm: '1.2rem' },
          lineHeight: 1.8,
          maxWidth: '600px',
          marginBottom: '30px',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        }}
      >
        Vous voulez privatiser le lieu ? 
      </Typography>

      {/* Bouton */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#EA4CB0',
          color: '#FFFDFE',
          fontSize: { xs: '1rem', sm: '1.2rem' },
          padding: { xs: '10px 20px', sm: '12px 30px' },
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: '30px',
          animation: `${pulseAnimation} 3s infinite ease-in-out`,
          ':hover': {
            backgroundColor: '#D13D9A',
          },
        }}
      >
        Contactez-nous
      </Button>
    </Box>
  );
};

export default InquirySection;
