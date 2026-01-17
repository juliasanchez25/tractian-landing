import Image from "next/image";

export function BerryIcon() {
  return (
    <Image
      alt="Berry Logo"
      loading="lazy"
      width="52"
      height="28"
      decoding="async"
      data-nimg="1"
      className="mx-auto h-7 w-13"
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/berry-logo.png?auto=format%2Ccompress&amp;cs=origin&amp;fit=max&amp;q=75&amp;w=128"
      style={{ color: "transparent" }}
    />
  );
}
