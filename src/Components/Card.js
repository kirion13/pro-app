import React from "react";

export default function Main() {
  return (
    <div className="content">
      <div className="title">
        <div className="img"></div>
        <h3>Mazen Ahmed</h3>
        <h5>Front End Developer</h5>
        <h6>MazenWepsite.com</h6>
      </div>
      <button className="email">
        <img src="./assets/Mail.png" />
        Email
      </button>
      <button className="linkedin">
        <img src="./assets/Mail.png" />
        Linkedin
      </button>
      <div className="about">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Intersts</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
