import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import AppContext, { AContext } from './Context/AppContext';
import Body from './Components/Body';

function App() {
  const ctx = useContext(AContext);
  useEffect(() => {
    document.querySelector('body').style.backgroundColor = ctx.ClassName === 'Dark' ? '#222831' : '#ffffff';
  });

  return (
    <div className={`container-fluid `}>
      <Header />
      <Body />
    </div>
  );
}

export default function AppCon() {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
}
