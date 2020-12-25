import React from 'react';
import './CheckBox.css';
import ConsumerHoc from '../hocs/ConsumerHoc';

const CheckBox = ({label, isChecked, value}) => {
  const {toggleCheckboxChange} = value; 
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox m-3">
      <label className="d-flex align-items-center">
        <input
          className="checkbox-input"
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
        />
        <span className="ml-2">
          {label}
        </span>
      </label>
    </div>
  );
}

export default ConsumerHoc(CheckBox);
