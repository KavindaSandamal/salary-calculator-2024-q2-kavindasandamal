import React, { useState } from 'react';
import '../styles/DeductionFormStyle.css';

function AddDeductionForm({ onAddDeduction, onClose }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDeduction(name, amount);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };
  
  return (
    <div style={{height:"320px"}} className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className='add-topic'>
            <div className='add-topic-text'>Add New Deduction</div>
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
          <div style={{marginTop:"20px"}} className='add-line'></div>
          <div className='button-boxs'>
          <div ><button className='transparent-cancel-button'onClick={handleCancel}>Cancel</button></div>
          <div ><button className='add-button' type="submit">Add</button></div>
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDeductionForm;
