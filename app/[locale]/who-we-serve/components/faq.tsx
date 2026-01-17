"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`transition-all ease-in-out ${
        isOpen ? "rotate-90" : "-rotate-90"
      }`}
      fill="none"
      height="14"
      viewBox="0 0 9 14"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.35364L7 7.35364L1 13.3536"
        stroke={isOpen ? "#2563eb" : "#334155"}
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations("FrequentQuestions");

  const questions = t.raw("questions") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="relative w-full bg-slate-100 py-12 lg:py-16">
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col items-center gap-2 lg:gap-4">
          <p className="text-center uppercase text-blue-600 text-sm font-medium">
            FAQ
          </p>
          <h2 className="text-center font-semibold text-2xl lg:font-bold lg:text-4xl">
            {t("title")}
          </h2>
        </article>
        <div className="flex w-full flex-col gap-y-6">
          {questions.map((item, index) => {
            const { question, answer } = item;

            return (
              <button
                key={index}
                className="group w-full rounded-sm border border-slate-300 bg-transparent p-4 transition hover:border-blue-600"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="mb-2 flex w-full items-center justify-between gap-3 transition-all">
                  <h3
                    className={`text-left font-medium text-base lg:font-semibold transition-all ${
                      openIndex === index
                        ? "text-blue-600"
                        : "text-slate-700 group-hover:text-blue-600"
                    }`}
                  >
                    {question}
                  </h3>
                  <figure>
                    <ChevronIcon isOpen={openIndex === index} />
                  </figure>
                </div>
                <div
                  className={`overflow-hidden text-left text-slate-500 text-base transition-all duration-200 ease-in-out ${
                    openIndex === index ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <p className="pt-2">{answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
