import React from "react";
import "./Header.css";
import spotifyIcon from "../../images/spotify-logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header({ loggedIn, username }) {
  return (
    <header className="header">
      <a className="header__icon-container" href="#">
        <img className="header__logo" src={spotifyIcon} alt="spotify logo" />
      </a>
      <Navigation loggedIn={loggedIn} username={username} />
    </header>
  );
}
