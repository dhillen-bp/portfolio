import { Helmet } from "react-helmet";
import {
  AmikomSka,
  GitCert,
  ProgrammingLogicCert,
  BasicProgramCert,
} from "../assets/assets";

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Education</title>
      </Helmet>

      <div className="w-full">
        <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
          Education
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 pb-10">
          <div className="col-span-1 grid grid-cols-2 gap-1 items-center shadow-md rounded-md overflow-hidden bg-green-50">
            <div className="col-span-1 h-full cursor-pointer hover:scale-105 hover:rotate-3 transition-all duration-500">
              <a
                href="https://www.amikomsolo.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AmikomSka} alt="Amikom-Surakarta-Photo" />
              </a>
            </div>
            <div className="col-span-1 justify-center p-3">
              <p className="text-md font-semibold hover:underline">
                STMIK AMIKOM SURAKARTA
              </p>
              <p className="text-sm font-semibold my-2">
                Bachelor Degree in Informatics - S.Kom.
              </p>
              <p className="text-sm">2020-Present</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
          Certification
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
          <div className="group h-full col-span-1 shadow-sm rounded-md relative overflow-hidden">
            <img
              src={GitCert}
              alt="Certificate-Image"
              className="w-full h-full object-cover transition duration-300 ease-in-out transform scale-100 hover:scale-110"
            />

            {/* <!-- Tertimpa (overlay) saat di hover --> */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 transition duration-300 ease-in-out">
              <a
                href="https://www.dicoding.com/certificates/N9ZO4Q2DDZG5"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-semibold p-3 rounded-lg text-center cursor-pointer"
              >
                Belajar Dasar Git dengan GitHub - Dicoding
              </a>
            </div>
          </div>

          <div className="group h-full col-span-1 shadow-sm rounded-md relative overflow-hidden">
            <img
              src={ProgrammingLogicCert}
              alt="Certificate-Image"
              className="w-full h-full object-cover transition duration-300 ease-in-out transform scale-100 hover:scale-110"
            />

            {/* <!-- Tertimpa (overlay) saat di hover --> */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 transition duration-300 ease-in-out">
              <a
                href="https://www.dicoding.com/certificates/JLX1LK6QNX72"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-semibold p-3 rounded-lg text-center cursor-pointer"
              >
                Pengenalan ke Logika Pemrograman (Programming Logic 101) -
                Dicoding
              </a>
            </div>
          </div>

          <div className="group h-full col-span-1 shadow-sm rounded-md relative overflow-hidden">
            <img
              src={BasicProgramCert}
              alt="Certificate-Image"
              className="w-full h-full object-cover transition duration-300 ease-in-out transform scale-100 hover:scale-110"
            />

            {/* <!-- Tertimpa (overlay) saat di hover --> */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 transition duration-300 ease-in-out">
              <a
                href="https://www.dicoding.com/certificates/72ZD9MNQQPYW"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-semibold p-3 rounded-lg text-center cursor-pointer"
              >
                Memulai Dasar Pemrograman untuk Menjadi Pengembang Software -
                Dicoding
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
