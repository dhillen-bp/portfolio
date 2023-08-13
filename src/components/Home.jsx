import { Helmet } from "react-helmet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MyPhoto } from "../assets/assets";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
        About
      </h1>
      <div className="w-full mx-auto">
        <div className="mx-auto grid md:grid-cols-3 md:gap-20 items-center">
          <div className="shadow-md rounded-md overflow-hidden md:col-span-1 md:w-full">
            <img
              src={MyPhoto}
              alt="MyPhoto"
              className="border-2 rounded-md border-green-300"
            />
          </div>
          <div className="py-5 md:col-span-2 grid md:items-center">
            <h2 className="text-xl text-center font-semibold">
              Dhillen Brahmantya Pradifta
            </h2>

            <div className="w-full my-5">
              <div className="grid gap-5 grid-cols-4 px-5 w-full 0">
                <div className="col-span-1 flex items-center justify-start h-full">
                  <div className="rounded-full p-3 bg-green-300 shadow-sm">
                    <LocationOnIcon />
                  </div>
                  <p className="font-semibold ml-2 hidden md:block">Location</p>
                </div>

                <p className="col-span-3 font-semibold text-md w-full flex items-center">
                  Karangwuni RT 03/Rw 03, Polokarto, Sukoharjo, Jawa Tengah
                </p>
              </div>
              <div className="grid gap-5 grid-cols-4 my-5 px-5 w-full">
                <div className="col-span-1 flex items-center justify-start h-full">
                  <div className="rounded-full p-3 bg-green-300 shadow-sm">
                    <PhoneIcon />
                  </div>
                  <p className="font-semibold ml-2 hidden md:block">Phone</p>
                </div>

                <p className="col-span-3 font-semibold text-md w-full flex items-center">
                  085600643275
                </p>
              </div>
              <div className="grid gap-5 grid-cols-4 my-5 px-5 w-full">
                <div className="col-span-1 flex items-center justify-start h-full">
                  <div className="rounded-full p-3 bg-green-300 shadow-sm">
                    <EmailIcon />
                  </div>
                  <p className="font-semibold ml-2 hidden md:block md:text-start">
                    Email
                  </p>
                </div>

                <p className="col-span-3 font-semibold text-md w-full flex items-center">
                  dhillen.mutu@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-green-300 rounded-md">
              <h2 className="text-center text-xl font-semibold border-b border-green-600 py-2">
                Social Media Profile
              </h2>
              <div className="m-auto shadow-md rounded-md flex justify-around px-5 py-2">
                <a
                  href=""
                  className="w-7 flex justify-center items-center rounded-full md:w-10 md:p-2 hover:bg-green-500 hover:scale-110"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://github.com/dhillen-bp"
                  target="_blank"
                  className="w-7 flex justify-center items-center rounded-full md:w-10 md:p-2 hover:bg-green-500 hover:scale-110"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhillen-brahmantya-pradifta/"
                  target="_blank"
                  className="w-7 flex justify-center items-center rounded-full md:w-10 md:p-2 hover:bg-green-500 hover:scale-110"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://twitter.com/dhillenbp"
                  target="_blank"
                  className="w-7 flex justify-center items-center rounded-full md:w-10 md:p-2 hover:bg-green-500 hover:scale-110"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://wa.me/6285600643275"
                  target="_blank"
                  className="w-7 flex justify-center items-center rounded-full md:w-10 md:p-2 hover:bg-green-500 hover:scale-110"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <h3 className="text-center text-xl font-semibold border-b border-green-600 my-2 py-1">
            Objective
          </h3>
          <p className="border-b border-green-600 pb-2">
            A passionate <b>informatics student</b> with knowledge of
            <b>web development</b>
            and <b>cloud computing</b>. I am currently studying in the Bachelor
            of Informatics program, specializing in software engineering. Have
            the ability to build dynamic websites with <b>PHP</b> and
            <b>NodeJS</b>
            technology. Have an understanding of cloud computing concepts,
            especially the implementation of serverless services. I am very
            enthusiastic to continue learning and applying my skills in this
            field. Seeking internships or part-time opportunities to gain
            practical experience and contribute to innovative projects.
          </p>
        </div>
      </div>
      <Skills />
    </>
  );
}
