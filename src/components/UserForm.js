import React, { useState, useContext } from 'react';
import { FormContext } from './FormProvider';

const UserForm = () => {
  const { setMedicineName, setMedicineDescription, setMedicinePrice } = useContext(FormContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Medicine Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="medicineName">Medicine Name:</label>
        <input
          type="text"
          id="medicineName"
          onChange={(e) => setMedicineName(e.target.value)}
          required
        />
        <label htmlFor="medicineDescription">Medicine Description:</label>
        <textarea
          id="medicineDescription"
          onChange={(e) => setMedicineDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="medicinePrice">Medicine Price:</label>
        <input
          type="number"
          id="medicinePrice"
          step="0.01"
          onChange={(e) => setMedicinePrice(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
