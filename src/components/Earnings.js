import React, { useState } from 'react';
import UpdateEarningForm from './UpdateEarningForm';
import updateIcon from '../assets/update-icon.png';
import deleteIcon from '../assets/delete-icon.png';  
import rightIcon from '../assets/right-icon.png'; 
import '../styles/EarningStyle.css' 

function Earnings({ earnings, onDeleteEarning, onModifyEarning }) {
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleDelete = (index) => {
    onDeleteEarning(index);
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
          <UpdateEarningForm
            index={editingIndex}
            currentName={earnings[editingIndex].name}
            currentAmount={earnings[editingIndex].amount}
            currentEpfEtf={earnings[editingIndex].epfEtf}
            onUpdateEarning={(index, name, amount, epfEtf) => {
              onModifyEarning(index, name, amount, epfEtf);
              setEditingIndex(-1);
            }}
            onCancel={handleModifyCancel}
          />
        </div>
      )}
      <div style={{marginBottom:'24px'}}>
        <div className='sub-title'>Earnings</div>
        <div className='small-title'>Allowance, Fixed Allowance, Bonus and etc.</div>
      </div>
      {earnings.map((earning, index) => (
        <div key={index}>
          <div className='modify-container'>
            <div className='earnings'>
              <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                {earning.name}: {earning.amount}
              </div>
              <div style={{display:'flex', flexDirection:'row',alignItems:'center',gap:'4px'}}>
                {earning.epfEtf && <img src={rightIcon} alt="Right Icon" className="icon" />}
                <div className='epf-etf'>{earning.epfEtf && 'EPF/ETF'}</div>
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

export default Earnings;
