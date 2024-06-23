import React, { useState } from 'react';
import UpdateDeductionForm from './UpdateDeductionForm';
import updateIcon from '../assets/update-icon.png';
import deleteIcon from '../assets/delete-icon.png';
import '../styles/DeductionStyle.css';

function Deductions({ deductions, onDeleteDeduction, onModifyDeduction }) {
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleDelete = (index) => {
    if (typeof onDeleteDeduction === 'function') {
      onDeleteDeduction(index);
    } else {
      console.error('onDeleteDeduction is not a function');
    }
  };

  const handleModifyStart = (index) => {
    setEditingIndex(index);
  };

  const handleModifyCancel = () => {
    setEditingIndex(-1);
  };

  return (
    <div>
      {editingIndex !== -1 && (
        <div className="dark-overlay">
          <UpdateDeductionForm
            index={editingIndex}
            currentName={deductions[editingIndex].name}
            currentAmount={deductions[editingIndex].amount}
            onUpdateDeduction={(index, name, amount) => {
              onModifyDeduction(index, name, amount);
              setEditingIndex(-1);
            }}
            onCancel={handleModifyCancel}
          />
        </div>
      )}
      <div style={{ marginBottom: '24px' }}>
        <div className='sub-title'>Deductions</div>
        <div className='small-title'>Salary Advances, Loan Deductions and all</div>
      </div>
      {deductions.map((deduction, index) => (
        <div key={index}>
          <div className='modify-container'>
            <div className='earnings'>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {deduction.name}: {deduction.amount}
              </div>
            </div>
            <React.Fragment>
              <div className='ver-line'></div>
              <div>
                <button className="modify-button" onClick={() => handleModifyStart(index)}>
                  <img src={updateIcon} alt="Update Icon" className="icon" />
                </button>
              </div>
              <div>
                <button className="modify-button" onClick={() => handleDelete(index)}>
                  <img src={deleteIcon} alt="Delete Icon" className="icon" />
                </button>
              </div>
            </React.Fragment>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Deductions;
