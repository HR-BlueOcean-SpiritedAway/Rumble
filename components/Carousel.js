// import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem.js";

// const flicking = new Flicking("#my-flicking", { circular: true });

const data = {
  item1: {
  name: "Wing Lum Cafe",
  category: "Chinese",
  image: "https://d1ralsognjng37.cloudfront.net/7d06e7af-42cb-432e-8b2c-ea120c52d340.jpeg"
  },
  item2: {
    name: "Pete's ",
    category: "Italian",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/An_image_of_a_toast_sandwich%2C_shot_from_the_side.jpg/640px-An_image_of_a_toast_sandwich%2C_shot_from_the_side.jpg"
  },
  item3: {
    name: "a restaurant",
    category: "American",
    image: "https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/master/pass/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg"
  }
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function CarouselThing() {
  return (
    // <div className="" style={{height: 120}}>
    //   {/* <Flicking renderOnlyVisible={true}
    //    className="w-48"
    //     align="next"
    //     horizontal="true"
    //     circular={true}
    //     onMoveEnd={e => {
    //       console.log(e);
    //     }}>
    //     <div className="panel">
    //       <CarouselItem data={data.item2} />
    //     </div>
    //     <div className="panel">
    //       <CarouselItem data={data.item3} />
    //     </div>
    //     <div className="panel" >
    //       <CarouselItem data={data.item1} />
    //     </div>
    //   </Flicking> */}
    // </div>
    <div >
    <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
</div>
  )
}