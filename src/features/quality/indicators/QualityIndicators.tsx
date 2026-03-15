import { FaDownload, FaCertificate } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Card from '@/shared/components/ui/Card';
import { userQuality } from '@/features/quality/quality.data';
import './QualityIndicators.scss';

export default function QualityIndicators() {
  return (
    <div className="quality-indicators">
      <PageBanner
        title="Indicadores de Calidad del Usuario"
        subtitle="Medimos la Conexión para tu Máxima Satisfacción"
      />

      <section className="quality-indicators__content">
        <div className="quality-indicators__container">
          {userQuality.map((year) => (
            <div key={year.year} className="quality-indicators__year">
              <SectionTitle title={`Indicadores ${year.year}`} />
              <div className="quality-indicators__grid">
                {year.documents.map((doc) => {
                  const isCert = doc.label.toLowerCase().includes('certificaci');
                  return (
                    <Card key={doc.label}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quality-indicators__doc"
                      >
                        {isCert ? (
                          <FaCertificate className="quality-indicators__doc-icon quality-indicators__doc-icon--cert" />
                        ) : (
                          <FaDownload className="quality-indicators__doc-icon" />
                        )}
                        <span>{doc.label}</span>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
