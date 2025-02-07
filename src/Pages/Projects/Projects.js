//import react libraries
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//import CSS
import "./Projects.css";

//import 3rd party libraries
import AOS from "aos";
import "aos/dist/aos.css";

//import database
import ProjectDB from "../../assets/Database/ProjectDB.json";
let reverse = ProjectDB.reverse();

const Projects = () => {
  const [data, setData] = useState([]);
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    setData(reverse);
    AOS.init();
  }, []);

  return (
    <>
      <div
        className={`projects-page  ${theme ? "projects-page-dark" : "projects-page-light"
          }`}
      >
        <h3 className="page-title py-4">
          <div>
            <span className={`${theme ? "text-dark" : "text-light"}`}> My</span>{" "}
            <span className="text-purple">Project</span>
          </div>{" "}
          <div
            className={`slide-line ${theme ? "slide-line-dark" : "slide-line-light"
              }`}
          ></div>
        </h3>
        <div className="container">
          <div className="row d-flex  justify-content-center align-items-center">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  //data-aos="zoom-in"
                  className={`col-lg-3 col-md-8 col-8 mx-5 my-3 project-image-tags py-3 d-flex flex-column align-items-start pt-2 project-card h-100 `}
                // className={`col-lg-3 col-8 mx-5 my-3 project-image-tag  d-flex  justify-content-center align-items-center  `}
                >
                  <div className="project_image">
                    <img src={items.project_image} alt={items.project_image} />
                  </div>
                  {/* <div>Name</div> */}

                  <div className="project-coponent">
                    <h3
                      className={`my-2 project-name ${theme ? "project-name-dark " : "project-name-light"
                        }`}
                    >
                      {items.project_name}
                    </h3>
                    <p className="project-info-1">{items.project_info}</p>
                    <div className="project_link_box">
                      <a
                        href={items.github}
                        target="_blank"
                        className="github-project-link"
                      >
                        Github
                      </a>
                      <a
                        href={items.live_button}
                        target="_blank"
                        className="project-link"
                      >
                        Live
                      </a>
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

export default Projects;