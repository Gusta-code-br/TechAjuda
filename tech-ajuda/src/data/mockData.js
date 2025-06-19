
// Dados mockados para demonstração
const mockProviders = [
  {
    id: 1,
    name: 'João Silva',
    service: 'Elétrica',
    rating: 4.8,
    reviews: 45,
    location: 'Centro',
    phone: '(11) 99999-9999',
    email: 'joao@email.com',
    description: 'Eletricista com 10 anos de experiência',
    price: 'R$ 80/hora'
  },
  {
    id: 2,
    name: 'Maria Santos',
    service: 'Limpeza',
    rating: 4.9,
    reviews: 67,
    location: 'Vila Nova',
    phone: '(11) 88888-8888',
    email: 'maria@email.com',
    description: 'Serviços de limpeza residencial e comercial',
    price: 'R$ 50/hora'
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    service: 'Encanamento',
    rating: 4.7,
    reviews: 32,
    location: 'Jardim São Paulo',
    phone: '(11) 77777-7777',
    email: 'carlos@email.com',
    description: 'Encanador especializado em vazamentos',
    price: 'R$ 90/hora'
  }
];

const mockRequests = [
  {
    id: 1,
    providerId: 1,
    providerName: 'João Silva',
    service: 'Elétrica',
    date: '2024-06-20',
    time: '14:00',
    status: 'Pendente',
    description: 'Instalação de ventilador de teto'
  },
  {
    id: 2,
    providerId: 2,
    providerName: 'Maria Santos',
    service: 'Limpeza',
    date: '2024-06-22',
    time: '09:00',
    status: 'Confirmado',
    description: 'Limpeza completa do apartamento'
  }
];
