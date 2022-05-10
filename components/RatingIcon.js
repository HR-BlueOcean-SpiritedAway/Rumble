export default function RatingIcon({ rating }) {
  if (rating.length === 1) {
    rating = rating + '.0';
  }

  return (
    <div className="rounded-[20px] h-[35px] bg-reef-gold pl-[12px] pr-[12px] flex justify-center items-center">
      <div className="flex gap-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="18" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        <p className="text-white font-dark">{rating}</p>
      </div>
    </div>
  );
}