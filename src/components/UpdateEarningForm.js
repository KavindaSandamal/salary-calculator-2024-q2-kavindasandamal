import React, { useState, useEffect } from 'react';
import '../styles/EarningFormStyle.css';

function UpdateEarningForm({ index, currentName, currentAmount, currentEpfEtf, onUpdateEarning, onCancel }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [epfEtf, setEpfEtf] = useState(false);

  useEffect(() => {
    setName(currentName);
    setAmount(currentAmount.toString());
    setEpfEtf(currentEpfEtf);
  }, [currentName, currentAmount, currentEpfEtf]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateEarning(index, name, amount, epfEtf);
    onCancel(); // Close the form after updating
  };

  const handleCancel = () => {
    onCancel(); // Close the form without updating
  };

  const handleEpfEtfChange = () => {
    setEpfEtf(!epfEtf);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className='add-topic'>
            <div className='add-topic-text'>Add New Earnings</div>
            <div className='cut-icon'><span className="close" onClick={handleCancel}>&times;</span></div>
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
                onChange={handleEpfEtfChange}
              />
              <label className='check-text'>EPF/ETF</label>
            </div>
          </div>
          <div className='add-line'></div>
          <div className='button-boxs'>
            <div><button className='transparent-cancel-button' onClick={handleCancel}>Cancel</button></div>
            <div><button className='update-button' type="submit">Update</button></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEarningForm;
