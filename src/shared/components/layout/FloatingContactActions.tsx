import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '@/features/contact/contact.data';
import './FloatingContactActions.scss';

interface FloatingContactActionsProps {
  mobileMenuOpen?: boolean;
  onOpenForm: () => void;
}

export default function FloatingContactActions({
  mobileMenuOpen = false,
  onOpenForm,
}: FloatingContactActionsProps) {
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero información sobre planes y servicios de Logística Integral Satelital.',
  );

  return (
    <div
      className={`floating-contact-actions ${
        mobileMenuOpen ? 'floating-contact-actions--menu-open' : ''
      }`}
      aria-label="Acciones rápidas de contacto"
    >
      <button
        type="button"
        className="floating-contact-actions__button floating-contact-actions__button--form"
        onClick={onOpenForm}
        aria-label="Abrir formulario PQRSF"
        title="Abrir formulario PQRSF"
      >
        <span>PQRSF</span>
      </button>

      <a
        href={`${contactInfo.whatsapp}&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-actions__button floating-contact-actions__button--whatsapp"
        aria-label="Escribir por WhatsApp"
        title="Escribir por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
