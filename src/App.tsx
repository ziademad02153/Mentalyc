import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ClientsPage from './pages/ClientsPage/ClientsPage';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#8B1D94',
      light: '#A020F0',
      dark: '#6B1571',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  const [currentPage, setCurrentPage] = useState('clients');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notesCount] = useState(12);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: 'white',
            boxShadow: 'none',
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <Toolbar sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            px: { xs: 2, sm: 4 },
            py: 1,
          }}>
            {/* Logo */}
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginRight: { xs: 1, sm: 4 },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Dancing Script, cursive',
                    color: '#8B1D94',
                    fontWeight: 300,
                    fontSize: '1.7rem',
                    lineHeight: 1,
                    marginRight: '10px',
                  }}
                >
                  m
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: '#8B1D94',
                    color: 'white',
                    padding: '1px 3px',
                    borderRadius: '2px',
                    fontSize: '0.5rem',
                    fontWeight: 400,
                    height: 'fit-content',
                    marginTop: '4px',
                  }}
                >
                  PRO
                </Typography>
              </Box>
            </Box>

            {/* Navigation */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: { xs: 1, sm: 2, md: 4 },
              flex: 1,
              justifyContent: { xs: 'flex-end', md: 'space-between' },
            }}>
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' },
                gap: 4,
              }}>
                <Button color="inherit" sx={{ color: '#1C1B1F' }}>New notes</Button>
                <Button color="inherit" sx={{ color: '#8B1D94' }}>Clients</Button>
                <Button color="inherit" sx={{ color: '#1C1B1F' }}>Clinicians</Button>
                <Button color="inherit" sx={{ color: '#1C1B1F' }}>Templates</Button>
              </Box>

              {/* Mobile Menu */}
              <Box sx={{ 
                display: { xs: 'block', md: 'none' }
              }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ color: '#1C1B1F' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Right Section */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: { xs: 1, sm: 2 },
              }}>
                <Button 
                  variant="text" 
                  sx={{ 
                    color: '#1C1B1F',
                    display: { xs: 'none', sm: 'flex' },
                  }}
                >
                  Earn $80
                </Button>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#49454F',
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    12 notes left
                  </Typography>
                  <AccessTimeIcon sx={{ color: '#49454F', fontSize: '1rem' }} />
                </Box>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#8B1D94',
                    '&:hover': {
                      backgroundColor: '#7B1A84',
                    },
                    px: { xs: 2, sm: 3 },
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  Become SUPER
                </Button>
                <Avatar sx={{ bgcolor: '#E8DEF8', color: '#1C1B1F' }}>M</Avatar>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ 
          flexGrow: 1,
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 3 },
          backgroundColor: '#F6F5F7',
        }}>
          {currentPage === 'clients' && <ClientsPage />}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
