import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';
import ProductSelection from './components/ProductSelection';
import TotalSummary from './components/TotalSummary';

function App() {
  const [showSelection, setShowSelection] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {!showSelection ? (
        <Home onStart={() => setShowSelection(true)} />
      ) : (
        <>
          <ProductSelection onShowDetails={() => setShowModal(true)} />
          {showModal && <TotalSummary onCancel={() => setShowModal(false)} />}
        </>
      )}
    </div>
  );
}
export default App;