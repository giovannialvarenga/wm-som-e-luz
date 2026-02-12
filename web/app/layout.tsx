import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WM Som e Luz | Som e iluminação + festa 100% em videoclipes | Sorocaba/SP",
  description: "Som e iluminação profissional com festa 100% em videoclipes. VDJ ao vivo, qualidade técnica altíssima, personalização total. Casamentos, formaturas, aniversários e eventos corporativos. Atendemos Sorocaba e todo o estado de SP. Orçamento: (15) 99116-3093",
  keywords: "som e iluminação sorocaba, DJ sorocaba, VDJ, videoclipes, som casamento, iluminação evento, telão LED, festa anos 80 90",
  authors: [{ name: "WM Som e Luz" }],
  openGraph: {
    title: "WM Som e Luz | Festa 100% em videoclipes",
    description: "Som e iluminação profissional com VDJ ao vivo. Experiência audiovisual completa para seu evento.",
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
        {children}
      </body>
    </html>
  );
}
