import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoData from "../data";
import { Video } from "../data";
import damsel from "../data/Thumbnails/rebelMoon.jpg"
const BrowseSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
        <div className="relative h-[50vh] md:h-[70vh] w-full">
      <Image src={damsel} alt="Movie Background" layout="fill" objectFit="cover" />

      <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Rebel Moon</h1>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae quo maxime dolor sunt repellat necessitatibus dolore at minus explicabo.
          </p>
          <Link href="/path/to/your/play-page" className="bg-red-500 px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-bold hover:bg-red-600">
            Play
          </Link>
        </div>
      </div>
    </div>

      {/* Browse Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-5 ml-10 mt-10 text-white">
          Browse Popular Movies
        </h2>
        <Slider {...settings}>
          {Object.values(VideoData).map((video: Video) => (
            <div
              key={video.id}
              className="flex gap-4 cursor-pointer relative w-full duration-300 ease-in-out"
            >
              <Link href={video.videoUrl} target="_blank" passHref>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout="responsive"
                  width={350}
                  className="hover:border-2 rounded-md"
                />
              </Link>
              {/* <h3 className="text-lg mt-2 text-white">{video.title}</h3> */}
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default BrowseSection;
