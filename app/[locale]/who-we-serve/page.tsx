import { useTranslations } from "next-intl";

export default function WhoWeServePage() {
  const t = useTranslations("Homepage");

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-500 font-sans">
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}
