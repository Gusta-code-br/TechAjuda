
// Home Page
import React from 'react';
import { Search, Star, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Adjust path as needed


const HomePage = () => {
  const { setCurrentPage, searchTerm, setSearchTerm } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Conectando você aos melhores
          <span className="text-blue-600"> profissionais locais</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Encontre prestadores de serviços confiáveis para suas necessidades domésticas.
          Rápido, seguro e avaliado pela comunidade.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar por serviço ou profissional..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          onClick={() => setCurrentPage('providers')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
        >
          Ver Prestadores
        </button>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Busca Fácil</h3>
          <p className="text-gray-600">Encontre o profissional ideal para seu serviço em segundos</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Avaliações Reais</h3>
          <p className="text-gray-600">Veja avaliações de outros clientes antes de contratar</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Seguro e Confiável</h3>
          <p className="text-gray-600">Todos os prestadores são verificados e avaliados</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">É um prestador de serviços?</h2>
        <p className="text-xl mb-6">Cadastre-se e conecte-se com clientes da sua região</p>
        <button
          onClick={() => setCurrentPage('register')}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Cadastrar como Prestador
        </button>
      </div>
    </div>
  );
};
export default HomePage;