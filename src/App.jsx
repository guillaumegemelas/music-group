import "./App.css";
import AudioPlayer from "react-audio-player";

//import composants
import AudioPlayerComp from "./components/AudioPlayerComp";

//test import
import papoutai from "./Music/Papaoutai.mp3";
import animals from "./Music/the-animals.mp3";
import bonheur from "./Music/bonheur.mp3";
import road from "./Music/road.mp3";

//test import images
import animalsImg from "./Images/the-animals.jpeg";
import stromae from "./Images/stromae.jpg";
import bonheurMae from "./Images/bonheurMae.jpg";
import roadCountry from "./Images/roadCountry.jpg";

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
      {/* {array.map((song) => {
        console.log(song);
        return (
          <AudioPlayer autoPlay controls key={song}>
            <source src={song} />
          </AudioPlayer>
        );
     

      {/* ------------------------------------------------ */}

      <AudioPlayerComp
        bgColor={"bg-green-500"}
        songSource={papoutai}
        imgSource={stromae}
        group={"Stromae"}
        title={"Papaoutai"}
        name={"Arnaud"}
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

      {/* ------------------------------------------------ */}
    </div>
  );
}

export default App;
