import React from "react";
import "./Main.css";
import musicNote from "../../images/main-icon.svg";
import spotify from "../../utils/spotify";

export default function Main({ loggedIn, profileImage }) {
  const button = loggedIn ? (
    <a className="main__login" onClick={() => spotify.logout()}>
      Logout of Spotify
    </a>
  ) : (
    <a className="main__login" onClick={() => spotify.login()}>
      Login to Spotify
    </a>
  );

  const img =
    loggedIn && profileImage != "" && profileImage ? profileImage : musicNote;

  return (
    <div>
      <main className="main">
        <section className="main__container">
          <img className="main__icon" src={img} alt="main icon"></img>
          {button}
          <p className="main__caption">
            See your Top Songs and get Recommendations based on your Top Songs!
          </p>
        </section>
      </main>
    </div>
  );
}
