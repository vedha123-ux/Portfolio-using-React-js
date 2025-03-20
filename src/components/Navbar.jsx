import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';  // Smooth scrolling links
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const navItems = [
    { label: 'Home', link: 'home', isExternal: false },
    { label: 'About', link: 'about', isExternal: false },
    { label: 'Projects', link: 'projects', isExternal: false },
    { label: 'Contact', link: 'contact', isExternal: false },
  ];

  return (
    <>
      {/* Animated Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <AppBar 
          position="fixed"
          sx={{
            background: '#1976d2', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            transition: '0.3s'
          }}
        >
          <Toolbar>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Menu />
            </IconButton>

            {/* Title */}
            <Typography
              variant="h5"
              sx={{ 
                flexGrow: 1,
                fontWeight: 'bold',
                letterSpacing: '1px',
                cursor: 'pointer',
                '&:hover': { color: '#ffeb3b', transition: '0.3s' }
              }}
            >
              Portfolio
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                item.isExternal ? (
                  // External Link
                  <Button
                    key={item.label}
                    href={item.link}
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': { color: '#ffeb3b' }
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  // Smooth Scrolling for Internal Sections
                  <ScrollLink 
                    key={item.label}
                    to={item.link}
                    smooth={true}
                    duration={800}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                  >
                    <Button
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': { color: '#ffeb3b' },
                        '&.active': { borderBottom: '3px solid #ffeb3b' }
                      }}
                    >
                      {item.label}
                    </Button>
                  </ScrollLink>
                )
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
        <List>
          {navItems.map((item) => (
            item.isExternal ? (
              // External Link in Drawer
              <ListItem 
                button 
                key={item.label} 
                component="a" 
                href={item.link}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ) : (
              // Smooth Scrolling in Drawer
              <ListItem
                button
                key={item.label}
                component={ScrollLink}
                to={item.link}
                smooth={true}
                duration={800}
                offset={-70}
                spy={true}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            )
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
