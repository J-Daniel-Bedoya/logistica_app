import type { SurveyQuestion } from '@/shared/types';

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    question: '¿La atención de nuestro personal fue?',
    options: ['Excelente', 'Bueno', 'Regular', 'Malo', 'Pésimo'],
  },
  {
    id: 2,
    question: '¿Fue oportuna la atención?',
    options: ['Excelente', 'Bueno', 'Regular', 'Malo', 'Pésimo'],
  },
  {
    id: 3,
    question: '¿La respuesta a su PQR fue satisfactoria?',
    options: ['Excelente', 'Bueno', 'Regular', 'Malo', 'Pésimo'],
  },
  {
    id: 4,
    question: '¿El funcionario que lo atendió es el indicado para darle solución a sus requerimientos?',
    options: ['Excelente', 'Bueno', 'Regular', 'Malo', 'Pésimo'],
  },
  {
    id: 5,
    question: '¿Qué tan probable es que recomiende la institución con familiares y amigos?',
    options: ['Excelente', 'Bueno', 'Regular', 'Malo', 'Pésimo'],
  },
];
