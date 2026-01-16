
import React, { useState } from 'react';
import { MATERIAL_SAMPLES } from '../constants';

const Samples: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const audioSamples = MATERIAL_SAMPLES.filter(s => s.type === 'audio');
  const sheetSamples = MATERIAL_SAMPLES.filter(s => s.type === 'sheet');

  const togglePlay = (id: number) => {
    if (playingId === id) setPlayingId(null);
    else setPlayingId(id);
  };

  return (
    <section id="samples" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Amostras do Material</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira a qualidade excepcional dos nossos áudios e partituras antes de comprar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Audio Player Preview */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <i className="fa-solid fa-volume-high text-blue-500"></i>
              Playbacks Orquestrados
            </h3>
            <div className="space-y-4">
              {audioSamples.map((sample) => (
                <div 
                  key={sample.id} 
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all border ${
                    playingId === sample.id ? 'bg-blue-600/20 border-blue-500' : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => togglePlay(sample.id)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        playingId === sample.id ? 'bg-blue-500 text-white' : 'bg-white/20 text-white hover:bg-blue-500'
                      }`}
                    >
                      <i className={`fa-solid ${playingId === sample.id ? 'fa-pause' : 'fa-play'} ml-0.5`}></i>
                    </button>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{sample.title}</p>
                      <p className="text-xs text-gray-400">{sample.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {playingId === sample.id && (
                      <div className="flex gap-1">
                        <span className="w-1 h-4 bg-blue-500 animate-bounce delay-75"></span>
                        <span className="w-1 h-4 bg-blue-500 animate-bounce delay-150"></span>
                        <span className="w-1 h-4 bg-blue-500 animate-bounce delay-300"></span>
                      </div>
                    )}
                    <span className="text-xs text-gray-400 font-mono">{sample.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <p className="text-sm text-blue-200 flex items-start gap-3">
                <i className="fa-solid fa-circle-info mt-1"></i>
                Estes são apenas 3 exemplos dos 480 hinos inclusos no pack completo em alta resolução.
              </p>
            </div>
          </div>

          {/* Sheet Music Preview */}
          <div className="grid grid-cols-2 gap-4">
            {sheetSamples.map((sample) => (
              <div key={sample.id} className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/5 aspect-[3/4]">
                <img 
                  src={sample.previewUrl} 
                  alt={sample.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">{sample.category}</span>
                  <h4 className="font-bold text-sm sm:text-base leading-tight">{sample.title}</h4>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <i className="fa-solid fa-magnifying-glass text-xs"></i>
                </div>
              </div>
            ))}
            <div className="col-span-2 p-8 bg-white/5 border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-center">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-file-zipper text-2xl text-blue-400"></i>
               </div>
               <h4 className="font-bold mb-2">MIDI & Sibelius Inclusos</h4>
               <p className="text-sm text-gray-400 max-w-xs">Todos os hinos acompanham arquivos editáveis para quem deseja personalizar a orquestração.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Samples;
