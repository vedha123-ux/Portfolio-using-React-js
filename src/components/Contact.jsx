import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper, Snackbar, Alert, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alertOpen, setAlertOpen] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      setAlertOpen(true);
      return;
    }

    setError('');
    setAlertOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

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
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Typography variant="h2" fontWeight="bold" sx={{ color: '#2c3e50' }}>
            📩 Get in Touch
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
            Have a question, project proposal, or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible!
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          
          {/* Contact Form Section */}
          <Grid item xs={12} md={12}>
            <Paper
              elevation={8}
              sx={{
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                backgroundColor: '#fff'
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    backgroundColor: '#3498db',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#2980b9' }
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar open={alertOpen} autoHideDuration={3000} onClose={() => setAlertOpen(false)}>
          <Alert
            onClose={() => setAlertOpen(false)}
            severity={error ? 'error' : 'success'}
            sx={{ width: '100%' }}
          >
            {error || 'Message sent successfully!'}
          </Alert>
        </Snackbar>

        {/* Footer with Contact Details & Social Icons */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 10,
            p: 6,
            background: '#2c3e50',
            color: '#fff',
            borderRadius: '12px'
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            🌐 Connect with Me
          </Typography>
          <Divider sx={{ background: '#fff', my: 4 }} />

          {/* Contact Details */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
              <Phone sx={{ fontSize: 30, color: '#3498db', mr: 1 }} />
              <Typography variant="body1">+91 93632 95595</Typography>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
              <Email sx={{ fontSize: 30, color: '#3498db', mr: 1 }} />
              <Typography variant="body1">vedha.rajendran22004@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
              <LocationOn sx={{ fontSize: 30, color: '#3498db', mr: 1 }} />
              <Typography variant="body1">Sankari, India</Typography>
            </Grid>
          </Grid>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mt: 4 }}>
            <IconButton href="https://github.com/vedha123-ux" target="_blank" color="inherit">
              <GitHub sx={{ fontSize: 50, color: '#fff' }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/vedha-dharshini-545baa246" target="_blank" color="inherit">
              <LinkedIn sx={{ fontSize: 50, color: '#0077b5' }} />
            </IconButton>
          </Box>

          <Typography variant="body1" mt={3}>
            © {new Date().getFullYear()} Vedha Dharshini. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Contact;
