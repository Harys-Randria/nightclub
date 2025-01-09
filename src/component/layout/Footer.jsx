import React from 'react';
import { Box, Typography, IconButton, Grid, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#110430', // Fond violet
        color: '#FFFDFE', // Texte blanc
        textAlign: 'center',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Décoration en arrière-plan */}
      <Box
        sx={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          backgroundColor: '#e91e63',
          borderRadius: '50%',
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          backgroundColor: '#ff79a1',
          borderRadius: '50%',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Titre principal */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textTransform: 'uppercase',
            marginBottom: '20px',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
          }}
        >
          Pico Night Club
        </Typography>

        {/* Informations principales */}
        <Grid container spacing={4} sx={{ marginBottom: '30px' }}>
          {/* Adresse et Contact */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Adresse: Rue de la nuit, ANTANANARIVO
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '1rem',
                marginTop: '5px',
              }}
            >
              Contact: +261 32 02 202 20<br />
              Email: contact@piconight.com
            </Typography>
          </Grid>

          {/* Menu rapide */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.2rem',
                marginBottom: '10px',
              }}
            >
              Menu rapide
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '1rem',
                lineHeight: 2,
              }}
            >
              <a href="/" style={{ textDecoration: 'none', color: '#FFFDFE' }}>
                Accueil
              </a>
              <br />
              <a href="/agenda" style={{ textDecoration: 'none', color: '#FFFDFE' }}>
                Agenda
              </a>
              <br />
              <a href="/privatisation" style={{ textDecoration: 'none', color: '#FFFDFE' }}>
                Privatisation
              </a>
              <br />
              <a href="/contact" style={{ textDecoration: 'none', color: '#FFFDFE' }}>
                Contact
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            backgroundColor: '#FFFDFE',
            opacity: 0.5,
            marginBottom: '20px',
          }}
        />

        {/* Réseaux sociaux */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.2rem',
            marginBottom: '10px',
          }}
        >
          Suivez-nous sur
        </Typography>
        <Box>
          <IconButton
            component="a"
            href="https://www.facebook.com/"
            target="_blank"
            sx={{ color: '#FFFDFE', margin: '0 10px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            sx={{ color: '#FFFDFE', margin: '0 10px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/"
            target="_blank"
            sx={{ color: '#FFFDFE', margin: '0 10px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/"
            target="_blank"
            sx={{ color: '#FFFDFE', margin: '0 10px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
          >
            <YouTube />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            marginTop: '20px',
            fontSize: '0.9rem',
            opacity: 0.7,
          }}
        >
          © 2025 Pico Night Club. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
