import { Helmet } from "react-helmet";
import MailIcon from "@mui/icons-material/Mail";
import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkIcon from "@mui/icons-material/Work";
import { Photo } from "../assets/assets";
import Skills from "./Skills";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Software Engineer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

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
          <div className="shadow-md mx-20 md:mx-0 rounded-full overflow-hidden md:col-span-1 md:w-60">
            <img
              src={Photo}
              alt="MyPhoto"
              className="w-full h-full border-4 rounded-full border-green-500"
            />
          </div>
          <div className="py-5 grid md:col-span-2 items-center gap-5">
            <h2 className="text-2xl text-center font-semibold">
              Dhillen Brahmantya Pradifta
            </h2>
            <div className="m-auto items-center">
              <WorkIcon />
              <div
                className="inline font-semibold justify-center text-xl text-green-700 pl-2"
                ref={el}
              ></div>
            </div>
            <div className="bg-green-300 rounded-md">
              <h2 className="text-center text-xl font-semibold border-b border-green-600 py-2">
                Social Media Profile
              </h2>
              <div className="m-auto shadow-md rounded-md flex justify-around px-5 py-2">
                <a
                  href="mailto:dhillenbp@gmail.com"
                  className="w-7 flex justify-center items-center rounded-full md:w-10 md:p-2 hover:bg-green-500 hover:scale-110"
                >
                  <MailIcon />
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
            <b> web development </b>
            and <b>cloud computing</b>. I am currently studying in the Bachelor
            of Informatics program, specializing in software engineering. Have
            the ability to build dynamic websites with <b>PHP</b> and
            <b> NodeJS </b>
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
