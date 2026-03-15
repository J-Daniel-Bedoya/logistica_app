import { FaFileAlt, FaBalanceScale } from 'react-icons/fa';
import PageBanner from '@/shared/components/sections/PageBanner';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Card from '@/shared/components/ui/Card';
import { regulations } from '@/features/regulations/regulations.data';
import './Regulations.scss';

export default function Regulations() {
  return (
    <div className="regulations">
      <PageBanner
        title="Normatividad"
        subtitle="Marco regulatorio de telecomunicaciones"
      />

      <section className="regulations__intro">
        <div className="regulations__container">
          <div className="regulations__intro-content">
            <div className="regulations__intro-icon">
              <FaBalanceScale />
            </div>
            <p>
              En Logística Integral Satelital, la normatividad es fundamental para garantizar
              servicios de telecomunicaciones de alta calidad y conformes con las leyes vigentes.
              Nos comprometemos a cumplir estrictamente con todas las regulaciones, asegurando
              operaciones responsables y éticas. Este enfoque protege a nuestros clientes y
              colaboradores, y refuerza nuestra reputación de confiabilidad y transparencia.
            </p>
          </div>
        </div>
      </section>

      <section className="regulations__content">
        <div className="regulations__container">
          {regulations.map((category) => (
            <div key={category.category} className="regulations__category">
              <SectionTitle title={category.category} />
              <div className="regulations__grid">
                {category.documents.map((doc) => (
                  <Card key={doc.title}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="regulations__doc"
                    >
                      <FaFileAlt className="regulations__doc-icon" />
                      <span>{doc.title}</span>
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
