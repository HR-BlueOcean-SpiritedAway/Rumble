import { useState } from 'react';
import Image from "next/image";

import SearchIcon from '../public/images/search.svg';


export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center w-full">
        <div className="flex border-none rounded-xl w-full bg-limed-spruce">
          <div className="pl-5 pr-1 grid items-center justify-items-center w-fit">
            <Image src={SearchIcon} height="20px" width="20px" alt="" />
          </div>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search Rumble"
              className="px-2 py-3 w-3/4 bg-limed-spruce text-white
                        placeholder-star-dust-light focus:border-none focus:outline-none"
            />
            <button
              type="button"
              className="justify-center px-4 w-1/4 bg-sunset-orange rounded-r-xl
                        text-sm text-white font-bold"
              onClick={() => { onSubmit(''); setQuery('') }}
            >
              Clear
            </button>
        </div>
      </div>
    </form>
  )
}
