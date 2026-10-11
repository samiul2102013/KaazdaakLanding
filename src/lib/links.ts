export const OCEANEDGE_URL =
  process.env.NEXT_PUBLIC_OCEANEDGE_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://oceanedgetech.com");
