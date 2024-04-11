import React, { useEffect } from "react";
import "../styles/Home.css";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Hamza Balouty</h2>
        <div className="prompt">
          <p>A frontend developer with a passion for learning and creating.</p>
          <a href="https://web.whatsapp.com/HIMAB/Profile" target='_blank'>
            <FaWhatsapp className="social-icon"/>
          </a>
          <a href="https://github.com/hamzabalouty" target='_blank'>
            <FaGithub className="social-icon"/>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
            <MdEmail className="social-icon"/>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, js, ReactJS, Redux-Toolkit, Typescript, Sass, 
              BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
