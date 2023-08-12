import { Helmet } from "react-helmet";
import {
  ProjectPenjualanMartabak,
  ProjectTodolist,
  ProjectSPKD,
  JavaIcon,
} from "../assets/assets";

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
        <div className="col-span-1 grid gap-1 items-center shadow-md rounded-md overflow-hidden bg-green-50">
          <div className="col-span-1 h-full p-2 rounded-md">
            <div className="rounded-md overflow-hidden">
              <a
                href="https://github.com/dhillen-bp/penjualan_martabak"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ProjectPenjualanMartabak}
                  alt="Project-Image"
                  className="hover:scale-105 transition-all duration-500"
                />
              </a>
            </div>

            <div className="text-center flex flex-col items-center">
              <p className="font-bold my-2">
                Desktop Based Martabak Sales System
              </p>
              <div className="flex flex-row gap-5 items-center my-2">
                <img src={JavaIcon} alt="" className="h-16 w-16" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 grid gap-1 items-center shadow-md rounded-md overflow-hidden bg-green-50">
          <div className="col-span-1 h-full p-2 rounded-md">
            <div className="rounded-md overflow-hidden">
              <a
                href="https://github.com/dhillen-bp/todolist"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ProjectTodolist}
                  alt="Project-Image"
                  className="hover:scale-105 transition-all duration-500"
                />
              </a>
            </div>

            <div className="text-center flex flex-col items-center">
              <p className="font-bold my-2">Todo List Web App</p>
              <div className="flex flex-row gap-5 items-center my-2">
                <img
                  src="./img/icons/tech-icons/php.png"
                  alt=""
                  className="h-16 w-16"
                />
                <img
                  src="./img/icons/tech-icons/MySQL.png"
                  alt=""
                  className="h-10 w-16"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 grid gap-1 items-center shadow-md rounded-md overflow-hidden bg-green-50">
          <div className="col-span-1 h-full p-2 rounded-md">
            <div className="rounded-md overflow-hidden">
              <a
                href="https://github.com/dhillen-bp/penilaian_dosen"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ProjectSPKD}
                  alt="Project-Image"
                  className="hover:scale-105 transition-all duration-500"
                />
              </a>
            </div>

            <div className="text-center flex flex-col items-center">
              <p className="font-bold my-2">Web-Based Lecturer Rating</p>
              <div className="flex flex-row gap-5 items-center my-2">
                <img
                  src="./img/icons/tech-icons/codeigneter-icon.png"
                  alt=""
                  className="h-10 w-10"
                />
                <img
                  src="./img/icons/tech-icons/MySQL.png"
                  alt=""
                  className="h-10 w-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
