import {
  GitCert,
  ProgrammingLogicCert,
  BasicProgramCert,
} from "../assets/assets";

const certificatesData = [
  {
    imageSrc: { GitCert },
    label: `Belajar Dasar Git dengan GitHub - Dicoding`,
  },
  {
    imageSrc: { ProgrammingLogicCert },
    label: `Pengenalan ke Logika Pemrograman (Programming Logic 101) -
  Dicoding`,
  },
  {
    imageSrc: { BasicProgramCert },
    label: `Memulai Dasar Pemrograman untuk Menjadi Pengembang Software -
  Dicoding`,
  },
];

export default function Certificates() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold border-b-2 border-green-500 pb-1 mb-5">
        Certification
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        {certificatesData.map((certif, index) => (
          <div
            key={index}
            className="group h-full col-span-1 shadow-sm rounded-md relative overflow-hidden"
          >
            <img
              src={Object.values(certif.imageSrc)[0]}
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
                {certif.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
