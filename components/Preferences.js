import { useState, useEffect, useContext } from 'react';
import Preference from './Preference';

const Preferences = ({ handleChange }) => {
  const[status, setStatus] = useState(null);
  const [preference, setPreference] = useState("");

  const preferenceOptions = [
    {
      'pref': 'Cuisine Type',
      'choice': ['American', 'Chinese', 'French', 'Greek', 'Indian', 'Italian', 'Jamaican', 'Japanese', 'Korean','Mexican', 'Middle Eastern', 'Spanish', 'Thai', 'Vietnamese']
    },
    {
      'pref': 'Delivery Speed',
      'choice': ['Fast', 'Less Fast']
    },
    {
      'pref':'Price Range',
      'choice': ['$', '$$', '$$$']
    },
    {
      'pref': 'Location',
      'choice': ['San Francisco']
    }
  ]

  return (
    <div className="flex justify-center items-center mt-3 bg-black">
      <div className="bg-limed-spruce w-[87.7%] rounded-[14px] p-4 overflow-hidden">
        {
          preferenceOptions.map((preference, index) => {
            return <Preference handleChange={handleChange} preference={preference} key={index}/>;
          })
        }
      </div>
    </div>
  );
};

export default Preferences;
