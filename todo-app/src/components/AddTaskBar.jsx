/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
let i = 0;

export const AddTaskBar = ({ handleAddTask }) => {
  const taskTextsRef = useRef(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '80%' }}>
        <TextField
          id="outlined-primary"
          label="add details"
          variant="outlined"
          color="primary"
          fullWidth={true}
          inputRef={taskTextsRef}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const texts = taskTextsRef.current.value;
          // eslint-disable-next-line no-undef
          texts.length !== 0 ? handleAddTask(false, texts, i++) : alert('タスクを入力してください');
          taskTextsRef.current.value = '';
        }}
      >
        Add
      </Button>
    </div>
  );
};
