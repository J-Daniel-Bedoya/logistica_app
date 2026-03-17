import { useState } from 'react';
import { FaWhatsapp, FaWifi, FaTv, FaSatelliteDish, FaStore } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import Card from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import { plans } from '@/features/plans/plans.data';
import { contactInfo } from '@/features/contact/contact.data';
import './Plans.scss';

const locations = [...new Set(plans.map((plan) => plan.location))];

const typeIcons: Record<string, React.ReactNode> = {
  fiber: <FaWifi />,
  'fiber-tv': <FaTv />,
  antenna: <FaSatelliteDish />,
  commercial: <FaStore />,
  tv: <FaTv />,
  prepaid: <FaTv />,
};

export default function Plans() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  const filteredPlans = plans.filter((plan) => plan.location === activeLocation);

  return (
    <div className="plans">
      <PageBanner
        title="Nuestros Planes"
        subtitle="Tarifas 2026 por municipio para internet, televisión e instalación"
      />

      <section className="plans__content">
        <div className="plans__container">
          <div className="plans__intro-block">
            <p className="plans__intro">
              Elige el plan ideal para tu hogar o negocio y disfruta una conexión estable y
              rápida.
            </p>
            <p className="plans__legend">
              Contamos con opciones de internet, televisión y combos pensados para diferentes
              necesidades. Si quieres confirmar cobertura o una promoción vigente, escríbenos por
              WhatsApp.
            </p>
          </div>

          <div className="plans__tabs">
            {locations.map((location) => (
              <button
                key={location}
                className={`plans__tab ${activeLocation === location ? 'plans__tab--active' : ''}`}
                type="button"
                aria-pressed={activeLocation === location}
                onClick={() => setActiveLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>

          <p className="plans__location-summary">
            {filteredPlans.length} categorías disponibles para {activeLocation}.
          </p>

          <div className="plans__grid">
            {filteredPlans.map((category) => (
              <Card key={`${category.location}-${category.title}`} className="plans__grid-card">
                <div className="plans__card">
                  <div className="plans__card-header">
                    <span className="plans__card-icon">
                      {typeIcons[category.type] || <FaWifi />}
                    </span>
                    <h3>{category.title}</h3>
                  </div>
                  <ul className="plans__list">
                    {category.plans.map((plan) => (
                      <li key={`${category.title}-${plan.label}`} className="plans__item">
                        <span className="plans__label">
                          {plan.label}
                          {plan.detail && <small>{plan.detail}</small>}
                        </span>
                        <span className="plans__price">{plan.price}</span>
                      </li>
                    ))}
                  </ul>
                  {category.note && <p className="plans__note">{category.note}</p>}
                  <Button variant="whatsapp" href={contactInfo.whatsapp} external>
                    <FaWhatsapp /> Consultar plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
