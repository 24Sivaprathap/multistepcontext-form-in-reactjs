import React,{ useContext } from 'react';
import './App.css';
import FirstStep from './Component/FirstStep';
import SecondStep from './Component/SecondStep';
import ThirdStep from './Component/ThirdStep';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import DisplayData from './Component/DisplayData';

function App() {
  
  const { currentStep, finalData } = useContext(multiStepContext)
  function showStep(step) {
    console.log(step);
    switch (step) {
       case 1:
           return <FirstStep></FirstStep>
       case 2:
          return <SecondStep></SecondStep>
       case 3:
          return <ThirdStep></ThirdStep>
       default:
          break;
    }
  }
  return (
    <div className="App">
      <div className="App-header">
          <h2 style={{color:'yellowgreen', textDecoration:'underline'}}>ReactJS Forms Using UseContext Hook</h2>
      <div className='center-stepper'>
          <Stepper style={{width: '20%'}} activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
         </Stepper>
      </div>
         {showStep(currentStep)}
            <br/>
          {finalData.length > 0 ? <DisplayData></DisplayData> : ''}
      </div>
    </div>
  );
}

export default App;
