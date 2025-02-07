//import react libraries
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

//import CSS
import "./Home.css";

//import 3rd party libraries
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

//import icons
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

//import lotties
import DeveloperLottie from "../../assets/lottie/home/DeveloperLottie.json";
import AstronautLottie from "../../assets/lottie/home/AstronautLottie.json";

//import data
import HomeDB from "../../assets/Database/HomeDB.json";

const Home = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState([]);

  const theme = useSelector((state) => state.theme.value);

  const handleDownload = () => {
    const resumeUrl = "/My_CV.pdf"; // Public folder path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Musaraf_Hossain.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => { }, []);
  useEffect(() => {
    setData(HomeDB);
    setText(data.text_group);
    AOS.init();
  }, [text, data]);

  return (
    <>
      <div
        className={`home-page ${theme ? "home-page-dark" : "home-page-light"}`}
      >
        {theme ? (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#4D455D",
                },
                links: {
                  color: "#191825",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "star",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        ) : (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#4D455D",
                },
                links: {
                  color: "#191825",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        <div className="container mobile-margin">
          <div className="row d-flex justify-content-center">
            <div
              className="col-lg-6  d-flex justify-content-center flex-column align-items-start px-5 "
              data-aos="fade-right"
            >
              <div className="text-contant ">
                <h3
                  className={
                    theme ? "home-firsttext-dark " : "home-firsttext-light"
                  }
                >
                  {/* Hello */}
                  {data.text}
                </h3>
                <h1 className={`d-flex  flex-row align-items-center `}>
                  {/* I'm */}
                  <span
                    className={
                      theme ? "home-secondtext-dark" : "home-secondtext-light"
                    }
                  >
                    {data.static_text}
                  </span>

                  <span className="text-animated">
                    <Typewriter
                      options={{
                        strings: text,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>{" "}
              <p
                className={`home-description ${theme ? "home-description-dark " : "home-description-light"
                  }`}
              >
                {/* My name is Musaraf Hossain. */}
                {data.home_description}
              </p>
              <button
                onClick={handleDownload}
                className={`download-Resume-button ${theme
                    ? "download-Resume-button-dark"
                    : "download-Resume-button-light"
                  }`}
              // download="Musaraf Hossain"
              >
                <MdFileDownload
                  style={{ fontSize: "1.2rem" }}
                  className="download-animation-icon"
                />{" "}
                <span className="download-resume-text">
                  {/* Download Resume */}
                  {data.download_resume_text}
                </span>
              </button>
              <ul className="social-media-component mt-5">
                <li className={`social-media-tag `}>
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                      }`}
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className={`social-media-tag`}>
                  <a
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                      }`}
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className={`social-media-tag `}>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                      }`}
                  >
                    <BsGithub />
                  </a>
                </li>
                <li className={`social-media-tag `}>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                      }`}
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li className={`social-media-tag `}>
                  <a
                    href={data.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                      }`}
                  >
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column align-items-center">
              {theme ? (
                <Lottie
                  animationData={AstronautLottie}
                  className="Home-lottie-image"
                />
              ) : (
                <Lottie
                  animationData={DeveloperLottie}
                  className="Home-lottie-image"
                />
              )}
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Home;
