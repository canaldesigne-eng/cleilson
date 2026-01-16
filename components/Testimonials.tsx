
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O que dizem nossos alunos e músicos</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 5.000 músicos já transformaram seus estudos com o Pack Hinário 5. Veja alguns depoimentos reais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{testimonial.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <i className="fa-solid fa-quote-right absolute top-8 right-8 text-slate-200 text-4xl"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
