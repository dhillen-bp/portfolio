import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ProjectSPKD,
  ProjectSPKD2,
  ProjectNBSiswa,
  ProjectIdekita,
  ProjectMernBlog,
  ProjectKenaMental,
  ProjectKenaMental2,
  ProjectKenaMental3,
} from "../assets/assets";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import "./style.css";

const projects = [
  {
    title: "Student Admission System with Naive Bayes",
    image: [ProjectNBSiswa],
    techStack: ["PHP", "MySQL"],
    link: "https://github.com/dhillen-bp/penerimaan_murid_nb",
    desc: "Sistem Penerimaan Murid / Peserta Didik adalah sistem untuk melakukan simulasi apakah murid tersebut diterima di sekolah berdasarkan nilai UN, Nilai Awal dan Nilai Akhir dengan metode klasifikasi Naive Bayes. Aplikasi ini menggunakan PHP Native dan template AdminLTE3.",
  },
  {
    title: "Web-Based Lecturer Rating",
    image: [ProjectSPKD, ProjectSPKD2],
    techStack: ["Codeigniter", "MySQL"],
    link: "https://github.com/dhillen-bp/penilaian_dosen",
    desc: "Sistem Penilaian Kinerja Dosen atau SPKD adalah sistem yang dibuat untuk melakukan penilaian dosen dengan menghasilkan nilai (rating) tiap dosen dari kuesioner yang diisi oleh mahasiswa.",
  },
  {
    title: "Idekita: Crowdsourcing Platform",
    image: [ProjectIdekita],
    techStack: ["Hapi.js", "MySQL", "Firebase", "GCP"],
    link: "https://github.com/idekita",
    desc: `"In 2021, Indonesia's population reached 273.8 million people, leading to numerous unresolved issues. However, with its diverse population, Indonesia possesses a multitude of perspectives and ideas. A 2020 Adobe study revealed that 61% of respondents struggle to generate creative ideas, while 70% believe that creative ideas are essential for organizations.

    To address this challenge, we created IdeKita, an application that assists individuals in generating new and creative ideas. Through IdeKita, we foster collaboration among individuals with diverse knowledge and insights, stimulating the growth of fresh ideas and providing tangible contributions to solving complex problems. With IdeKita, we harness the power of technology and individual creativity to bring about positive change in society."`,
  },
  {
    title: "MERN Blog",
    image: [ProjectMernBlog],
    techStack: ["React", "Express", "MongoDB"],
    link: "https://github.com/dhillen-bp/simple-blog",
    desc: "A simple blog built using MERN Stack (MongoDB, Express.js, React, Node.js) and integrating Firebase Authentication as a user authentication system.",
  },
  {
    title: "Kena-Mental",
    image: [ProjectKenaMental, ProjectKenaMental2, ProjectKenaMental3],
    techStack: ["Laravel", "MySQL"],
    link: "https://github.com/dhillen-bp/kena-mental",
    demo: "https://kena-mental-bggatovnqa-et.a.run.app",
    desc: "Kena-Mental is a web platform created to simulate booking an online psychologist consultation. The platform is designed using Laravel, a powerful and efficient PHP framework. Through Kena-Mental, users can book a consultation with a psychologist online. The system enables users to choose a time according to their availability and select a psychologist that matches their needs.",
  },
];

export default function Project() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const showPreviousProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === null ? null : Math.max(prevIndex - 1, 0)
    );
  };

  const showNextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === null ? null : Math.min(prevIndex + 1, projects.length - 1)
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <meta
            name="description"
            content="My Portfolio|Explore my projects and skills."
          />
          <title>Project</title>
        </Helmet>

        <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-span-1 grid gap-1 items-center shadow-md rounded-md overflow-hidden bg-green-50"
            >
              <div className="col-span-1 h-full rounded-md">
                <div className="rounded-md overflow-hidden shadow-md">
                  <div onClick={() => openModal(index)}>
                    <img
                      src={project.image[0]}
                      alt="Project-Image"
                      className="h-48 w-full cursor-pointer object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="text-center py-2 flex flex-col items-center">
                  <p className="font-bold my-2 dark:text-slate-800">
                    {project.title}
                  </p>
                  <div className="flex flex-row gap-3 items-center my-2 cursor-default">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex my-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 hover:font-bold transform hover:scale-105 transition-transform"
                    >
                      <span className="text-sm dark:text-slate-800">Code</span>
                      <CodeIcon className="dark:text-slate-800" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2 hover:font-bold transform hover:scale-105 transition-transform"
                      >
                        <span className="text-sm dark:text-slate-800">
                          Demo
                        </span>
                        <LanguageIcon className="dark:text-slate-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <Modal
          isOpen={selectedProjectIndex !== null}
          onRequestClose={closeModal}
          contentLabel="Detail Project Modal"
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
              maxWidth: "80vw",
              maxHeight: "80vh",
              overflow: "auto",
              overflowX: "hidden",
            },
          }}
          className="project-modal bg-slate-50 focus:outline-0 md:min-w-[60vw] dark:text-slate-800"
        >
          {selectedProjectIndex !== null && (
            <div className="text-center">
              <div
                onClick={closeModal}
                className="absolute top-0 right-0 p-2 cursor-pointer"
              >
                <span className="text-sm font-bold">Close</span>
                <CloseIcon className="text-red-700 " fontSize="medium" />
              </div>

              <h2 className="font-bold text-center px-5 my-5 pt-5 md:pt-3">
                {projects[selectedProjectIndex].title}
              </h2>

              <Slider {...sliderSettings} className="mb-8">
                {projects[selectedProjectIndex]?.image.map((img, index) => (
                  <div key={index} className="px-5">
                    <img src={img} alt={`Project Image ${index}`} />
                  </div>
                ))}
              </Slider>

              <p className="my-5 px-5 text-justify">
                {projects[selectedProjectIndex].desc}
              </p>

              <div
                onClick={showPreviousProject}
                className={`absolute left-0 p-2 cursor-pointer ${
                  selectedProjectIndex === 0 ? "text-slate-500" : ""
                }`}
              >
                <NavigateBeforeIcon className="text-3xl" fontSize="large" />
                <span className="text-sm font-bold">Previous</span>
              </div>
              <div
                onClick={showNextProject}
                className={`absolute right-0 p-2 cursor-pointer ${
                  selectedProjectIndex === projects.length - 1
                    ? "text-slate-500"
                    : ""
                }`}
              >
                <span className="text-sm font-bold">Next</span>
                <NavigateNextIcon fontSize="large" />
              </div>
            </div>
          )}
        </Modal>
      </div>
    </HelmetProvider>
  );
}
