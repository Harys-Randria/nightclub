import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const BiographySection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#110430', // Fond violet
        color: '#FFFDFE', // Texte blanc
        padding: '50px 20px',
      }}
    >
      {/* Titre de la section */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif", // Police festive
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsif
          textAlign: 'center',
          marginBottom: '30px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Effet de texte
        }}
      >
        LE CLUB
      </Typography>

      {/* Contenu en deux colonnes (texte + image) */}
      <Grid container spacing={4} alignItems="center">
        {/* Texte */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', sans-serif", // Police lisible
              fontSize: { xs: '1rem', sm: '1.2rem' },
              lineHeight: 1.8,
              textAlign: 'justify',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            Depuis plus de 25 ans, le <strong>Pico Night Club</strong> est l'épicentre des nuits les
            plus mémorables. Avec une ambiance électrique, des DJ internationaux et une clientèle
            jeune et branchée, notre boîte est bien plus qu’un lieu de fête. C'est une institution
            où la musique, les lumières, et les âmes vibrent en parfaite harmonie. 💃
            <br />
            <br />
            Situé au cœur de la ville, le Pico Night Club est l'endroit où chaque nuit devient une
            légende. Rejoignez-nous pour vivre des soirées inoubliables, des moments magiques, et
            une énergie que vous ne trouverez nulle part ailleurs. 🌟
          </Typography>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: { xs: '300px', sm: '400px' },
              backgroundImage: `url('https://www.lesbarres.com/blog/wp-content/uploads/2023/03/Lux-Fragil-Boite-de-nuit-Discotheque-Lisbonne.png')`, // Remplace par une image réelle
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BiographySection;
