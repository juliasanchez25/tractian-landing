"use client";

import { FooterOptionsListProps } from "@/components/custom/footer.types";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FooterLogo } from "@/components/icons/footer-logo";

const badges = [
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/front-runners.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "Front Runners",
    id: "front-runners",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/forbes-ai.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "Forbes",
    id: "forbes",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/aicpa-soc.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "AICPA",
    id: "aicpa",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/sap-partner.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640",
    alt: "SAP",
    id: "sap",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/iso-27001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640",
    alt: "ISO 27001",
    id: "iso-27001",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/oracle-cloud.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
    alt: "Oracle Cloud",
    id: "oracle",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/iso-9001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
    alt: "ISO 9001",
    id: "iso-9001",
  },
  {
    src: "https://imgix.tractian.com/website/components/footer/v2/asset-management-best-meets-requirements.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
    alt: "Best Meets Requirements",
    id: "asset-mgmt",
  },
];

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
    >
      <path
        d="M16.0998 10.25L9.6998 3.84995V23.05H8.1998V3.84995L1.7998 10.25L0.799805 9.14995L8.9998 0.949951L17.1998 9.14995L16.0998 10.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const getSectionItems = (section: string, itemCount: number) => {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push({
        label: t(`sections.${section}.items.${i}.label`),
      });
    }
    return items;
  };

  const isPortuguese = locale === "pt";

  let onlineMonitoring = null;
  let energyManagement = null;
  let assetManagement = null;
  let sensors = null;
  let cmms = null;
  let oee = null;

  const isEnglish = locale === "en";
  if (isEnglish) {
    sensors = {
      title: t("sections.sensors.title"),
      items: getSectionItems("sensors", 7),
    };

    cmms = {
      title: t("sections.cmms.title"),
      items: getSectionItems("cmms", 10),
    };

    oee = {
      title: t("sections.oee.title"),
      items: getSectionItems("oee", 7),
    };
  } else {
    onlineMonitoring = {
      title: t("sections.onlineMonitoring.title"),
      items: getSectionItems("onlineMonitoring", 5),
    };

    energyManagement = {
      title: t("sections.energyManagement.title"),
      items: getSectionItems("energyManagement", 7),
    };

    assetManagement = {
      title: t("sections.assetManagement.title"),
      items: getSectionItems("assetManagement", 8),
    };
  }

  const support = {
    title: t("sections.support.title"),
    items: getSectionItems("support", 5),
  };

  const about = {
    title: t("sections.about.title"),
    items: getSectionItems("about", 5),
  };

  const downloadApp = {
    title: t("sections.downloadApp.title"),
    items: getSectionItems("downloadApp", 3),
  };

  return (
    <footer className="bg-blue-950 px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        {/* Badges e Back to top */}
        <section className="mb-8 flex w-full flex-col gap-x-16 gap-y-8 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-auto lg:justify-start lg:gap-x-6 xl:flex-nowrap">
            {badges.map((badge, index) => (
              <figure
                key={index}
                className="flex items-center"
                style={{ maxWidth: 50 }}
              >
                <Image
                  alt={badge.alt}
                  src={badge.src || "/placeholder.svg"}
                  width={149}
                  height={156}
                  className="object-contain"
                />
              </figure>
            ))}
          </div>
          <a
            className="hidden items-center gap-x-2 self-end text-white transition hover:text-white lg:flex"
            href="#"
          >
            <p className="text-sm">{t("backToTop")}</p>
            <ArrowUpIcon />
          </a>
        </section>

        {/* Links das colunas */}
        <section className="mb-8 grid grid-cols-2 gap-8 lg:mb-12 lg:grid-cols-6 lg:gap-6">
          {onlineMonitoring && energyManagement && assetManagement && (
            <>
              <FooterOptionsList section={onlineMonitoring} />
              <FooterOptionsList section={energyManagement} />
              <FooterOptionsList section={assetManagement} />
              <FooterOptionsList section={support} />
            </>
          )}
          {sensors && cmms && oee && support && (
            <>
              <FooterOptionsList section={sensors} />
              <FooterOptionsList section={cmms} />
              <FooterOptionsList section={oee} />
              <FooterOptionsList section={support} />
            </>
          )}
          <div className="flex flex-col gap-8">
            <FooterOptionsList section={about} />
            <FooterOptionsList section={downloadApp} />
          </div>
        </section>

        {/* Bottom section - Company info e Social icons */}
        <section className="border-t border-slate-800 pt-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Logo e info da empresa */}
            <div className="flex flex-col gap-4">
              <FooterLogo />
              <div className="text-white text-sm">
                <p>© {t("company.title")}</p>
                {isPortuguese && <p>{t("company.cnpj")}</p>}
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <PhoneIcon />
                <span>{t("company.phone")}</span>
              </div>
            </div>

            {/* Endereço e Social icons */}
            <div className="flex flex-col items-start gap-6 lg:items-end">
              {/* Social icons */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/company/tractian"
                  className="text-white transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/tractian"
                  className="text-white transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/tractian"
                  className="text-white transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@tractian"
                  className="text-white transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@tractian"
                  className="text-white transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/tractian"
                  className="text-white transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>

              {/* Endereço */}
              <p className="text-white text-sm text-left lg:text-right">
                {t("address")}
              </p>

              {/* Privacy choices */}
              <button className="flex items-center gap-2 text-white text-sm hover:text-white transition">
                <svg className="h-5 w-5" viewBox="0 0 30 14" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="13"
                    rx="6.5"
                    fill="#1D6BFF"
                    stroke="#1D6BFF"
                  />
                  <path
                    d="M7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1Z"
                    fill="white"
                  />
                  <path d="M22 4H17V10H22V4Z" fill="white" />
                  <path
                    d="M25 4H23V10H25C26.6569 10 28 8.65685 28 7C28 5.34315 26.6569 4 25 4Z"
                    fill="white"
                  />
                </svg>
                <span>{t("privacy")}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export function FooterOptionsList({ section }: FooterOptionsListProps) {
  return (
    <div>
      <h4 className="subtitle-md mb-4 text-white">{section.title}</h4>
      <div className="flex flex-col gap-2">
        {section.items.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="text-body-sm text-white transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
