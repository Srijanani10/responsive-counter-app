import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleIncrement = () => {
    if (num < 150) {
      const newNum = num + 1;
      const newHistory = history.slice(0, currentStep + 1);
      setNum(newNum);
      setHistory([...newHistory, newNum]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleDecrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      const newHistory = history.slice(0, currentStep + 1);
      setNum(newNum);
      setHistory([...newHistory, newNum]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleUndo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setNum(history[currentStep - 1]);
    }
  };

  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setNum(history[currentStep + 1]);
    }
  };

  return (
    <div className="App">
      <h1>Number: {num}</h1>
      <button onClick={handleDecrement}>Subtract</button>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleUndo} disabled={currentStep === 0}>Undo</button>
      <button onClick={handleRedo} disabled={currentStep === history.length - 1}>Redo</button>
      
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{ width: `${(num / 150) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default App;
