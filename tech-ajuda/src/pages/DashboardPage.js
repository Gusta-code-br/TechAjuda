// Dashboard Page
import React from 'react';
import { Star, Plus, Search, Edit, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Adjust path as needed


const DashboardPage = () => {
  const { user, userType, requests, providers } = useApp();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Você precisa estar logado para acessar o dashboard.</p>
      </div>
    );
  }

  const clientStats = {
    totalRequests: requests.length,
    pendingRequests: requests.filter(r => r.status === 'Pendente').length,
    confirmedRequests: requests.filter(r => r.status === 'Confirmado').length,
    completedRequests: requests.filter(r => r.status === 'Concluído').length
  };

  const providerStats = {
    totalServices: 15,
    pendingServices: 3,
    completedServices: 12,
    rating: 4.8
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo de volta, {user.name}!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {userType === 'client' ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total de Solicitações</h3>
              <p className="text-3xl font-bold text-blue-600">{clientStats.totalRequests}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pendentes</h3>
              <p className="text-3xl font-bold text-yellow-600">{clientStats.pendingRequests}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmadas</h3>
              <p className="text-3xl font-bold text-green-600">{clientStats.confirmedRequests}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Concluídas</h3>
              <p className="text-3xl font-bold text-blue-600">{clientStats.completedRequests}</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Serviços Realizados</h3>
              <p className="text-3xl font-bold text-blue-600">{providerStats.totalServices}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pendentes</h3>
              <p className="text-3xl font-bold text-yellow-600">{providerStats.pendingServices}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Concluídos</h3>
              <p className="text-3xl font-bold text-green-600">{providerStats.completedServices}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Avaliação</h3>
              <div className="flex items-center">
                <p className="text-3xl font-bold text-yellow-600 mr-2">{providerStats.rating}</p>
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
          {userType === 'client' ? (
            <div className="space-y-4">
              {requests.slice(0, 3).map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{request.providerName}</p>
                    <p className="text-sm text-gray-600">{request.service} - {request.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    request.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                    request.status === 'Confirmado' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {request.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">João Silva</p>
                  <p className="text-sm text-gray-600">Instalação elétrica - Hoje</p>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Confirmado
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Maria Santos</p>
                  <p className="text-sm text-gray-600">Manutenção - Amanhã</p>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pendente
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
          <div className="space-y-3">
            {userType === 'client' ? (
              <>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Nova Solicitação
                </button>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Buscar Prestadores
                </button>
              </>
            ) : (
              <>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center">
                  <Edit className="h-5 w-5 mr-2" />
                  Atualizar Perfil
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Ver Mensagens
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;