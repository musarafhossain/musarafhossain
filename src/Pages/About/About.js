//import react libraries
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import css
import "./About.css";

//import 3rd party libraries
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

//import databases
import AboutDB from "../../assets/Database/AboutDB.json";
import EducationDB from "../../assets/Database/EducationDB.json";
import ExperienceDB from "../../assets/Database/ExperienceDB.json";
import SkillsDB from "../../assets/Database/SkillsDB.json";

const About = () => {
  const [text, setText] = useState();

  const [data, setData] = useState({});
  const [educationData, setEducationData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const theme = useSelector((state) => state.theme.value);
  const Navigate = useNavigate();
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => { }, []);
  useEffect(() => {
    setData(AboutDB);
    setText(AboutDB.degree);
    setEducationData(EducationDB);
    setSkillsData(SkillsDB);
    AOS.init();
  }, [educationData, skillsData]);

  const HireMeButton = () => {
    Navigate("/contact");
  };
  return (
    <>
      <div
        className={`about-us-page py-5 ${theme ? "about-us-page-dark" : "about-us-page-light"
          }`}
      >
        <div className="container  ">
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
                  value: "#800080",
                },
                links: {
                  color: "#191825",
                  distance: 150,
                  enable: false,
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
                  value: 40,
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
          <div className="row  d-flex  justify-content-center align-items-center">
            <div
              className="col-lg-6 mb-4 about-hero d-flex flex-column justify-content-center align-items-start"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className={`name ${theme ? "name-dark" : "name-light"}`}>
                {data.name}
              </h2>
              <h5 className="degree">
                <Typewriter
                  options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h5>
              <p
                className={`about-description ${theme ? "about-description-dark" : "about-description-light"
                  }`}
              >
                {data.about_description}
              </p>
              <div className="info row d-flex  flex-row">
                <div className="col-lg-6">
                  <div className="">
                    <span className="age">Date of Birth : </span>{" "}
                    <span
                      className={` ${theme
                          ? "about-description-dark"
                          : "about-description-light"
                        }`}
                    >
                      {data.age}
                      {/* 23 */}
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="">
                    <span className="email">Email : </span>
                    <a
                      href={`mailto:${data.email}`}
                      className={` ${theme
                          ? "about-description-dark"
                          : "about-description-light"
                        }`}
                    >
                      {data.email}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="">
                    {" "}
                    <span className="phone">Phone : </span>{" "}
                    <span
                      className={` ${theme
                          ? "about-description-dark"
                          : "about-description-light"
                        }`}
                    >
                      {data.phone}
                    </span>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="">
                    {" "}
                    <span className="place">Place : </span>{" "}
                    <span
                      className={` ${theme
                          ? "about-description-dark"
                          : "about-description-light"
                        }`}
                    >
                      {data.place}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex s justify-content-center align-items-start"
              data-aos="zoom-out-left"
            >
              <div
                className={`mainBox ${theme ? "mainBox_dark_mode " : "mainBox_light_mode"
                  }`}
              >
                <img
                  src={AboutDB.profile_pic}
                  alt="profile-pic"
                  className={`profile-pic profile_picture ${theme ? "profile-pic-dark" : "profile-pic-light"
                    }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container u-margin-bottom">
          <h3 className="page-title mt-5 my-4">
            <div>
              My <span className="text-purple">Experiences</span>
            </div>{" "}
            <div
              className={`slide-line ${theme ? "slide-line-dark" : "slide-line-light "
                }`}
            ></div>
          </h3>
          <div className="row d-flex   justify-content-center align-items-center">
            {ExperienceDB.map((items, index) => {
              return (
                <div className="col-md-8 col-10 education-box my-3" key={index}>
                  <div
                    className={`row education-details ${theme
                        ? "education-details-dark"
                        : "education-details-light"
                      }`}
                  >
                    <div className="col-md-4 institution-pic">
                      <img src={items.company_pic} alt="abs" />
                    </div>
                    <div className="col-md-8">
                      <h4
                        className={`institute-degree mt-3 ${theme
                            ? "institute-degree-dark"
                            : "institute-degree-light"
                          }`}
                      >
                        {items.company_name}
                      </h4>
                      <h6 className="institute-name">
                        {items.post}
                      </h6>
                      <h5
                        className={`passing-year ${theme ? "passing-year-dark" : "passing-year-light"
                          }`}
                      >
                        {items.time_period}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="page-title mt-5">
          <div>
            My <span className="text-purple">Skills</span>
          </div>
          <div
            className={`slide-line ${theme ? "slide-line-dark" : "slide-line-light "
              }`}
          ></div>
        </h3>
        <div className="container mt-3 mb-5">
          <div className="row  d-flex   justify-content-center align-items-center">
            {skillsData.map((items, index) => {
              return (
                <div
                  className={`col-md-2 mx-md-4 my-md-3 mt-3 col-5 mx-2 skill-box d-flex flex-column   justify-content-center align-items-center ${theme ? "skill-box-dark " : "skill-box-light"
                    }`}
                  data-aos="zoom-in"
                  key={index}
                >
                  <img
                    src={items.skill_image}
                    alt={items.skill_image}
                    className="skill-image"
                  />
                  <div className=" d-flex flex-column  justify-content-center align-items-center mt-3">
                    <h4 className="skill-title">{items.skill_title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container u-margin-bottom">
          <h3 className="page-title mt-5 my-4">
            <div>
              My <span className="text-purple">Education</span>
            </div>{" "}
            <div
              className={`slide-line ${theme ? "slide-line-dark" : "slide-line-light "
                }`}
            ></div>
          </h3>
          <div className="row d-flex   justify-content-center align-items-center">
            {EducationDB.map((items, index) => {
              return (
                <div className="col-md-8 col-10 education-box my-3" key={index}>
                  <div
                    className={`row education-details ${theme
                        ? "education-details-dark"
                        : "education-details-light"
                      }`}
                  >
                    <div className="col-md-4 institution-pic">
                      <img src={items.institution_pic} alt="abs" />
                    </div>
                    <div className="col-md-8">
                      <h4
                        className={`institute-degree mt-3 ${theme
                            ? "institute-degree-dark"
                            : "institute-degree-light"
                          }`}
                      >
                        {items.institute_degree}
                      </h4>
                      <h6 className="institute-name">
                        {items.institute_name}
                      </h6>
                      <h5
                        className={`passing-year ${theme ? "passing-year-dark" : "passing-year-light"
                          }`}
                      >
                        {items.passing_year}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
