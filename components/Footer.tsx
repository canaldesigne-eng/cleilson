
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <i className="fa-solid fa-music text-blue-500"></i>
               Pack Hinário 5
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              O maior ecossistema musical focado no Hinário 5 da CCB. 
              Criado por músicos profissionais para quem deseja servir melhor através da música.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Conteúdo</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                contato@packhinario.com
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-blue-500"></i>
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Pack Musical Hinário 5. Todos os direitos reservados.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest opacity-30">Este produto não possui vínculo institucional oficial.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
