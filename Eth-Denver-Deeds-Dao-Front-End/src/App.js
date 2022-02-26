import React from 'react';
import './App.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import Home from './components/Home';

function App() {

  const supportedChainIds = [4];

  const connectors = {
    injected: {},
  };

  return (
    
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Home />
      
    </ThirdwebWeb3Provider>
      
    
        
  );
}

export default App;
