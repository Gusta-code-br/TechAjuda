// Header Component
import React from 'react';
import { Shield, User, X, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Adjust path as needed


const Header = () => {
  const { currentPage, setCurrentPage, user, setUser, mobileMenuOpen, setMobileMenuOpen } = useApp();

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Shield className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">TechAjuda</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`hover:text-blue-200 ${currentPage === 'home' ? 'text-blue-200' : ''}`}
            >
              Início
            </button>
            <button
              onClick={() => setCurrentPage('providers')}
              className={`hover:text-blue-200 ${currentPage === 'providers' ? 'text-blue-200' : ''}`}
            >
              Prestadores
            </button>
            {user && (
              <>
                <button
                  onClick={() => setCurrentPage('requests')}
                  className={`hover:text-blue-200 ${currentPage === 'requests' ? 'text-blue-200' : ''}`}
                >
                  Solicitações
                </button>
                <button
                  onClick={() => setCurrentPage('dashboard')}
                  className={`hover:text-blue-200 ${currentPage === 'dashboard' ? 'text-blue-200' : ''}`}
                >
                  Dashboard
                </button>
              </>
            )}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('profile')}
                  className="flex items-center space-x-2 hover:text-blue-200"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('login')}
                  className="hover:text-blue-200"
                >
                  Entrar
                </button>
                <button
                  onClick={() => setCurrentPage('register')}
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Cadastrar
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-700 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="text-left px-4 py-2 hover:bg-blue-600"
              >
                Início
              </button>
              <button
                onClick={() => { setCurrentPage('providers'); setMobileMenuOpen(false); }}
                className="text-left px-4 py-2 hover:bg-blue-600"
              >
                Prestadores
              </button>
              {user ? (
                <>
                  <button
                    onClick={() => { setCurrentPage('requests'); setMobileMenuOpen(false); }}
                    className="text-left px-4 py-2 hover:bg-blue-600"
                  >
                    Solicitações
                  </button>
                  <button
                    onClick={() => { setCurrentPage('dashboard'); setMobileMenuOpen(false); }}
                    className="text-left px-4 py-2 hover:bg-blue-600"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }}
                    className="text-left px-4 py-2 hover:bg-blue-600"
                  >
                    Perfil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 hover:bg-blue-600"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }}
                    className="text-left px-4 py-2 hover:bg-blue-600"
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => { setCurrentPage('register'); setMobileMenuOpen(false); }}
                    className="text-left px-4 py-2 hover:bg-blue-600"
                  >
                    Cadastrar
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;