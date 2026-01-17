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
          <p className="subtitle-md text-center text-primary">FAQ</p>
          <h2 className="heading-h2 text-center text-slate-700">
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
              className="rounded-xs border border-slate-300 bg-transparent px-4 transition-colors hover:border-blue-600 last:border-b"
            >
              <AccordionTrigger className="text-body-md text-left font-semibold hover:text-primary hover:no-underline data-[state=open]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-body-md text-slate-500">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
