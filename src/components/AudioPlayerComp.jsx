import React from "react";
import AudioPlayer from "react-audio-player";

function AudioPlayerComp({
  songSource,
  imgSource,
  group,
  title,
  name,
  bgColor,
}) {
  return (
    <div
      className={`${bgColor} p-4 m-4 rounded-lg shadow-current shadow-xl md:flex-row justify-between flex-col flex font-sans  hover:shadow-2xl hover:shadow-current`}
    >
      <div className="mb-6 mr-16 md:mb-0 cssPerso">
        <div>
          <h2 className="mb-4 text-3xl font-bold ">
            {group}
            <span className="text-xl font-normal">{title}</span>{" "}
          </h2>
        </div>
        <div>
          <AudioPlayer controls>
            {/* j'ai enlevé autoplay */}
            <source src={songSource} />
          </AudioPlayer>
        </div>
      </div>
      <div className="flex items-end justify-between md:flex-col">
        <img
          className="transition-shadow duration-300 ease-in-out rounded-lg shadow-none h-36 hover:shadow-lg hover:shadow-black/30"
          src={imgSource}
          alt="stromae"
        />
        <h1 className="font-mono">{name}</h1>
      </div>
    </div>
  );
}

export default AudioPlayerComp;
