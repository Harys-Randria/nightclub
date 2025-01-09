import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import InquirySection from '../Home/InquirySection';

const privatisationOptions = [
  {
    title: "Soirées étudiantes toutes les semaines",
    description:
      "Organisez des soirées étudiantes mémorables dans une ambiance électrique. Le PICO NIGHT CLUB offre un espace spacieux et une sonorisation haut de gamme pour que chaque soirée soit inoubliable.",
  },
  {
    title: "Organiser un enterrement de vie de jeune fille",
    description:
      "Fêtez cette occasion spéciale avec vos proches dans un lieu qui promet de rendre chaque instant magique. Une soirée sur mesure, juste pour vous, au cœur d'Antananarivo.",
  },
  {
    title: "Une boite de nuit privatisable pour vos soirées d'entreprise",
    description:
      "Offrez à vos équipes une soirée unique dans un cadre branché et professionnel. Parfait pour renforcer la cohésion et célébrer les succès.",
  },
  {
    title: "Le PICO NIGHT CLUB, le lieu idéal pour tous vos évènements professionnels",
    description:
      "Des événements professionnels aux cocktails privés, notre club offre une ambiance élégante et des services personnalisés pour répondre à vos besoins.",
  },
];

const Privatisation = () => {
  return (
    <Box>
      {/* Titre de la page */}
      <Box
        sx={{
          backgroundColor: '#110430',
          color: '#FFFDFE',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            textTransform: 'uppercase',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
          }}
        >
          PRIVATISATION
        </Typography>
      </Box>

      {/* Longue description */}
      <Box
        sx={{
          padding: '40px 20px',
          backgroundColor: '#1a103f',
          color: '#FFFDFE',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: { xs: '1rem', sm: '1.2rem' },
            lineHeight: 1.8,
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'justify',
          }}
        >
          Situé au cœur d'Antananarivo, le <strong>PICO NIGHT CLUB</strong> est l'endroit idéal pour
          vos événements privés. Que ce soit pour des soirées étudiantes, des enterrements de vie de
          jeune fille, ou des événements professionnels, notre club offre un cadre unique et des
          services sur mesure pour répondre à vos attentes.
          <br />
          <br />
          Avec une capacité d’accueil allant jusqu’à 500 personnes, un système de sonorisation et
          d’éclairage de pointe, ainsi qu’une équipe dédiée à votre service, nous mettons tout en
          œuvre pour faire de votre événement une réussite. Profitez d’un espace modulable et d’une
          ambiance festive qui saura séduire vos invités, quels que soient leurs goûts.
          <br />
          <br />
          Le PICO NIGHT CLUB est le choix parfait pour organiser des événements inoubliables, qu’il
          s’agisse de célébrations personnelles ou d’occasions professionnelles. Faites de vos
          soirées une expérience mémorable dans un lieu à la fois chic et dynamique.
        </Typography>
      </Box>

      {/* Section des options de privatisation */}
      <Box
        sx={{
          padding: '50px 20px',
          backgroundColor: '#110430',
          color: '#FFFDFE',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '2rem', sm: '3rem' },
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          Nos options de privatisation
        </Typography>
        <Grid container spacing={4}>
          {privatisationOptions.map((option, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: '#1a103f',
                  color: '#FFFDFE',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '15px',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
                  height: '100%', // Assure que toutes les cartes occupent la même hauteur
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.5rem',
                      marginBottom: '15px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {option.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '20px',
                    }}
                  >
                    {option.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff4081',
                    color: '#FFFDFE',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontFamily: "'Bebas Neue', sans-serif",
                    alignSelf: 'center',
                    '&:hover': {
                      backgroundColor: '#ff79a1',
                    },
                  }}
                >
                  Contactez-nous
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Inquiry Section */}
      <InquirySection />
    </Box>
  );
};

export default Privatisation;
