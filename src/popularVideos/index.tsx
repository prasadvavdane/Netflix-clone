import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "/public/images/logo.jpg";
import { StaticImageData } from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const PopularVideos = () => {
  const router = useRouter();
  type Item = {
    title: string;
    image: {
      logo: StaticImageData;
    };
    slider: {
      slider: string;
    };
  };
  const latestOnnNetflix = [
    {
      title: "RuPaul's Drag Race",
      image: {
        logo: logo,
      },
    },
    {
      title: "New Girl",
      image: {
        logo: logo,
      },
    },
    {
      title: "Murdoch Mysteries",
      image: {
        logo: logo,
      },
    },
    {
      title: "Botched",
      image: {
        logo: logo,
      },
    },
    {
      title: "Botched",
      image: {
        logo: logo,
      },
    },
    {
      title: "Botched",
      image: {
        logo: logo,
      },
    },
    {
      title: "Botched",
      image: {
        logo: logo,
      },
    },
    {
      title: "Botched",
      image: {
        logo: logo,
      },
    },
  ];

  const sideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col min-h-screen p-4">
        <section className="my-1">
          <h2 className="text-2xl font-bold mb-5 ml-10 text-white">
            Popular on Netflix
          </h2>
          <div className="relative flex items-center gap-3">
            <MdChevronLeft
              className=" opacity-50 hover:opacity-100 cursor-pointer"
              onClick={sideLeft}
              size={100}
              color="white"
            />
            <div
              className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              id="slider"
            >
              {latestOnnNetflix.map((item) => (
                <Image
                  key={item.title}
                  src={item.image.logo}
                  alt={item.title}
                  className="w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                />
              ))}{" "}
            </div>
            <MdChevronRight
              className="opacity-50 hover:opacity-100  cursor-pointer"
              onClick={sideRight}
              size={100}
              color="white"
            />
          </div>
        </section>


{/* Latest On netflix */}
        <section className="my-2">
          <h2 className="text-2xl font-bold mb-5 ml-10 text-white">
            Latest on Netflix
          </h2>
          <div className="relative flex items-center gap-3">
            <MdChevronLeft
              className=" opacity-50 hover:opacity-100 cursor-pointer"
              onClick={sideLeft}
              size={100}
              color="white"
            />
            <div
              className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              id="slider"
            >
              {latestOnnNetflix.map((item) => (
                <Image
                  key={item.title}
                  src={item.image.logo}
                  alt={item.title}
                  className="w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                />
              ))}{" "}
            </div>
            <MdChevronRight
              className="opacity-50 hover:opacity-100  cursor-pointer"
              onClick={sideRight}
              size={100}
              color="white"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PopularVideos;
