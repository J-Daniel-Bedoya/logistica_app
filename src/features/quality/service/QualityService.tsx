import { FaDownload } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Card from '@/shared/components/ui/Card';
import { serviceQuality } from '@/features/quality/quality.data';
import './QualityService.scss';

export default function QualityService() {
  return (
    <div className="quality-service">
      <PageBanner
        title="Calidad en el Servicio de Internet"
        subtitle="Medimos la Conexión para tu Máxima Satisfacción"
      />

      <section className="quality-service__content">
        <div className="quality-service__container">
          {serviceQuality.map((year) => (
            <div key={year.year} className="quality-service__year">
              <SectionTitle title={`Indicadores ${year.year}`} />
              <div className="quality-service__grid">
                {year.documents.map((doc) => (
                  <Card key={doc.label}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quality-service__doc"
                    >
                      <FaDownload className="quality-service__doc-icon" />
                      <span>{doc.label}</span>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
