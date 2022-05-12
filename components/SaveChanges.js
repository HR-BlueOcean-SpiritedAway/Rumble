import React from 'react';

const SaveChanges = ({handleSubmit}) => {
  const element = null;

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleSubmit} className="bg-limed-spruce text-white w-[87.7%] h-12 rounded-[14px] mt-3">Save Changes</button>
    </div>
  );
};

export default SaveChanges;
