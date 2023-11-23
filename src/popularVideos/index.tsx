import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa";
import VideoData from "../data";
import { Video } from "../data";
import Image from "next/image";

const PopularVideos = () => {
  const router = useRouter();
  type Item = {
    title: string;
    slider: {
      slider: string;
    };
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
      <section className="my-1">
        <h2 className="text-2xl font-bold mb-5 ml-10 text-white">
          Popular Movies  on Netflix
        </h2>
        <div className="relative flex items-center gap-3">
          <FaChevronLeft
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={sideLeft}
            size={100}
            color="white"
          />
          <div className="flex gap-5 overflow-x-scroll scrollbar-hide" id="slider">
            {Object.values(VideoData).map((video: Video) => (
              <div key={video.id} className="flex-shrink-0 ">
                <Link href={video.videoUrl}  target="_blank" passHref>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    height={550}
                    width={550}
                    className="rounded-lg hover:border-2"
                  />
                </Link>
              </div>
            ))}
          </div>
          <FaChevronRight
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={sideRight}
            size={100}
            color="white"
          />
        </div>
      </section>


      {/* latest Videos  */}
      <section className="my-2">
        <h2 className="text-2xl font-bold mb-5 ml-10 mt-10 text-white">
          Latest Movies on Netflix
        </h2>
        <div className="relative flex items-center gap-3">
          <FaChevronLeft
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={sideLeft}
            size={100}
            color="white"
          />
          <div className="flex gap-5 overflow-x-scroll scrollbar-hide" id="slider">
            {Object.values(VideoData).map((video: Video) => (
              <div key={video.id} className="flex-shrink-0 ">
                <Link href={video.videoUrl}  target="_blank" passHref>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    height={550}
                    width={550}
                    className="rounded-lg hover:border-2"
                  />
                </Link>
              </div>
            ))}
          </div>
          <FaChevronRight
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={sideRight}
            size={100}
            color="white"
          />
        </div>
      </section>

      {/* Trending Web Series  */}
      <section className="my-2">
        <h2 className="text-2xl font-bold mb-5 ml-10 mt-10 text-white">
          Trending WebSeries on Netflix
        </h2>
        <div className="relative flex items-center gap-3">
          <FaChevronLeft
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={sideLeft}
            size={100}
            color="white"
          />
          <div className="flex gap-5 overflow-x-scroll scrollbar-hide" id="slider">
            {Object.values(VideoData).map((video: Video) => (
              <div key={video.id} className="flex-shrink-0 ">
                <Link href={video.videoUrl}  target="_blank" passHref>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    height={550}
                    width={550}
                    className="rounded-lg hover:border-2"
                  />
                </Link>
              </div>
            ))}
          </div>
          <FaChevronRight
            className="opacity-50 hover:opacity-100 cursor-pointer"
            onClick={sideRight}
            size={100}
            color="white"
          />
        </div>
      </section>

    </div>
  );
};

export default PopularVideos;
