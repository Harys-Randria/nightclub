import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import InquirySection from '../Home/InquirySection';

const events = [
  {
    id: 1,
    title: "Soirée Années 80",
    description: "Revivez les classiques des années 80 avec des DJ emblématiques et une ambiance rétro inoubliable.",
    date: "Samedi 13 Janvier 2025",
    image: "https://www.ville-arconnay.fr/wp-content/uploads/2024/01/Annees-80-1404x1080.jpg", // Remplacez par une URL réelle
  },
  {
    id: 2,
    title: "DJ International Night",
    description: "Une soirée avec des performances de DJ internationaux qui vont faire vibrer le club.",
    date: "Vendredi 19 Janvier 2025",
    image: "https://img.pikbest.com/origin/09/18/77/572pIkbEsTNwd.jpg!w700wp", // Remplacez par une URL réelle
  },
  {
    id: 3,
    title: "Soirée Neon Glow",
    description: "Habillez-vous en blanc ou en néon et préparez-vous à briller toute la nuit sous des lumières UV.",
    date: "Samedi 27 Janvier 2025",
    image: "https://megamix64.fr/wp-content/uploads/2024/11/fluo-party.jpg", // Remplacez par une URL réelle
  },
  {
    id: 4,
    title: "LA FRENCH TOUCH",
    description: "Ce samedi soir on retourne le Loft comme à notre habitude !",
    date: "Samedi 10 Février 2025",
    image: "https://www.loftclub.fr/public/img/big/FrenchsansdatesA4png_677cf0b40dbc8.png", // Remplacez par une URL réelle
  },
  {
    id: 5,
    title: "SOIREE ETUDIANTE",
    description: "La soirée est ouverte à tous les étudiants quelle que soit l'université ou l'école supérieure d'origine.",
    date: "Samedi 17 Février 2025",
    image: "https://www.loftclub.fr/public/img/big/MercrediTECHNOpng_677ea7e501685.png", // Remplacez par une URL réelle
  },
];

const Agenda = () => {
  return (
    <Box>
      {/* Section Titre et Description */}
      <Box
        sx={{
          backgroundImage: `url('https://images.thebusinessplanshop.com/ouvrir-discotheque/ouvrir-une-boite-de-nuit.jpg')`, // Remplacez par une URL réelle
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#FFFDFE',
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
          Agenda Événements
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: { xs: '1rem', sm: '1.2rem' },
            maxWidth: '800px',
            margin: '20px auto',
            lineHeight: 1.8,
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          Rejoignez-nous pour des soirées inoubliables au Pico Night Club ! Plongez dans une ambiance
          électrique avec des DJ internationaux, des événements thématiques et une énergie
          vibrante. Soyez au cœur de la fête et créez des souvenirs qui dureront toute une vie.
        </Typography>
      </Box>

      {/* Section Événements */}
      <Box sx={{ padding: '50px 20px', backgroundColor: '#110430', color: '#FFFDFE' }}>
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
          Événements à venir
        </Typography>
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card
                sx={{
                  backgroundColor: '#1a103f',
                  color: '#FFFDFE',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                  sx={{ borderRadius: '10px 10px 0 0' }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.5rem',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      marginBottom: '10px',
                    }}
                  >
                    {event.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: 'italic',
                      marginBottom: '20px',
                      color: '#b3b3b3',
                    }}
                  >
                    Date : {event.date}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#ff4081',
                      color: '#FFFDFE',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      fontFamily: "'Bebas Neue', sans-serif",
                      '&:hover': {
                        backgroundColor: '#ff79a1',
                      },
                    }}
                  >
                    Billeterie
                  </Button>
                </CardContent>
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

export default Agenda;
