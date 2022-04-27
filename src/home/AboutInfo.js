import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase/config";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Reveal from 'react-reveal/Reveal';


function AboutInfo() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) =>
      setPortfolios(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  

    

  return (
    <div className="aboutinfo">
      {portfolios.map((item,index) => (
        <div className="aboutinfo2"  key={index}>
          <div className="side2">
            <img
              className="myImage"
              src={item.image}
              style={{ width: "350px" }}
              alt='dataabe from'
            />
          </div>
          <div className="side1">
            <Reveal effect='fadeInUp' duration={1250}>
            <h1 className="title">{item.title}</h1>
            <p className="description">{item.description}</p>
            </Reveal>
            <div className="buttons">
              <Link className="linkBtn" to="/">
                About me
              </Link>
                <a className="linkBtn" href={item.resume}   download    ><FileDownloadIcon /> Portfolio</a>
            </div>
            <div className="socialNet">
              <a className="links" href="https://github.com/sanjarDev1"  >
                <GitHubIcon className="iconSvg" />
              </a>
              <a className="links" href="https://www.linkedin.com/in/sanjarbek-qobulov-1778b2218/"  >
                <LinkedInIcon className="iconSvg" />
              </a>
              <a className="links" href="https://www.facebook.com/profile.php?id=100078891471037"  >
                <FacebookIcon className="iconSvg" />
              </a>
              <a className="links" href="https://www.instagram.com/sanjarbekqobulov02/?hl=en"  >
                <InstagramIcon className="iconSvg" />
              </a>
              <a className="links" href="https://t.me/Web3_developer"  >
                <TelegramIcon className="iconSvg" />
              </a>
            </div>
          </div>
        </ div>
      ))}
    </div>
  );
}

export default AboutInfo;
