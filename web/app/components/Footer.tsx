import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5515991163093";
const WHATSAPP_PREFILL = "Oi! Gostaria de um orçamento para evento de som e iluminação. Pode me ajudar?";
const TELEFONE = "(15) 99116-3093";
const INSTAGRAM = "https://instagram.com/wmsomeluz";
const ENDERECO = "Av. Ipanema, 5867 - Jardim Novo Horizonte, Sorocaba - SP, 18071-801";

export default function Footer() {
  return (
    <footer className="bg-wm-cinza-escuro border-t border-wm-cinza-medio/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="flex items-center">
            <Image src="/logo.png" alt="WM Som e Luz" width={132} height={48} className="object-contain" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href={`tel:+5515991163093`} className="text-gray-300 hover:text-wm-verde transition-colors">
              📞 {TELEFONE}
            </a>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-wm-verde transition-colors"
            >
              WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-wm-verde transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-500 text-xs max-w-xl mx-auto">
          {ENDERECO}
        </p>
        <p className="mt-4 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} WM Som e Luz. Sorocaba e região.
        </p>
      </div>
    </footer>
  );
}
