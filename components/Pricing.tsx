
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Escolha seu Plano</h2>
          <p className="text-gray-600">Invista no seu ministério musical com o melhor custo-benefício.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-8 rounded-3xl bg-white border-2 transition-all ${
                plan.popular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                  MAIS VENDIDO
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">/único</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <i className="fa-solid fa-check text-green-500"></i>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${
                plan.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}>
                ASSINAR AGORA
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
