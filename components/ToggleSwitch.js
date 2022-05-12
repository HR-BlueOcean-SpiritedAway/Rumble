import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <div className='flex justify-center mt-4 mb-4 text-white'>
      <label className="toggle-switch cursor-pointer">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
        <div className='flex justify-around absolute h-10  w-full pt-1'>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold text-sm'>Delivery</div>
            <div className='text-xs'>45-55 min</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold text-sm'>Pickup</div>
            <div className='text-xs'>15-25 min</div>
          </div>
        </div>
      </label>
    </div>

  );
}