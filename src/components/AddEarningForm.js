import React, { useState } from 'react';
import '../styles/EarningFormStyle.css'

function AddEarningForm({ onAddEarning, onClose }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [epfEtf, setEpfEtf] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEarning(name, amount, epfEtf);
    onClose();
  };

  const handleCancel = () => {
    onClose(); // Call onClose function to close the form
    // Additional cancel actions can be added here if needed
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className='add-topic'>
          <div className='add-topic-text'>Add New Earnings</div>
          <div className='cut-icon'><span className="close" onClick={onClose}>&times;</span></div>
          </div>
          <div className='add-line'></div>
          <div className='form-box'>
          <div className='label-box'>
            <label className='label-text'>Earning Name</label>
            <input className='input-text'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
          </div>
          <div>
            <label className='label-text'>Amount</label>
            <input className='input-text'
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
          </div>
          <div className='check-container'>
          <input className='check-box'
                type="checkbox"
                checked={epfEtf}
                onChange={(e) => setEpfEtf(true)}
              />
            <label className='check-text'>EPF/ETF</label>
          </div>
          </div>
          <div className='add-line'></div>
          <div className='button-boxs'>
          <div ><button className='transparent-cancel-button'onClick={handleCancel}>Cancel</button></div>
          <div ><button className='add-button' type="submit">Add</button></div>
          
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default AddEarningForm;
