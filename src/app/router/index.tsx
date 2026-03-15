import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/shared/components/layout/Layout';
import Home from '@/features/home/Home';
import About from '@/features/about/About';
import Services from '@/features/services/Services';
import Plans from '@/features/plans/Plans';
import QualityService from '@/features/quality/service/QualityService';
import QualityIndicators from '@/features/quality/indicators/QualityIndicators';
import Regulations from '@/features/regulations/Regulations';
import Survey from '@/features/survey/Survey';
import PqrsfResponses from '@/features/pqrsf-responses/PqrsfResponses';
import Contact from '@/features/contact/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'quienes-somos', element: <About /> },
      { path: 'servicios', element: <Services /> },
      { path: 'planes', element: <Plans /> },
      { path: 'contacto', element: <Contact /> },
      { path: 'calidad-servicio', element: <QualityService /> },
      { path: 'indicadores-calidad', element: <QualityIndicators /> },
      { path: 'normatividad', element: <Regulations /> },
      { path: 'encuesta', element: <Survey /> },
      { path: 'respuestas-pqrsf', element: <PqrsfResponses /> },
    ],
  },
]);
