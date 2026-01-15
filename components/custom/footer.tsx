import Image from "next/image";

const logos = [
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/front-runners.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "Front Runners",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/forbes-ai.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "Forbes",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/aicpa-soc.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "AICPA",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/sap-partner.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640",
    alt: "SAP",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/iso-27001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640",
    alt: "ISO 27001",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/oracle-cloud.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "Oracle Cloud",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/iso-9001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
    alt: "ISO 9001",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/asset-management-best-meets-requirements.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
    alt: "Best Meets Requirements",
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="mb-8 flex w-full flex-col gap-x-16 gap-y-8 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-wrap items-center justify-evenly gap-4 lg:w-auto lg:justify-start lg:gap-x-6 xl:flex-nowrap">
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <div key={index}>
                  <Image src={logo.src} alt={logo.alt} width={50} height={50} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
