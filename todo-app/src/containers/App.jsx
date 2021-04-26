/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../utils/App.css';
import { AddTaskBar } from '../components/AddTaskBar';
import { Task } from '../components/Task';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const App = () => {
  const [tab_index, setTabIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const active_tasks = tasks.filter((v) => !v.checked);
  const completed_tasks = tasks.filter((v) => v.checked);
  const handleAddTask = (checked, texts, id) => {
    setTasks([...tasks, { checked: checked, texts: texts, id: id }]);
  };
  const handleDeleteTask = (v) => {
    const tmp_tasks = [...tasks];
    console.log(tmp_tasks);
    const idx = tmp_tasks.indexOf(v);
    console.log(idx);
    if (!idx) {
      tmp_tasks.splice(idx, 1);
    }
    setTasks(tmp_tasks);
  };

  const handleDleteAllCompletedTasks = () => {
    setTasks([...active_tasks]);
  };

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: 36, fontFamily: 'Raleway', fontWeight: 'bold' }}>#todo</div>
      </header>
      <div style={{ width: 480, margin: '0 auto' }}>
        <Tabs value={tab_index} textColor="primary" indicatorColor="primary" onChange={handleTabChange}>
          <Tab label="All"></Tab>
          <Tab label="Active"></Tab>
          <Tab label="Completed"></Tab>
        </Tabs>
      </div>
      <div style={{ margin: '18px auto', width: 480 }}>
        <AddTaskBar handleAddTask={handleAddTask} />
      </div>

      <TabPanel tab_index={tab_index} index={0}>
        {tasks.length !== 0 ? tasks.map((v) => <Task task={v} key={v.id} handleDeleteTask={handleDeleteTask} />) : null}
      </TabPanel>
      <TabPanel tab_index={tab_index} index={1}>
        {active_tasks.length !== 0
          ? active_tasks.map((v) => <Task task={v} key={v.id} handleDeleteTask={handleDeleteTask} />)
          : null}
      </TabPanel>
      <TabPanel tab_index={tab_index} index={2}>
        {completed_tasks.length !== 0
          ? completed_tasks.map((v) => <Task task={v} key={v.id} handleDeleteTask={handleDeleteTask} />)
          : null}
      </TabPanel>
      {tab_index === 2 ? (
        <div
          style={{ display: 'flex', flexDirection: 'row-reverse', paddingRight: 32 }}
          onClick={handleDleteAllCompletedTasks}
        >
          <Button variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 12, lineHeight: '15px' }}>
              delete all
            </div>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

const TabPanel = ({ tab_index, index, children }) => {
  return (
    <div role="tabpanel" hidden={tab_index !== index} style={{ width: 480, margin: '0 auto' }}>
      {tab_index === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default App;
