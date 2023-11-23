import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import VideoData from "../data";
import { Video } from "../data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularVideos = () => {
  const router = useRouter();
  type Item = {
    title: string;
    slider: {
      slider: string;
    };
  };
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

  const sideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const sideRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
     <section className="p-8">
        <h2 className="text-3xl font-bold mb-5 ml-10 mt-10 text-white">
           Most Searched Of Netflix
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


      {/* latest Videos  */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-5 ml-10 mt-10 text-white">
          latest On Netflix
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

      {/* Trending Web Series  */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-5 ml-10 mt-10 text-white">
          Recommended Series 
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

export default PopularVideos;
