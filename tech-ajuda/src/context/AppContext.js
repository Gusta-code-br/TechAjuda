// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Dados mockados
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

// Criação do contexto
export const AppContext = createContext();

// Hook personalizado para usar o contexto
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Provider do contexto
export const AppProvider = ({ children }) => {
  // Estados globais
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState('client');
  const [providers, setProviders] = useState(mockProviders);
  const [requests, setRequests] = useState(mockRequests);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtra os provedores com base no termo de busca
  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Valor do contexto que será compartilhado
  const contextValue = {
    currentPage,
    setCurrentPage,
    user,
    setUser,
    userType,
    setUserType,
    providers,
    setProviders,
    requests,
    setRequests,
    selectedProvider,
    setSelectedProvider,
    searchTerm,
    setSearchTerm,
    filteredProviders,
    mobileMenuOpen,
    setMobileMenuOpen
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};