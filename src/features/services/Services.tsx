import { useState } from 'react';
import { FaDownload, FaExternalLinkAlt, FaPlay, FaShieldAlt } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
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
  },
  {
    name: 'SecureKids',
    url: 'https://securekids.es/en/features/online-security/',
    description: 'Herramientas para supervisar dispositivos y reforzar navegación segura.',
    accent: 'securekids',
  },
  {
    name: 'KIDOZ',
    url: 'https://www.kidoz.net/kidoz-os',
    description: 'Entorno infantil con controles y contenidos orientados a niños y niñas.',
    accent: 'kidoz',
  },
] as const;

const videoCategories = [...new Set(educationalVideos.map((video) => video.category))];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(videoCategories[0]);

  const filteredVideos = educationalVideos.filter((video) => video.category === activeCategory);

  return (
    <div className="services">
      <PageBanner
        title="Tips de Internet"
        subtitle="Optimiza tu conexión: consejos prácticos para el uso de internet"
      />

      <section className="services__intro">
        <div className="services__container">
          <p>
            Descubre tips y trucos para aprovechar al máximo tu tiempo en la web.
            Aprende sobre seguridad y protección en línea, con consejos específicos para
            mantener a los niños y niñas seguros mientras navegan. Esta guía te ofrece
            todo lo necesario para una experiencia en internet segura y eficiente.
          </p>
        </div>
      </section>

      <section className="services__resources">
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
                <p>Aquí encontrarás cómo activar el control parental en diferentes plataformas y dispositivos.</p>
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
                <p>Línea virtual de reporte para la protección de infancia y adolescencia en Colombia.</p>
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

      <section className="services__safety">
        <div className="services__container">
          <div className="services__safety-intro">
            <p>
              Logística Integral Satelital está en pro de la prevención del acceso a la
              pornografía infantil. En los siguientes links encontrarás herramientas para
              bloquear dichas páginas y reforzar una navegación más segura en casa.
            </p>
          </div>

          <div className="services__safety-links" aria-label="Herramientas de control parental">
            {parentalControlLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`services__safety-link services__safety-link--${item.accent}`}
              >
                <span className="services__safety-brand">{item.name}</span>
                <span className="services__safety-description">{item.description}</span>
              </a>
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
