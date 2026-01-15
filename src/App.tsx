
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import ProceduresView from './views/ProceduresView';
import TourismView from './views/TourismView';
import DirectoryView from './views/DirectoryView';
import NewsView from './views/NewsView';
import MembershipView from './views/MembershipView';
import LoginModal from './components/LoginModal';
import DashboardView from './views/DashboardView';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeView onNavigate={setCurrentPage} />;
      case 'about': return <AboutView />;
      case 'services': return <ServicesView />;
      case 'procedures': return <ProceduresView />;
      case 'tourism': return <TourismView />;
      case 'directory': return <DirectoryView />;
      case 'news': return <NewsView />;
      case 'membership': return <MembershipView />;
      case 'dashboard': return isLoggedIn ? <DashboardView onLogout={handleLogout} /> : <HomeView onNavigate={setCurrentPage} />;
      default: return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen ${currentPage === 'dashboard' ? 'bg-slate-950' : 'bg-white'}`}>
      {currentPage !== 'dashboard' && (
        <Navbar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />
      )}
      
      <main className="transition-all duration-500">
        {renderPage()}
      </main>

      {currentPage !== 'dashboard' && <Footer onNavigate={setCurrentPage} />}

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default App;
