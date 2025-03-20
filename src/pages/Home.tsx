import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Interactive Decision Tree',
      description: 'Learn about decision trees through an interactive experience!',
      path: '/interactive-tree',
      color: '#4CAF50',
    },
    {
      title: 'Fun Quiz',
      description: 'Test your knowledge with our interactive quiz!',
      path: '/quiz',
      color: '#FFEB3B',
    },
    {
      title: 'Real-Life Examples',
      description: 'See how decision trees are used in everyday life!',
      path: '/real-life',
      color: '#2196F3',
    },
  ];

  return (
    <Container maxWidth={false} sx={{ py: 4, px: 2, background: 'linear-gradient(to right, #ff9a9e, #fad0c4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h1"
          component={motion.h1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#fff' }}
        >
          Learning Decision Trees
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{ color: '#e0e0e0', fontSize: '1.25rem' }}
        >
          An interactive journey for young learners
        </Typography>
      </Box>

      <Grid container spacing={8} justifyContent="center">
        {sections.map((section, index) => (
          <Grid item xs={12} md={4} key={section.title}>
            <MotionCard
              whileHover={{ scale: 1.05, boxShadow: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{ boxShadow: 3, borderRadius: 3, overflow: 'hidden' }}
            >
              <CardActionArea onClick={() => navigate(section.path)}>
                <CardContent
                  sx={{
                    textAlign: 'center',
                    py: 4,
                    backgroundColor: `${section.color}30`,
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{ color: section.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span role="img" aria-label="icon" style={{ marginRight: '8px', fontSize: '1.5rem' }}>
                      {index === 0 ? '🌳' : index === 1 ? '❓' : '🌍'}
                    </span>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 