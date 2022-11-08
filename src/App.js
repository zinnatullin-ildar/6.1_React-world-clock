import { useState } from 'react';
import WatchesForm from './components/WatchesForm';
import WatchesList from './components/WatchesList';
import { v4 as uuid } from 'uuid';
import './App.css';

const date = [];

function App() {
  const [clocks, setClocks] = useState(date);

  function addClock(data) {
    if (data.name === '' || data.timeZone === '')
      return null;

    const newClock = {
      id: uuid(),
      name: data.name,
      timeZone: data.timeZone,
    };

    setClocks((prevState) =>
      [...prevState, newClock]);
  }

  function deleteClock(id) {
    setClocks((prevState) =>
      prevState.filter((clock) => clock.id !== id));
  }

  return (
    <div className='App'>
      <WatchesForm onSubmit={addClock} />
      <WatchesList clocks={clocks} onDelete={deleteClock} />
    </div>
  );
}

export default App;
