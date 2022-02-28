import React, { useState } from 'react';
import './App.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(true);

  const supportedChainIds = [4];
  const connectors = {
    injected: {},
  };

  const pageStyle = { 
    overflow: mobileOpen ? 'hidden' : null,
    height: mobileOpen ? '100vh' : null
  };

  return (
    
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <div style={pageStyle}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Home />
      </div>
    </ThirdwebWeb3Provider>
  );
}

export default App;
