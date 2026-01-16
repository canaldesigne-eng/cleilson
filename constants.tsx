
import { PackFeature, PricingPlan, Testimonial, MaterialSample } from './types';

export const FEATURES: PackFeature[] = [
  {
    icon: 'fa-music',
    title: 'Playbacks Orquestrados',
    description: 'Áudios em alta fidelidade com orquestra completa para todos os 480 hinos e coros.'
  },
  {
    icon: 'fa-file-pdf',
    title: 'Partituras Digitais',
    description: 'Acesso a partituras em PDF otimizadas para tablets e impressão, incluindo vozes separadas.'
  },
  {
    icon: 'fa-keyboard',
    title: 'Arquivos MIDI & Sibelius',
    description: 'Edite e estude as notas com arquivos MIDI e arquivos-fonte para softwares musicais.'
  },
  {
    icon: 'fa-bolt',
    title: 'Acesso Vitalício',
    description: 'Pague uma única vez e tenha acesso para sempre a todas as atualizações futuras do pack.'
  }
];

export const MATERIAL_SAMPLES: MaterialSample[] = [
  { id: 1, title: 'Hino 1 - Cristo meu Mestre', type: 'audio', duration: '3:45', category: 'Playback Orquestral' },
  { id: 2, title: 'Hino 260 - Sou servo inútil', type: 'audio', duration: '4:12', category: 'Playback Orquestral' },
  { id: 3, title: 'Hino 400 - Deixou o esplendor', type: 'audio', duration: '3:20', category: 'Playback Orquestral' },
  { id: 4, title: 'Grade Orquestral Completa', type: 'sheet', previewUrl: 'https://picsum.photos/id/111/400/600', category: 'Partitura PDF' },
  { id: 5, title: 'Vozes Separadas (S.A.T.B)', type: 'sheet', previewUrl: 'https://picsum.photos/id/158/400/600', category: 'Partitura PDF' },
  { id: 6, title: 'Arquivos Editáveis', type: 'file', category: 'MIDI / Sibelius' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maria Santos',
    role: 'Organista - SP',
    content: 'Os playbacks são maravilhosos! Ajudaram muito no meu estudo individual, principalmente para manter o tempo correto dos hinos mais complexos.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=maria'
  },
  {
    name: 'João Pedro',
    role: 'Trombonista - PR',
    content: 'As partituras em PDF são muito nítidas. Uso no tablet durante os ensaios e a facilidade de ter todos os hinos organizados é um diferencial enorme.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=joao'
  },
  {
    name: 'Ricardo Mendes',
    role: 'Encarregado Regional - MG',
    content: 'Material de extrema qualidade. Os arquivos MIDI facilitam muito quando precisamos fazer alguma adaptação para a orquestra local. Recomendo!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Essencial',
    price: 'R$ 47',
    features: ['480 Hinos em MP3', 'Cifras Simplificadas', 'Suporte via Email']
  },
  {
    id: 'premium',
    name: 'Profissional',
    price: 'R$ 97',
    features: ['Tudo do Essencial', 'Partituras Completas PDF', 'Arquivos MIDI', 'Coros Inclusos', 'Suporte Prioritário'],
    popular: true
  },
  {
    id: 'master',
    name: 'Master Orquestra',
    price: 'R$ 147',
    features: ['Tudo do Premium', 'Arquivos Sibelius/Encore', 'Aulas de Teoria Musical', 'Acesso VIP Grupo WhatsApp']
  }
];

export const SYSTEM_INSTRUCTION = `
Você é um assistente virtual especialista no Hinário 5 da CCB (Congregação Cristã no Brasil). 
Seu objetivo é ajudar potenciais clientes a entender o valor do "Pack Musical Hinário 5".
O pack contém playbacks, partituras, MIDIs e arquivos para softwares de edição.
Seja educado, solícito e use uma linguagem respeitosa. 
Fale sobre a importância de ter um material de qualidade para o estudo musical.
Se perguntarem o preço, mencione que existem planos de R$ 47 a R$ 147.
Não saia do assunto musical ou CCB.
`;
