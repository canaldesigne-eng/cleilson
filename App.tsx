
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Samples from './components/Samples';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import SupportChat from './components/SupportChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Simple Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-slate-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <i className="fa-solid fa-music text-blue-600"></i>
            <span>Pack Hinário 5</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Recursos</a>
            <a href="#samples" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Amostras</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Preços</a>
            <a href="#pricing" className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
              Comprar Agora
            </a>
          </div>
          <button className="md:hidden text-slate-900">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="bg-slate-100 py-10 overflow-hidden whitespace-nowrap border-y border-slate-200">
          <div className="flex animate-marquee items-center justify-around gap-12 text-slate-400 font-medium">
            <div className="flex items-center gap-2"><i className="fa-solid fa-user-check"></i> +5000 Músicos Satisfeitos</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-star"></i> Avaliação 4.9/5.0</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-download"></i> +100k Downloads Realizados</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-certificate"></i> Material 100% Original</div>
          </div>
        </div>

        <Features />

        {/* Highlight Section */}
        <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Prepare-se para uma experiência musical superior.</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Nosso material foi cuidadosamente editado para respeitar cada detalhe harmônico do Hinário 5. É o apoio perfeito para o estudo em casa ou aperfeiçoamento nas reuniões musicais.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span>Áudios sem perdas de qualidade (WAV/MP3 320kbps)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span>Separado por pastas e hinos (Fácil organização)</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
                  <img 
                    src="https://picsum.photos/id/117/800/600" 
                    alt="Instrumento Musical" 
                    className="rounded-2xl w-full h-auto shadow-inner"
                  />
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl flex items-center gap-4">
                   <div className="text-3xl font-bold text-blue-600">480</div>
                   <div className="text-xs font-bold leading-none uppercase tracking-tighter">Hinos e Coros<br/>Completos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Samples />

        <Testimonials />

        <Pricing />

        {/* FAQ Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              {[
                {q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento via e-mail e WhatsApp."},
                {q: "Quais os formatos dos arquivos?", a: "Áudios em MP3, partituras em PDF e arquivos editáveis em MIDI e Sibelius."},
                {q: "O acesso é vitalício?", a: "Sim, você paga uma única vez e o acesso nunca expira."}
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-circle-question text-blue-500"></i>
                    {item.q}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
               <p className="text-gray-500 mb-4">Ainda tem dúvidas? Fale com nossa IA agora!</p>
               <button 
                 onClick={() => {
                   const chatBtn = document.querySelector('button[class*="bg-blue-600"][class*="rounded-full"]');
                   if (chatBtn) (chatBtn as HTMLElement).click();
                 }}
                 className="text-blue-600 font-bold hover:underline"
               >
                 Abrir Chat de Suporte <i className="fa-solid fa-arrow-down ml-1"></i>
               </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SupportChat />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
