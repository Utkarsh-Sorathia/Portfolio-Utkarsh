import React, { useEffect, useState } from "react";
import MyPic from "./images/UtkarshSorathia.CO.2024.png";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import projectData from "./json/projects.json";
import skills from "./json/skills.json";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import ContactGif from "./images/contact.gif";
import DownArrow from "./images/down.gif";
import "../App.css";
import axios from "axios";

const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  window.onscroll = () => {
    toggleTopButton();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTopButton = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("back-to-up").classList.remove("d-none");
    } else {
      document.getElementById("back-to-up").classList.add("d-none");
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/meqypawn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        Toast.fire({
          icon: "success",
          title: "Message sent successfully",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        Toast.fire({
          icon: "error",
          title: "Failed to send message!",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Toast.fire({
        icon: "error",
        title: "Failed to send message!",
      });
    }
  };

  const getLocations = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <>
      <div>
        {/* my information */}
        <div id="home" className="pt-3">
          <div className="row mx-1 py-5 rounded">
            <div className="col-lg-12">
              <div className="p-2">
                <div
                  className="container-fluid p-3"
                  style={{ minHeight: "69vh" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-last order-first d-flex align-items-center justify-content-center">
                      <div className="p-5" id="picture">
                        <img
                          src={MyPic}
                          alt="Me"
                          className="mt-5 rounded-circle"
                          style={{
                            height: "14rem",
                            width: "14rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="fs-2">
                        <Link
                          to="https://github.com/Utkarsh-2003"
                          className="bi bi-github text-white"
                          target="_blank"
                          id="github"
                          title="Connect on Github"
                        ></Link>
                        <br />
                        <Link
                          to="https://www.linkedin.com/in/utkarsh-sorathia-a9292b22a"
                          className="bi bi-linkedin text-primary"
                          target="_blank"
                          title="Connect on LinkedIn"
                        ></Link>
                        <br />
                        <Link
                          to="https://www.instagram.com/utkarsh__sorathia"
                          className="bi bi-instagram text-danger"
                          target="_blank"
                          title="Connect on Instagram"
                        ></Link>
                        <br />
                        <Link
                          to="https://www.facebook.com/profile.php?id=100056616396448&mibextid=JRoKGi"
                          className="bi bi-facebook text-primary"
                          target="_blank"
                          title="Connect on Facebook"
                        ></Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h1 className="mx-2 display-5 fw-bold">
                        Hello, <br /> I'm{" "}
                        <ReactTyped
                          strings={["Utkarsh Sorathia.", "Web Developer."]}
                          typeSpeed={150}
                          backSpeed={150}
                          loop
                          style={{ color: "#fb8500" }}
                        />
                      </h1>
                      <p className="mx-2 fs-5">
                        I'm a Full-stack Web Developer and available to work
                        remotely
                        <br /> from India.
                      </p>
                      <button
                        className="mx-2 btn btn-lg mt-2"
                        style={{ background: "#fb8500" }}
                      >
                        <a
                          className="text-decoration-none text-dark"
                          href="/Utkarsh-CV-25-07-2024.pdf"
                          download="UtkarshSorathia.pdf"
                          title="Download Resume"
                        >
                          <i class="bi bi-download"></i> Resume
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="#about" className="btn btn-lg" id="about">
                <img src={DownArrow} alt="down" height={40} width={40} />
              </a>
            </div>
          </div>
        </div>
        {/* about  section */}
        <div id="about">
          <div className="row mx-4 g-4">
            <div className="col-lg-5">
              <span className="mb-3 fs-2">
                <strong className="border-bottom border-3 border-warning">
                  About Me
                </strong>
              </span>
              <div className="container mt-3">
                <h5>
                  Hi, My name is Utkarsh Sorathia, and I specialize in React.js,
                  Firebase, and Bootstrap. I thrive on the opportunity to create
                  dynamic and user-friendly web applications that leave a
                  lasting impact. By staying updated with the latest trends and
                  continuously refining my skills, I ensure that every project I
                  undertake is delivered with precision and innovation.
                </h5>
              </div>
            </div>

            <div className="col-lg-7">
              <span className="mb-3 fs-2">
                <strong className="border-bottom border-3 border-warning">
                  Education
                </strong>
              </span>
              <div className="container mt-3">
                <h4>Jeevanbharti Pravrutti Vidhalaya,Surat</h4>
                <h5>S.S.C (2018)</h5>
                <h6>Percentage : 84.33%</h6>
                <br />
                <h4>Jeevanbharti Pravrutti Vidhalaya,Surat</h4>
                <h5>H.S.C (2020)</h5>
                <h6>Percentage : 77%</h6>
                <br />
                <h4>Sarvajanik College of Engineering and Technology,Surat</h4>
                <h5>Bachelor of Engineering in Computer Engineering (2024)</h5>
                <h6>CGPA : 8.26/10</h6>
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div id="skill" className="pt-5 ">
          <div className="row mx-4 mt-4">
            <span className="mb-3 fs-2">
              <strong className="border-bottom border-3 border-warning">
                Skills
              </strong>
            </span>
            {skills.map((skill, index) => (
              <div className="col-lg-3 col-md-6 col-6 mb-3" key={index}>
                <motion.div
                  id="skillCard"
                  className="card border-dark h-100"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 1.1 }}
                >
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-3 text-center">
                        <img
                          className="rounded mx-2"
                          style={{ maxWidth: "4rem", maxHeight: "8rem" }}
                          src={skill.symbol}
                          alt="symbol"
                        />
                      </div>
                      <div className="col-lg-9">
                        <div className="card-body text-center">
                          <h5 className="card-text">{skill.skill}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* projects */}
        <div id="projects" className="pt-5">
          <div className="row mx-4 mt-4">
            <span className="mb-3 fs-2">
              <strong className="border-bottom border-3 border-warning">
                Projects
              </strong>
            </span>
            {projectData.map((project, index) => (
              <div className="col-md-4" key={index}>
                <motion.div
                  id="projectCard"
                  className="card mb-2 border-dark h-100"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 1.1 }}
                >
                  <span className="card-header fs-3 border-bottom border-warning border-3">
                    {project.name}
                  </span>
                  <div className="card-body">
                    <span className="card-text">
                      {project.technologies.map((tech) => (
                        <>
                          <span
                            className="mx-1 border p-2 rounded shadow-sm"
                            style={{ backgroundColor: "#fb8500" }}
                          >
                            {tech}
                          </span>
                        </>
                      ))}
                    </span>
                    <br />
                    <br />
                    <span className="card-text">{project.description}</span>
                  </div>
                  <div className="fs-5 mx-auto mb-2">
                    <a
                      className="bi bi-code-slash ms-0 mx-5 text-dark text-decoration-none"
                      id="eye"
                      href={project.github_link}
                      target="_blank"
                    >
                      {" "}
                      Code
                    </a>
                    <a
                      className="bi bi-eye-fill mx-5 ms-0 text-dark text-decoration-none"
                      id="eye"
                      href={project.live_demo_link}
                      target="_blank"
                    >
                      {" "}
                      View
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {/* contact me form */}
        <div id="contact" className="mx-4 pt-3">
          <div className="mb-3 text-center fs-2">
            <strong className="border-bottom border-3 border-warning">
              Contact me
            </strong>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <img
                src={ContactGif}
                alt="contact"
                style={{ height: "20rem", width: "20rem" }}
              />
            </div>
            <div className="col-lg-6">
              <div
                className="container form-control border-dark mb-3"
                style={{ maxWidth: "40rem" }}
                id="ContactUsForm"
              >
                <form className="p-4" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control border-dark"
                      value={name}
                      name="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label class="bi bi-person-fill" htmlFor="floatingInput">
                      {" "}
                      Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control border-dark"
                      value={email}
                      name="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label class="bi bi-envelope-fill" htmlFor="floatingInput">
                      {" "}
                      Email address
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control border-dark"
                      placeholder="Write your message here..."
                      value={message}
                      name="message"
                      style={{ height: "10rem" }}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <label class="bi bi-chat-dots-fill" htmlFor="floatingInput">
                      {" "}
                      Message
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: "#fb8500" }}
                    >
                      Send<i className="mx-1 mt-1 bi bi-send"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* back to top button */}
        <button
          title="Go to Top"
          class="btn rounded-pill position-fixed bottom-0 end-0 translate-middle d-none"
          onClick={() => scrollToTop()}
          id="back-to-up"
          style={{ backgroundColor: "#fb8500", color: "white" }}
        >
          <i class="bi bi-arrow-up fs-4" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default Main;
