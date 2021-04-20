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
  const [tab_value, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: 36, fontFamily: 'Raleway', fontWeight: 'bold' }}>#todo</div>
      </header>
      <div style={{ width: 480, margin: '0 auto' }}>
        <Tabs value={tab_value} textColor="primary" indicatorColor="primary" onChange={handleTabChange}>
          <Tab label="All"></Tab>
          <Tab label="Active"></Tab>
          <Tab label="Completed"></Tab>
        </Tabs>
      </div>
      <div style={{ margin: '18px auto', width: 480 }}>
        <AddTaskBar />
      </div>
      <TabPanel tab_value={tab_value} index={0}>
        <Task />
      </TabPanel>
      <TabPanel tab_value={tab_value} index={1}>
        Active
      </TabPanel>
      <TabPanel tab_value={tab_value} index={2}>
        Complete
      </TabPanel>
    </div>
  );
};

const TabPanel = ({ tab_value, index, children }) => {
  return (
    <div role="tabpanel" hidden={tab_value !== index} style={{ width: 480, margin: '0 auto' }}>
      {tab_value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default App;
