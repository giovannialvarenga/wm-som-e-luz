import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import siteCopyData from "../content/site-copy.json";

const siteCopy = siteCopyData as { meta: { title: string; description: string; keywords?: string } };
const { meta } = siteCopy;

export const metadata: Metadata = {
  metadataBase: new URL("https://wmsomeluz.com.br"),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords ?? "som e iluminação sorocaba, DJ sorocaba, VDJ, videoclipes, som casamento, iluminação evento, telão LED, festa anos 80 90",
  authors: [{ name: "WM Som e Luz" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://wmsomeluz.com.br",
    siteName: "WM Som e Luz",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
