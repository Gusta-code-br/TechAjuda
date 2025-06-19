// Providers Page
import React from 'react';
import { Search, User, Star, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Adjust path as needed

const ProvidersPage = () => {
  const { filteredProviders, setSelectedProvider, setCurrentPage, searchTerm, setSearchTerm } = useApp();

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    setCurrentPage('provider-detail');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Prestadores de Serviços</h1>
        
        {/* Search Bar */}
        <div className="max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar prestadores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleProviderClick(provider)}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                  <p className="text-blue-600 font-medium">{provider.service}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-2 text-sm text-gray-600">
                  {provider.rating} ({provider.reviews} avaliações)
                </span>
              </div>
              
              <div className="flex items-center mb-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="ml-2 text-sm text-gray-600">{provider.location}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-green-600">{provider.price}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProviders.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum prestador encontrado</h3>
          <p className="text-gray-600">Tente buscar por outro termo ou serviço.</p>
        </div>
      )}
    </div>
  );
};

export default ProvidersPage;