import React, { useContext } from 'react';
import { FormContext } from './UserForm';
import './MedicineItems.css';

const MedicineItems = () => {
  const formContextValue = useContext(FormContext);

  return (
    <div className="medicine-container">
      <div className="medicine-row">
        <div className="medicine-col">Medicine Name: {formContextValue.medicineName}</div>
        <div className="medicine-col">Medicine Description: {formContextValue.medicineDescription}</div>
        <div className="medicine-col">Medicine Price: {formContextValue.medicinePrice}</div>
        <div className="medicine-col">
          <button>+ Add</button>
          <button>- Del</button>
        </div>
      </div>
    </div>
  );
};

export default MedicineItems;
