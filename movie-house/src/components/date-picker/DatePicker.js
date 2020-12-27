import React from "react";
import "./DatePicker.css";
import ConsumerHoc from '../hocs/ConsumerHoc';

const DatePicker = ({value}) => {
  const {filterByDate, filterByDateMethod, resetDateFilter} = value;
  return (
    <div className="date-picker-wrapper">
      <form className="filter-form" onSubmit={filterByDateMethod}>
        <div id="date-input-wrapper" className="date-input">
          <DateMaker filterByDate={filterByDate} />
        </div>
        <button className="filter-button ml-2" type="type">ДАТА</button>
      </form>
      <button className="reset ml-2" onClick={resetDateFilter}>ВСЕ ДНИ</button>
    </div>
  )
}

const DateMaker = ({filterByDate}) => {
  return (
    <div className="date-picker">
      <input 
        defaultValue={filterByDate}
        // ref={this.filterInputByDate}
        className="input-for-date"
        type="date" name="trip-start"
      >
      </input>
    </div>
  );
}

export default ConsumerHoc(DatePicker);