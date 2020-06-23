import React from "react";

import {
  AiOutlineDashboard,
  AiOutlineFolder,
  AiOutlineBarChart,
} from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";

import "./styles.css";

function Menu() {
  return (
    <aside className="menu">
      <section className="menu-logo">
        <FaChartLine size={30} color={"#FFF"} />
        <h1>ADMIN</h1>
      </section>
      <section className="menu-list">
        <div className="menu-pages">
          <ul>
            <li>
              <AiOutlineDashboard size={17} color={"#FFF"} />
              Dashboard
            </li>
          </ul>
        </div>
        <div className="menu-actions">
          <span className="menu-label">ACTIONS</span>
          <ul>
            <li>
              <AiOutlineFolder size={17} color={"#ffffffa6"} />
              Pages
            </li>
            <li>
              <AiOutlineBarChart size={17} color={"#ffffffa6"} />
              Charts
            </li>
            <li>
              <BsTable size={17} color={"#ffffffa6"} />
              Tables
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
}

export default Menu;
