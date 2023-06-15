import React from 'react';
import FormProvider from './components/FormProvider';
import UserForm from './components/UserForm';
import MedicineItems from './components/MedicineItems';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Body />
      <FormProvider>
        <UserForm />
        <MedicineItems />
      </FormProvider>
    </div>
  );
};

export default App;
