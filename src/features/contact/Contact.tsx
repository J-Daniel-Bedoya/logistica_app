import {
  FaClock,
  FaEnvelope,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Button from '@/shared/components/ui/Button';
import { contactInfo, paymentPoints } from '@/features/contact/contact.data';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="contact">
      <PageBanner
        title="Puntos de pago"
        subtitle="Oficinas, horarios y pago en línea para mantener tu servicio al día"
      />

      <section className="contact__content">
        <div className="contact__container">
          <div className="contact__hero">
            <div className="contact__hero-copy">
              <SectionTitle title="Pago en línea recomendado" />
              <p className="contact__hero-text">
                Para nosotros es muy conveniente que los pagos se realicen por Wompi.
                Es el canal más directo para registrar el pago en línea y agilizar la
                continuidad del servicio.
              </p>
              <div className="contact__hero-actions">
                <Button variant="secondary" href={contactInfo.paymentLink} external size="lg">
                  <FaExternalLinkAlt /> Pagar ahora por Wompi
                </Button>
                <Button variant="whatsapp" href={contactInfo.whatsapp} external size="lg">
                  <FaWhatsapp /> Consultar pago por WhatsApp
                </Button>
              </div>
            </div>

            <div className="contact__hero-panel">
              <h3>Horario de oficinas</h3>
              <div className="contact__meta-list">
                {contactInfo.officeHours?.map((item) => (
                  <div key={item} className="contact__meta-item">
                    <FaClock />
                    <span>{item}</span>
                  </div>
                ))}
                {contactInfo.supportHours?.map((item) => (
                  <div key={item} className="contact__meta-item">
                    <FaPhone />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="contact__points">
            <SectionTitle
              title="Puntos con atención de secretaria"
              subtitle="Heliconia, Ebéjico, San Jerónimo, Sopetrán y Altamira con contacto y horario visibles."
              centered
            />

            <div className="contact__points-grid">
              {paymentPoints.map((point) => (
                <article key={point.name} className="contact__point-card">
                  <div className="contact__point-head">
                    <h3>{point.name}</h3>
                    <p>{point.note}</p>
                  </div>

                  <div className="contact__point-detail">
                    <FaMapMarkerAlt />
                    <span>{point.address}</span>
                  </div>

                  <div className="contact__point-detail">
                    <FaPhone />
                    <span>{point.phone}</span>
                  </div>

                  <div className="contact__point-hours">
                    <strong>Horario</strong>
                    {point.hours?.map((hour) => (
                      <span key={hour}>{hour}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="contact__grid">
            <div className="contact__info">
              <SectionTitle title="Canales de apoyo" />

              <div className="contact__info-items">
                <div className="contact__info-item">
                  <FaMapMarkerAlt />
                  <div>
                    <h4>Dirección principal</h4>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
                <div className="contact__info-item">
                  <FaPhone />
                  <div>
                    <h4>Teléfonos</h4>
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.phone2}</p>
                  </div>
                </div>
                <div className="contact__info-item">
                  <FaEnvelope />
                  <div>
                    <h4>Correo</h4>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
              </div>

              <Button variant="whatsapp" href={contactInfo.whatsapp} external>
                <FaWhatsapp /> Escríbenos por WhatsApp
              </Button>

              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1oBawe6m5ziGul0G7Zsr3vLcxsfY7jx05"
                  title="Mapa de ubicación"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="contact__support-panel">
              <SectionTitle title="Enlace de pago visible" />
              <p className="contact__support-copy">
                Si vas a realizar el pago, usa preferiblemente este enlace. Nos conviene
                que el recaudo se haga por Wompi para registrar pagos de forma más directa.
              </p>

              <a
                href={contactInfo.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__payment-link"
              >
                <span className="contact__payment-kicker">Enlace recomendado</span>
                <strong>Ir al pago en línea por Wompi</strong>
                <span>{contactInfo.paymentLink}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
