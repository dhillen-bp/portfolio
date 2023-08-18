import { Helmet } from "react-helmet";
import {
  ProjectPenjualanMartabak,
  ProjectTodolist,
  ProjectSPKD,
  ProjectNBSiswa,
  ProjectIdekita,
  ProjectMernBlog,
} from "../assets/assets";

const projects = [
  {
    title: "Desktop Based Martabak Sales System",
    image: ProjectPenjualanMartabak,
    techStack: ["Java"],
    link: "https://github.com/dhillen-bp/penjualan_martabak",
  },
  {
    title: "Todo List Web App",
    image: ProjectTodolist,
    techStack: ["PHP", "MySQL"],
    link: "https://github.com/dhillen-bp/todolist",
  },
  {
    title: "Student Admission System with Naive Bayes",
    image: ProjectNBSiswa,
    techStack: ["PHP", "MySQL"],
    link: "https://github.com/dhillen-bp/penerimaan_murid_nb",
  },
  {
    title: "Web-Based Lecturer Rating",
    image: ProjectSPKD,
    techStack: ["Codeigniter", "MySQL"],
    link: "https://github.com/dhillen-bp/penilaian_dosen",
  },
  {
    title: "Idekita:Platform Crowdsourcing",
    image: ProjectIdekita,
    techStack: ["Hapi.js", "MySQL", "Firebase", "GCP"],
    link: "https://github.com/idekita",
  },
  {
    title: "MERN Blog",
    image: ProjectMernBlog,
    techStack: ["React", "Express", "MongoDB"],
    link: "https://github.com/dhillen-bp/simple-blog",
  },
];

export default function Project() {
  return (
    <div className="w-full">
      <Helmet>
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
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt="Project-Image"
                    className="h-48 w-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </a>
              </div>

              <div className="text-center py-2 flex flex-col items-center">
                <p className="font-bold my-2">{project.title}</p>
                <div className="flex flex-row gap-3 items-center my-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
