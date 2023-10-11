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
      className={`${bgColor} p-4 m-4 rounded-lg shadow-md md:flex-row justify-between flex-col flex font-sans`}
    >
      <div className="mr-16 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold underline mb-4 ">
          {group}
          <span className="font-normal">{title}</span>{" "}
        </h2>
        <AudioPlayer autoPlay controls>
          <source src={songSource} />
        </AudioPlayer>
      </div>
      <div className="flex justify-between items-end md:flex-col">
        <img
          className="h-36 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          src={imgSource}
          alt="stromae"
        />
        <h1 className="font-mono">{name}</h1>
      </div>
    </div>
  );
}

export default AudioPlayerComp;
