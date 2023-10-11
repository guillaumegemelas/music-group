import "./App.css";
import AudioPlayer from "react-audio-player";

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

//test import images
import animalsImg from "./Images/the-animals.jpeg";
import stromae from "./Images/stromae.jpg";
import bonheurMae from "./Images/bonheurMae.jpg";
import roadCountry from "./Images/roadCountry.jpg";
import verve from "./Images/verve.jpg";
import lmfaoimg from "./Images/lmfaoimg.jpeg";
import gregoire from "./Images/gregoire.avif";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-center font-bold p-12 text-4xl">
        AINspirations nouvelles 😉
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        <AudioPlayerComp
          bgColor={"bg-green-500"}
          songSource={papoutai}
          imgSource={stromae}
          group={"Stromae"}
          title={"Papaoutai"}
          name={"Arnaud"}
        />

        <AudioPlayerComp
          bgColor={"bg-red-500"}
          songSource={toi}
          imgSource={gregoire}
          group={"Grégoire - "}
          title={"Toi + Moi"}
          name={"Sebastien"}
        />

        <AudioPlayerComp
          bgColor={"bg-yellow-500"}
          songSource={lmfao}
          imgSource={lmfaoimg}
          group={"LMFAO - "}
          title={"Party Rock"}
          name={"Sebastien"}
        />

        <AudioPlayerComp
          bgColor={"bg-blue-500"}
          songSource={animals}
          imgSource={animalsImg}
          group={"The animals - "}
          title={"House of the rising sun"}
          name={"Olivier"}
        />

        <AudioPlayerComp
          bgColor={"bg-orange-500"}
          songSource={bonheur}
          imgSource={bonheurMae}
          group={"Christophe Mae - "}
          title={"Il est où le bonheur"}
          name={"Anglélique"}
        />

        <AudioPlayerComp
          bgColor={"bg-pink-500"}
          songSource={road}
          imgSource={roadCountry}
          group={"John Denver - "}
          title={"Take me home country road"}
          name={"Olivier"}
        />

        <AudioPlayerComp
          bgColor={"bg-purple-500"}
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
