import { useEffect, useState } from "react";
import "./App.css";
import ExperienceBox from "./ExperienceBox";
import ProjectBox from "./ProjectBox";
import CertificateBox from "./CertificateBox";
import telyuKopi from "./assets/projects/telyu-kopi.png";
import project2Image from "./assets/projects/project-2-1.png";
import project3Image from "./assets/projects/project-3-1.png";
import project4Image from "./assets/projects/project-4-1.png";
import project5Image from "./assets/projects/project-5-1.png";
import project6Image from "./assets/projects/project-6-1.png";
import msib from "./assets/certificates/msib.jpg";
import toefl from "./assets/certificates/toefl.png";
import hki from "./assets/certificates/hki.png";
import bestPaper from "./assets/certificates/best-paper.jpg";
import asprakAlpro from "./assets/certificates/asprak-alpro.jpg";
import asprakDpbo from "./assets/certificates/asprak-dpbo.jpg";
import asprakStd from "./assets/certificates/asprak-std.jpg";
import pemateri from "./assets/certificates/pemateri.jpg";
import profile from "./assets/profile/profile.jpg";

function App() {
  const [theme, setTheme] = useState("light");
  const [clamp, setClamp] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          // Remove the animate class when element scrolls out of view
          entry.target.classList.remove("animate");
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".fade-in-down, .fade-in-down-delay-1, .fade-in-down-delay-2, .fade-in-down-delay-3, .fade-in-down-delay-4");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Re-apply animation observer when clamp state changes
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, observerOptions);

    // Re-observe the paragraph element specifically when clamp changes
    const paragraphElement = document.querySelector(".home-container p");
    if (paragraphElement) {
      observer.observe(paragraphElement);
    }

    return () => {
      if (paragraphElement) {
        observer.unobserve(paragraphElement);
      }
    };
  }, [clamp]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleClamp = () => setClamp((prev) => !prev);

  return (
    <>
      <div>
        <div className="theme-btn" onClick={toggleTheme} style={{ marginLeft: "auto" }}>
          {theme === "dark" ? "🌞" : "🌙"}
        </div>

        <nav className="navbar">
          <div className="navbar-brand">
            <span>yoww</span>
          </div>
          <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
          <label htmlFor="navbar-toggle" className="navbar-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="navbar-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <section id="home">
          <div className="home-container">
            <div className="profile-img fade-in-down">
              <img src={profile} alt="profile" draggable="false" onContextMenu={(e) => e.preventDefault()} />
            </div>
            <h3 className="fade-in-down-delay-1">Maritza Amalia Dwiputri</h3>
            <p className={`${clamp ? "clamp" : "unclamp"} fade-in-down-delay-2`}>
              Hi, I'm Maritza Amalia Dwiputri, a Summa Cum Laude Informatics graduate from Telkom University with expertise in Application and Web Development (Frontend and Mobile), Artificial Intelligence, and Data Science. I have a
              versatile skill set and solid foundations that allow me to work confidently across various areas of tech.
              <br />
              <br />
              I started learning programming when I entered college in 2021. Since then, I've been learning and practicing programming a lot. In my third year of college, I started my first ever web development project with PlanifyMe, a
              task organizer website that I developed using Spring. It inspired me to keep learning and start new projects. Eventually, I worked on several other development projects, including Telyu Kopi, a website and mobile application
              for managing a coffee shop; new iSmart, a website pioneered by HCIS Telkom Indonesia to manage employee data; Humic Letter, a mobile application for COE Humic Telkom University to manage intership letters; etc.
              <br />
              <br />
              Most of my projects are built using Laravel for web development and Flutter for mobile application. However, I have been learning new frameworks such as React.js and Next.js to expand my capabilities as a developer.
            </p>
            <div className="btn fade-in-down-delay-4" onClick={toggleClamp}>
              {clamp ? "read more" : "read less"}
            </div>
          </div>
        </section>

        <section id="experience">
          <h1 className="fade-in-down">Experience</h1>
          <div className="experience-container">
            <ExperienceBox title="Front End Developer" company="Telkom Indonesia" period="Jun 2024 - Aug 2024" />
            <ExperienceBox title="Mobile Developer" company="HUMIC (Human Centric) Engineering Research Center" period="Feb 2025 - May 2025" />
            <ExperienceBox title="Practicum Assistant" company="Informatics Laboratory Telkom University" period="Feb 2023 - Jun 2025" />
            <ExperienceBox title="Teaching Assistant" company="Telkom University" period="Feb 2023 - Jun 2025" />
            <ExperienceBox title="Student Mentor" company="KONTENT HIMA IF Telkom University" period="Oct 2022 - Jan 2024" />
          </div>
        </section>

        <section id="projects">
          <h1 className="fade-in-down">My Projects</h1>
          <h3 className="fade-in-down-delay-1">Mobile & Web Development</h3>
          <div className="container">
            <ProjectBox image={telyuKopi} title="Telyu Kopi" />
            <ProjectBox image={project2Image} title="New iSmart" />
            <ProjectBox image={project3Image} title="Humic Letter" />
            <ProjectBox image={project4Image} title="PlanifyMe" />
          </div>
          <h3 className="fade-in-down-delay-1">AI & ML Modelling</h3>
          <div className="container">
            <ProjectBox image={project5Image} title="CCTV Detection" />
            <ProjectBox image={project6Image} title="Lead Time Prediction" />
          </div>
        </section>

        <section id="certificates">
          <h1 className="fade-in-down">My Certificates</h1>
          <h3 className="fade-in-down-delay-1">Academic & Research</h3>
          <div className="container">
            <CertificateBox image={bestPaper} title="Best Paper Award - ICoICT 2025" />
            {/* <CertificateBox image={toefl} title="Conference Presenter - ICoICT 2025" /> */}
            <CertificateBox image={hki} title="HKI Basis Data CCTV Seatbelt Detection" />
          </div>
          <h3 className="fade-in-down-delay-1">Certifications & Programs</h3>
          <div className="container">
            <CertificateBox image={msib} title="Studi Independen Bersertifikat Angkatan 6" />
            <CertificateBox image={toefl} title="TOEFL ITP" />
          </div>
          <h3 className="fade-in-down-delay-1">Work Experience</h3>
          <div className="container">
            <CertificateBox image={asprakAlpro} title="Practicum Assistant - Programming Algorithm" />
            <CertificateBox image={asprakStd} title="Practicum Assistant - Data Structures" />
            <CertificateBox image={asprakDpbo} title="Practicum Assistant - Basic of Object Oriented Programming" />
            <CertificateBox image={pemateri} title="Tutor - Algorithm Strategies" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
