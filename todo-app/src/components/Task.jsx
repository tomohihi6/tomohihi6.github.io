/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const Task = ({ task_texts }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox checked={checked} color="primary" onChange={handleCheckChange} />
      <div style={{ marginLeft: '6px' }}>{task_texts}</div>
    </div>
  );
};
