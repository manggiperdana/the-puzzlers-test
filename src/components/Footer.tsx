import Image from "next/image";
export default function Footer() {
  const companies = [
    {
      name: "company-1",
      src: "/assets/company-1.png",
    },
    {
      name: "company-2",
      src: "/assets/company-2.png",
    },
    {
      name: "company-3",
      src: "/assets/company-3.png",
    },
    {
      name: "company-4",
      src: "/assets/company-4.png",
    },
    {
      name: "company-5",
      src: "/assets/company-5.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="font-light text-sm text-gray-700 font-sans">
          Trusted by leading companies
        </p>
        <div className="w-full inline-flex flex-nowrap  overflow-hidden md:hidden">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
            {companies.map((company, i) => {
              return (
                <li key={i}>
                  <Image
                    className=""
                    src={company.src}
                    alt={company.name}
                    width={208}
                    height={68}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
            {companies.map((company, i) => {
              return (
                <li key={i}>
                  <Image
                    className=""
                    src={company.src}
                    alt={company.name}
                    width={208}
                    height={68}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:flex flex-row mt-4">
          {companies.map((company, i) => {
            return (
              <Image
                key={i}
                className=""
                src={company.src}
                alt={company.name}
                width={208}
                height={68}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
