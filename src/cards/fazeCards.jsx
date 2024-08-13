import React from "react";
import '../styles/logos/fazeLogo.css';
import "../styles/cards/fazeCards/fazeMembers.css";
import '../styles/cards/fazeCards/fazeCards.css';
import Cards from "../components/Cards"; // Importa el nuevo componente
import { simp, abezy, cellium, drazah } from "../assets/fazeImgs/fazeIndex"; // Importamos las imagenes del team
import { usa } from "../assets/nationalities/nacionalityIndex"; //Importamos las nacionalitys
import { fazeTwitch,fazeYoutube, fazeX } from "../assets/socialNetworks/fazeSocial/fazeSocialIndex";


const fazeMembers = () => {
  return (
    <div className="imagenes card-containerfaze">
      {/*SIMP CARD */}
      <Cards
        image={simp}
        nacionality={usa}
        nickname="SIMP"
        name="CHRIS LEHR"
        role="SMG"
        indicator="simp"
        youtubeUrl="https://www.youtube.com/@ImSimp "
        twitchUrl="https://www.twitch.tv/Simp"
        xUrl="https://twitter.com/SimpXO"
        youtubeLogo={fazeYoutube}
        twitchLogo={fazeTwitch}
        xLogo={fazeX}
      />

      {/*ABEZY CARD */}
      <Cards
        image={abezy}
        nacionality={usa}
        nickname="ABEZY"
        name="TYLER PHARRIS"
        role="SMG"
        indicator="abezy"
        youtubeUrl="https://www.youtube.com/@tylerabezy"
        twitchUrl="https://www.twitch.tv/aBeZy"
        xUrl="https://twitter.com/aBeZy"
        youtubeLogo={fazeYoutube}
        twitchLogo={fazeTwitch}
        xLogo={fazeX}
      />

      {/*CELLIUM CARD */}
      <Cards
        image={cellium}
        nacionality={usa}
        nickname="CELLIUM"
        name="MCARTHUR JOVEL"
        role="AR"
        indicator="cellium"
        youtubeUrl="https://www.youtube.com/@Cellium"
        twitchUrl="https://www.twitch.tv/Cellium"
        xUrl="https://twitter.com/Cellium"
        youtubeLogo={fazeYoutube}
        twitchLogo={fazeTwitch}
        xLogo={fazeX}
      />

      {/*DRAZAH CARD */}
      <Cards
        image={drazah}
        nacionality={usa}
        nickname="DRAZAH"
        name="ZACHARY JORDANAH"
        role="AR"
        indicator="drazah"
        youtubeUrl="https://www.youtube.com/@Drazah-"
        twitchUrl="https://www.twitch.tv/drazah"
        xUrl="https://twitter.com/Drazah"
        youtubeLogo={fazeYoutube}
        twitchLogo={fazeTwitch}
        xLogo={fazeX}
      />
    </div>
  );
};

export default fazeMembers;
