import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { keyframes } from '@emotion/react'; 
import InquirySection from '../Home/InquirySection';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const events = [
  {
    id: 1,
    title: "Soirée d'inauguration",
    description: "Préparez-vous à une nuit inoubliable ! DJ KEKEZ aux platines et des invités mystères qui vous feront vibrer toute la soirée.",
    date: "Samedi 18 Janvier 2025",
    image: image1, 
  },
  {
    id: 2,
    title: "Love Night – La Saint-Valentin en Émotion",
    description: "Une soirée glamour pour célébrer l’amour et l’amitié, avec une ambiance électrisante et une musique inoubliable.",
    date: "Vendredi 14 Février 2025",
    image: image2, 
  },
  {
    id: 3,
    title: "Club Party avec Picconight",
    description: "Préparez vos meilleurs pas de danse, DJ KEKEZ débarque avec des invités surprises pour enflammer la piste !",
    date: "Samedi 15 Février 2025",
    image: image3, 
  },
  {
    id: 4,
    title: "Soirée Années 80",
    description: "Revivez les classiques des années 80 avec une ambiance rétro et des DJs cultes.",
    date: "Vendredi 21 Février 2025",
    image: "https://www.magazine-cerise.com/wp-content/uploads/2018/12/Maggys-Club-1080x675.jpg", 
  },
  {
    id: 5,
    title: "DJ International Night",
    description: "Une soirée épique avec des performances de DJ internationaux qui vont faire vibrer le club.",
    date: "Samedi 22 Février 2025",
    image: "https://www.fccv.biz/wp-content/uploads/2020/07/Festival-DJ-Lyon-28.jpg", 
  },
  {
    id: 6,
    title: "Soirée Neon Glow",
    description: "Habillez-vous en néon et préparez-vous à briller toute la nuit sous des lumières UV incroyables.",
    date: "Vendredi 28 Février 2025",
    image: "https://megamix64.fr/wp-content/uploads/2024/11/fluo-party.jpg", 
  },
];

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Agenda = () => {
  return (
    <Box>
      {/* Section Titre et Description */}
      <Box
        sx={{
          backgroundImage: `url('https://images.thebusinessplanshop.com/ouvrir-discotheque/ouvrir-une-boite-de-nuit.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#FFFDFE',
          textAlign: 'center',
          paddingTop: '60px', // Espacement sous la navbar fixe
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            textTransform: 'uppercase',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
            animation: `${slideUp} 1s ease-out`,
          }}
        >
          Agenda des Événements
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
            animation: `${slideUp} 1.5s ease-out`,
          }}
        >
          Rejoignez-nous pour des soirées électrisantes au Pico Night Club ! Laissez-vous emporter par des événements inoubliables avec des DJ internationaux, des shows exclusifs et une ambiance de folie. Ne manquez pas ces moments magiques !
        </Typography>
      </Box>

      {/* Section Événements */}
      <Box sx={{ padding: '50px 20px', backgroundColor: '#1e1e1e', color: '#FFFDFE' }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '2rem', sm: '3rem' },
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '40px',
            animation: `${slideUp} 2s ease-out`,
          }}
        >
          Événements à venir
        </Typography>
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card
                sx={{
                  backgroundColor: '#2c2c2c',
                  color: '#FFFDFE',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
                  borderRadius: '15px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.8)',
                  },
                  animation: `${slideUp} 2s ease-out`,
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={event.image}
                  alt={event.title}
                  sx={{ borderRadius: '15px 15px 0 0' }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.8rem',
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
                    Réservez Maintenant
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
