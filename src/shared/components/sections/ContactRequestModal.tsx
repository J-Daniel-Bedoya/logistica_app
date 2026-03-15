import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './ContactRequestModal.scss';

const pqrsfTypes = [
  'Seleccione una opción',
  'Peticiones',
  'Quejas',
  'Recursos',
  'Sugerencias',
  'Felicitaciones',
];

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  type: '',
  message: '',
};

interface ContactRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactRequestModal({
  isOpen,
  onClose,
}: ContactRequestModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-request-modal" role="presentation" onClick={onClose}>
      <div
        className="contact-request-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-request-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contact-request-modal__close"
          aria-label="Cerrar formulario"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="contact-request-modal__header">
          <h2 id="contact-request-modal-title">Formulario PQRSF</h2>
          <p className="contact-request-modal__subtitle">
            Déjanos tu solicitud y te responderemos con el seguimiento adecuado.
          </p>
        </div>

        {submitted ? (
          <Card>
            <div className="contact-request-modal__thanks">
              <h3>Mensaje enviado</h3>
              <p>Gracias por contactarnos. Le responderemos a la brevedad posible.</p>
              <div className="contact-request-modal__actions">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                  }}
                >
                  Enviar otro mensaje
                </Button>
                <Button variant="primary" onClick={onClose}>
                  Cerrar
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="contact-request-modal__form">
            <div className="contact-request-modal__field-grid">
              <div className="contact-request-modal__field">
                <label htmlFor="contact-name">Nombres y apellidos</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-request-modal__field">
                <label htmlFor="contact-phone">Número de contacto</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-request-modal__field-grid">
              <div className="contact-request-modal__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-request-modal__field">
                <label htmlFor="contact-type">Tipo de solicitud</label>
                <select
                  id="contact-type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  {pqrsfTypes.map((type) => (
                    <option key={type} value={type === 'Seleccione una opción' ? '' : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact-request-modal__field">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-request-modal__actions">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit">
                Enviar solicitud
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
