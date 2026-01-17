import Image from "next/image";

export function OwensIcon() {
  return (
    <Image
      alt="Owens Logo"
      width={59}
      height={32}
      className="mx-auto"
      style={{ width: "auto" }}
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/owens.png?auto=format%2Ccompress&amp;cs=origin&amp;fit=max&amp;q=75&amp;w=128"
    />
  );
}
