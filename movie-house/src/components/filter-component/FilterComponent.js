import React, { useState } from 'react';
import './FilterComponent.css';

const FilterComponent = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item ml-2">
      <button onClick={() => setOpen(!open)}>
        {props.children.title}
      </button>

      {
        open 
        && 
        <div className="movie-houses-filter-block">
          {props.children.content} 
        </div>
      }
    </div>
  );
}

export default FilterComponent;