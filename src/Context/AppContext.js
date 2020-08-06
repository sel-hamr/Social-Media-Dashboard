import React, { useState, createContext } from 'react';

export const AContext = createContext();
export default function AppContext(props) {
  const [ClassName, setName] = useState('Dark');
  return <AContext.Provider value={{ ClassName, setName }}>{props.children}</AContext.Provider>;
}
