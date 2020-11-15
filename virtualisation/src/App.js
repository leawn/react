import './App.css';
import React from 'react';
import List from './components/List';
import { bigList } from "./data/bigList";

function App() {
  const renderItem = item => (
      <div style={{ display: 'flex' }}>
        <img src={item.avatar} alt={item.name} width={50} />
        <p>
          {item.name} - {item.email}
        </p>
      </div>
  );

  return <List data={bigList} renderItem={renderItem()}/>
}

export default App;
