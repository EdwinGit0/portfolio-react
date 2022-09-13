import React, { useState } from "react";

export default function Work(props) {

  const [academicoVOIP, setAcademicoVOIP] = useState(true);
  
  return (
    <div className="col" onMouseLeave={() => setAcademicoVOIP(true)}>
      <img
        onMouseEnter={() => setAcademicoVOIP(false)}
        src={require("../Assets/img/"+props.work.picture)}
        alt={props.work.alt}
      />
      <div className="description" hidden={academicoVOIP}>
        <p>{props.work.description}</p>
        <a
          type="button"
          className="btn"
          href={props.work.link_web}
          target="_blank"
          rel="noreferrer"
        >
          Sitio web
        </a>
        <a
          type="button"
          className="btn"
          href={props.work.link_repo}
          target="_blank"
          rel="noreferrer"
        >
          Repositorio
        </a>
      </div>
    </div>
  );
}
