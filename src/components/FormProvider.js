import React, { useState } from 'react';
import { createContext } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [medicineName, setMedicineName] = useState('');
  const [medicineDescription, setMedicineDescription] = useState('');
  const [medicinePrice, setMedicinePrice] = useState('');

  const formContextValue = {
    medicineName,
    medicineDescription,
    medicinePrice,
    setMedicineName,
    setMedicineDescription,
    setMedicinePrice
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;
