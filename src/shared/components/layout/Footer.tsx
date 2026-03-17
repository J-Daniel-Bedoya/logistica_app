import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaTachometerAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { contactInfo } from '@/features/contact/contact.data';
import './Footer.scss';

const quickLinks = [
  { label: 'Quiénes Somos', path: '/quienes-somos' },
  { label: 'Planes', path: '/planes' },
  { label: 'Puntos de pago', path: '/contacto' },
  { label: 'Normatividad', path: '/normatividad' },
  { label: 'Tips de internet', path: '/servicios' },
  { label: 'PQRSF', path: '/respuestas-pqrsf' },
] as const;

const quickActions = [
  {
    label: 'Pagar con Wompi',
    href: contactInfo.paymentLink ?? '/contacto',
    external: true,
    accent: 'payment',
    iconType: 'wompi',
  },
  {
    label: 'Medir velocidad',
    href: 'https://www.speedtest.net/es',
    external: true,
    accent: 'speed',
    iconType: 'speed',
  },
] as const;

const contactItems = [
  { icon: FaMapMarkerAlt, label: 'Dirección', value: contactInfo.address },
  { icon: FaPhone, label: 'Teléfonos', value: `${contactInfo.phone} · ${contactInfo.phone2}` },
  { icon: FaEnvelope, label: 'Correo', value: contactInfo.email },
] as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__main">
            <section className="footer__summary">
              <div className="footer__brand">
                <Link to="/" className="footer__logo-link" aria-label="Ir al inicio">
                  <img
                    src="/assets/brands/lis/logo.png"
                    alt="Logística Integral Satelital"
                    className="footer__logo"
                  />
                </Link>

                <div className="footer__brand-copy">
                  <h3>Logística Integral Satelital</h3>
                  <p>
                    Proveedor regional de internet por fibra óptica y soluciones de conectividad
                    con atención cercana en el occidente antioqueño.
                  </p>
                </div>
              </div>

              <div className="footer__social" aria-label="Redes sociales">
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>

              <div className="footer__actions" aria-label="Acciones rápidas">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    className={`footer__action footer__action--${action.accent}`}
                  >
                    {action.iconType === 'wompi' ? (
                      <img
                        src="/assets/brands/wompi-mark.svg"
                        alt=""
                        aria-hidden="true"
                        className="footer__wompi-icon"
                      />
                    ) : (
                      <FaTachometerAlt />
                    )}
                    <span>{action.label}</span>
                  </a>
                ))}
              </div>
            </section>

            <div className="footer__details">
              <section className="footer__column">
                <div className="footer__card-header">
                  <h4>Contacto directo</h4>
                  <p>Canales principales para atención y soporte.</p>
                </div>

                <ul className="footer__contact-list">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.label} className="footer__contact-item">
                        <div className="footer__contact-icon">
                          <Icon />
                        </div>
                        <div className="footer__contact-copy">
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section className="footer__column">
                <div className="footer__card-header">
                  <h4>Horarios de atención</h4>
                  <p>Disponibilidad de oficinas y orientación al usuario.</p>
                </div>

                <ul className="footer__schedule-list">
                  {(contactInfo.officeHours ?? []).slice(0, 2).map((item) => (
                    <li key={item} className="footer__schedule-item">
                      <FaClock />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="footer__column footer__column--links">
                <div className="footer__card-header">
                  <h4>Enlaces útiles</h4>
                  <p>Accesos rápidos a las secciones más consultadas.</p>
                </div>

                <div className="footer__links-grid">
                  {quickLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="footer__link-chip">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <section className="footer__map-section">
            <div className="footer__card-header">
              <h4>Cobertura regional</h4>
              <p>Consulta la presencia operativa y los puntos de atención.</p>
            </div>

            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1vC9KboiNEFPBEYduiFBV1AIMFB6NJ1Y"
                title="Mapa de cobertura"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p>
            &copy; {new Date().getFullYear()} Logística Integral Satelital. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
