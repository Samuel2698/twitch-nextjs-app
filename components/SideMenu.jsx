import React from "react";
import { rec_channels, top_channels } from "../data/mock-data";
import { RiMovieLine } from "react-icons/ri";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const SideMenu = () => {
  return (
    <div className="w-14 sm:w-16 lg:w-[15rem] h-screen p-2 bg-[#0e0e10]">
      <div>
        <p className="hidden lg:flex uppercase font-bold text-sm pb-4">
          Chaînes recommandées
        </p>
        <p>
          <RiMovieLine size={20} className="lg:hidden justify-center w-full" />
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div
          key={index}
          className="inline-flex items-center w-full py-[2px] cursor-pointer"
        >
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            />
          </div>
          <div className="hidden lg:flex justify-between w-full">
            <div>
              <p>{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot size={20} color="red" />
              {item.rank}k
            </p>
          </div>
        </div>
      ))}
      <div>
        <p className="hidden lg:flex uppercase font-bold text-sm py-4">
          Principales chaînes
        </p>
        <p>
          <RiMovieLine size={20} className="lg:hidden justify-center w-full" />
        </p>
      </div>
      {top_channels.map((item, index) => (
        <div
          className="inline-flex items-center w-full py-[2px] cursor-pointer"
          key={index}
        >
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            />
          </div>
          <div className="hidden lg:flex justify-between w-full">
            <div>
              <p>{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot size={20} color="red" />
              {item.rank}k
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
