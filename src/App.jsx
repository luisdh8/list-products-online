import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <header className="App-header">
        <h1 style={{textAlign: 'center'}}>Mi Farmacia Online</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;