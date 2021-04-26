/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../utils/App.css';
import { AddTaskBar } from '../components/AddTaskBar';
import { Task } from '../components/Task';

const App = () => {
  const [tab_index, setTabIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (checked, texts, id) => {
    setTasks([...tasks, { checked: checked, texts: texts, id: id }]);
  };

  const handleTabChange = (event, newValue) => {
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
        <AddTaskBar handleAddTask={handleAddTask} tasks={tasks} />
      </div>

      <TabPanel tab_index={tab_index} index={0}></TabPanel>
      <TabPanel tab_index={tab_index} index={1}></TabPanel>
      <TabPanel tab_index={tab_index} index={2}>
        Complete
      </TabPanel>
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
