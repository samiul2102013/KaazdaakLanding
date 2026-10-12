import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bn",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaajdaak.oceanedgetech.com"),
  title: "KaazDaak – আপনার কাজ, আমাদের দায়িত্ব",
  description:
    "KaazDaak is a local work marketplace for Bangladesh — post a task, hire someone nearby. Trusted service providers, KYC verified, secure payments.",
  icons: { icon: "/favicon.jpeg" },
  openGraph: {
    type: "website",
    title: "KaazDaak – আপনার কাজ, আমাদের দায়িত্ব",
    description:
      "Post a task. Hire nearby. A local work marketplace for Bangladesh, built by OceanEdge Technologies.",
    images: ["/images/hero-bg.png"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("kd-theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light");}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" data-theme="light" className={`${inter.variable} ${hindSiliguri.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
