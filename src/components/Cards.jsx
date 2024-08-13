import React from "react";

const Cards = ({
  image,
  nacionality,
  nickname,
  name,
  role,
  indicator,
  youtubeUrl,
  twitchUrl,
  xUrl,
  youtubeLogo,
  twitchLogo,
  xLogo,
}) => {
  const handleYouTubeClick = () => {
    window.location.href = youtubeUrl;
  };

  const handleTwitchClick = () => {
    window.location.href = twitchUrl;
  };

  const handleTwitterClick = () => {
    window.location.href = xUrl;
  };

  return (
    <div className={`Cards ${indicator}`}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={nickname} />
        </div>
        <div className="card-back">
          <div className="info-container">
            <p>Nickname: {nickname}</p>
            <p>Nombre: {name}</p>
            <p>Rol: {role}</p>
            <p>Nacionality:</p>
            <img src={nacionality} className="nacionality" alt="Nacionality" />
            <div className="social-logos">
              <div className="tooltip-container">
                <img
                  src={youtubeLogo}
                  alt="YouTube"
                  className="youtube-logo"
                  onClick={handleYouTubeClick}
                />
                <span className="tooltip-text">YouTube</span>
              </div>
              <div className="tooltip-container">
                <img
                  src={twitchLogo}
                  alt="Twitch"
                  className="twitch-logo"
                  onClick={handleTwitchClick}
                />
                <span className="tooltip-text">Twitch</span>
              </div>
              <div className="tooltip-container">
                <img
                  src={xLogo}
                  alt="X"
                  className="x-logo"
                  onClick={handleTwitterClick}
                />
                <span className="tooltip-text">X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
