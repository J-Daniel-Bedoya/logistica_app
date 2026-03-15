import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingContactActions from './FloatingContactActions';
import ContactRequestModal from '../sections/ContactRequestModal';
import './Layout.scss';

export default function Layout() {
  const [contactModalPath, setContactModalPath] = useState<string | null>(null);
  const [contactModalSession, setContactModalSession] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isContactModalOpen = contactModalPath === location.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="layout">
      <Header onMobileMenuChange={setMobileMenuOpen} />
      <main className="layout__main">
        <Outlet />
      </main>
      <FloatingContactActions
        mobileMenuOpen={mobileMenuOpen}
        onOpenForm={() => {
          setContactModalSession((current) => current + 1);
          setContactModalPath(location.pathname);
        }}
      />
      <ContactRequestModal
        key={contactModalSession}
        isOpen={isContactModalOpen}
        onClose={() => setContactModalPath(null)}
      />
      <Footer />
    </div>
  );
}
