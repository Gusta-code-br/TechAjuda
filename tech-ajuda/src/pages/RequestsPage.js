// Requests Page

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext'; 

const RequestsPage = () => {
  const { requests, user, setCurrentPage } = useApp();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Você precisa estar logado para ver suas solicitações.</p>
        <button
          onClick={() => setCurrentPage('login')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Fazer Login
        </button>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Confirmado':
        return 'bg-green-100 text-green-800';
      case 'Concluído':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Minhas Solicitações</h1>

      {requests.length === 0 ? (
        <div className="text-center py-12">
          <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma solicitação ainda</h3>
          <p className="text-gray-600 mb-4">Você ainda não fez nenhuma solicitação de serviço.</p>
          <button
            onClick={() => setCurrentPage('providers')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Buscar Prestadores
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{request.providerName}</h3>
                  <p className="text-blue-600 font-medium">{request.service}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                  {request.status}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Data e Hora</p>
                  <p className="font-medium">{request.date} às {request.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Solicitação #</p>
                  <p className="font-medium">{request.id}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Descrição</p>
                <p className="text-gray-900">{request.description}</p>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                  Contatar Prestador
                </button>
                {request.status === 'Pendente' && (
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
                    Cancelar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestsPage;