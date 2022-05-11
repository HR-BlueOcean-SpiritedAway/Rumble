import { useState, useEffect } from 'react';

const Preference = (props) => {
  const pref = props.preference;
  const [selectedPreference, setSelectedPreference] = useState(null)
  const [selectedChoice, setSelectedChoice] = useState(pref.choice[0])

  const changeHandler = (event) => {
    if (selectedPreference === null) {
      console.log('event.target.value: ', event.target.value);
      setSelectedPreference(event.target.value);
    } else {
      // setSelected(null);
      console.log('selected preference value');
      console.log('selectedPreference: ', selectedPreference);
      console.log('selectedChoice: ', selectedChoice);
    }
  };

  const element = null;
  if (selectedPreference === null) {
    element = <button className="bg-[grey] w-[90px] h-[25px] rounded-[12px]" onClick={changeHandler} value={`${pref.pref}`}>Change</button>
  } else {
    element = (
      <div onClick={changeHandler}>
        {pref.choice[1]}
      </div>
      )
  };

  return (
    <div className="flex justify-left items-center text-white">
      <div className="w-[stretch] mt-2">
        <div className="text-[grey]">{pref.pref}</div>
        <div>{pref.choice[0]}</div>
      </div>
        {element}
    </div>
  );
};

export default Preference;
