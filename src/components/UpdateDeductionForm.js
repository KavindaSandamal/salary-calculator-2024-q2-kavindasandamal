import React, { useState, useEffect } from 'react';
import '../styles/DeductionFormStyle.css';

function UpdateDeductionForm({ index, currentName, currentAmount, onUpdateDeduction, onCancel }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setName(currentName);
    setAmount(currentAmount.toString());
  }, [currentName, currentAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateDeduction(index, name, amount);
    onCancel(); // Close the form after updating
  };

  const handleCancel = () => {
    onCancel(); // Close the form without updating
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className='add-topic'>
            <div className='add-topic-text'>Update Deduction</div>
            <div className='cut-icon'><span className="close" onClick={handleCancel}>&times;</span></div>
          </div>
          <div className='add-line'></div>
          <div className='form-box'>
            <div className='label-box'>
              <label className='label-text'>Deduction Name</label>
              <input
                className='input-text'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='label-box'>
              <label className='label-text'>Amount</label>
              <input
                className='input-text'
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='add-line'></div>
          <div className='button-boxs'>
            <button className='transparent-cancel-button' onClick={handleCancel}>Cancel</button>
            <button className='update-button' type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateDeductionForm;
