// src/App.js
import React from 'react';
import { AppProvider, useApp } from './context/AppContext';

// Importações de componentes
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProvidersPage from './pages/ProvidersPage';
import ProviderDetailPage from './pages/ProviderDetailPage';
import RequestsPage from './pages/RequestsPage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';

// Componente principal da aplicação
const TechAjuda = () => {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Componente de cabeçalho */}
      <Header />
      
      {/* Conteúdo principal com roteamento condicional */}
      <main className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'register' && <RegisterPage />}
        {currentPage === 'providers' && <ProvidersPage />}
        {currentPage === 'provider-detail' && <ProviderDetailPage />}
        {currentPage === 'requests' && <RequestsPage />}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'dashboard' && <DashboardPage />}
      </main>
    </div>
  );
};

// Componente App que envolve tudo com o Provider
const App = () => {
  return (
    <AppProvider>
      <TechAjuda />
    </AppProvider>
  );
};

export default App;