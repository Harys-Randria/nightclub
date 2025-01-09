import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#110430', // Fond violet
        color: '#FFFDFE', // Texte blanc
        minHeight: '100vh',
        padding: '50px 20px',
      }}
    >
      {/* Titre de la page */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif", // Police festive
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Réactif
          textAlign: 'center',
          marginBottom: '30px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Effet de texte
        }}
      >
        Contactez-nous
      </Typography>

      {/* Informations de contact */}
      <Box
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Open Sans', sans-serif", // Police lisible
            fontSize: { xs: '1rem', sm: '1.2rem' },
            lineHeight: 1.8,
            marginBottom: '20px',
          }}
        >
          Le <strong>PICO NIGHT CLUB</strong> est situé au cœur d'Antananarivo. Nous sommes ouverts
          du jeudi au samedi, de 22h00 à 5h00. Pour toute demande de renseignement ou réservation,
          veuillez utiliser le formulaire ci-dessous ou nous contacter directement par téléphone ou
          e-mail.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: { xs: '1rem', sm: '1.2rem' },
            lineHeight: 1.8,
          }}
        >
          <strong>Adresse :</strong> Rue de la Nuit, Antananarivo, Madagascar<br />
          <strong>Téléphone :</strong> +261 34 12 34 56<br />
          <strong>E-mail :</strong> contact@piconightclub.mg
        </Typography>
      </Box>

      {/* Formulaire de contact */}
      <Paper
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '30px',
          backgroundColor: '#1a1a3d', // Fond légèrement plus clair
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textAlign: 'center',
            marginBottom: '20px',
            textTransform: 'uppercase',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
          }}
        >
          Formulaire de Contact
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom"
                variant="outlined"
                required
                InputLabelProps={{
                  style: { color: '#FFFDFE' },
                }}
                InputProps={{
                  style: { color: '#FFFDFE' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFFDFE',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Prénom"
                variant="outlined"
                required
                InputLabelProps={{
                  style: { color: '#FFFDFE' },
                }}
                InputProps={{
                  style: { color: '#FFFDFE' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFFDFE',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                type="email"
                required
                InputLabelProps={{
                  style: { color: '#FFFDFE' },
                }}
                InputProps={{
                  style: { color: '#FFFDFE' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFFDFE',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                InputLabelProps={{
                  style: { color: '#FFFDFE' },
                }}
                InputProps={{
                  style: { color: '#FFFDFE' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFFDFE',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFFDFE',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#e91e63', // Couleur du bouton
                  color: '#FFFDFE',
                  padding: '10px 20px',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  '&:hover': {
                    backgroundColor: '#ff79a1',
                  },
                }}
              >
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
