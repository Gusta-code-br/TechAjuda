// Provider Detail Page
import React, { useState } from 'react';
import { User, Star, Phone, Mail, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Adjust path as needed


const ProviderDetailPage = () => {
  const { selectedProvider, setCurrentPage, user, requests, setRequests } = useApp();
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestForm, setRequestForm] = useState({
    date: '',
    time: '',
    description: ''
  });

  if (!selectedProvider) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Prestador não encontrado.</p>
        <button
          onClick={() => setCurrentPage('providers')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Voltar para Prestadores
        </button>
      </div>
    );
  }

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Você precisa estar logado para solicitar um serviço');
      setCurrentPage('login');
      return;
    }

    const newRequest = {
      id: Date.now(),
      providerId: selectedProvider.id,
      providerName: selectedProvider.name,
      service: selectedProvider.service,
      date: requestForm.date,
      time: requestForm.time,
      status: 'Pendente',
      description: requestForm.description
    };

    setRequests([...requests, newRequest]);
    setShowRequestForm(false);
    setRequestForm({ date: '', time: '', description: '' });
    alert('Solicitação enviada com sucesso!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => setCurrentPage('providers')}
        className="mb-6 text-blue-600 hover:text-blue-700 font-medium"
      >
        ← Voltar para Prestadores
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-blue-600" />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-bold text-gray-900">{selectedProvider.name}</h1>
              <p className="text-xl text-blue-600 font-medium">{selectedProvider.service}</p>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-gray-600">
                  {selectedProvider.rating} ({selectedProvider.reviews} avaliações)
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{selectedProvider.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{selectedProvider.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{selectedProvider.location}</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4 mt-8">Sobre</h2>
              <p className="text-gray-600">{selectedProvider.description}</p>

              <h2 className="text-xl font-semibold mb-4 mt-8">Preço</h2>
              <p className="text-2xl font-bold text-green-600">{selectedProvider.price}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Solicitar Serviço</h2>
              {!showRequestForm ? (
                <button
                  onClick={() => setShowRequestForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Solicitar Serviço
                </button>
              ) : (
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Data desejada
                    </label>
                    <input
                      type="date"
                      required
                      value={requestForm.date}
                      onChange={(e) => setRequestForm({ ...requestForm, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Horário desejado
                    </label>
                    <input
                      type="time"
                      required
                      value={requestForm.time}
                      onChange={(e) => setRequestForm({ ...requestForm, time: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição do serviço
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={requestForm.description}
                      onChange={(e) => setRequestForm({ ...requestForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Descreva detalhadamente o que precisa ser feito..."
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                    >
                      Enviar Solicitação
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowRequestForm(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md font-medium"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Avaliações</h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">João Silva</span>
                    </div>
                    <p className="text-gray-600">Excelente trabalho! Muito pontual e profissional.</p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Maria Santos</span>
                    </div>
                    <p className="text-gray-600">Bom atendimento, preço justo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetailPage;