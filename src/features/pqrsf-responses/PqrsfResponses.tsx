import { useState } from 'react';
import { FaSearch, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Button from '@/shared/components/ui/Button';
import { contactInfo } from '@/features/contact/contact.data';
import './PqrsfResponses.scss';

const pqrsfTypes = [
  'Seleccione una opción',
  'Peticiones',
  'Quejas',
  'Recursos',
  'Sugerencias',
  'Felicitaciones',
];

export default function PqrsfResponses() {
  const [searchId, setSearchId] = useState('');
  const [activeYear, setActiveYear] = useState('2025');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pqrsf">
      <PageBanner
        title="Respuesta a PQRSF"
        subtitle="Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones"
      />

      <section className="pqrsf__content">
        <div className="pqrsf__container">
          <div className="pqrsf__intro">
            <p>
              Estimados clientes, les invitamos a utilizar nuestro sistema de PQRSF
              (Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones) de manera
              responsable y constructiva, para que juntos podamos mejorar continuamente
              nuestros servicios y ofrecerles una experiencia excepcional.
            </p>
          </div>

          {/* Search Section */}
          <div className="pqrsf__search-section">
            <SectionTitle title="Consultar Respuestas a PQRSF" centered />
            <p className="pqrsf__instructions">
              Si desea conocer la respuesta a sus PQRSF de clic sobre su nombre,
              y para ver la respuesta por favor digitar su número de identificación:
            </p>

            <div className="pqrsf__year-tabs">
              {['2025', '2024', '2023', '2022', '2021'].map((year) => (
                <button
                  key={year}
                  className={`pqrsf__year-tab ${activeYear === year ? 'pqrsf__year-tab--active' : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="pqrsf__form">
              <div className="pqrsf__input-group">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Número de identificación"
                  className="pqrsf__input"
                />
                <Button variant="primary" type="submit">
                  <FaSearch /> Buscar
                </Button>
              </div>
            </form>
          </div>

          {/* New PQRSF Form */}
          <div className="pqrsf__new">
            <h3>¿Necesita enviar un nuevo PQRSF?</h3>
            <p>Contáctenos a través de nuestros canales de comunicación o envíe su solicitud directamente.</p>

            <div className="pqrsf__new-actions">
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cerrar formulario' : 'Enviar PQRSF'}
              </Button>
              <Button variant="whatsapp" href={contactInfo.whatsapp} external>
                <FaWhatsapp /> WhatsApp
              </Button>
              <Button variant="outline" href={`mailto:${contactInfo.email}`}>
                <FaEnvelope /> Correo
              </Button>
            </div>

            {showForm && (
              <div className="pqrsf__form-wrapper">
                {formSubmitted ? (
                  <div className="pqrsf__thanks">
                    <h4>Mensaje enviado</h4>
                    <p>Gracias por su PQRSF. Le responderemos a la brevedad posible.</p>
                    <Button variant="primary" onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', email: '', type: '', message: '' }); }}>
                      Enviar otro
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="pqrsf__contact-form">
                    <div className="pqrsf__field">
                      <label htmlFor="pqrsf-name">Nombres y Apellidos</label>
                      <input id="pqrsf-name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="pqrsf__field-row">
                      <div className="pqrsf__field">
                        <label htmlFor="pqrsf-phone">Número de contacto</label>
                        <input id="pqrsf-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                      </div>
                      <div className="pqrsf__field">
                        <label htmlFor="pqrsf-email">Email</label>
                        <input id="pqrsf-email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="pqrsf__field">
                      <label htmlFor="pqrsf-type">Tipo de solicitud</label>
                      <select id="pqrsf-type" name="type" value={formData.type} onChange={handleChange} required>
                        {pqrsfTypes.map((type) => (
                          <option key={type} value={type === 'Seleccione una opción' ? '' : type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="pqrsf__field">
                      <label htmlFor="pqrsf-message">Mensaje</label>
                      <textarea id="pqrsf-message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
                    </div>
                    <Button variant="primary" type="submit" size="lg">Enviar</Button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
