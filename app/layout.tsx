import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://whoviks.is-a.dev"),
  title: {
    default: "whoviks",
    template: "%s | whoviks",
  },
  description: "Software engineer and open source contributor",
  openGraph: {
    title: "whoviks",
    description: "Software engineer and open source contributor",
    url: "https://github.com/whoviks",
    siteName: "whoviks",
    images: [
      {
        url: "https://github.com/whoviks.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "whoviks",
    card: "summary_large_image",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
