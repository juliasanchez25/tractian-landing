"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const t = useTranslations("FrequentQuestions");
  const questions = t.raw("questions") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="relative w-full bg-slate-100 py-12 lg:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col items-center gap-2 lg:gap-4">
          <p className="text-center font-medium uppercase text-blue-600 text-sm">
            FAQ
          </p>
          <h2 className="text-center font-semibold text-2xl lg:font-bold lg:text-4xl">
            {t("title")}
          </h2>
        </article>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex w-full flex-col gap-y-6"
        >
          {questions.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="rounded-sm border border-slate-300 bg-transparent px-4 py-2 transition-colors hover:border-blue-600"
            >
              <AccordionTrigger className="text-left font-medium text-base hover:text-blue-600 hover:no-underline lg:font-semibold data-[state=open]:text-blue-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
