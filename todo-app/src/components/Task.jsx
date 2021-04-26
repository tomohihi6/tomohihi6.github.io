/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const Task = ({ task }) => {
  const [checked, setChecked] = useState(task.checked);

  const handleCheckChange = (event) => {
    task.checked = event.target.checked;
    setChecked(event.target.checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox checked={checked} color="primary" onChange={handleCheckChange} />
      <div style={checked ? { marginLeft: '6px', textDecorationLine: 'line-through' } : { marginLeft: '6px' }}>
        {task.texts}
      </div>
    </div>
  );
};
