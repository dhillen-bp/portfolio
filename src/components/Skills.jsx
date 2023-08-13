import {
  AdminlteIcon,
  BootstrapIcon,
  CodeigneterIcon,
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GCPIcon,
  HapiIcon,
  HTMLIcon,
  JavaIcon,
  JavascriptIcon,
  LaravelIcon,
  MySQLIcon,
  PHPIcon,
  TailwindIcon,
} from "../assets/assets";

const skillsData = [
  { imageSrc: { HTMLIcon }, label: "HTML" },
  { imageSrc: { CssIcon }, label: "CSS" },
  { imageSrc: { JavascriptIcon }, label: "Javascript" },
  { imageSrc: { PHPIcon }, label: "PHP" },
  { imageSrc: { BootstrapIcon }, label: "Bootstrap" },
  { imageSrc: { TailwindIcon }, label: "Tailwind" },
  { imageSrc: { CodeigneterIcon }, label: "Codeigneter" },
  { imageSrc: { LaravelIcon }, label: "Laravel" },
  { imageSrc: { ExpressIcon }, label: "Express.js" },
  { imageSrc: { HapiIcon }, label: "Hapi.js" },
  { imageSrc: { MySQLIcon }, label: "MySQL" },
  { imageSrc: { GCPIcon }, label: "Google Cloud" },
];

export default function Skills() {
  return (
    <div className="mt-10 h-full w-full">
      <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
        Skills & Tools
      </h1>
      <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 justify-around items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`cursor-pointer shadow-md rounded-md  h-[3.25rem] bg-green-300 flex justify-center items-center py-2 space-x-4 hover:bg-green-500`}
          >
            <img
              src={Object.values(skill.imageSrc)[0]}
              alt="Skill-Icon"
              className="w-10"
            />
            <p className="font-bold flex">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
