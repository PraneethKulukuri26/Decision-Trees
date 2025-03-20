import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const examples = [
  {
    title: 'School Schedule Planning',
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    description: 'Students use decision trees to plan their daily activities:',
    points: [
      'Should I do homework now or later?',
      'Which subject should I study first?',
      'Should I join sports practice or study group?',
    ],
  },
  {
    title: 'Shopping Decisions',
    icon: <ShoppingCartIcon sx={{ fontSize: 40, color: '#FFEB3B' }} />,
    description: 'Making shopping choices using decision trees:',
    points: [
      'Should I buy this item now or wait for a sale?',
      'Which brand offers better value for money?',
      'Do I need this item or is it a want?',
    ],
  },
  {
    title: 'Health and Wellness',
    icon: <MedicalServicesIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    description: 'Making healthy choices with decision trees:',
    points: [
      'Should I eat a snack or wait for dinner?',
      'Should I exercise indoors or outdoors?',
      'Which activity will help me stay healthy?',
    ],
  },
];

const MotionCard = motion(Card);

const RealLifeExamples = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth={false} sx={{ py: 4, background: 'linear-gradient(to right, #ff9a9e, #fad0c4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ position: 'absolute', top: 16, left: 16, color: '#fff', borderColor: '#fff', '&:hover': { borderColor: '#ccc', backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
      >
        Back
      </Button>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        gutterBottom
        textAlign="center"
      >
        Decision Trees in Real Life
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        component={motion.p}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        textAlign="center"
        sx={{ mb: 6 }}
      >
        Discover how decision trees help us make choices every day!
      </Typography>

      <Grid container spacing={4}>
        {examples.map((example, index) => (
          <Grid item xs={12} md={4} key={example.title}>
            <MotionCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <Box sx={{ mb: 2 }}>{example.icon}</Box>
                <Typography variant="h4" gutterBottom>
                  {example.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {example.description}
                </Typography>
                <List>
                  {example.points.map((point, pointIndex) => (
                    <ListItem key={pointIndex}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        sx={{
          mt: 6,
          p: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 2,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Why Decision Trees Matter
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
          Decision trees help us:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Make better choices by thinking through our options" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Understand the consequences of our decisions" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Solve problems in a structured way" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Learn from our past decisions" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default RealLifeExamples; 