import React from 'react';
import UserForm, { FormContext } from './components/UserForm';
import MedicineItems from './components/MedicineItems';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

const App = () => {
  // Define the initial form context values
  const formContextValue = {
    medicineName: '',
    medicineDescription: '',
    medicinePrice: ''
  };

  return (
    <div className="App">
      <Header />
      <Body />
      <FormContext.Provider value={formContextValue}>
        <UserForm />
        <MedicineItems />
      </FormContext.Provider>
    </div>
  );
};

export default App;
