import { useState } from 'react';
import { FaDownload, FaExternalLinkAlt, FaPlay, FaShieldAlt } from 'react-icons/fa';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Card from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import { educationalVideos } from '@/features/services/videos.data';
import './Services.scss';

const tips = [
  'Para LOGISTICA INTEGRAL SATELITAL es muy importante que verifiques la conexión de tu servicio; si no has manipulado ningún cable, desconecta solo de la parte eléctrica tanto la antena como el router wifi por un minuto aproximadamente y, una vez conectes, corrobora nuevamente la conexión.',
  'No compartas la clave de tu wifi con personas ajenas al hogar y cambia tu clave periódicamente para que el servicio no sea usado por otras personas, perjudicando de esta forma la buena navegación de internet.',
  'Conserva en buen estado los equipos, cables y conectores que se le instalaron en su residencia. Recuerda tener un antivirus actualizado en tus equipos.',
  'Ubica el modem en un lugar central, amplio y abierto de tu hogar o negocio. Mantenerlo en un espacio ventilado hará que la señal se distribuya mejor.',
  'Limita la cantidad de dispositivos conectados simultáneamente a tu red WiFi. Cada equipo adicional consume ancho de banda y puede reducir tu velocidad.',
  'Desactiva las actualizaciones de Windows 10 para que de esta forma pueda conservar el ancho de banda de tu servicio de internet.',
  'Asegúrate de usar el pin WiFi correcto (8 caracteres) para dispositivos TP-Link o Tenda.',
];

const parentalControlLinks = [
  {
    name: 'Qustodio',
    url: 'https://www.qustodio.com/en/',
    description: 'Control parental y filtros de contenido para acompañamiento familiar.',
    accent: 'qustodio',
    logo: '/assets/uploads/2024/07/QustodioLogo_Regular_Green_RGB.png',
    label: 'Control parental',
    cta: 'Conocer Qustodio',
  },
  {
    name: 'SecureKids',
    url: 'https://securekids.es/en/features/online-security/',
    description: 'Herramientas para supervisar dispositivos y reforzar navegación segura.',
    accent: 'securekids',
    logo: '/assets/uploads/2024/07/segurekids.png',
    label: 'Supervisión digital',
    cta: 'Conocer SecureKids',
  },
  {
    name: 'KIDOZ',
    url: 'https://www.kidoz.net/kidoz-os',
    description: 'Entorno infantil con controles y contenidos orientados a niños y niñas.',
    accent: 'kidoz',
    logo: '/assets/uploads/2024/07/kidoz_logo_dark.png',
    label: 'Entorno para niños',
    cta: 'Conocer KIDOZ',
  },
] as const;

