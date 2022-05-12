import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

const SaveChanges = ({handleSubmit}) => {
  const element = null;

  return (
    <div className="flex justify-center items-center">
      <Link href="/Page-C-SwipeSolo">
        <button onClick={handleSubmit} className="bg-limed-spruce text-white w-[87.7%] h-12 rounded-[14px] mt-3">Save Changes</button>
      </Link>
    </div>
  );
};

export default SaveChanges;
