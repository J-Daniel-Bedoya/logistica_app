import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaMapMarkerAlt, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { navigation } from '@/app/navigation';
import { contactInfo } from '@/features/contact/contact.data';
import type { NavItem } from '@/shared/types';
import './Header.scss';

interface HeaderProps {
  onMobileMenuChange?: (isOpen: boolean) => void;
}

export default function Header({ onMobileMenuChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPath, setDropdownPath] = useState('');
  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const isMenuVisible = menuOpen && menuPath === location.pathname;
  const activeDropdown = dropdownPath === location.pathname ? openDropdown : null;

  const isDesktopViewport = () =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 992px)').matches;

  const closeNavigationState = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  const handleNavigationSelection = () => {
    closeNavigationState();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const toggleDropdown = (label: string) => {
    if (isDesktopViewport()) {
      setDropdownPath(location.pathname);
      setOpenDropdown(label);
      return;
    }

    setDropdownPath(location.pathname);
    setOpenDropdown(() => (activeDropdown === label ? null : label));
  };

  const handleDesktopHover = (label: string | null) => {
    if (!isDesktopViewport()) return;
    setDropdownPath(location.pathname);
    setOpenDropdown(label);
  };

  const handleDesktopLeave = () => {
    if (!isDesktopViewport()) return;
    setOpenDropdown(null);
  };

  const isItemActive = (item: NavItem) =>
    location.pathname === item.path ||
    location.pathname === item.dropdownPath ||
    item.children?.some((child) => child.path === location.pathname);

  const isPathActive = (path?: string) => Boolean(path && location.pathname === path);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (headerRef.current?.contains(target)) return;

      closeNavigationState();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      closeNavigationState();
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMenuVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuVisible]);

  useEffect(() => {
    onMobileMenuChange?.(isMenuVisible);
  }, [isMenuVisible, onMobileMenuChange]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="/assets/uploads/2021/03/logo.png" alt="Logistica Integral Satelital" />
          <span className="header__logo-copy">
            <strong className="header__logo-text">LIS</strong>
            <small className="header__logo-subtext">Logistica Integral Satelital</small>
          </span>
        </Link>

        <button
          className="header__toggle"
          onClick={() => {
            setMenuPath(location.pathname);
            setMenuOpen(!isMenuVisible);
          }}
          aria-label="Toggle menu"
        >
          {isMenuVisible ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuVisible && (
          <button
            className="header__backdrop"
            onClick={closeNavigationState}
            aria-label="Cerrar menu"
          />
        )}

        <nav className={`header__nav ${isMenuVisible ? 'header__nav--open' : ''}`}>
          <div className="header__mobile-panel">
            <div className="header__mobile-header">
              <div className="header__mobile-brand">
                <img src="/assets/uploads/2021/03/logo.png" alt="Logistica Integral Satelital" />
                <div className="header__mobile-brand-copy">
                  <strong>Logistica Integral Satelital</strong>
                </div>
              </div>

              <button
                type="button"
                className="header__mobile-close"
                onClick={closeNavigationState}
                aria-label="Cerrar menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="header__mobile-body">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className={`header__nav-item ${
                    activeDropdown === item.label ? 'header__nav-item--open' : ''
                  }`}
                  onMouseEnter={() => handleDesktopHover(item.children ? item.label : null)}
                  onMouseLeave={handleDesktopLeave}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`header__nav-link header__nav-link--dropdown ${
                          isItemActive(item) ? 'header__nav-link--active' : ''
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <FaChevronDown className="header__chevron" />
                      </button>
                      <div
                        className={`header__dropdown ${
                          activeDropdown === item.label ? 'header__dropdown--open' : ''
                        }`}
                      >
                        <Link
                          to={item.dropdownPath ?? item.path}
                          className={`header__dropdown-link ${
                            isPathActive(item.dropdownPath ?? item.path)
                              ? 'header__dropdown-link--active'
                              : ''
                          }`}
                          onClick={handleNavigationSelection}
                        >
                          {item.dropdownLabel ?? item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`header__dropdown-link ${
                              isPathActive(child.path) ? 'header__dropdown-link--active' : ''
                            }`}
                            onClick={handleNavigationSelection}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`header__nav-link ${
                        location.pathname === item.path ? 'header__nav-link--active' : ''
                      }`}
                      onClick={handleNavigationSelection}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="header__mobile-actions">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-action"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/contacto"
                className="header__mobile-action header__mobile-action--secondary"
                onClick={handleNavigationSelection}
              >
                <FaMapMarkerAlt />
                <span>Puntos de pago</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
