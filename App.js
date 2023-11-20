import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const questions = [
  {
    question: 'Qual é a empresa que desenvolveu o GPT-3?',
    options: ['OpenAI', 'Google', 'Microsoft', 'Facebook'],
    correctAnswer: 'OpenAI',
  },
  {
    question: 'Em que ano o GPT-3 foi lançado?',
    options: ['2018', '2019', '2020', '2021'],
    correctAnswer: '2020',
  },
  {
    question: 'O que significa JSON?',
    options: ['JavaScript Object Notation', 'Java Source Object Notation', 'JavaScript Oriented Notationt', 'Java Serialized Object Notation'],
    correctAnswer: 'JavaScript Object Notation',
  },
  {
    question: 'Como você representa uma string em JSON?',
    options: ['´"Hello, World!"´', '´Hello, World!´', ' {Hello, World!}', ' [Hello, World!]'],
    correctAnswer: '´"Hello, World!"´'
  },

  // Adicione mais perguntas aqui
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Avança para a próxima pergunta
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <View style={styles.container}>
      {currentQuestion < questions.length ? (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View>
          <Text style={styles.resultText}>Pontuação final: {score}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
