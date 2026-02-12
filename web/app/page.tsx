export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wm-preto">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-wm opacity-20"></div>
        
        {/* Animated sound waves (placeholder) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-1 bg-wm-verde animate-wave" style={{ animationDelay: '0s' }}></div>
          <div className="w-full h-1 bg-wm-azul animate-wave" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-full h-1 bg-wm-roxo animate-wave" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">
            Som e iluminação profissional +{" "}
            <span className="text-wm-verde">festa 100% em videoclipes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            VDJ ao vivo sincroniza música e vídeo em tempo real. Você escolhe as músicas, a gente cria o espetáculo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515991163093?text=Oi!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20evento%20de%20som%20e%20ilumina%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wm-verde text-wm-preto px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-amarelo transition-colors"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="tel:+5515991163093"
              className="bg-wm-azul text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-roxo transition-colors"
            >
              Ligar: (15) 99116-3093
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-wm-cinza-escuro">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Por que a <span className="text-wm-verde">WM Som e Luz</span> é diferente?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Não é só música — é experiência audiovisual completa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Diferencial 1 */}
            <div className="bg-wm-preto p-8 rounded-lg border-2 border-wm-verde hover:border-wm-amarelo transition-colors">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-3">Festa 100% em videoclipes</h3>
              <p className="text-gray-400">
                Todas as músicas passam no telão — remixadas e sincronizadas. Do anos 70-90 até hits atuais.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-wm-preto p-8 rounded-lg border-2 border-wm-azul hover:border-wm-roxo transition-colors">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-3">Personalização total</h3>
              <p className="text-gray-400">
                Você escolhe 100% das músicas ou permite que os convidados sugiram. Curadoria sob medida.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-wm-preto p-8 rounded-lg border-2 border-wm-roxo hover:border-wm-rosa-neon transition-colors">
              <div className="text-6xl mb-4">🔊</div>
              <h3 className="text-2xl font-bold mb-3">Qualidade técnica altíssima</h3>
              <p className="text-gray-400">
                Equipamentos profissionais de última geração. Som cristalino, iluminação de nível superior.
              </p>
            </div>

            {/* Diferencial 4 */}
            <div className="bg-wm-preto p-8 rounded-lg border-2 border-wm-amarelo hover:border-wm-verde transition-colors">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">VDJ: espetáculo visual</h3>
              <p className="text-gray-400">
                VDJ (Video DJ) mixa som + vídeo em tempo real, criando transições perfeitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-r from-wm-azul via-wm-roxo to-wm-verde">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Pronto para transformar seu evento?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato e receba um orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515991163093?text=Oi!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20evento%20de%20som%20e%20ilumina%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-wm-preto px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-amarelo transition-colors"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="tel:+5515991163093"
              className="bg-wm-preto text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-cinza-escuro transition-colors border-2 border-white"
            >
              Ligar: (15) 99116-3093
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
