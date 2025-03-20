import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is a decision tree?',
    options: [
      'A tree that makes decisions',
      'A visual way to make choices by asking questions',
      'A type of plant',
      'A computer program',
    ],
    correctAnswer: 1,
    explanation: 'A decision tree is a visual tool that helps us make choices by asking a series of questions. Each question leads to different options, just like branches on a tree!',
  },
  {
    question: 'What is the starting point of a decision tree called?',
    options: [
      'The root',
      'The trunk',
      'The beginning',
      'The start',
    ],
    correctAnswer: 0,
    explanation: 'The starting point of a decision tree is called the root. It\'s like the beginning of our decision-making journey!',
  },
  {
    question: 'What do we call the different paths in a decision tree?',
    options: [
      'Roads',
      'Branches',
      'Paths',
      'Lines',
    ],
    correctAnswer: 1,
    explanation: 'The different paths in a decision tree are called branches. Each branch represents a different choice or outcome!',
  },
  {
    question: 'What do we call the final outcomes in a decision tree?',
    options: [
      'Endings',
      'Leaves',
      'Results',
      'Answers',
    ],
    correctAnswer: 1,
    explanation: 'The final outcomes in a decision tree are called leaves. They represent the final decisions or results we reach!',
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

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
        Test Your Knowledge
      </Typography>

      <Stepper activeStep={currentQuestion} sx={{ mb: 4 }}>
        {quizQuestions.map((_, index) => (
          <Step key={index}>
            <StepLabel>Question {index + 1}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
              {quizQuestions[currentQuestion].question}
            </Typography>

            <FormControl component="fieldset" sx={{ mt: 3 }}>
              <RadioGroup
                value={selectedAnswer}
                onChange={(e) => handleAnswerSelect(Number(e.target.value))}
              >
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                    disabled={showExplanation}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            {!showExplanation ? (
              <Button
                variant="contained"
                sx={{
                  mt: 3,
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
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  color={
                    selectedAnswer === quizQuestions[currentQuestion].correctAnswer
                      ? 'success.main'
                      : 'error.main'
                  }
                  gutterBottom
                >
                  {selectedAnswer === quizQuestions[currentQuestion].correctAnswer
                    ? 'Correct!'
                    : 'Incorrect!'}
                </Typography>
                <Typography variant="body1" paragraph>
                  {quizQuestions[currentQuestion].explanation}
                </Typography>
                {currentQuestion < quizQuestions.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next Question
                  </Button>
                ) : (
                  <Box textAlign="center">
                    <Typography variant="h5" gutterBottom>
                      Quiz Complete!
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Your Score: {score} out of {quizQuestions.length}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleRestart}
                    >
                      Try Again
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Paper>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Quiz; 