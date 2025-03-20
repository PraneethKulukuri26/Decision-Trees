import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface DecisionNode {
  question: string;
  options: {
    text: string;
    nextNode?: number;
    result?: string;
  }[];
}

const petDecisionTree: DecisionNode[] = [
  {
    question: 'Do you have a lot of space at home?',
    options: [
      { text: 'Yes', nextNode: 1 },
      { text: 'No', nextNode: 2 },
    ],
  },
  {
    question: 'Do you have time for daily walks?',
    options: [
      { text: 'Yes', nextNode: 3 },
      { text: 'No', nextNode: 4 },
    ],
  },
  {
    question: 'Do you prefer quiet pets?',
    options: [
      { text: 'Yes', nextNode: 5 },
      { text: 'No', nextNode: 6 },
    ],
  },
  {
    question: 'Do you like energetic pets?',
    options: [
      { text: 'Yes', result: 'A Dog would be perfect for you!' },
      { text: 'No', result: 'A Cat would be a great companion!' },
    ],
  },
  {
    question: 'Do you like birds?',
    options: [
      { text: 'Yes', result: 'A Parrot would be a wonderful pet!' },
      { text: 'No', result: 'A Fish would be a great choice!' },
    ],
  },
  {
    question: 'Do you want a pet that can be handled?',
    options: [
      { text: 'Yes', result: 'A Hamster would be perfect for you!' },
      { text: 'No', result: 'A Fish would be a great choice!' },
    ],
  },
  {
    question: 'Do you want a pet that can be trained?',
    options: [
      { text: 'Yes', result: 'A Dog would be perfect for you!' },
      { text: 'No', result: 'A Cat would be a great companion!' },
    ],
  },
];

const InteractiveTree = () => {
  const [currentNode, setCurrentNode] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option: { text: string; nextNode?: number; result?: string }) => {
    if (option.result) {
      setShowResult(true);
    } else if (option.nextNode !== undefined) {
      setCurrentNode(option.nextNode);
      setHistory([...history, option.nextNode]);
    }
  };

  const resetTree = () => {
    setCurrentNode(0);
    setHistory([0]);
    setShowResult(false);
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, background: 'linear-gradient(to right, #ff9a9e, #fad0c4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          color: '#fff',
          borderColor: '#fff',
          '&:hover': {
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
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
        sx={{ color: '#fff' }}
      >
        Choosing the Right Pet
      </Typography>

      <Stepper activeStep={history.length - 1} sx={{ mb: 4 }}>
        {history.map((_, index) => (
          <Step key={index}>
            <StepLabel sx={{ color: '#388E3C', fontFamily: 'sans-serif', fontWeight: '500' }}>Step {index + 1}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
                {petDecisionTree[currentNode].question}
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {petDecisionTree[currentNode].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    sx={{
                      py: 2,
                      background: 'linear-gradient(45deg, #66bb6a, #43a047)',
                      color: '#fff',
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #43a047, #388E3C)',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.text}
                  </Button>
                ))}
              </Box>
            </Paper>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
                {petDecisionTree[currentNode].options.find(opt => opt.result)?.result}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={resetTree}
                sx={{ mt: 3, backgroundColor: '#FFEB3B', '&:hover': { backgroundColor: '#FBC02D' } }}
              >
                Try Again
              </Button>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default InteractiveTree; 