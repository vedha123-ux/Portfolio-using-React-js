import { Box, Typography, Button, Container, Avatar, IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Fullscreen Background with Custom Image */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url('/background.avif')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          padding: '5rem 2rem',
        }}
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)', 
            zIndex: 1,
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar
              alt="Your Photo"
              src="./profile.jpg"
              sx={{
                width: 200,
                height: 200,
                margin: '0 auto',
                mb: 4,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                border: '4px solid #ffffff'
              }}
            />
          </motion.div>

          {/* Title & Subtitle */}
          <Typography
            variant="h2"
            component={motion.h1}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            sx={{
              fontWeight: 'bold',
              letterSpacing: '2px',
              mb: 3,
              textShadow: '3px 3px 8px rgba(0,0,0,0.7)',
            }}
          >
            I'm a Web Designer & Developer
          </Typography>

          <Typography
            variant="h5"
            component={motion.p}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            sx={{ color: '#f0f0f0', mb: 4 }}
          >
            Crafting visually stunning and highly functional websites.
          </Typography>

          {/* Social Media Icons */}
          <Box display="flex" justifyContent="center" gap={3} mb={4}>
            
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
              <IconButton
                href="https://www.linkedin.com/in/vedha-dharshini-545baa246"  
                target="_blank"
                sx={{
                  color: '#0a66c2',
                  transition: '0.3s',
                  '&:hover': { color: '#0056b3' },
                  boxShadow: '0 0 15px #0a66c2'
                }}
              >
                <LinkedIn sx={{ fontSize: 45 }} />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
              <IconButton
                href="https://github.com/vedha123-ux"  
                target="_blank"
                sx={{
                  color: '#171515',
                  transition: '0.3s',
                  '&:hover': { color: 'blue' },
                  boxShadow: '0 0 15px white'
                }}
              >
                <GitHub sx={{ fontSize: 45 }} />
              </IconButton>
            </motion.div>

          </Box>

          {/* Buttons */}
          <Box display="flex" justifyContent="center" gap={2}>
            
            {/* Portfolio Button */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  boxShadow: '0 5px 15px rgba(0, 123, 255, 0.8)',
                  textTransform: 'uppercase',
                  '&:hover': {
                    background: '#0056b3',
                    boxShadow: '0 5px 25px rgba(0, 123, 255, 1)'
                  }
                }}
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Hire Me Button */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                sx={{
                  boxShadow: '0 5px 15px rgba(255, 0, 255, 0.4)',
                  textTransform: 'uppercase',
                  '&:hover': {
                    color: '#fff',
                    background: '#8e44ad',
                    boxShadow: '0 5px 25px rgba(255, 0, 255, 0.8)'
                  }
                }}
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="contained"
                color="success"
                size="large"
                href="/Vedha_resume.pdf"   
                download="Vedha_resume.pdf"
                sx={{
                  background: '#4caf50',
                  color: 'white',
                  boxShadow: '0 5px 15px rgba(76, 175, 80, 0.6)',
                  textTransform: 'uppercase',
                  '&:hover': {
                    background: '#45a049',
                    boxShadow: '0 5px 25px rgba(76, 175, 80, 1)'
                  }
                }}
              >
                Download Resume
              </Button>
            </motion.div>

          </Box>

        </Container>
      </Box>
    </motion.div>
  );
};

export default Home;
