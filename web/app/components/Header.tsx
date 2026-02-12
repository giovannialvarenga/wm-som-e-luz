import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5515991163093";
const WHATSAPP_PREFILL = "Oi! Gostaria de um orçamento para evento de som e iluminação. Pode me ajudar?";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-wm-preto/95 backdrop-blur-sm border-b border-wm-cinza-medio/50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <Image src="/logo.png" alt="WM Som e Luz" width={156} height={56} className="object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#diferenciais" className="text-gray-300 hover:text-wm-verde transition-colors text-sm font-medium">
            Diferenciais
          </a>
          <a href="#pacotes" className="text-gray-300 hover:text-wm-verde transition-colors text-sm font-medium">
            Pacotes
          </a>
          <a href="#como-funciona" className="text-gray-300 hover:text-wm-verde transition-colors text-sm font-medium">
            Como funciona
          </a>
        </nav>
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-wm-verde text-wm-preto px-4 py-2 rounded-lg font-bold text-sm hover:bg-wm-amarelo transition-colors"
        >
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}
