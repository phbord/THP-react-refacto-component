// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState, Component } from 'react';
import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';

import AppContext from 'context/AppContext';
import Publications from 'components/Publications';
import DescriptionModal from 'components/modals/DescriptionModal';

const App = () => {
  const state = AppContext._currentValue
  console.log('AppContext: ', AppContext._currentValue)

  return (
    <AppContext.Provider value={state}>
      <div style={{ margin: 50 }}>
        <DescriptionModal />
        <Publications />
      </div>
    </AppContext.Provider>
  );
};

export default App;
