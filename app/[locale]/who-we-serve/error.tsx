"use client";

import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-slate-700">{t("title")}</h2>
      <p className="text-slate-500">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-sm bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        {t("button")}
      </button>
    </div>
  );
}
