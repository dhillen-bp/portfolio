export default function Footer() {
  return (
    <footer className="px-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-20 flex flex-col items-center justify-center">
      <p className="text-slate-100 ">
        Made with 💗 by ©️
        <span className="font-bold text-white"> Dhillen </span>
      </p>
      <p className="text-slate-100">
        Check my
        <a
          href="./src/assets/docs/Resume-Dhillen-Brahmantya-Pradifta.pdf"
          target="_blank"
          className="ml-1 font-bold text-white hover:underline"
        >
          Resume
        </a>
      </p>
    </footer>
  );
}
