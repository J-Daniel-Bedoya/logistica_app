import type { NavItem } from '@/shared/types';

export const navigation: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/quienes-somos' },
  {
    label: 'Normatividad',
    path: '/normatividad',
    dropdownLabel: 'Marco normativo y calidad',
    children: [
      { label: 'Calidad en el servicio de internet', path: '/calidad-servicio' },
      { label: 'Indicadores de calidad del usuario', path: '/indicadores-calidad' },
    ],
  },
  {
    label: 'Servicios',
    path: '/servicios',
    dropdownLabel: 'Planes',
    dropdownPath: '/planes',
    children: [{ label: 'Tips de internet', path: '/servicios' }],
  },
  { label: 'Respuestas PQRSF', path: '/respuestas-pqrsf' },
  { label: 'Encuesta de satisfacción', path: '/encuesta' },
  { label: 'Puntos de pago', path: '/contacto' },
];
