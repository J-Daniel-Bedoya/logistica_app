import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBalanceScale,
  FaCalendarCheck,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaFacebookF,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaFileSignature,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaPlug,
  FaShieldAlt,
  FaTimes,
  FaTruck,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '@/shared/components/sections/Hero';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Card from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import { contactInfo } from '@/features/contact/contact.data';
import { coverageZones, governmentLinks } from '@/features/home/government.data';
import './Home.scss';

export default function Home() {
  const [isPiracyModalOpen, setIsPiracyModalOpen] = useState(false);

  useEffect(() => {
    if (!isPiracyModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPiracyModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isPiracyModalOpen]);

  const billingTimeline = [
    {
      label: 'Fecha de facturación',
      date: '28 de cada mes',
      icon: FaFileInvoiceDollar,
    },
    {
      label: 'Entrega de factura',
      date: 'Del 29 al 4 de cada mes',
      icon: FaFileSignature,
    },
    {
      label: 'Fecha de vencimiento',
      date: '17 de cada mes',
      icon: FaCalendarCheck,
    },
    {
      label: 'Fecha de corte',
      date: '18 de cada mes',
      icon: FaFileAlt,
    },
    {
      label: 'Reconexión',
      date: 'Inmediata',
      icon: FaPlug,
    },
    {
      label: 'Recolección de equipos',
      date: 'Después del 20 de cada mes',
      icon: FaTruck,
    },
  ];

  return (
    <div className="home">
      <Hero
        title="LIS. Tu puerta de entrada al mundo digital"
        subtitle="Contáctenos para recibir asesoría y revise los planes disponibles para su hogar o negocio."
        backgroundImage="/assets/uploads/2024/03/Banner-1.jpeg"
        secondaryCta={{ label: 'Contáctenos', href: '/contacto' }}
        cta={{ label: 'Ver Planes', href: '/planes' }}
      />

      <section className="home__fiber">
        <div className="home__container">
          <SectionTitle
            title="Internet por Fibra Óptica"
            subtitle="Conexión rápida, estable y de alta calidad para tu hogar o negocio"
            centered
          />
          <div className="home__fiber-grid">
            <Card>
              <div className="home__fiber-card">
                <img
                  src="/assets/uploads/2024/03/wires_8353075.png"
                  alt="Fibra óptica"
                  className="home__fiber-img"
                />
                <h3>¿Cómo funciona Internet por fibra óptica?</h3>
                <p>
                  La fibra óptica transmite datos a través de pulsos de luz en hilos de vidrio,
                  logrando velocidades superiores y mayor estabilidad que el cobre tradicional.
                </p>
              </div>
            </Card>
            <Card>
              <div className="home__fiber-card">
                <img
                  src="/assets/uploads/2024/03/wires_9414840.png"
                  alt="Qué es internet por fibra óptica"
                  className="home__fiber-img"
                />
                <h3>¿Qué es Internet por fibra óptica?</h3>
                <p>
                  Es una tecnología de transmisión de datos que utiliza filamentos de vidrio o
                  plástico para enviar información a la velocidad de la luz.
                </p>
              </div>
            </Card>
            <Card>
              <div className="home__fiber-card">
                <img
                  src="/assets/uploads/2024/03/wifi_12192870.png"
                  alt="Velocidad de internet por fibra óptica"
                  className="home__fiber-img"
                />
                <h3>¿Internet por fibra óptica es más rápida?</h3>
                <p>
                  Sí. La fibra óptica ofrece velocidades hasta 100 veces superiores al internet
                  convencional, con menor latencia y mayor confiabilidad.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="home__announcement">
        <div className="home__container">
          <Card className="home__announcement-card">
            <div className="home__announcement-content">
              <img
                src="/assets/uploads/2025/08/MEGAFONO1.png"
                alt="Comunicado"
                className="home__announcement-img"
              />
              <span className="home__announcement-badge">Comunicado Oficial</span>
              <h3>Fiscalía General de la Nación</h3>
              <p>
                Información del MINTIC sobre aplicaciones ilegales (Flujo TV, Magis). Consulte los
                documentos oficiales para más información.
              </p>
              <div className="home__announcement-links">
                <Button
                  variant="outline"
                  size="sm"
                  href="/assets/uploads/2025/09/mintic_20250225_a.pdf"
                  external
                >
                  <FaFileAlt /> 1er Anexo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href="/assets/uploads/2025/09/mintic_20250225b_b.pdf"
                  external
                >
                  <FaFileAlt /> 2do Anexo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="home__sgmr">
        <div className="home__container">
          <div className="home__sgmr-content">
            <h2>¡SGM-R!</h2>
            <h3>Bienvenido a Soporte Técnico Remoto</h3>
            <p>Sistema General de Mantenimiento Remoto</p>
            <Button variant="secondary" href="/assets/uploads/2022/05/sgmr-logistica.pdf" external>
              Descargar Guía
            </Button>
          </div>
        </div>
      </section>

      <section className="home__coverage">
        <div className="home__container">
          <SectionTitle title="Zonas con Cobertura" centered />
          <div className="home__coverage-zones">
            {coverageZones.map((zone) => (
              <div key={zone} className="home__coverage-zone">
                <FaMapMarkerAlt />
                <span>{zone}</span>
              </div>
            ))}
          </div>
          <div className="home__coverage-map">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1vC9KboiNEFPBEYduiFBV1AIMFB6NJ1Y"
              title="Mapa de cobertura"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="home__pqrsf">
        <div className="home__container">
          <SectionTitle
            title="Contáctenos PQRSF"
            subtitle="Su opinión es muy importante para nuestra empresa. Estamos disponibles para atenderlo a través de los siguientes canales."
            centered
          />

          <div className="home__pqrsf-layout">
            <Card className="home__pqrsf-primary">
              <div className="home__pqrsf-primary-card">
                <img
                  src="/assets/uploads/2024/05/notification_PQRSF.png"
                  alt="PQRSF"
                  className="home__pqrsf-img"
                />
                <div className="home__pqrsf-primary-copy">
                  <h3>PQRSF</h3>
                  <p>
                    Conozca la respuesta a su PQRSF: Peticiones, Quejas, Reclamos, Sugerencias o
                    Felicitaciones. Ingrese al siguiente enlace y siga los pasos.
                  </p>
                </div>
                <Link to="/respuestas-pqrsf" className="home__pqrsf-link">
                  Consultar PQRSF
                </Link>
              </div>
            </Card>

            <Card className="home__pqrsf-panel">
              <div className="home__pqrsf-panel-content">
                <div className="home__pqrsf-panel-header">
                  <h3>Canales de atención</h3>
                  <p>
                    Organizamos nuestros medios de contacto para que encuentre la opción adecuada
                    con rapidez.
                  </p>
                </div>

                <div className="home__pqrsf-panel-grid">
                  <article className="home__pqrsf-info-card">
                    <div className="home__pqrsf-info-icon">
                      <FaPhone />
                    </div>
                    <div className="home__pqrsf-info-copy">
                      <h4>Línea fija</h4>
                      <p>{contactInfo.phone}</p>
                    </div>
                  </article>

                  <article className="home__pqrsf-info-card">
                    <div className="home__pqrsf-info-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="home__pqrsf-info-copy">
                      <h4>Celular y WhatsApp</h4>
                      <p>{contactInfo.phone2}</p>
                      <a
                        href={contactInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__pqrsf-inline-link"
                      >
                        Escribir por WhatsApp
                      </a>
                    </div>
                  </article>

                  <article className="home__pqrsf-info-card">
                    <div className="home__pqrsf-info-icon">
                      <FaGlobe />
                    </div>
                    <div className="home__pqrsf-info-copy">
                      <h4>Web y Redes</h4>
                      <p>{contactInfo.website}</p>
                      <a
                        href={contactInfo.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__pqrsf-inline-link"
                      >
                        <FaFacebookF /> @LISSopetran
                      </a>
                    </div>
                  </article>

                  <article className="home__pqrsf-info-card">
                    <div className="home__pqrsf-info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="home__pqrsf-info-copy">
                      <h4>Correo</h4>
                      <p>{contactInfo.email}</p>
                    </div>
                  </article>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="home__billing">
        <div className="home__container">
          <SectionTitle title="Línea del Tiempo de Facturación" centered />
          <div className="home__billing-timeline">
            {billingTimeline.map((item, i) => (
              <div key={i} className="home__billing-item">
                <div className="home__billing-marker">
                  <div className="home__billing-icon">
                    <item.icon />
                  </div>
                  <div className="home__billing-number">{i + 1}</div>
                </div>
                <div className="home__billing-copy">
                  <h4>{item.label}</h4>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home__safe-internet">
        <div className="home__container">
          <Card className="home__safe-internet-card">
            <div className="home__safe-internet-content">
              <div className="home__safe-internet-text">
                <SectionTitle
                  title="Internet Sano"
                  subtitle="Tu Guía para Navegar de Forma Segura y Responsable"
                />
                <p>
                  El Ministerio de Tecnologías de la Información y las Comunicaciones, a través de
                  la Dirección de Apropiación de TIC, presenta "Internet Sano". La iniciativa busca
                  proteger a niñas, niños y adolescentes del país de toda forma de conducta en la
                  red que pueda lesionar su integridad.
                </p>
                <Button
                  variant="primary"
                  href="https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red"
                  external
                >
                  Leer más
                </Button>
              </div>
              <div className="home__safe-internet-media">
                <img
                  src="/assets/uploads/2024/05/little-boy-showing-blank-screen-laptop-removebg-preview.gif"
                  alt="Niño mostrando la campaña Internet Sano en un portátil"
                  className="home__safe-internet-image"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="home__antipiracy">
        <div className="home__container">
          <Card className="home__antipiracy-card">
            <div className="home__antipiracy-content">
              <div className="home__antipiracy-body">
                <div className="home__antipiracy-head">
                  <span className="home__antipiracy-badge">
                    <FaExclamationTriangle />
                    Información importante
                  </span>
                  <div className="home__antipiracy-header">
                    <h3 className="home__antipiracy-title">No a la piratería de señal</h3>
                    <p className="home__antipiracy-summary">
                      Protege tu servicio y evita conexiones ilegales que comprometen la calidad,
                      la continuidad y la legalidad de tu instalación.
                    </p>
                  </div>
                </div>

                <div className="home__antipiracy-facts" aria-label="Datos legales">
                  <div className="home__antipiracy-fact">
                    <span>Operador habilitado</span>
                    <strong>Logística Integral Satelital S.A.S.</strong>
                  </div>
                  <div className="home__antipiracy-fact">
                    <span>NIT</span>
                    <strong>900.540.968-5</strong>
                  </div>
                  <div className="home__antipiracy-fact">
                    <span>Registro TIC</span>
                    <strong>96002617</strong>
                  </div>
                </div>

                <ul className="home__antipiracy-points">
                  <li className="home__antipiracy-point">
                    <FaShieldAlt />
                    <div>
                      <strong>Servicio legal y verificable</strong>
                      <p>
                        Solo los operadores autorizados pueden instalar y comercializar estos
                        servicios con respaldo técnico y normativo.
                      </p>
                    </div>
                  </li>
                  <li className="home__antipiracy-point">
                    <FaBalanceScale />
                    <div>
                      <strong>Riesgo penal y económico</strong>
                      <p>
                        El robo o distribución fraudulenta de señal puede derivar en sanciones
                        económicas y penas privativas de la libertad.
                      </p>
                    </div>
                  </li>
                  <li className="home__antipiracy-point">
                    <FaCheckCircle />
                    <div>
                      <strong>Regulariza tu conexión</strong>
                      <p>
                        Mantener tu servicio al día evita visitas de verificación y afectaciones en
                        la continuidad del acceso.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="home__antipiracy-actions">
                  <Button
                    variant="primary"
                    size="sm"
                    href="/assets/uploads/2024/05/pirateria-logistica-1.pdf"
                    external
                  >
                    Conoce la advertencia completa <FaArrowRight />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setIsPiracyModalOpen(true)}>
                    Ver texto completo
                  </Button>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home__antipiracy-link"
                  >
                    Habla con nosotros <FaWhatsapp />
                  </a>
                </div>
              </div>

              <div className="home__antipiracy-media">
                <img
                  src="/assets/uploads/2024/05/portrait-hacker-with-mask-scaled.jpg"
                  alt="Advertencia contra la piratería y el robo de señal"
                  className="home__antipiracy-image"
                />
                <div className="home__antipiracy-media-overlay">
                  <span className="home__antipiracy-media-badge">Advertencia legal</span>
                  <div className="home__antipiracy-media-panel">
                    <strong>Conexión legal, servicio seguro</strong>
                    <span>Evita instalaciones irregulares y protege tu acceso.</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {isPiracyModalOpen ? (
        <div
          className="home__legal-modal"
          role="presentation"
          onClick={() => setIsPiracyModalOpen(false)}
        >
          <div
            className="home__legal-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-legal-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="home__legal-modal-close"
              aria-label="Cerrar texto legal"
              onClick={() => setIsPiracyModalOpen(false)}
            >
              <FaTimes />
            </button>

            <div className="home__legal-modal-header">
              <span className="home__legal-modal-badge">Advertencia legal</span>
              <h3 id="home-legal-modal-title">Texto completo sobre piratería de señal</h3>
            </div>

            <p className="home__legal-modal-text">
              Logística Integral Satelital, con NIT 900.540.968-5 y registro TIC 96002617, está
              autorizada para ofrecer servicios de internet y televisión. Informamos a la comunidad
              que el robo de señal o piratería está penalizado por la ley colombiana. Obtener señal
              sin autorización o distribuirla fraudulentamente puede llevar a conflictos penales,
              con sanciones de hasta $234 millones y prisión de 26 a 90 meses. El MINTIC y las
              autoridades están verificando la legalidad de estos servicios, pudiendo visitar su
              hogar. Evite sanciones y legalice su conexión, ser buen vecino no debe costarle caro.
            </p>

            <div className="home__legal-modal-actions">
              <Button variant="outline" onClick={() => setIsPiracyModalOpen(false)}>
                Cerrar
              </Button>
              <Button
                variant="primary"
                href="/assets/uploads/2024/05/pirateria-logistica-1.pdf"
                external
              >
                Descargar documento
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <section className="home__government"> 
        <div className="home__container">
          <SectionTitle title="Enlaces Institucionales" centered />
          <div className="home__government-grid">
            {governmentLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home__government-link"
              >
                <div className="home__government-logo-wrap">
                  <img
                    src={link.logoSrc}
                    alt={link.logoAlt}
                    className="home__government-logo"
                    loading="lazy"
                  />
                </div>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}








