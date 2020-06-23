import React from "react";

import { MdNotifications, MdEmail } from "react-icons/md";

import "./styles.css";

function Header() {
  return (
    <section className="header">
      <div className="header-actions">
        <div className="header-notifications">
          <MdNotifications color={"#BBB"} size={23} />
        </div>
        <div className="header-messages">
          <MdEmail color={"#BBB"} size={23} />
        </div>
      </div>
      <div className="header-user">
        <p>Scooby Doo</p>
        <img
          src={
            "https://conteudo.imguol.com.br/c/bol/entretenimento/b9/2020/04/22/scoob-nova-animacao-do-scooby-doo-sera-lancada-100-digitial-1587561697271_v2_450x450.jpg"
          }
          alt="user profile"
        />
      </div>
    </section>
  );
}

export default Header;
