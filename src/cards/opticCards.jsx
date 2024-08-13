import React from "react";
import "../styles/cards/opticCards/opticMembers.css"; // Importa los estilos CSS para la tarjeta
import "../styles/cards/opticCards/opticCards.css"; // Importa los estilos CSS para la tarjeta
import Cards from "../components/Cards"
import {shotzzy, pred, dashy, kenny} from '../assets/Optic/opticIndex';
import { usa, canada, australia, philippines} from "../assets/nationalities/nacionalityIndex"; //Importamos las nacionalitys
import { opticTwitch,opticYoutube, opticX } from "../assets/socialNetworks/opticSocial/opticSocialIndex";

const opticMembers = () => {
  return (
    <div className="imagenes card-containeroptic">
      {/*SIMP CARD */}
      <Cards
        image={shotzzy}
        nacionality={usa}
        nickname="SHOTZZY"
        name="ANTHONY CUEVAS-CASTRO"
        role="SMG"
        indicator="shotzzy"
        youtubeUrl="https://www.youtube.com/@Shotzzy"
        twitchUrl="https://www.twitch.tv/shotzzy"
        xUrl="https://twitter.com/Shotzzy"
        youtubeLogo={opticYoutube}
        twitchLogo={opticTwitch}
        xLogo={opticX}
      />

      {/*ABEZY CARD */}
      <Cards
        image={pred}
        nacionality={australia}
        nickname="PRED"
        name="AMER ZULBEARI"
        role="SMG"
        indicator="pred"
        youtubeUrl="https://www.youtube.com/@tylerabezy"
        twitchUrl="https://www.twitch.tv/aBeZy"
        xUrl="https://twitter.com/aBeZy"
        youtubeLogo={opticYoutube}
        twitchLogo={opticTwitch}
        xLogo={opticX}
      />

      {/*CELLIUM CARD */}
      <Cards
        image={dashy}
        nacionality={canada}
        nickname="DASHY"
        name="BRANDON OTELL"
        role="AR"
        indicator="dashy"
        youtubeUrl="https://www.youtube.com/@Cellium"
        twitchUrl="https://www.twitch.tv/Cellium"
        xUrl="https://twitter.com/Cellium"
        youtubeLogo={opticYoutube}
        twitchLogo={opticTwitch}
        xLogo={opticX}
      />

      {/*DRAZAH CARD */}
      <Cards
        image={kenny}
        nacionality={philippines}
        nickname="KENNY"
        name="KENNETH WILLIAMS"
        role="AR"
        indicator="kenny"
        youtubeUrl="https://www.youtube.com/@Drazah-"
        twitchUrl="https://www.twitch.tv/drazah"
        xUrl="https://twitter.com/Drazah"
        youtubeLogo={opticYoutube}
        twitchLogo={opticTwitch}
        xLogo={opticX}
      />
    </div>
  );
};

export default opticMembers;