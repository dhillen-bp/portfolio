export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-20 flex flex-col items-center justify-center">
      <p className="text-slate-100 ">
        Copyright ©️ {getCurrentYear()}
        <span className="font-bold text-white"> Dhillen </span>
      </p>
    </footer>
  );
}
