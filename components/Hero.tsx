
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: `url('https://picsum.photos/id/452/1920/1080')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full">
          Lançamento Exclusivo
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          O Pack Musical Definitivo <br />
          <span className="text-blue-500">Hinário 5 CCB</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tudo o que músicos, organistas e regentes precisam para o aperfeiçoamento musical em um só lugar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#pricing" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            QUERO MEU ACESSO AGORA
          </a>
          <a 
            href="#features" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all w-full sm:w-auto border border-white/20"
          >
            VER CONTEÚDO DO PACK
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-60">
           <div className="flex items-center gap-2"><i className="fa-solid fa-shield-halved"></i> <span>Compra Segura</span></div>
           <div className="flex items-center gap-2"><i className="fa-solid fa-clock"></i> <span>Acesso Imediato</span></div>
           <div className="flex items-center gap-2"><i className="fa-solid fa-award"></i> <span>Garantia 7 Dias</span></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
