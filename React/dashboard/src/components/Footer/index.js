import React from "react";

import "./styles.css";

import {FaRocket} from 'react-icons/fa'
import {FcBarChart} from 'react-icons/fc'

function Footer() {
  return (
    <footer>
      <p><FaRocket size={10}/> Dashboard by Luuck4s <FcBarChart size={12} /></p>
    </footer>
  );
}

export default Footer;
