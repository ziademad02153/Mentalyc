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
import ClientsPage from './pages/ClientsPage/ClientsPage';

const theme = createTheme({
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="static" 
          color="transparent" 
          elevation={0}
          sx={{ 
            borderBottom: '1px solid #E0E0E0',
            backgroundColor: 'white'
          }}
        >
          <Toolbar>
            {/* Logo */}
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 4,
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

            {/* Navigation Links */}
            <Button 
              color="inherit" 
              sx={{ 
                mr: 2,
                ...(currentPage === 'notes' && {
                  color: theme.palette.primary.main,
                })
              }}
              onClick={() => setCurrentPage('notes')}
            >
              New notes
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                mr: 2,
                ...(currentPage === 'clients' && {
                  color: theme.palette.primary.main,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(45deg, #8B1D94 30%, #A020F0 90%)',
                  }
                })
              }}
              onClick={() => setCurrentPage('clients')}
            >
              Clients
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                mr: 2,
                ...(currentPage === 'clinicians' && {
                  color: theme.palette.primary.main,
                })
              }}
              onClick={() => setCurrentPage('clinicians')}
            >
              Clinicians
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                mr: 2,
                ...(currentPage === 'templates' && {
                  color: theme.palette.primary.main,
                })
              }}
              onClick={() => setCurrentPage('templates')}
            >
              Templates
            </Button>
            
            <Box sx={{ flexGrow: 1 }} />

            {/* Right Side Items */}
            <Button 
              color="inherit" 
              sx={{ 
                mr: 2,
                background: 'linear-gradient(45deg, #8B1D94 30%, #A020F0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
              }}
              onClick={() => window.open('https://mentalyc.com/earn', '_blank')}
            >
              Earn $80
            </Button>
            
            <Badge 
              badgeContent={notesCount} 
              color="primary"
              sx={{ 
                mr: 2,
                '& .MuiBadge-badge': {
                  background: 'linear-gradient(45deg, #8B1D94 30%, #A020F0 90%)',
                }
              }}
            >
              <Typography color="textSecondary">notes left</Typography>
            </Badge>

            <Button
              variant="contained"
              sx={{
                mr: 2,
                background: 'linear-gradient(45deg, #8B1D94 30%, #A020F0 90%)',
                boxShadow: '0 3px 5px 2px rgba(139, 29, 148, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #7B1A84 30%, #8B1D94 90%)',
                },
              }}
              onClick={() => window.open('https://mentalyc.com/super', '_blank')}
            >
              Become SUPER
            </Button>

            <IconButton 
              sx={{ p: 0, mr: 2 }}
              onClick={handleProfileClick}
            >
              <Avatar sx={{ 
                bgcolor: '#E3F2FD', 
                color: '#1976D2',
                width: 32,
                height: 32,
                fontSize: '0.9rem',
              }}>
                M
                <KeyboardArrowDownIcon sx={{ fontSize: '1rem', ml: -0.5 }} />
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onClick={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>

            <Tooltip title="Help">
              <IconButton 
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': {
                    color: theme.palette.primary.light,
                  }
                }}
                onClick={() => window.open('https://mentalyc.com/help', '_blank')}
              >
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        {currentPage === 'clients' && <ClientsPage />}
        {/* Add other pages here when they're created */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
