import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

// Définition de l'animation pour le texte défilant
const scrollText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const events = [
  {
    title: "Soirée d'inauguration",
    date: "Samedi 18 Janvier 2025",
    description: "C’est le grand soir ! Nous vous invitons à célébrer l’inauguration de notre nouveau club, un lieu unique où la musique, les lumières et l’ambiance se rencontrent pour créer une expérience inoubliable. Rejoignez-nous pour cette soirée exclusive et soyez parmi les premiers à découvrir notre espace, avec des performances spéciales et une ambiance à couper le souffle. Venez faire partie de cette nouvelle ère et lancez avec nous cette aventure nocturne !",
    image: image1,
  },
  {
    title: "Love Night – La Saint-Valentin en Émotion",
    date: "Vendredi 14 Février 2025",
    description: "Cette année, célébrez l’amour sous toutes ses formes lors de la Love Night – La Saint-Valentin en Émotion. Offrez-vous une soirée magique, pleine de charme et de romance. Ambiance feutrée, musique envoûtante et moments inoubliables avec vos proches ou votre partenaire. Préparez-vous à vivre une expérience émotive et spectaculaire, où chaque instant sera un souvenir à chérir. Parce que l’amour mérite une soirée à la hauteur de l’émotion !",
    image: image2,
  },
  {
    title: "Club Party avec Picconight",
    date: "Samedi 15 Février 2025",
    description: "La soirée prend une toute autre dimension avec DJ KEKEZ aux platines et des invités surprises pour enflammer la piste de danse ! Attendez-vous à une expérience palpitante et électrisante lors de cette Club Party avec Picconight. Une soirée où la musique électro et les beats endiablés transformeront la nuit en un véritable feu d’artifice sonore. Mettez vos plus belles chaussures de danse et rejoignez-nous pour une nuit où tout est permis !",
    image: image3,
  },
];

const EventsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#110430', paddingBottom: '50px' }}>
      {/* Séparateur avec phrase défilante */}
      <Box
        sx={{
          height: '50px',
          backgroundImage: 'linear-gradient(to right, #EA4CB0, #110430)',
          marginBottom: '30px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            animation: `${scrollText} 10s linear infinite`,
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '1rem', sm: '2rem' },
            color: '#FFF',
          }}
        >
          Venez vivre des soirées inoubliables avec nos événements exclusifs !
        </Typography>
      </Box>

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
          color: '#EA4CB0',
        }}
      >
        Nos Événements
      </Typography>

      {/* Liste des événements */}
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#1F0A3D',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {/* Contenu (Titre, Date, Description) */}
              <CardContent
                sx={{
                  flex: 1,
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#FFFDFE',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    lineHeight: '1.2',
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    color: '#EA4CB0',
                    marginBottom: '10px',
                    fontSize: '1rem',
                  }}
                >
                  {event.date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    lineHeight: '1.5',
                    fontSize: '1rem',
                    color: '#DDD',
                  }}
                >
                  {event.description}
                </Typography>
              </CardContent>

              {/* Image */}
              <CardMedia
                component="img"
                image={event.image}
                alt={event.title}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  maxHeight: '250px',
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bouton Voir Nos Événements */}
      <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            padding: '12px 30px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: '#EA4CB0',
            '&:hover': {
              backgroundColor: '#D24F8F',
            },
          }}
        >
          Voir Nos Événements
        </Button>
      </Box>
    </Box>
  );
};

export default EventsSection;
