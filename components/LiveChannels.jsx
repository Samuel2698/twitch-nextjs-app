import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import Ibai from "../public/assets/live/ibai.png";
import Rubius from "../public/assets/live/rubius.png";
import Aminematue from "../public/assets/live/aminematue.png";
import xQc from "../public/assets/live/xQc.png";
import Jagger from "../public/assets/live/jagger.png";
import Xokas from "../public/assets/live/Xokas.png";
import Auron from "../public/assets/live/auron.png";
import Louis from "../public/assets/live/louis.png";
import Zorman from "../public/assets/live/zorman.png";
import Chap from "../public/assets/live/chap.png";

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Chaînes live </span>qui pourraient vous
        plaire
      </h2>
      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2 cursor-pointer">
        <LiveChannelItem
          img={Ibai}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png"
          title="LA VELADA DEL AÑO II."
          user="ibai"
          game="box"
        />

        <LiveChannelItem
          img={Rubius}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/a2592e98-5ba6-4c9a-9d9e-cf036d6f64c2-profile_image-150x150.jpg"
          title="CONSIGO 5 VICTORIAS SEGUIDAS..."
          user="Rubius"
          game="Fall Guys"
        />

        <LiveChannelItem
          img={Aminematue}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/13e55cbe-a1b0-4f4c-b69b-2748274b9e48-profile_image-150x150.png"
          title="htaehtaehea"
          user="aminematue"
          game="FIFA 22"
        />

        <LiveChannelItem
          img={xQc}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-150x150.jpeg"
          title="about the timing"
          user="xQc"
          game="Counter-Strike: Global Offensive"
        />

        <LiveChannelItem
          img={Jagger}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/5757d1cb-ee4c-44bb-8738-c1f2627d1935-profile_image-150x150.png"
          title="CLASE DE POESÍA..."
          user="JaggerPrincesa"
          game="Poésie"
        />

        <LiveChannelItem
          img={Xokas}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-150x150.png"
          title="MEJORES MOMENTOS SAW DE AYER..."
          user="elxokas"
          game="Minecraft"
        />

        <LiveChannelItem
          img={Auron}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/ec898e4a-e0df-4dc0-a99d-7540c6dbe1e8-profile_image-150x150.png"
          title="TORNEO DE VALORANT CON..."
          user="auronplay"
          game="VALORANT"
        />

        <LiveChannelItem
          img={Louis}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/40b9b6fd-9b61-4200-9dfa-c02ef695e9ec-profile_image-70x70.png"
          title="On roule dans Tokyo avec Jeel !"
          user="Louis_San"
          game="Discussion"
        />

        <LiveChannelItem
          img={Zorman}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/45e10cf2-77b4-4377-8181-7dd2e6116053-profile_image-150x150.png"
          title="FALL GUYS y luego FF7 INTERGRADE..."
          user="ZormanWorld"
          game="Fall Guys"
        />

        <LiveChannelItem
          img={Chap}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/2548a065-dcef-4048-a00f-1b3fa09e739e-profile_image-70x70.png"
          title="150% DE WINRATE AUJOURD'HUI"
          user="Chap_GG"
          game="League of Legends"
        />
      </div>
    </div>
  );
};

export default LiveChannels;
