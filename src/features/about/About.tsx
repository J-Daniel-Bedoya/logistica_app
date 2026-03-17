import {
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Card from '@/shared/components/ui/Card';
import { paymentPoints } from '@/features/contact/contact.data';
import './About.scss';

const values = [
  { icon: <FaStar />, title: 'Calidad en el servicio' },
  { icon: <FaClock />, title: 'Puntualidad' },
  { icon: <FaCheckCircle />, title: 'Integridad' },
  { icon: <FaUsers />, title: 'Compañerismo' },
  { icon: <FaHandshake />, title: 'Responsabilidad' },
];

const galleryImages = [
  {
    src: '/assets/uploads/2024/04/Sopetran-Antioquia-IMG-20171121-WA0012-1.jpg',
    alt: 'Vista panorámica de Sopetrán',
    title: 'Cobertura regional',
    description: 'Conectamos Sopetrán y municipios cercanos con presencia local.',
    variant: 'feature',
    objectPosition: 'center center',
  },
  {
    src: '/assets/uploads/2021/04/imagen-lis-8.jpeg',
    alt: 'Equipo administrativo en atención',
    title: 'Atención cercana',
    description: 'Acompañamos cada solicitud con respuesta ágil y servicio directo.',
    variant: 'standard',
    objectPosition: 'center center',
  },
  {
    src: '/assets/uploads/2021/04/imagen-lis-3.jpeg',
    alt: 'Técnicos del equipo de trabajo',
    title: 'Talento en campo',
    description: 'Nuestro equipo técnico atiende instalaciones y soporte diario.',
    variant: 'standard',
    objectPosition: 'center 38%',
  },
  {
    src: '/assets/uploads/2024/06/Imagen-4.jpg',
    alt: 'Sede de atención al usuario',
    title: 'Sedes accesibles',
    description: 'Contamos con puntos de atención para estar más cerca del usuario.',
    variant: 'standard',
    objectPosition: 'center center',
  },
  {
    src: '/assets/uploads/2024/06/Imagen-12.jpg',
    alt: 'Técnicos en labores de mantenimiento',
    title: 'Operación en terreno',
    description: 'Realizamos mantenimiento en zonas rurales y de difícil acceso.',
    variant: 'standard',
    objectPosition: 'center center',
  },
  {
    src: '/assets/uploads/2024/06/Imagen-15.jpg',
    alt: 'Infraestructura de red en torre',
    title: 'Infraestructura activa',
    description: 'Supervisamos torres y enlaces que sostienen la conectividad.',
    variant: 'standard',
    objectPosition: '56% center',
  },
  {
    src: '/assets/uploads/2024/06/Imagen-19.jpg',
    alt: 'Flota operativa del equipo técnico',
    title: 'Respuesta oportuna',
    description: 'Nuestra movilidad técnica permite cubrir la región con rapidez.',
    variant: 'standard',
    objectPosition: 'center center',
  },
];

const heroHighlights = [
  {
    label: 'Trayectoria',
    value: 'Desde 2012',
    description: 'Más de una década conectando hogares, comercios y veredas de la región.',
  },
  {
    label: 'Cobertura regional',
    value: '11 municipios',
    description: 'Operación activa en Sopetrán y poblaciones clave del occidente antioqueño.',
  },
  {
    label: 'Atención cercana',
    value: '5 sedes',
    description: 'Puntos con secretaria y horario de atención para acompañar a cada usuario.',
  },
];

const historyBlocks = [
  {
    kicker: 'Historia',
    title: 'Origen y evolución de LIS',
    paragraphs: [
      'Logística Integral Satelital S.A.S. fue creada en 2012 por Ricardo Arturo Vásquez Ríos en Sopetrán. En sus inicios, la empresa estuvo enfocada principalmente en servicios de televisión.',
      'Con la evolución del sector y las necesidades de la región, en 2016 LIS inició la transición hacia el servicio de internet, ampliando su propuesta de conectividad para hogares y negocios.',
      'Esta transición permitió fortalecer la operación de la empresa y responder con mayor alcance a las necesidades de conectividad en la región.',
      'Desde entonces, LIS ha consolidado un servicio más completo, combinando experiencia, cercanía y soporte para sus usuarios.',
      'Hoy la empresa integra servicios de televisión e internet con atención cercana y presencia en varios municipios del occidente antioqueño.',
    ],
  },
];

const historyFacts = [
  { label: 'Fundación', value: '2012' },
  { label: 'Inicio en internet', value: '2016' },
  { label: 'Origen', value: 'Sopetrán' },
  { label: 'Servicios', value: 'TV e internet' },
];

const valuesNarrative = [
  'En Logística Integral Satelital, nuestros valores son el cimiento de todas nuestras operaciones y el motor que impulsa nuestro compromiso con la excelencia en el sector de las telecomunicaciones.',
  'La calidad en el servicio es nuestra prioridad, garantizando soluciones de conectividad y comunicaciones de primer nivel que satisfacen las necesidades de nuestros clientes de manera eficiente y profesional. La puntualidad es crucial para nosotros, asegurando que cada proyecto y soporte técnico se realice a tiempo, manteniendo la confianza y satisfacción de nuestros usuarios.',
  'Actuamos con integridad en todas nuestras interacciones, fomentando la transparencia y el respeto en cada relación comercial. El compañerismo es fundamental en nuestro entorno de trabajo, promoviendo un ambiente colaborativo y de apoyo mutuo que fortalece nuestro equipo. Finalmente, asumimos la responsabilidad en cada tarea que emprendemos, comprometidos con la mejora continua y el cumplimiento de nuestros compromisos.',
  'Estos valores no solo definen quiénes somos, sino que también orientan cada decisión y acción que tomamos en nuestra misión de ofrecer servicios de telecomunicaciones integrales de excelencia.',
];

export default function About() {
  const [featuredImage, ...secondaryImages] = galleryImages;

  return (
    <div className="about">
      <section className="about__hero">
        <div className="about__container">
          <div className="about__hero-panel">
            <div className="about__hero-copy">
              <span className="about__hero-eyebrow">Nuestra empresa</span>
              <h1>Quiénes Somos</h1>
              <p>
                Conoce nuestra historia, la trayectoria que hemos construido en la región y la
                manera en que acompañamos a cada usuario con servicio cercano y presencia real.
              </p>
            </div>

            <div className="about__hero-highlights" aria-label="Aspectos clave de la empresa">
              {heroHighlights.map((item) => (
                <article key={item.label} className="about__hero-highlight">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about__history">
        <div className="about__container">
          <SectionTitle title="Conoce Nuestra Historia" centered />
          <div className="about__history-layout">
            <div className="about__history-content">
              {historyBlocks.map((block) => (
                <article key={block.title} className="about__history-block">
                  <span className="about__history-kicker">{block.kicker}</span>
                  <h3>{block.title}</h3>
                  <div className="about__history-text">
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="about__history-summary" aria-label="Datos clave de la empresa">
              <div className="about__history-summary-card">
                <span className="about__history-summary-label">Datos clave</span>
                <h3>De la televisión al internet regional</h3>
                <p>
                  LIS nació en Sopetrán, comenzó con televisión y evolucionó hacia internet para
                  responder mejor a las necesidades de conectividad de la región.
                </p>

                <dl className="about__history-facts">
                  {historyFacts.map((fact) => (
                    <div key={fact.label} className="about__history-fact">
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="about__gallery">
        <div className="about__container">
          <SectionTitle
            title="Nuestra Empresa"
            subtitle="Un recorrido breve por el equipo, la operación y la cobertura que sostenemos cada día."
            centered
          />
          <div className="about__gallery-layout">
            <article className="about__gallery-feature">
              <figure className="about__gallery-figure about__gallery-figure--feature">
                <div className="about__gallery-media">
                  <img
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    loading="lazy"
                    style={{ objectPosition: featuredImage.objectPosition }}
                  />
                </div>
                <figcaption className="about__gallery-copy about__gallery-copy--feature">
                  <h3>{featuredImage.title}</h3>
                  <p>{featuredImage.description}</p>
                </figcaption>
              </figure>
            </article>

            <div className="about__gallery-grid">
              {secondaryImages.map((img) => (
                <article key={img.src} className="about__gallery-item">
                  <figure className="about__gallery-figure about__gallery-figure--standard">
                    <div className="about__gallery-media">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        style={{ objectPosition: img.objectPosition }}
                      />
                    </div>
                    <figcaption className="about__gallery-copy about__gallery-copy--standard">
                      <h3>{img.title}</h3>
                      <p>{img.description}</p>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about__offices">
        <div className="about__container">
          <SectionTitle
            title="Nuestras Sedes"
            subtitle="Sopetrán, San Jerónimo, Ebéjico, Heliconia y Altamira cuentan con secretaria y horario de atención."
            centered
          />
          <div className="about__offices-grid">
            {paymentPoints.map((office) => (
              <Card key={office.name}>
                <div className="about__office">
                  <h3>{office.name}</h3>
                  {office.note && <p className="about__office-note">{office.note}</p>}
                  <div className="about__office-info">
                    <p>
                      <FaPhone /> {office.phone}
                    </p>
                    <p>
                      <FaMapMarkerAlt /> {office.address}
                    </p>
                  </div>
                  {office.hours?.length ? (
                    <div className="about__office-hours">
                      {office.hours.map((hour) => (
                        <p key={`${office.name}-${hour}`}>
                          <FaClock /> {hour}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="about__mv">
        <div className="about__container">
          <div className="about__mv-grid">
            <div className="about__mv-item">
              <img
                src="/assets/uploads/2024/05/man-giving-business-presentation-using-futuristic-digital-pen-scaled.jpg"
                alt="Misión"
                className="about__mv-img"
                loading="lazy"
              />
              <SectionTitle title="Misión" />
              <p>
                Ser líder en el mantenimiento y operación de redes de televisión e internet,
                satisfaciendo las necesidades de los clientes, brindándoles un servicio de buena
                calidad y fácil acceso, y promoviendo el crecimiento de la empresa para el
                bienestar de la organización, los clientes y los colaboradores.
              </p>
            </div>
            <div className="about__mv-item">
              <img
                src="/assets/uploads/2024/05/person-working-html-computer-scaled.jpg"
                alt="Visión"
                className="about__mv-img"
                loading="lazy"
              />
              <SectionTitle title="Visión" />
              <p>
                Ser una alternativa confiable y reconocida en el mercado de las
                telecomunicaciones, respaldada por una gestión innovadora, tecnología competitiva,
                mejoramiento continuo, calidad en el servicio y una atención esmerada al usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="about__container">
          <SectionTitle title="Nuestros Valores" centered />
          <div className="about__values-grid">
            {values.map((value) => (
              <Card key={value.title}>
                <div className="about__value">
                  <div className="about__value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                </div>
              </Card>
            ))}
          </div>
          <div className="about__values-layout">
            <aside className="about__values-intro">
              <span className="about__values-label">Principios de trabajo</span>
              <h3>Valores que sostienen cada servicio, decisión y relación con el usuario</h3>
              <p>
                Nuestro compromiso no depende solo de la infraestructura o la cobertura, sino de
                la forma en que actuamos todos los días.
              </p>
            </aside>

            <div className="about__values-description">
              {valuesNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
