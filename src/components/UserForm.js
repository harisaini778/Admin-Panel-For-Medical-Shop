import React, { useState, createContext } from 'react';
import './UserForm.css';

const FormContext = createContext();

const UserForm = () => {
  const [medicineName, setMedicineName] = useState('');
  const [medicineDescription, setMedicineDescription] = useState('');
  const [medicinePrice, setMedicinePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Medicine Name:', medicineName);
    console.log('Medicine Description:', medicineDescription);
    console.log('Medicine Price:', medicinePrice);
  };

  const formContextValue = {
    medicineName,
    medicineDescription,
    medicinePrice
    };
    
    console.log("formContextValue : "+JSON.stringify(formContextValue));

  return (
    <FormContext.Provider value={formContextValue}>
      <div className="container">
        <h2>Medicine Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row-userform">
            <div className="col-userform">
              <label htmlFor="medicineName">Medicine Name:</label>
              <input
                type="text"
                id="medicineName"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                required
              />
            </div>
            <div className="col-userform">
              <label htmlFor="medicineDescription">Medicine Description:</label>
              <textarea
                id="medicineDescription"
                value={medicineDescription}
                onChange={(e) => setMedicineDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="col-userform">
              <label htmlFor="medicinePrice">Medicine Price:</label>
              <input
                type="number"
                id="medicinePrice"
                value={medicinePrice}
                onChange={(e) => setMedicinePrice(e.target.value)}
                step="0.01"
                required
              />
            </div>
            <div className="col-userform">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </FormContext.Provider>
  );
};

export default UserForm;
export { FormContext };
