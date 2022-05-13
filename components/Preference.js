import { useState, useEffect } from 'react';
import { useChange, useUpdateChange } from './SettingsContext';

const Preference = (props) => {
  const pref = props.preference;
  const [selectedPreference, setSelectedPreference] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(pref.choice[0]);
  const valueChanged = useChange();
  const changeValue = useUpdateChange();
  const { handleChange } = props;

  const changeHandler = (event) => {
    if (selectedPreference === null) {
      setSelectedPreference(event.target.value);
    }
  };

  const selectionHandler = (event) => {
    setSelectedChoice(event.target.value);
    setSelectedPreference(null);
  }

  const element = null;
  if (selectedPreference === null) {
    element = <button id="dropdownMenu" className="bg-[grey] w-[90px] h-[25px] rounded-[12px]" onClick={changeHandler} value={`${pref.pref}`}>Change</button>
  } else if (selectedPreference) {
    element = (
      <div id="dropdown" onClick={changeHandler} className="relative bg-limed-spruce h-[250px] overflow-y-scroll">
        <ul>
          {pref.choice.map((singleChoice, index) => {
            return (
            <li key={index} onClick={changeValue}>
              <button className="w-[100px] p-[5px]" key={index} onClick={(e) => {
                selectionHandler(e);
                handleChange(selectedPreference, e.target.value);
                }} value={`${singleChoice}`}>
                {singleChoice}
              </button>
            </li>
            )
          })}
        </ul>
      </div>
      )
  };

  return (
    <div className="flex justify-left items-center text-white">
      <div className="w-[stretch] mt-2 h-[56px]">
        <div className="text-[grey]">{pref.pref}</div>
        <div>{selectedChoice}</div>
      </div>
      <div className="h-[25px]">
        {element}
      </div>
    </div>
  );
};

export default Preference;
