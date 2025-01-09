import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { keyframes } from '@mui/system';

const events = [
  {
    title: "Soirée Neon Glow",
    date: "Samedi 27 Janvier 2025",
    image: "https://megamix64.fr/wp-content/uploads/2024/11/fluo-party.jpg",
  },
  {
    title: "LA FRENCH TOUCH",
    date: "Samedi 10 Février 2025",
    image: "https://www.loftclub.fr/public/img/big/FrenchsansdatesA4png_677cf0b40dbc8.png",},
  {
    title: "SOIREE ETUDIANTE",
    date: "Samedi 17 Février 2025",
    image: "https://www.loftclub.fr/public/img/big/MercrediTECHNOpng_677ea7e501685.png", 
  
  },
];

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  }
`;

const EventsSection = () => {
  return (
    <Box style={{ backgroundColor: '#FFFDFE', color: '#110430', paddingBottom: '50px' }}>
      {/* Séparateur cool entre les sections */}
      <Box
        sx={{
          height: '50px',
          backgroundImage: 'linear-gradient(to right, #EA4CB0, #110430)',
          marginBottom: '30px',
        }}
      />

      {/* Section Titre */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          textTransform: 'uppercase',
          marginBottom: '30px',
        }}
      >
        Nos Événements
      </Typography>

      {/* Grille des événements */}
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                animation: `${pulse} 5s infinite ease-in-out`,
                transformOrigin: 'center',
                borderRadius: '10px',
                backgroundColor: '#110430',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                width="100"
                image={event.image}
                alt={event.title}
                sx={{
                  transition: 'transform 5s ease-in-out',
                  transform: 'scale(1.1)', // Zoom constant
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 'bold',
                    color: '#FFFDFE',
                    textAlign: 'center',
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    color: '#EA4CB0',
                    textAlign: 'center',
                    marginTop: '10px',
                  }}
                >
                  {event.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsSection;
