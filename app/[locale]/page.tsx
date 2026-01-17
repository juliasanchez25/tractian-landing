import WhoWeServePage from "./who-we-serve/page";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <WhoWeServePage params={params} />;
}
