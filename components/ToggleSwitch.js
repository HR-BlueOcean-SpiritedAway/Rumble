import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <div className='flex justify-center mt-6 relative'>
      <label className="toggle-switch cursor-pointer">
        <input type="checkbox" checked={isToggled} onChange={onToggle}/>
        <span className="switch" />
        <div className='flex justify-around absolute h-12  w-full'>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold text-sm'>Delivery</div>
            <div className='text-xs text-gray-500'>45-55 min</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold text-sm'>Pickup</div>
            <div className='text-xs text-gray-500'>15-25 min</div>
          </div>
        </div>
      </label>
    </div>
  );
}