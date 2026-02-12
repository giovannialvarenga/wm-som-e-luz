import siteCopyData from "../../content/site-copy.json";

interface SiteCopyForJsonLd {
  brand: string;
  meta: { description: string };
  links: {
    telefone_display: string;
    endereco: string;
    facebook?: string;
    instagram?: string;
  };
  faq: { items: { question: string; answer: string }[] };
}

const siteCopy = siteCopyData as SiteCopyForJsonLd;
const BASE_URL = "https://wmsomeluz.com.br";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteCopy.brand,
    description: siteCopy.meta.description,
    telephone: siteCopy.links.telefone_display,
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteCopy.links.endereco,
      addressLocality: "Sorocaba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Sorocaba", containedInPlace: { "@type": "State", name: "São Paulo" } },
      { "@type": "State", name: "São Paulo" },
    ],
    ...(siteCopy.links.instagram && { sameAs: [siteCopy.links.instagram, siteCopy.links.facebook].filter(Boolean) }),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteCopy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
