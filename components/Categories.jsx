import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Catégories </span>qui pourraient vous
        plaire
      </h2>
      {/* Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2 cursor-pointer">
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
          title="Discussion"
          viewers="289,8k"
          tag1="IRL"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
          title="League of Legends"
          viewers="166,6k"
          tag1="MOBA"
          tag2="Action"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
          title="VALORANT"
          viewers="289,8k"
          tag1="Jeux de tir"
          tag2="FPS"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/20596_IGDB-188x250.jpg"
          title="Dofus"
          viewers="11,7k"
          tag1="Jeu de rôle"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509663-188x250.jpg"
          title="Evénements spéciaux"
          viewers="7,6k"
          tag1="IRL"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg"
          title="Teamfight Tactics"
          viewers="56,4k"
          tag1="Stratégie"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/30921-188x250.jpg"
          title="Rocket League"
          viewers="6k"
        />
      </div>
    </div>
  );
};

export default Categories;
