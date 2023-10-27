import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GroupMemberList from '../group/GroupMemberList';
import { RootState } from '../../app/store';
import TimerRecord from './TimerRecord';
import Timer from './Timer';

const StyledContent = styled.div`
  flex: 1;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const TabWrapper = styled.div`
  width: 100%;
  max-width: 400px; 
  align-items: center; 
  margin: 0 auto; 
`;

const TimerView = () => {
  const members = useSelector((state: RootState) => state.groups.members || []);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <StyledContent>
        <GroupMemberList members={members} />
      </StyledContent>
      <TabWrapper>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="타이머" />
          <Tab label="통계" />
        </Tabs>
      </TabWrapper>

      {selectedTab === 0 && (
        <Timer />
      )}

      {selectedTab === 1 && (
        <TimerRecord />
      )}
    </div>
  );
};

export default TimerView;
