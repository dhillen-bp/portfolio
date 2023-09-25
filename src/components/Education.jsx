import { Helmet, HelmetProvider } from "react-helmet-async";
import { AmikomSka } from "../assets/assets";
import Certificates from "./Certificates";

export default function Education() {
  return (
    <HelmetProvider>
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
            <div className="col-span-1 justify-center p-3 text-center">
              <p className="text-sm font-bold">STMIK AMIKOM SURAKARTA</p>
              <p className="text-sm font-semibold my-2">
                Bachelor Degree in Informatics - S.Kom.
              </p>
              <p className="text-sm font-semibold">2020-Present</p>
              <p className="text-sm font-bold my-2">3.95 GPA</p>
            </div>
          </div>
        </div>
      </div>

      <Certificates />
    </HelmetProvider>
  );
}
