export const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_URL || "https://imgix.tractian.com";
export const S3_BASE_URL =
  process.env.NEXT_PUBLIC_S3_URL ||
  "https://tractian-webpage.s3.us-east-1.amazonaws.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tractian.com";

export function getCDNUrl(path: string, params?: Record<string, string>) {
  const url = new URL(path, CDN_BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  return url.toString();
}

export function getS3Url(path: string, params?: Record<string, string>) {
  const url = new URL(path, S3_BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  return url.toString();
}
