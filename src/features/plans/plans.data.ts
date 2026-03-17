import type { PlanCategory, ServicePlan } from '@/shared/types';

const price = (value: number | string) =>
  typeof value === 'number'
    ? `$${value.toLocaleString('es-CO')}`
    : value.startsWith('$')
      ? value
      : `$${value}`;

const item = (label: string, amount: number | string, detail?: string): ServicePlan => ({
  label,
  price: price(amount),
  ...(detail ? { detail } : {}),
});

const sharedAntennaPlans = [
  item('Instalación internet', 160000),
  item('Instalación internet antena grande', 300000),
  item('Internet 3 megas', 70000),
  item('Internet 4 megas', 80000),
  item('Internet 5 megas', 85000),
  item('Internet 6 megas', 90000),
  item('Internet 8 megas', 103000),
  item('Internet 10 megas', 115000),
];

export const plans: PlanCategory[] = [
  {
    title: 'Internet fibra óptica',
    location: 'Sopetrán',
    type: 'fiber',
    plans: [
      item('Instalación solo internet', 90000),
      item('Internet 100 megas', 60000),
      item('Internet 200 megas', 70000),
      item('Internet 300 megas', 85000),
    ],
  },
  {
    title: 'Internet + 2 TV',
    location: 'Sopetrán',
    type: 'fiber-tv',
    plans: [
      item('Instalación combo', 125000),
      item('Internet 100 megas + 2 TV', 100000),
      item('Internet 200 megas + 2 TV', 115000),
      item('Internet 300 megas + 2 TV', 130000),
    ],
    note: 'Instalación gratis en enero y febrero.',
  },
  {
    title: 'Televisión general',
    location: 'Sopetrán',
    type: 'tv',
    plans: [item('Mensualidad', 45000)],
  },
  {
    title: 'Internet por antena',
    location: 'Sopetrán',
    type: 'antenna',
    plans: sharedAntennaPlans,
  },
  {
    title: 'Internet fibra óptica',
    location: 'San Jerónimo',
    type: 'fiber',
    plans: [
      item('Instalación solo internet', 90000),
      item('Internet 100 megas', 70000),
      item('Internet 200 megas', 80000),
      item('Internet 300 megas', 95000),
    ],
  },
  {
    title: 'Internet + 2 TV',
    location: 'San Jerónimo',
    type: 'fiber-tv',
    plans: [
      item('Instalación combo', 125000),
      item('Internet 100 megas + 2 TV', 120000),
      item('Internet 200 megas + 2 TV', 130000),
      item('Internet 300 megas + 2 TV', 145000),
    ],
    note: 'Instalación gratis en enero.',
  },
  {
    title: 'Televisión general',
    location: 'San Jerónimo',
    type: 'tv',
    plans: [item('Mensualidad', 51000)],
  },
  {
    title: 'Internet por antena',
    location: 'San Jerónimo',
    type: 'antenna',
    plans: sharedAntennaPlans,
  },
  {
    title: 'Internet fibra óptica',
    location: 'Ebéjico',
    type: 'fiber',
    plans: [
      item('Instalación solo internet', 65000),
      item('Internet 10 megas', 52500),
      item('Internet 15 megas', 78000),
      item('Internet 20 megas', 89000),
    ],
  },
  {
    title: 'Internet + 2 TV',
    location: 'Ebéjico',
    type: 'fiber-tv',
    plans: [
      item('Instalación internet por combo', 65000),
      item('Internet 10 megas + 2 TV', 93000),
      item('Internet 15 megas + 2 TV', 120000),
    ],
  },
  {
    title: 'Planes comerciales',
    location: 'Ebéjico',
    type: 'commercial',
    plans: [
      item('Internet 10 megas', '73.000 + IVA'),
      item('Internet 15 megas', '95.000 + IVA'),
    ],
  },
  {
    title: 'La Gramala',
    location: 'Ebéjico',
    type: 'fiber',
    plans: [
      item('Conexión internet y combo', 73000),
      item('Internet 10 megas', 60000),
      item('Internet 10 megas + 2 TV', 85000),
    ],
  },
  {
    title: 'Televisión general',
    location: 'Ebéjico',
    type: 'tv',
    plans: [item('Mensualidad', 44000)],
  },
  {
    title: 'Televisión prepago',
    location: 'Ebéjico',
    type: 'prepaid',
    plans: [
      item('Instalación internet y combo', 65000),
      item('Conexión televisión', 33000),
      item('Internet 10 megas', 52500),
      item('Internet 15 megas', 78000),
      item('Internet 10 megas + 2 TV', 93000),
      item('Internet 15 megas + 2 TV', 120000),
    ],
  },
  {
    title: 'Internet por antena',
    location: 'Ebéjico',
    type: 'antenna',
    plans: [
      item('Instalación internet antena pequeña', 105000),
      item('Instalación pequeña finca o negocio', 140000),
      item('Instalación internet antena grande', 250000),
      item('Internet 3 megas', 64000),
      item('Internet 4 megas', 74000),
      item('Internet 5 megas', 79000),
      item('Internet 6 megas', 84000),
      item('Internet 8 megas', 94000),
      item('Internet 10 megas', 104000),
    ],
  },
  {
    title: 'Internet fibra óptica',
    location: 'Sevilla',
    type: 'fiber',
    plans: [
      item('Conexión internet', 65000),
      item('Internet 10 megas', 50000),
      item('Internet 20 megas', 89000),
    ],
  },
  {
    title: 'Internet + 2 TV',
    location: 'Sevilla',
    type: 'fiber-tv',
    plans: [item('Internet 10 megas + 2 TV', 73000)],
  },
  {
    title: 'Planes comerciales',
    location: 'Sevilla',
    type: 'commercial',
    plans: [item('Internet 10 megas', '68.000 + IVA')],
  },
  {
    title: 'Internet urbano',
    location: 'Heliconia',
    type: 'fiber',
    plans: [
      item('Instalación solo internet', 90000),
      item('Internet 10 megas urbano', 49000),
      item('Internet 15 megas urbano', 67000),
      item('Internet 20 megas urbano', 82000),
    ],
  },
  {
    title: 'Internet rural',
    location: 'Heliconia',
    type: 'antenna',
    plans: [item('Internet 10 megas rural', 60000)],
  },
  {
    title: 'Internet + 2 TV urbano',
    location: 'Heliconia',
    type: 'fiber-tv',
    plans: [
      item('Instalación internet por combo', 90000),
      item('Internet 10 megas + 2 TV urbano', 89000),
      item('Internet 20 megas + 2 TV urbano', 105000),
    ],
  },
  {
    title: 'Internet + 2 TV rural',
    location: 'Heliconia',
    type: 'fiber-tv',
    plans: [item('Internet 10 megas + 2 TV rural', 84000)],
    note: 'Instalación a mitad de costo en enero.',
  },
  {
    title: 'Televisión general',
    location: 'Heliconia',
    type: 'tv',
    plans: [item('Mensualidad', 44000)],
  },
  {
    title: 'Internet por antena',
    location: 'Heliconia',
    type: 'antenna',
    plans: [
      item('Instalación internet antena pequeña', 100000),
      item('Internet 3 megas', 64000),
      item('Internet 4 megas', 74000),
      item('Internet 5 megas', 79000),
      item('Internet 6 megas', 84000),
      item('Internet 8 megas', 94000),
      item('Internet 10 megas', 104000),
    ],
  },
  {
    title: 'Internet urbano',
    location: 'Armenia',
    type: 'fiber',
    plans: [
      item('Instalación solo internet', 90000),
      item('Internet 10 megas urbano', 60000),
      item('Internet 15 megas urbano', 67000),
      item('Internet 20 megas urbano', 80000),
    ],
  },
  {
    title: 'Internet + 2 TV urbano',
    location: 'Armenia',
    type: 'fiber-tv',
    plans: [
      item('Instalación internet por combo', 90000),
      item('Internet 15 megas + 2 TV urbano', 77000),
    ],
    note: 'Instalación gratis en enero, febrero a mitad de precio y marzo normal.',
  },
  {
    title: 'Televisión general',
    location: 'Armenia',
    type: 'tv',
    plans: [
      item('Armenia cabecera', 44000),
      item('Pueblito Armenia', 36500),
      item('Guamal Armenia', 37500),
    ],
  },
  {
    title: 'Internet por antena',
    location: 'Titiribí',
    type: 'antenna',
    plans: [
      item('Instalación internet antena pequeña', 100000),
      item('Instalación internet antena grande', 250000),
      item('Internet 3 megas', 46000),
      item('Internet 4 megas', 52000),
      item('Internet 5 megas', 60000),
      item('Internet 6 megas', 68000),
      item('Internet 7 megas', 74000),
      item('Internet 8 megas', 81000),
      item('Internet 9 megas', 88000),
      item('Internet 10 megas', 96000),
    ],
  },
  {
    title: 'Internet por antena',
    location: 'Palmitas',
    type: 'antenna',
    plans: [
      item('Instalación internet casa', 100000),
      item('Instalación internet finca', 140000),
      item('Internet 5 megas', 64000),
      item('Internet 7 megas', 70000),
      item('Internet 9 megas', 77000),
      item('Internet 12 megas', 85000),
    ],
  },
  {
    title: 'Internet por antena',
    location: 'Altamira, Anzá y Betulia',
    type: 'antenna',
    plans: [
      item('Instalación internet antena pequeña', 200000),
      item('Instalación internet antena grande', 300000),
      item('Internet 3 megas', 54000),
      item('Internet 4 megas', 60000),
      item('Internet 5 megas', 68000),
      item('Internet 6 megas', 75000),
      item('Internet 8 megas', 90000),
      item('Internet 10 megas', 107000),
    ],
  },
  {
    title: 'Fibra óptica',
    location: 'Guintar',
    type: 'fiber',
    plans: [
      item('Instalación solo internet', 100000),
      item('Internet 10 megas', 55000),
      item('Internet 15 megas', 73000),
      item('Internet 20 megas', 120000),
    ],
  },
];
