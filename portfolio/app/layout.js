import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});
const cabinet = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Variable.ttf",
    },
  ],
  variable: "--font-cabinet",
});

export const metadata = {
  title: "Oday Jawaada",
  description: "Oday Jawaada's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${cabinet.variable} font-sans`}
    >
      <body className="bg-[url('/test.webp')]">{children}</body>
    </html>
  );
}