const videoCategories = [...new Set(educationalVideos.map((video) => video.category))];
const heroItems = [
  {
    title: 'Recursos útiles',
    description: 'Guías, instructivos y enlaces listos para consulta.',
    icon: FaDownload,
  },
  {
    title: 'Navegación segura',
    description: 'Herramientas de control parental para el hogar.',
    icon: FaShieldAlt,
  },
  {
    title: 'Aprendizaje visual',
    description: 'Videos prácticos sobre internet, seguridad y TDT.',
    icon: FaPlay,
  },
] as const;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(videoCategories[0]);

  const filteredVideos = educationalVideos.filter((video) => video.category === activeCategory);

  return (
    <div className="services">
      <section className="services__hero">
        <div className="services__container">
          <div className="services__hero-panel">
            <div className="services__hero-copy">
              <h1>Tips de Internet</h1>
              <p className="services__hero-subtitle">
                Consejos prácticos, recursos útiles y herramientas de seguridad para que
                aproveches mejor tu conexión en casa.
              </p>
              <div className="services__hero-actions">
                <Button variant="primary" href="#servicios-recursos">
                  Ver recursos
                </Button>
                <Button variant="outline" href="#servicios-control-parental">
                  Control parental
                </Button>
              </div>
            </div>

            <div className="services__hero-side" aria-label="Contenido destacado">
              {heroItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="services__hero-item">
                    <div className="services__hero-item-icon">
                      <Icon />
                    </div>
                    <div className="services__hero-item-copy">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="services__resources" id="servicios-recursos">
        <div className="services__container">
          <SectionTitle title="Recursos" centered />
          <div className="services__resources-grid">
            <Card>
              <div className="services__resource">
                <FaDownload className="services__resource-icon" />
                <h3>Instructivo Recolección de Equipos</h3>
                <p>A continuación encontrarás el trámite correspondiente para entregar los equipos.</p>
                <Button
                  variant="outline"
                  size="sm"
                  href="/assets/uploads/2022/06/RECOLECCION-EQUIPO.pdf"
                  external
                >
                  Descargar PDF
                </Button>
              </div>
            </Card>
            <Card>
              <div className="services__resource">
                <FaShieldAlt className="services__resource-icon" />
                <h3>Control Parental: Funciones y herramientas</h3>
                <p>
                  Aquí encontrarás cómo activar el control parental en diferentes plataformas y
                  dispositivos.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  href="/assets/uploads/2021/05/Guia-control-parental.pdf"
                  external
                >
                  Guía aquí
                </Button>
              </div>
            </Card>
            <Card>
              <div className="services__resource">
                <FaExternalLinkAlt className="services__resource-icon" />
                <h3>Te Protejo Colombia</h3>
                <p>
                  Línea virtual de reporte para la protección de infancia y adolescencia en
                  Colombia.
                </p>
                <Button variant="primary" size="sm" href="https://teprotejocolombia.org/" external>
                  WWW.teprotejo.org
                </Button>
              </div>
            </Card>
            <Card>
              <div className="services__resource">
                <FaDownload className="services__resource-icon" />
                <h3>Dispositivos UEN Internet</h3>
                <p>Conoce los dispositivos utilizados en la UEN Internet.</p>
                <Button
                  variant="outline"
                  size="sm"
                  href="/assets/uploads/2021/06/REPORTE-DE-DISPOSITIVOS-logistica.pdf"
                  external
                >
                  Lista de dispositivos
                </Button>
              </div>
            </Card>
            <Card>
              <div className="services__resource">
                <FaDownload className="services__resource-icon" />
                <h3>Aprovecha al Máximo tu Internet</h3>
                <p>Consejos y recomendaciones para sacar el mayor provecho de tu conexión.</p>
                <Button
                  variant="outline"
                  size="sm"
                  href="/assets/uploads/2021/06/APROVECHA-AL-MAXIMO-TU-INTERNET.pdf"
                  external
                >
                  Leer más
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="services__tips">
        <div className="services__container">
          <SectionTitle title="Recomendaciones para un Óptimo Servicio" centered />
          <div className="services__tips-grid">
            {tips.map((tip, index) => (
              <div key={tip} className="services__tip">
                <div className="services__tip-number">{index + 1}</div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services__safety" id="servicios-control-parental">
        <div className="services__container">
          <SectionTitle
            title="Herramientas de control parental"
            subtitle="Opciones recomendadas para acompañar la navegación de niños, niñas y adolescentes."
            centered
          />

          <div className="services__safety-intro">
            <p>
              Encuentra herramientas útiles para administrar contenidos, supervisar dispositivos y
              crear entornos digitales más seguros en casa.
            </p>
          </div>

          <div className="services__safety-links" aria-label="Herramientas de control parental">
            {parentalControlLinks.map((item) => (
              <Card key={item.name} className="services__safety-card">
                <div className="services__safety-link">
                  <div className="services__safety-logo-wrap">
                    <img src={item.logo} alt={item.name} className="services__safety-logo" />
                  </div>
                  <span className={`services__safety-tag services__safety-tag--${item.accent}`}>
                    {item.label}
                  </span>
                  <h3 className="services__safety-brand">{item.name}</h3>
                  <p className="services__safety-description">{item.description}</p>
                  <Button variant="outline" size="sm" href={item.url} external>
                    {item.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="services__videos">
        <div className="services__container">
          <SectionTitle
            title="Videos Educativos"
            subtitle="Contenido de seguridad digital y TDT"
            centered
          />

          <div className="services__video-tabs">
            {videoCategories.map((category) => (
              <button
                key={category}
                className={`services__video-tab ${
                  activeCategory === category ? 'services__video-tab--active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <FaPlay /> {category}
              </button>
            ))}
          </div>

          <div className="services__video-grid">
            {filteredVideos.map((video) => (
              <div key={video.url} className="services__video-item">
                <div className="services__video-embed">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h4>{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
