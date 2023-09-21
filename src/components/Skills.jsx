import {
  BootstrapIcon,
  CodeigneterIcon,
  ExpressIcon,
  FirebaseIcon,
  GCPIcon,
  HapiIcon,
  LaravelIcon,
  MongoDBIcon,
  MySQLIcon,
  TailwindIcon,
} from "../assets/assets";

const skillsData = [
  {
    imageSrc: { BootstrapIcon },
    label: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    imageSrc: { TailwindIcon },
    label: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    imageSrc: { CodeigneterIcon },
    label: "Codeigneter",
    link: "https://codeigniter.com/",
  },
  { imageSrc: { LaravelIcon }, label: "Laravel", link: "https://laravel.com/" },
  {
    imageSrc: { ExpressIcon },
    label: "Express",
    link: "https://expressjs.com/",
  },
  { imageSrc: { HapiIcon }, label: "hapi", link: "https://hapi.dev/" },
  { imageSrc: { MySQLIcon }, label: "MySQL", link: "https://www.mysql.com/" },
  {
    imageSrc: { MongoDBIcon },
    label: "MongoDB",
    link: "https://www.mongodb.com/docs/",
  },
  {
    imageSrc: { FirebaseIcon },
    label: "Firebase",
    link: "https://firebase.google.com/docs",
  },
  {
    imageSrc: { GCPIcon },
    label: "Google Cloud",
    link: "https://cloud.google.com/docs",
  },
];

export default function Skills() {
  return (
    <div className="mt-10 h-full w-full mb-5">
      <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
        Favorite Tech Stack
      </h1>
      <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 justify-around items-center">
        {skillsData.map((skill, index) => (
          <a
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`cursor-pointer shadow-md rounded-md  h-[3.25rem] bg-green-300 flex justify-center items-center py-2 space-x-4 hover:bg-green-500`}
          >
            <img
              src={Object.values(skill.imageSrc)[0]}
              alt="Skill-Icon"
              className="w-10"
            />
            <p className="font-bold flex">{skill.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
