"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useRef } from "react";

function QuoteIcon() {
  return (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-primary"
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const items = t.raw("items") as Array<{
    name: string;
    role: string;
    company: string;
    quote: string;
    photo: string;
  }>;

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const endX = e.clientX;
    handleDragEnd(endX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    handleDragEnd(endX);
  };

  const handleDragEnd = (endX: number) => {
    setIsDragging(false);
    const diff = startX - endX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
        <h2 className="heading-h2 px-4 text-left text-slate-700 sm:px-0 lg:text-center">
          {t("title")}
        </h2>

        {/* Carrossel Mobile */}
        <div className="w-full sm:hidden">
          <div
            ref={carouselRef}
            className="relative overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {items.map((item) => (
                <div
                  key={`${item.name}-${item.company}`}
                  className="w-full shrink-0 px-4"
                >
                  <article className="flex flex-col gap-4">
                    <div className="flex w-full items-center gap-4">
                      <QuoteIcon />
                    </div>
                    <p className="h-full text-quote text-slate-500">
                      {item.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <figure className="flex h-12 w-12 items-center justify-center rounded-full">
                        <Image
                          alt={item.name}
                          src={item.photo || "/placeholder.svg"}
                          width={120}
                          height={120}
                          className="font-bold text-body-sm"
                        />
                      </figure>
                      <div className="flex w-full flex-1 flex-col">
                        <p className="font-bold text-body-sm">{item.name}</p>
                        <p className="text-body-sm">{item.role}</p>
                        <p className="font-bold text-body-sm">{item.company}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de paginação */}
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid Desktop */}
        <div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
          {items.map((item) => (
            <article
              key={`${item.name}-${item.company}`}
              className="flex h-auto w-full cursor-grab flex-col gap-4 sm:cursor-default"
            >
              <div className="flex w-full items-center gap-4">
                <QuoteIcon />
              </div>
              <p className="h-full text-quote text-slate-500">{item.quote}</p>
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
                <div className="flex w-full flex-1 flex-col">
                  <p className="font-bold text-body-sm">{item.name}</p>
                  <p className="text-body-sm">{item.role}</p>
                  <p className="font-bold text-body-sm">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
