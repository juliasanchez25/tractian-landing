import Image from "next/image";

export function LdcIcon() {
  return (
    <Image
      alt="LDC Logo"
      width={60}
      height={28}
      className="mx-auto"
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/ldc.png?auto=format%2Ccompress&amp;cs=origin&amp;fit=max&amp;q=75&amp;w=128"
    />
  );
}
