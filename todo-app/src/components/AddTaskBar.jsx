/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AddTaskBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '80%' }}>
        <TextField id="outlined-primary" label="add details" variant="outlined" color="primary" fullWidth={true} />
      </div>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
};
