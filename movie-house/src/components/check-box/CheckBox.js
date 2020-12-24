import React from 'react';
import './CheckBox.css';
import ConsumerHoc from '../hocs/ConsumerHoc';

const CheckBox = ({label, isChecked, value}) => {
  const {toggleCheckboxChange} = value; 
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
}

export default ConsumerHoc(CheckBox);
