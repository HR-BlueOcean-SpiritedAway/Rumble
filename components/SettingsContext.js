import React, { useState, useContext } from 'react';

const SettingsContext = React.createContext();
const SettingsUpdateContext = React.createContext();

export function useChange() {
  return useContext(SettingsContext);
}

export function useUpdateChange() {
  return useContext(SettingsUpdateContext);
}

export function SettingsProvider({ children }) {
  const [valueChanged, setValueChanged] = useState(false);

  function changeValue() {
    setValueChanged(prevValue => !prevValue);
  }

  return (
    <SettingsContext.Provider value={valueChanged} >
      <SettingsUpdateContext.Provider value={changeValue}>
        {children}
      </SettingsUpdateContext.Provider>
    </SettingsContext.Provider>
  )
}
