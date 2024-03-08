import React from 'react';
import { DataProvider } from './DataContext.jsx';
import { About } from './Pages/About.jsx';
import { Home } from './Pages/Home.jsx';
import ErrorBoundary from './ErrorBoundary';
import './i18n'; 


function App() {
  return (
    <DataProvider>
      <ErrorBoundary>
        <div className="App">
          <Home />
          <About />
        </div>
      </ErrorBoundary>
    </DataProvider>
  );
}

export default App;
