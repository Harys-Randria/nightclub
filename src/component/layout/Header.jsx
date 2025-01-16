import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Privatisation', path: '/privatisation' },
  { label: 'Contact & Réservation', path: '/contact' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Detect scrolling and apply the scrolling effect
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolling ? '#110430' : 'transparent',
        boxShadow: scrolling ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'all 0.3s ease-in-out',
        padding: scrolling ? '5px 0' : '20px 0',
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '1.5rem', sm: '2rem' },
            color: '#FFFDFE',
            fontWeight: 'bold',
            transition: 'font-size 0.3s ease-in-out',
          }}
        >
          PICO NIGHT CLUB
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: '#FFFDFE' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: '#110430', // Color of the drawer
                  color: '#FFFDFE', // Text color
                  width: 250,
                  paddingTop: '60px', // Adjust to avoid overlap with the AppBar
                },
              }}
            >
              <Box
                role="presentation"
                onClick={() => setDrawerOpen(false)}
                onKeyDown={() => setDrawerOpen(false)}
                sx={{
                  height: '100%',
                  backgroundColor: '#110430',
                  color: '#FFFDFE',
                }}
              >
                <List>
                  {navLinks.map((link, index) => (
                    <ListItem button key={index} component={Link} to={link.path}>
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          style: {
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: '1.2rem',
                            color: '#FFFDFE',
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((link, index) => (
              <Button
                key={index}
                component={Link}
                to={link.path}
                sx={{
                  color: '#FFFDFE',
                  margin: '0 10px',
                  textTransform: 'uppercase',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#EA4CB0',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
