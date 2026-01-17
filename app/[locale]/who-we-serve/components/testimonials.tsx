import Image from "next/image";
import { useTranslations } from "next-intl";

function QuoteIcon() {
  return (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-blue-600"
    >
      <path
        d="M28.667 4C24.2487 4 20.667 7.58172 20.667 12H18.0003C18.0003 6.10896 22.776 1.33333 28.667 1.33333V4Z"
        fill="currentColor"
      />
      <path d="M30 30.6667H18V12.0001H30V30.6667Z" fill="currentColor" />
      <path
        d="M12.667 4C8.24871 4 4.66699 7.58172 4.66699 12H2.00033C2.00033 6.10896 6.77595 1.33333 12.667 1.33333V4Z"
        fill="currentColor"
      />
      <path d="M14 30.6667H2V12.0001H14V30.6667Z" fill="currentColor" />
    </svg>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  const items = t.raw("items") as Array<{
    name: string;
    role: string;
    company: string;
    quote: string;
    photo: string;
  }>;

  return (
    <section className="w-full bg-white py-12 px-4 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
        <h2 className="px-4 text-left font-bold text-2xl sm:px-0 lg:text-center lg:text-3xl">
          {t("title")}
        </h2>
        <div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex h-auto w-full cursor-grab flex-col gap-4 sm:cursor-default"
            >
              <div className="flex w-full items-center gap-4">
                <QuoteIcon />
              </div>
              <p className="h-full text-slate-500 text-quote">{item.quote}</p>
              <div className="flex items-center gap-3 lg:justify-between">
                <figure className="flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
                  <Image
                    alt={item.name}
                    src={item.photo || "/placeholder.svg"}
                    width={120}
                    height={120}
                    className="font-bold text-body-sm"
                  />
                </figure>
                <article className="flex w-full flex-1 flex-col">
                  <p className="font-bold text-body-sm">{item.name}</p>
                  <p className="text-body-sm">{item.role}</p>
                  <p className="font-bold text-body-sm">{item.company}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
