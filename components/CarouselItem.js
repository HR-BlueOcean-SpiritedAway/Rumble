
export default function CarouselItem({ data }) {
  return (
    <div className={`w-64 h-48 bg-fixed border-2 rounded-full border-gold bg-white`}>
      <div className={`bg-[${data.image}] `} ></div>
      <div>{data.name}</div>
      <div>{data.category + " restaurant"}</div>
    </div>
  )
}