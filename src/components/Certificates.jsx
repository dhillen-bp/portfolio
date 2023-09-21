import {
  GitCert,
  WebBasic,
  JavascriptBasic,
  BackendBeginner,
  CloudEngineer,
  CloudArchitect,
} from "../assets/assets";

const certificatesData = [
  {
    imageSrc: { CloudArchitect },
    label: `Menjadi Google Cloud Architect - Dicoding`,
    link: "https://www.dicoding.com/certificates/0LZ09JNERZ65",
  },
  {
    imageSrc: { CloudEngineer },
    label: `Menjadi Google Cloud Engineer - Dicoding`,
    link: "https://www.dicoding.com/certificates/4EXGN5L7QZRL",
  },
  {
    imageSrc: { BackendBeginner },
    label: `Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud - Dicoding`,
    link: "https://www.dicoding.com/certificates/L4PQ6DNJ2PO1",
  },
  {
    imageSrc: { JavascriptBasic },
    label: `Belajar Dasar Pemrograman JavaScript - Dicoding`,
    link: "https://www.dicoding.com/certificates/MEPJK1DV4X3V",
  },
  {
    imageSrc: { WebBasic },
    label: `Belajar Dasar Pemrograman Web - Dicoding`,
    link: "https://www.dicoding.com/certificates/1OP85OL8VPQK",
  },
  {
    imageSrc: { GitCert },
    label: `Belajar Dasar Git dengan GitHub - Dicoding`,
    link: "https://www.dicoding.com/certificates/N9ZO4Q2DDZG5",
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
                href={certif.link}
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
