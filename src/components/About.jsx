import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  LinearProgress,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Brush, Storage, Web } from '@mui/icons-material';

// Skills Data
const skills = [
  { name: 'Web Design', value: 95, color: '#f39c12' },
  { name: 'Web Development', value: 90, color: '#e74c3c' },
  { name: 'Graphic Design', value: 85, color: '#3498db' },
  { name: 'UI/UX', value: 80, color: '#9b59b6' },
  { name: 'React.js', value: 88, color: '#1abc9c' },
  { name: 'WordPress', value: 85, color: '#2ecc71' }
];

// Services Data
const services = [
  {
    title: 'Web Design',
    description: 'Crafting modern, responsive, and user-friendly website designs.',
    icon: <Brush sx={{ fontSize: 60, color: '#f39c12' }} />
  },
  {
    title: 'Web Development',
    description: 'Building high-performance websites with clean and efficient code.',
    icon: <Code sx={{ fontSize: 60, color: '#3498db' }} />
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress themes, plugins, and optimizations.',
    icon: <Web sx={{ fontSize: 60, color: '#2ecc71' }} />
  },
  {
    title: 'Database Management',
    description: 'Efficient and scalable data solutions with optimized performance.',
    icon: <Storage sx={{ fontSize: 60, color: '#9b59b6' }} />
  }
];

const About = () => {
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
        >
          <Typography
            variant="h2"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: '#2c3e50' }}
          >
            About Me
          </Typography>
          <Divider
            sx={{
              mb: 5,
              width: '100px',
              mx: 'auto',
              borderBottom: '4px solid #3498db'
            }}
          />
        </motion.div>

        <Grid container spacing={5}>

          {/* Left Section - Who Am I */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                p: 5,
                background: 'linear-gradient(135deg, #8e44ad, #3498db)',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                transition: '0.5s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <Box display="flex" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight="bold" color="#fff">
                  🙋‍♀️ Who Am I?
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, color: '#fff', fontSize: '18px' }}
              >
                I'm <strong style={{ color: '#f1c40f' }}>Vedha Dharshini</strong>, a  
                <strong> Web Designer, Developer, and Graphic Designer</strong>.  
                I thrive on creating visually captivating, user-centric websites with modern, responsive designs and seamless functionality.  
                I love solving problems through code and translating creative ideas into interactive digital experiences.
              </Typography>

              <Box mt={4}>
                <Typography variant="h5" fontWeight="bold" color="#f1c40f">
                  🎓 Education
                </Typography>
                <Divider sx={{ my: 2, borderBottom: '2px solid #fff' }} />
                <Typography variant="h6" fontWeight="bold" color="#fff">Master of Software Systems</Typography>
                <Typography variant="body2" color="#eee">Kongu Engineering College, Erode</Typography>
                <Typography variant="body2" color="#eee">2021 - 2026</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Section - Skills */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                p: 5,
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transition: '0.5s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#3498db', mb: 3 }}>
                🚀 My Skills
              </Typography>
              <Divider sx={{ mb: 4, borderBottom: '2px solid #3498db' }} />

              <Grid container spacing={4}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 4,
                        background: 'rgba(52, 152, 219, 0.1)',
                        p: 3,
                        borderRadius: 4,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                        transition: '0.4s',
                        '&:hover': { transform: 'translateY(-8px)' }
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${skill.color}, #fff)`,
                          borderRadius: '50%',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                          mr: 3
                        }}
                      >
                        {index % 2 === 0 ? (
                          <Code sx={{ color: '#fff', fontSize: 32 }} />
                        ) : (
                          <Brush sx={{ color: '#fff', fontSize: 32 }} />
                        )}
                      </Box>

                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" color="#333">
                          {skill.name}
                        </Typography>

                        <LinearProgress
                          variant="determinate"
                          value={skill.value}
                          sx={{
                            height: 10,
                            borderRadius: 6,
                            backgroundColor: '#eee',
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(90deg, ${skill.color}, #fff)`
                            }
                          }}
                        />
                        <Typography variant="body2" color="#555" sx={{ mt: 1, fontWeight: 'bold' }}>
                          {skill.value}%
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Services Section */}
        <Box mt={8}>
          <Typography variant="h3" fontWeight="bold" align="center" sx={{ color: '#2c3e50' }}>
            🚀 My Services
          </Typography>
          <Divider sx={{ width: '100px', mx: 'auto', my: 3, borderBottom: '4px solid #3498db' }} />
          <Grid container spacing={5}>
            {services.map((service, index) => (
              <Grid item xs={12} md={3} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Paper sx={{ p: 4, borderRadius: '12px', textAlign: 'center' }}>
                    {service.icon}
                    <Typography variant="h5" fontWeight="bold">{service.title}</Typography>
                    <Typography>{service.description}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
};

export default About;
