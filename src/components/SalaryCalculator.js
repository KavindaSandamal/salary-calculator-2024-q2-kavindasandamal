import React, { useState } from 'react';
import Earnings from './Earnings';
import Deductions from './Deductions';
import AddEarningForm from './AddEarningForm';
import AddDeductionForm from './AddDeductionForm';
import addIcon from '../assets/add-icon.png';
import resetIcon from '../assets/reset-icon.png';
import '../styles/SalaryCalculatorStyle.css';

function SalaryCalculator() {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);
  const [showEarningForm, setShowEarningForm] = useState(false);
  const [showDeductionForm, setShowDeductionForm] = useState(false);
  const [sumEpf, setSumEpf] = useState(0.0);

  const handleAddEarning = (name, amount, epfEtf) => {
    setEarnings([...earnings, { name, amount: parseFloat(amount), epfEtf }]);
    if (epfEtf) {
      setSumEpf(sumEpf + parseFloat(amount));
    }
  };

  const handleAddDeduction = (name, amount) => {
    setDeductions([...deductions, { name, amount: parseFloat(amount) }]);
  };

  const handleDeleteEarning = (index) => {
    const updatedEarnings = [...earnings];
    updatedEarnings.splice(index, 1);
    setEarnings(updatedEarnings);
  };

  const handleModifyEarning = (index, newName, newAmount, newEpfEtf) => {
    const updatedEarnings = [...earnings];
    updatedEarnings[index] = { name: newName, amount: parseFloat(newAmount), epfEtf: newEpfEtf };
    setEarnings(updatedEarnings);
  };

  const handleDeleteDeduction = (index) => {
    const updatedDeductions = [...deductions];
    updatedDeductions.splice(index, 1);
    setDeductions(updatedDeductions);
  };

  const handleModifyDeduction = (index, newName, newAmount) => {
    const updatedDeductions = [...deductions];
    updatedDeductions[index] = { name: newName, amount: parseFloat(newAmount) };
    setDeductions(updatedDeductions);
  };

  const handleReset =()=>{
    window.location.reload();
  }

  const totalEarnings = basicSalary + earnings.reduce((acc, curr) => acc + curr.amount, 0);
  const totalEarningsEpf = basicSalary + sumEpf;
  const grossDeductions = deductions.reduce((acc, curr) => acc + curr.amount, 0);
  const grossEarnings = totalEarnings - grossDeductions;
  const grossSalaryEpf = totalEarningsEpf - grossDeductions;
  const employeeEpf = grossSalaryEpf * 0.08;
  const employerEpf = grossSalaryEpf * 0.12;
  const employerEtf = grossSalaryEpf * 0.03;
  var taxPercentage = 0;
  var constant = 0;
  if (grossEarnings > 308303) {
    taxPercentage = 0.36;
    constant = 73500;
  } else if (grossEarnings > 266667) {
    taxPercentage = 0.30;
    constant = 55000;
  } else if (grossEarnings > 225000) {
    taxPercentage = 0.24;
    constant = 39000;
  } else if (grossEarnings > 183333) {
    taxPercentage = 0.18;
    constant = 25500;
  } else if (grossEarnings > 141667) {
    taxPercentage = 0.12;
    constant = 14500;
  } else if (grossEarnings > 100000) {
    taxPercentage = 0.06;
    constant = 6000;
  }
  const apit = grossEarnings * taxPercentage - constant;
  const netSalary = (grossEarnings - apit - employeeEpf).toFixed(2);
  const costToCompany = grossEarnings + employerEpf + employerEtf;

  return (
    <div className="salary-calculator">
      <div class='left-form' className={`overlay ${showEarningForm || showDeductionForm ? 'active' : ''}`}>
        <div className='cal-container'>
          <div className='inter-container'>
            <div className='reset'>
              <div style={{ justifyContent: 'start', display: 'flex', width: '100%' }}><h4>Calculate Your Salary</h4></div>
              <div style={{ justifyContent: 'end', display: 'flex', width: '100%' }}>
                <button className="transparent-button" onClick={handleReset}>
                  <img src={resetIcon} alt="Reset Icon" className="icon" /> Reset
                </button>
              </div>
            </div>
            <label className='label'>
              <div>Basic Salary</div>
              <input className='salary-input'
                type="number"
                value={basicSalary}
                onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
              />
            </label>
            <Earnings
              earnings={earnings}
              onDeleteEarning={handleDeleteEarning}
              onModifyEarning={handleModifyEarning}
            />
            <button className="transparent-button" onClick={() => setShowEarningForm(true)}>
              <img src={addIcon} alt="Add Icon" className="icon" /> Add New Allowance
            </button>
            <div className='line'></div>
            <Deductions
              deductions={deductions}
              onDeleteDeduction={handleDeleteDeduction}
              onModifyDeduction={handleModifyDeduction}
            />
            <button className="transparent-button" onClick={() => setShowDeductionForm(true)}>
              <img src={addIcon} alt="Add Icon" className="icon" /> Add New Deduction
            </button>
          </div>
        </div>
        {showEarningForm && (
          <AddEarningForm
            onAddEarning={handleAddEarning}
            onClose={() => setShowEarningForm(false)}
          />
        )}
        {showDeductionForm && (
          <AddDeductionForm
            onAddDeduction={handleAddDeduction}
            onClose={() => setShowDeductionForm(false)}
          />
        )}
      </div>
      <div className='details-container'>
        <div className='inter-detail-container'>
          <div className='gap'>
            <h4>Your Salary Details</h4>
            <div className='detail-1'>
              <p><div className='small-title'>Items</div><div className='small-title'>Amount</div></p>
              <p><div>Basic Salary</div><div>{basicSalary.toFixed(2)}</div> </p>
              <p><div>Gross Earning</div> <div>{grossEarnings.toFixed(2)}</div></p>
              <p><div>Gross Deduction</div> <div>{grossDeductions.toFixed(2)}</div></p>
              <p><div>Employee EPF (8%)</div> <div>{employeeEpf.toFixed(2)}</div></p>
              <p><div>APIT</div> <div>{apit.toFixed(2)}</div></p>
            </div>
          </div>
          <div className='detail-2'>
            <div className='net-salary'>
              <p><div>Net Salary (Take Home)</div> <div>{netSalary}</div></p>
            </div>
          </div>
          <div className='gap'>
            <div className='detail-3'>
              <p><div className='small-title'>Contribution from the Employer</div></p>
              <p><div>Employer EPF(12%)</div><div>{employerEpf.toFixed(2)}</div> </p>
              <p><div>Employer ETF(3%)</div> <div>{employerEtf.toFixed(2)}</div></p>
            </div>
          </div>
          <div className='gap'>
            <div className='detail-3'>
              <p><div>CTC (Cost to Company)</div><div>{costToCompany.toFixed(2)}</div> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalaryCalculator;