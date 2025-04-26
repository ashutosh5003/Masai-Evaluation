import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <ThemeToggle />
        <FeedbackForm />
        <FeedbackList />
      </div>
    </ThemeProvider>
  );
}

export default App;