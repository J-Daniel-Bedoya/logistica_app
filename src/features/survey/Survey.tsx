import { useState } from 'react';
import PageBanner from '@/shared/components/sections/PageBanner';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import Button from '@/shared/components/ui/Button';
import { surveyQuestions } from '@/features/survey/survey.data';
import './Survey.scss';

export default function Survey() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="survey">
        <PageBanner title="Encuesta de Satisfacción" />
        <section className="survey__content">
          <div className="survey__container">
            <div className="survey__thanks">
              <h2>Gracias por tu participación</h2>
              <p>Tu opinión nos ayuda a mejorar continuamente.</p>
              <Button variant="primary" onClick={() => { setSubmitted(false); setAnswers({}); }}>
                Realizar otra encuesta
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="survey">
      <PageBanner
        title="Juntos Hacemos la Diferencia"
        subtitle="Califique su Experiencia"
      />

      <section className="survey__content">
        <div className="survey__container">
          <div className="survey__intro">
            <p>
              Su opinión es clave para nosotros. Los invitamos a calificar su experiencia
              en nuestra encuesta de satisfacción.
            </p>
            <p className="survey__notice">
              Esta encuesta es confidencial y anónima: queremos conocer la satisfacción de
              nuestros usuarios sobre el servicio brindado en LOGÍSTICA INTEGRAL SATELITAL.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="survey__form">
            {surveyQuestions.map((q) => (
              <div key={q.id} className="survey__question">
                <SectionTitle title={q.question} />
                <div className="survey__options">
                  {q.options.map((option) => (
                    <label
                      key={option}
                      className={`survey__option ${
                        answers[q.id] === option ? 'survey__option--selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleSelect(q.id, option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="survey__submit">
              <Button
                variant="primary"
                size="lg"
                type="submit"
              >
                Enviar Encuesta
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
