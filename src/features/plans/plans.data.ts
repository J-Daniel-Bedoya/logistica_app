import type { PlanCategory } from '@/shared/types';

export const plans: PlanCategory[] = [
  // SOPETRÁN
  {
    title: 'Internet Fibra Óptica',
    location: 'Sopetrán',
    type: 'fiber',
    plans: [
      { speed: '100 MG', price: '$60.000' },
      { speed: '200 MG', price: '$70.000' },
      { speed: '300 MG', price: '$85.000' },
    ],
  },
  {
    title: 'Internet + TV',
    location: 'Sopetrán',
    type: 'fiber-tv',
    plans: [
      { speed: '100 MG', price: '$100.000' },
      { speed: '200 MG', price: '$115.000' },
      { speed: '300 MG', price: '$130.000' },
    ],
  },
  {
    title: 'Internet por Antena',
    location: 'Sopetrán',
    type: 'antenna',
    plans: [
      { speed: '3 MG', price: '$70.000' },
      { speed: '4 MG', price: '$80.000' },
      { speed: '5 MG', price: '$85.000' },
      { speed: '6 MG', price: '$90.000' },
      { speed: '8 MG', price: '$103.000' },
      { speed: '10 MG', price: '$115.000' },
    ],
  },

  // SAN JERÓNIMO
  {
    title: 'Internet Fibra Óptica',
    location: 'San Jerónimo',
    type: 'fiber',
    plans: [
      { speed: '100 MG', price: '$70.000' },
      { speed: '200 MG', price: '$80.000' },
      { speed: '300 MG', price: '$95.000' },
    ],
  },
  {
    title: 'Internet + TV',
    location: 'San Jerónimo',
    type: 'fiber-tv',
    plans: [
      { speed: '100 MG', price: '$120.000' },
      { speed: '200 MG', price: '$130.000' },
      { speed: '300 MG', price: '$145.000' },
    ],
  },
  {
    title: 'Internet por Antena',
    location: 'San Jerónimo',
    type: 'antenna',
    plans: [
      { speed: '3 MG', price: '$70.000' },
      { speed: '4 MG', price: '$80.000' },
      { speed: '5 MG', price: '$85.000' },
      { speed: '6 MG', price: '$90.000' },
      { speed: '8 MG', price: '$103.000' },
      { speed: '10 MG', price: '$115.000' },
    ],
  },

  // EBÉJICO
  {
    title: 'Internet',
    location: 'Ebéjico',
    type: 'fiber',
    plans: [
      { speed: '10 MG', price: '$52.200' },
      { speed: '15 MG', price: '$78.000' },
      { speed: '20 MG', price: '$89.000' },
    ],
  },
  {
    title: 'Internet Comercial',
    location: 'Ebéjico',
    type: 'commercial',
    plans: [
      { speed: '10 MG', price: '$73.000 + IVA' },
      { speed: '15 MG', price: '$95.000 + IVA' },
    ],
  },
  {
    title: 'La Gramala — Internet',
    location: 'Ebéjico',
    type: 'fiber',
    plans: [
      { speed: '10 MG', price: '$60.000' },
    ],
  },
  {
    title: 'Internet + TV',
    location: 'Ebéjico',
    type: 'fiber-tv',
    plans: [
      { speed: '10 MG', price: '$93.000' },
      { speed: '15 MG', price: '$120.000' },
    ],
  },
  {
    title: 'La Gramala — Internet + TV',
    location: 'Ebéjico',
    type: 'fiber-tv',
    plans: [
      { speed: '10 MG', price: '$85.000 + TV' },
    ],
  },
  {
    title: 'Internet por Antena',
    location: 'Ebéjico',
    type: 'antenna',
    plans: [
      { speed: '3 MG', price: '$64.000' },
      { speed: '4 MG', price: '$74.000' },
      { speed: '5 MG', price: '$79.000' },
      { speed: '6 MG', price: '$84.000' },
      { speed: '8 MG', price: '$94.000' },
      { speed: '10 MG', price: '$104.000' },
    ],
  },

  // SEVILLA
  {
    title: 'Internet',
    location: 'Sevilla',
    type: 'fiber',
    plans: [
      { speed: '10 MG', price: '$50.000' },
      { speed: '20 MG', price: '$89.000' },
    ],
  },
  {
    title: 'Internet + TV',
    location: 'Sevilla',
    type: 'fiber-tv',
    plans: [
      { speed: '10 MG', price: '$73.000' },
    ],
  },
  {
    title: 'Internet Comercial',
    location: 'Sevilla',
    type: 'commercial',
    plans: [
      { speed: '10 MG', price: '$68.000 + IVA' },
    ],
  },

  // HELICONIA
  {
    title: 'Internet Urbano',
    location: 'Heliconia',
    type: 'fiber',
    plans: [
      { speed: '10 MG', price: '$49.000' },
      { speed: '15 MG', price: '$67.000' },
      { speed: '20 MG', price: '$82.000' },
    ],
  },
  {
    title: 'Internet Rural',
    location: 'Heliconia',
    type: 'antenna',
    plans: [
      { speed: '10 MG', price: '$60.000' },
    ],
  },
  {
    title: 'Internet + TV Urbano',
    location: 'Heliconia',
    type: 'fiber-tv',
    plans: [
      { speed: '10 MG', price: '$89.000' },
      { speed: '20 MG', price: '$105.000' },
    ],
  },
  {
    title: 'Internet + TV Rural',
    location: 'Heliconia',
    type: 'fiber-tv',
    plans: [
      { speed: '10 MG', price: '$84.000' },
    ],
  },

  // ARMENIA
  {
    title: 'Internet Urbano',
    location: 'Armenia',
    type: 'fiber',
    plans: [
      { speed: '10 MG', price: '$60.000' },
      { speed: '15 MG', price: '$67.000' },
      { speed: '20 MG', price: '$80.000' },
    ],
  },
  {
    title: 'Internet + TV Urbano',
    location: 'Armenia',
    type: 'fiber-tv',
    plans: [
      { speed: '15 MG', price: '$77.000' },
    ],
  },

  // TITIRIBÍ
  {
    title: 'Internet por Antena',
    location: 'Titiribí',
    type: 'antenna',
    plans: [
      { speed: '3 MG', price: '$46.000' },
      { speed: '4 MG', price: '$52.000' },
      { speed: '5 MG', price: '$60.000' },
      { speed: '6 MG', price: '$68.000' },
      { speed: '7 MG', price: '$74.000' },
      { speed: '8 MG', price: '$81.000' },
      { speed: '9 MG', price: '$88.000' },
      { speed: '10 MG', price: '$96.000' },
    ],
  },
];
