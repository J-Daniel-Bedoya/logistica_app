import { useState } from 'react';
import { FaWhatsapp, FaWifi, FaTv, FaSatelliteDish } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import Card from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import { plans } from '@/features/plans/plans.data';
import { contactInfo } from '@/features/contact/contact.data';
import './Plans.scss';

const locations = [...new Set(plans.map((p) => p.location))];

const typeIcons: Record<string, React.ReactNode> = {
  fiber: <FaWifi />,
  'fiber-tv': <FaTv />,
  antenna: <FaSatelliteDish />,
  commercial: <FaWifi />,
};

export default function Plans() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  const filteredPlans = plans.filter((p) => p.location === activeLocation);

  return (
    <div className="plans">
      <PageBanner
        title="Nuestros Planes"
        subtitle="Contamos con una gran variedad de planes que se adaptan a tus necesidades"
      />

      <section className="plans__content">
        <div className="plans__container">
          <p className="plans__intro">
            Disfruta de un servicio de internet rápido y estable, diseñado para todas tus
            necesidades digitales. Monitoreamos constantemente la calidad para garantizar una
            conexión fiable y sin interrupciones.
          </p>

          {/* Location Tabs */}
          <div className="plans__tabs">
            {locations.map((loc) => (
              <button
                key={loc}
                className={`plans__tab ${activeLocation === loc ? 'plans__tab--active' : ''}`}
                onClick={() => setActiveLocation(loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Plan Cards */}
          <div className="plans__grid">
            {filteredPlans.map((category, i) => (
              <Card key={i}>
                <div className="plans__card">
                  <div className="plans__card-header">
                    <span className="plans__card-icon">
                      {typeIcons[category.type] || <FaWifi />}
                    </span>
                    <h3>{category.title}</h3>
                  </div>
                  <ul className="plans__list">
                    {category.plans.map((plan, j) => (
                      <li key={j} className="plans__item">
                        <span className="plans__speed">{plan.speed}</span>
                        <span className="plans__price">{plan.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="whatsapp" href={contactInfo.whatsapp} external>
                    <FaWhatsapp /> Consultar Plan
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
