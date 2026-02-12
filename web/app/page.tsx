import Image from "next/image";
import siteCopyData from "../content/site-copy.json";

interface PacoteItem {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  ideal_para: string;
  highlight: boolean;
}

interface FrenteItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  pacote_recomendado: string;
}

interface ComoFuncionaStep {
  number: number;
  title: string;
  text: string;
}

interface DiferencialItem {
  icon: string;
  title: string;
  text: string;
}

interface SiteCopy {
  hero: { title: string; subtitle: string; cta_primary: string; cta_secondary: string };
  diferenciais: { title: string; lead: string; items: DiferencialItem[] };
  pacotes: { title: string; lead: string; items: PacoteItem[] };
  frentes: { title: string; items: FrenteItem[] };
  como_funciona: { title: string; lead: string; steps: ComoFuncionaStep[] };
  cta_final: { title: string; subtitle: string; cta_primary: string; cta_secondary: string };
  links: { whatsapp: string; whatsapp_prefill: string; telefone: string; telefone_display: string };
}

const siteCopy = siteCopyData as SiteCopy;
const { hero, diferenciais, pacotes, frentes, como_funciona, cta_final, links } = siteCopy;
const HERO_BACKGROUND_SRC = "/images/logo-hero.png";
const CTA_BACKGROUND_SRC = "/images/hero-bg.webp";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wm-preto">
        <Image
          src={HERO_BACKGROUND_SRC}
          alt="Ambiente de festa com som e iluminação profissional WM Som e Luz"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-45"
        />

        {/* Base overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradiente WM mantido para identidade visual */}
        <div className="absolute inset-0 gradient-wm opacity-25"></div>
        
        {/* Animated sound waves (placeholder) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-1 bg-wm-verde animate-wave" style={{ animationDelay: '0s' }}></div>
          <div className="w-full h-1 bg-wm-azul animate-wave" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-full h-1 bg-wm-roxo animate-wave" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">
            {hero.title.includes(":") ? (
              <>
                {hero.title.split(":")[0]}:
                <span className="text-wm-verde">{hero.title.split(":")[1]}</span>
              </>
            ) : (
              hero.title
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${links.whatsapp}?text=${encodeURIComponent(links.whatsapp_prefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wm-verde text-wm-preto px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-amarelo transition-colors"
            >
              {hero.cta_primary}
            </a>
            <a
              href={links.telefone}
              className="bg-wm-azul text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-roxo transition-colors"
            >
              {hero.cta_secondary}
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 md:py-24 bg-wm-cinza-escuro">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            {diferenciais.title.split("WM Som e Luz")[0]}
            <span className="text-wm-verde">WM Som e Luz</span>
            {diferenciais.title.split("WM Som e Luz")[1]}
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            {diferenciais.lead}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.items.map((item, i) => (
              <div
                key={i}
                className="bg-wm-preto p-6 rounded-lg border border-wm-cinza-medio hover:border-wm-verde transition-colors"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes Section */}
      <section id="pacotes" className="py-16 md:py-24 bg-wm-preto">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            {pacotes.title}
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            {pacotes.lead}
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pacotes.items.map((pacote) => (
              <div
                key={pacote.id}
                className={`flex flex-col h-full rounded-xl p-8 border-2 transition-all ${
                  pacote.highlight
                    ? "bg-gradient-to-b from-wm-azul/30 to-wm-roxo/30 border-wm-amarelo md:scale-105 shadow-lg shadow-wm-roxo/20"
                    : "bg-wm-cinza-escuro border-wm-cinza-medio hover:border-wm-verde"
                }`}
              >
                {pacote.highlight && (
                  <p className="text-center text-wm-amarelo font-bold text-sm uppercase tracking-wide mb-2">
                    Mais pedido
                  </p>
                )}
                <h3 className="text-2xl font-bold mb-2">{pacote.name}</h3>
                <p className={`text-3xl font-black mb-4 ${pacote.highlight ? "text-wm-amarelo" : "text-wm-verde"}`}>
                  {pacote.price}
                </p>
                <p className="text-gray-400 text-sm mb-4">{pacote.description}</p>
                <div className="flex-1 flex flex-col min-h-0">
                  <ul className="space-y-2 flex-1 min-h-[180px] max-h-[200px] overflow-y-auto text-gray-300 text-sm pr-1">
                    {pacote.includes.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className={`shrink-0 ${pacote.highlight ? "text-wm-amarelo" : "text-wm-verde"}`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-xs mt-3 italic">{pacote.ideal_para}</p>
                </div>
                <a
                  href={`${links.whatsapp}?text=${encodeURIComponent(links.whatsapp_prefill)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto pt-6 block w-full text-center py-3 rounded-lg font-bold ${
                    pacote.highlight
                      ? "bg-wm-amarelo text-wm-preto hover:bg-wm-verde"
                      : "bg-wm-verde text-wm-preto hover:bg-wm-amarelo"
                  }`}
                >
                  Pedir orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frentes Section */}
      <section className="py-16 md:py-24 bg-wm-cinza-escuro">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            {frentes.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {frentes.items.map((frente) => (
              <div
                key={frente.id}
                className="bg-wm-preto p-6 rounded-lg border-2 border-wm-cinza-medio hover:border-wm-roxo transition-colors"
              >
                <div className="text-4xl mb-3">{frente.icon}</div>
                <h3 className="text-xl font-bold mb-2">{frente.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{frente.description}</p>
                <p className="text-wm-verde text-xs font-semibold">
                  Pacote: {frente.pacote_recomendado}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona Section */}
      <section id="como-funciona" className="py-16 md:py-24 bg-wm-preto">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            {como_funciona.title}
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            {como_funciona.lead}
          </p>
          <div className="space-y-8">
            {como_funciona.steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 items-start p-6 rounded-lg bg-wm-cinza-escuro border-l-4 border-wm-verde"
              >
                <span className="shrink-0 w-12 h-12 rounded-full bg-wm-verde text-wm-preto font-black text-xl flex items-center justify-center">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src={CTA_BACKGROUND_SRC}
          alt="Fundo de festa com iluminação e som para eventos"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {cta_final.title}
          </h2>
          <p className="text-xl mb-8">
            {cta_final.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${links.whatsapp}?text=${encodeURIComponent(links.whatsapp_prefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-wm-preto px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-amarelo transition-colors"
            >
              {cta_final.cta_primary}
            </a>
            <a
              href={links.telefone}
              className="bg-wm-preto text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-cinza-escuro transition-colors border-2 border-white"
            >
              {cta_final.cta_secondary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

