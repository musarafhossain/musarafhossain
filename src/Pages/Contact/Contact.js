//import react libraries
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import CSS
import "./Contact.css";

//import images
import Phone from "../../images/smartphone.png";
import Email from "../../images/email.png";
import House from "../../images/house.png";

//import icons
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";

//import 3rd party libraries
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactImageDark from "../../assets/lottie/contact/AstronoutLottie.json";
import ContactImage from "../../assets/lottie/contact/DeveloperLottie.json";

//import databases
import AboutDB from "../../assets/Database/AboutDB.json";

//import footer
import Footer from "../../Layout/Footer/Footer";

const Contact = () => {
  const [data, setData] = useState({});
  const theme = useSelector((state) => state.theme.value);
  const Navigate = useNavigate();
  const formSubmitBtn = (e) => {
    e.preventDefault();
    Navigate("/contact/underConstruction");
  };
  useEffect(() => {
    setData(AboutDB);
    AOS.init();
  }, []);
  return (
    <>
      <div
        className={`contact_info ${theme ? "contact_info-dark" : "contact_info-light "
          }`}
      >
        <div className="container">
          <div className="row d-flex py-4">
            <div className="col-lg-4 mb-3  ">
              {/* phone number */}
              <div
                className={`contact-info-item py-3 px-3 d-flex align-items-center ${theme ? "contact-info-item-dark" : "contact-info-item-light"
                  }`}
              >
                <img
                  src={Phone}
                  alt="phone"
                  className={`contact-icons ${theme ? "contact-icons-dark" : "contact-icons-light"
                    }`}
                />

                <div
                  className={`contact-info-content m-2 ${theme
                      ? "contact-info-content-dark"
                      : "contact-info-content-light"
                    }`}
                >
                  <div className="contact-info-tile">Phone</div>
                  <div className="contact-info-text">
                    {data.phone}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              {/* email  */}
              <div
                className={`contact-info-item py-3 px-3 d-flex align-items-center  ${theme ? "contact-info-item-dark" : "contact-info-item-light"
                  }`}
              >
                <img
                  src={Email}
                  alt="email"
                  className={`contact-icons  ${theme ? "contact-icons-dark" : "contact-icons-light"
                    }`}
                />

                <div
                  className={`contact-info-content m-2  ${theme
                      ? "contact-info-content-dark"
                      : "contact-info-content-light"
                    }`}
                >
                  <div className="contact-info-tile">Email</div>
                  <a
                    className="contact-info-text"
                    href={`mailto:${data.email}`}
                  >
                    {data.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div
                className={`contact-info-item py-3 px-3 d-flex align-items-center  ${theme ? "contact-info-item-dark" : "contact-info-item-light"
                  }`}
              >
                <img
                  src={House}
                  alt="house"
                  className={`contact-icons  ${theme ? "contact-icons-dark" : "contact-icons-light"
                    }`}
                />

                <div
                  className={`contact-info-content m-2  ${theme
                      ? "contact-info-content-dark"
                      : "contact-info-content-light"
                    }`}
                >
                  <div className="contact-info-tile">Address</div>
                  <div className="contact-info-text">
                    {data.place}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us form */}
        <div className="contact-form mt-5 ">
          <div className="container ">
            <div className="row  ">
              <div
                className={`contact-form-data  col-lg-10 offset-lg-1 ${theme ? "contact-form-data-dark " : "contact-form-data-light"
                  }`}
              >
                <div className="row  mt-3 mb-4">
                  <div className="col-lg-10 text-center">
                    <div className="contact-form-title">
                      <h3 className="page-title get-in-touch-title mt-5 my-4">
                        <div>
                          {" "}
                          <FaHeadset /> Get in{" "}
                          <span className="text-purple"> Touch</span>
                        </div>{" "}
                        <div
                          className={`slide-line ${theme ? "slide-line-dark" : "slide-line-light "
                            }`}
                        ></div>
                      </h3>
                    </div>
                  </div>
                </div>

                <form id="contact-form  ">
                  <div className="row py-4  d-flex justify-content-center">
                    <div className="col-lg-4 ">
                      <div className="row ">
                        <div
                          className="col-md-12"
                          data-aos="flip-right"
                          data-aos-duration="2000"
                        >
                          <div className="contact-form-name my-2 ">
                            <FaUserAlt className="mx-3 contact-react-icon" />
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className={`contact-name  ${theme
                                  ? "contact-color-dark"
                                  : "contact-color-light"
                                }`}
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12"
                          // data-aos="fade-left"
                          data-aos="flip-left"
                          data-aos-duration="2000"
                        >
                          <div className="contact-form-email my-2">
                            <GrMail className="mx-3 contact-react-icon" />
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className={`contact-email   ${theme
                                  ? "contact-color-dark"
                                  : "contact-color-light"
                                }`}
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12"
                          // data-aos="fade-right"
                          data-aos="flip-right"
                          data-aos-duration="2000"
                        >
                          <div className="contact-form-phone my-2">
                            <FaPhoneAlt className="mx-3 contact-react-icon" />
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className={`contact-phone   ${theme
                                  ? "contact-color-dark"
                                  : "contact-color-light"
                                }`}
                              placeholder="Your Phone Number"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12 "
                          // data-aos="fade-left"
                          data-aos="flip-left"
                          data-aos-duration="2000"
                        >
                          <div className="contact-message d-flex my-2">
                            <RiMessage2Fill className="mx-3 contact-react-icon my-2" />
                            <textarea
                              name="message"
                              placeholder="Message"
                              className={`contact-message-box   ${theme
                                  ? "contact-color-dark"
                                  : "contact-color-light"
                                }`}
                            ></textarea>
                          </div>
                        </div>

                        <div
                          className="col-md-12 contact-form-button my-2 "
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                        >
                          <button
                            type="submit"
                            className={`button contact-submit-button ${theme
                                ? "contact-submit-button-dark"
                                : "contact-submit-button-light"
                              }`}
                            onClick={formSubmitBtn}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 ">
                      <Lottie
                        animationData={theme ? ContactImageDark : ContactImage}
                        className="contact-lottie-image"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
