import React, { useContext, useState } from 'react';
import { FormContext } from './FormProvider';
import './MedicineItems.css';

const MedicineItems = () => {
  const { medicineName, medicineDescription, medicinePrice } = useContext(FormContext);
  const [medicineList, setMedicineList] = useState([]);

  const handleAddMedicine = () => {
    const newMedicine = {
      name: medicineName,
      description: medicineDescription,
      price: medicinePrice
    };

    setMedicineList([...medicineList, newMedicine]);
    // Clear the form inputs
    // You can add the following lines if you want to clear the form inputs after submission
    // setMedicineName('');
    // setMedicineDescription('');
    // setMedicinePrice('');
  };

  return (
    <div className="medicine-container">
      <div className="medicine-row">
        <div className="medicine-col">Medicine Name: {medicineName}</div>
        <div className="medicine-col">Medicine Description: {medicineDescription}</div>
        <div className="medicine-col">Medicine Price: {medicinePrice}</div>
        <div className="medicine-col">
          <button onClick={handleAddMedicine}>+ Add</button>
        </div>
      </div>
      <h2>Submitted Medicines:</h2>
      <ul>
        {medicineList.map((medicine, index) => (
          <li key={index}>
            <div>Medicine Name: {medicine.name}</div>
            <div>Medicine Description: {medicine.description}</div>
            <div>Medicine Price: {medicine.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineItems;
