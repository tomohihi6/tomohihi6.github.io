/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export const Task = ({ task, handleDeleteTask }) => {
  const [checked, setChecked] = useState(task.checked);

  const handleCheckChange = (event) => {
    task.checked = event.target.checked;
    setChecked(event.target.checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={checked} color="primary" onChange={handleCheckChange} />
        <div style={checked ? { marginLeft: '6px', textDecorationLine: 'line-through' } : { marginLeft: '6px' }}>
          {task.texts}
        </div>
      </div>
      <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => handleDeleteTask(task)}>
        <DeleteOutlineIcon color="disabled" />
      </div>
    </div>
  );
};
