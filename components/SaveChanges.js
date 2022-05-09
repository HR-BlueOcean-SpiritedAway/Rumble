import React from 'react';
import Head from 'next/head';

const SaveChanges = () => {
  console.log('SaveChanges being rendered')
  return (
    <div>
      <main>
        <div className="flex justify-center items-center">
          <button className="bg-sunset-orange text-white w-[87.7%] h-12 rounded-[14px] mt-3">Save Changes</button>
        </div>
      </main>
    </div>
  );
};

export default SaveChanges;