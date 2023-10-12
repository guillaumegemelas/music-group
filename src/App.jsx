import { useEffect, useState } from "react";
import "./App.css";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

//import composants
import AudioPlayerComp from "./components/AudioPlayerComp";

//test import
import papoutai from "./Music/Papaoutai.mp3";
import animals from "./Music/the-animals.mp3";
import bonheur from "./Music/bonheur.mp3";
import road from "./Music/road.mp3";
import bitter from "./Music/bitter.mp3";
import lmfao from "./Music/lmfao.mp3";
import toi from "./Music/toi.mp3";
import marc from "./Music/marc.mp3";
import strokes from "./Music/strokes.mp3";
import queen from "./Music/queen.mp3";
import lady from "./Music/lady.mp3";
import u2 from "./Music/u2.mp3";
import louis from "./Music/louis.mp3";

//test import images
import animalsImg from "./Images/the-animals.jpeg";
import stromae from "./Images/stromae.jpg";
import bonheurMae from "./Images/bonheurMae.jpg";
import roadCountry from "./Images/roadCountry.jpg";
import verve from "./Images/verve.jpg";
import lmfaoimg from "./Images/lmfaoimg.jpeg";
import gregoire from "./Images/gregoire.avif";
import marcImg from "./Images/marc.jpeg";
import strokesImg from "./Images/strokesImg.jpeg";
import queenImg from "./Images/queenImg.jpg";
import ladyImg from "./Images/ladyImg.jpg";
import u2Img from "./Images/u2Img.jpg";
import louisImg from "./Images/louisImg.jpg";

function App() {
  const [currentTrack, setTrackIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleClickNext = () => {
    console.log("click next");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    handleLoadingComplete();
  }, []);

  const playlist = [
    { src: papoutai },
    { src: animals },
    { src: bonheur },
    { src: road },
    { src: bitter },
    { src: lmfao },
    { src: toi },
    { src: marc },
    { src: strokes },
    { src: queen },
    { src: lady },
    { src: u2 },
    { src: louis },
  ];
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="p-12 text-4xl antialiased font-bold text-center shadow-xl">
        AINspirations nouvelles 😉
      </h1>
      {loading ? (
        <div className="w-11/12 mx-auto mt-24 mb-24 text-center text-white sm:w-1/2">
          <p>Chargement en cours...</p>
        </div>
      ) : (
        <div className="w-11/12 mx-auto mt-12 mb-12 sm:w-1/2">
          <AudioPlayer
            volume="0.5"
            src={playlist[currentTrack].src}
            showSkipControls
            onClickNext={handleClickNext}
            onEnded={handleEnd}
            className="pt-6 pb-6 pl-16 pr-16 bg-purple-400 rounded-full shadow-2xl"
          />
        </div>
      )}

      <h2 className="p-12 text-2xl font-semibold text-center">En détail...</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AudioPlayerComp
          bgColor={"bg-emerald-300"}
          songSource={papoutai}
          imgSource={stromae}
          group={"Stromae -"}
          title={"Papaoutai"}
          name={"Arnaud"}
        />
        <AudioPlayerComp
          bgColor={"bg-sky-300"}
          songSource={marc}
          imgSource={marcImg}
          group={"Marc Lavoine - "}
          title={"Chère amie"}
          name={"Angélique"}
        />
        <AudioPlayerComp
          bgColor={"bg-blue-200"}
          songSource={strokes}
          imgSource={strokesImg}
          group={"The Strokes - "}
          title={"Hard to Explain"}
          name={"Guillaume"}
        />
        <AudioPlayerComp
          bgColor={"bg-fuchsia-200"}
          songSource={queen}
          imgSource={queenImg}
          group={"Queen - "}
          title={"Don't stop me now"}
          name={"Camille"}
        />
        <AudioPlayerComp
          bgColor={"bg-rose-300"}
          songSource={lady}
          imgSource={ladyImg}
          group={"Lady Gaga et Bradley Cooper - "}
          title={"Shallow"}
          name={"Camille"}
        />
        <AudioPlayerComp
          bgColor={"bg-red-400"}
          songSource={u2}
          imgSource={u2Img}
          group={"U2 - "}
          title={"Sunday bloody Sunday"}
          name={"Arnaud"}
        />

        <AudioPlayerComp
          bgColor={"bg-amber-200"}
          songSource={louis}
          imgSource={louisImg}
          group={"Soldat Louis - "}
          title={"Des femmes et du Rhum"}
          name={"Anaïs"}
        />

        <AudioPlayerComp
          bgColor={"bg-neutral-300"}
          songSource={toi}
          imgSource={gregoire}
          group={"Grégoire - "}
          title={"Toi + Moi"}
          name={"Sebastien"}
        />

        <AudioPlayerComp
          bgColor={"bg-blue-400"}
          songSource={animals}
          imgSource={animalsImg}
          group={"The animals - "}
          title={"House of the rising sun"}
          name={"Olivier"}
        />
        <AudioPlayerComp
          bgColor={"bg-orange-400"}
          songSource={bonheur}
          imgSource={bonheurMae}
          group={"Christophe Mae - "}
          title={"Il est où le bonheur"}
          name={"Anglélique"}
        />
        <AudioPlayerComp
          bgColor={"bg-cyan-200"}
          songSource={lmfao}
          imgSource={lmfaoimg}
          group={"LMFAO - "}
          title={"Party Rock"}
          name={"Sebastien"}
        />
        <AudioPlayerComp
          bgColor={"bg-pink-400"}
          songSource={road}
          imgSource={roadCountry}
          group={"John Denver - "}
          title={"Take me home country road"}
          name={"Olivier"}
        />
        <AudioPlayerComp
          bgColor={"bg-purple-400"}
          songSource={bitter}
          imgSource={verve}
          group={"The Verve - "}
          title={"The bitter sweet symphony"}
          name={"Guillaume"}
        />
        {/* ------------------------------------------------ */}
      </div>
    </div>
  );
}

export default App;
