export default function ColoredTag({ colorName, text }) {
  return (
    <div className={`inline-block rounded-[15px] bg-${colorName} pl-[13px] pr-[13px]`}>
      <p className="font-bold">{text}</p>
    </div>
  );
};