import React from "react";

function Links(links) {
  const { Linkedin, Github } = links;
  return (
    <div>
      <h3>Links</h3>
      <a href="https://github.com/liza"> {Github} </a>
      <a href="https://www.linkedin.com/in/liza/">{Linkedin}</a>
    </div>
  );
}

export default Links;
