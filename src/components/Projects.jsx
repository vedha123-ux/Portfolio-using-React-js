import React from 'react';
import { Container, Grid, Typography, Box, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, OpenInNew } from '@mui/icons-material';

// Project Data
const projects = [
  {
    title: 'Exam Buddy',
    description: 'An exam preparation platform with question banks, mock tests, and performance analytics.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/vedha123-ux/FET-MINI-PROJECT',
    color: 'linear-gradient(135deg, #6a11cb, #2575fc)'
  },
  {
    title: 'Travel Website',
    description: 'A travel blog website with destination guides, travel tips, and booking options.',
    tech: ['React.js', 'PHP', 'MySQL'],
    github: 'https://github.com/vedha123-ux/Travel-Website-using-Tailwind-css-and-React-js-and-php',
    color: 'linear-gradient(135deg, #ff7e5f, #feb47b)'
  },
  {
    title: 'Sweet Shop E-Commerce',
    description: 'An online sweet shop with cart, checkout, and product filtering features.',
    tech: ['Vite', 'React.js'],
    github: 'https://github.com/vedha123-ux/Sweets-e-commerce',
    color: 'linear-gradient(135deg, #43cea2, #185a9d)'
  },
  {
    title: 'Wonders of Handmade',
    description: 'An e-commerce platform for handmade products with user reviews and ratings.',
    tech: ['html', 'css', 'javascript'],
    github: 'https://github.com/vedha123-ux/WEB-TECHPROJECT',
    color: 'linear-gradient(135deg, #ff9966, #ff5e62)'
  },
  {
    title: 'Post Dashboard using PHP',
    description: 'A social media post dashboard with user authentication and post management.',
    tech: ['php'],
    github: 'https://github.com/vedha123-ux/Post-Dashboard-using-Php/tree/main/Nutz%20interview',
    color: 'linear-gradient(135deg, #56ccf2, #2f80ed)'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing skills, projects, and services with animations.',
    tech: ['React.js', 'Framer Motion', 'Material UI'],
    github: '#',
    color: 'linear-gradient(135deg, #7f00ff, #e100ff)'
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ padding: '100px 0', background: '#f5f5f5', color: '#333' }}
    >
      <Container maxWidth="lg">

        {/* Title Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: '#2c3e50' }}
          >
            🚀 My Projects
          </Typography>
          <Box
            sx={{
              width: '120px',
              height: '4px',
              background: '#3498db',
              margin: '20px auto'
            }}
          />
          <Typography variant="body1" color="#555" maxWidth="700px" mx="auto" mt={2}>
            Here are some of my recent projects.  
            Hover over the cards to reveal more details!
          </Typography>
        </motion.div>

        {/* Project Cards */}
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    height: '370px',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                    position: 'relative',
                    transition: '0.4s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      background: project.color,
                      height: '60%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: '0.4s'
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{ color: '#fff', textAlign: 'center' }}
                    >
                      {project.title}
                    </Typography>
                  </Box>

                  <Box sx={{ p: 3, height: '40%', position: 'relative' }}>
                    <Typography variant="body1" color="#555" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.tech.map((tech, techIndex) => (
                        <Box
                          key={techIndex}
                          sx={{
                            px: 2,
                            py: 1,
                            background: '#3498db',
                            color: '#fff',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            transition: '0.3s',
                            '&:hover': {
                              background: '#2980b9'
                            }
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>

                    {/* Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<OpenInNew />}
                        href={project.link}
                        target="_blank"
                        sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#1a252f' } }}
                      >
                        Live Demo
                      </Button>

                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        sx={{ color: '#2c3e50', borderColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50', color: '#fff' } }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Projects;
