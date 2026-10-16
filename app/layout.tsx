import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cbinewslive.netlify.app/"),
  title: "CBI News Live Preview",
  description:
    "Watch CBI News live. Paste any live link and stream it instantly in your browser, with no extra apps or sign-up.",

  openGraph: {
    type: "website",
    title:
      "CBI News Live Preview: Paste a YouTube Live Link and Watch Instantly",
    description:
      "Watch live broadcasts from CBI News. Paste a live link and start watching.",
    url: "https://cbinewslive.netlify.app/",
    siteName: "CBI News",
    images: [
      {
        url: "https://cbinewslive.netlify.app/images/cbinewslogo.jpeg",
        width: 1200,
        height: 630,
        alt: "CBI News Live Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBI News Live Preview: Paste a Live Link and Watch Instantly",
    description:
      "Watch live broadcasts from CBI News. Paste a live link and start watching.",
    images: ["https://cbinewslive.netlify.app/images/cbinewslogo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
