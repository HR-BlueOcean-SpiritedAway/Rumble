import Image from "next/image";

import SearchIcon from '../public/images/search.svg';

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex border-none rounded-xl w-full bg-limed-spruce">
        <div className="pl-5 pr-1 grid items-center justify-items-center w-fit">
          <Image src={SearchIcon} height="20px" width="20px" alt="" />
        </div>
        <input
          type="text"
          className="px-2 py-3 w-3/4 bg-limed-spruce text-white"
          placeholder="Search Rumble"
        />
        <button
          type="button"
          className="justify-center px-4 w-1/4 bg-sunset-orange rounded-r-xl
                    text-sm text-white font-bold"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
