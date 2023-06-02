import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, links } = props;

  if (bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links linkedin={links.linkedin} github={links.github} />
      </div>
    );
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={links.linkedin} github={links.github} />
    </div>
  );
}

export default About;
