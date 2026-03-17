import type { ContactInfo, Office } from '@/shared/types';

export const contactInfo: ContactInfo = {
  phone: '322 651 2970',
  phone2: '310 593 0440',
  email: 'lis.sopetran2018@gmail.com',
  address: 'Carrera 13 # 9-45, Sopetrán, Antioquia',
  website: 'www.logisticaintegralsatelital.com',
  facebook: 'https://www.facebook.com/LISSopetran',
  whatsapp:
    'https://api.whatsapp.com/send?phone=573105930440&text=Hola,%20me%20gustaría%20tener%20más%20información%20sobre%20los%20planes%20de%20internet.',
  paymentLink: 'https://forwisp.com/clientesapp/link-pago/logisinsat/',
  officeHours: [
    'Lunes a viernes: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
    'Sábados en oficinas: 8:00 AM a 12:00 PM.',
    'Sopetrán también atiende los sábados de 2:00 PM a 5:00 PM.',
  ],
  supportHours: [
    'Personal técnico disponible fines de semana y festivos en Sopetrán.',
    'Personal técnico disponible fines de semana y festivos en San Jerónimo.',
  ],
};

export const paymentPoints: Office[] = [
  {
    name: 'Sopetrán',
    phone: '322 651 2970 - 310 593 0440',
    address: 'Carrera 13 # 9-45, 2do piso',
    hours: [
      'Lunes a viernes: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
      'Sábados: 8:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
    ],
    note: 'Sede principal, administrativa y de atención al usuario.',
  },
  {
    name: 'San Jerónimo',
    phone: '322 651 2970 - 322 770 8319',
    address: 'Carrera 21 # 11-53, 2do piso',
    hours: [
      'Lunes a viernes: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
      'Sábados: 8:00 AM a 12:00 PM.',
    ],
    note: 'Punto de apoyo para atención al cliente y asistencia técnica.',
  },
  {
    name: 'Heliconia',
    phone: '313 772 2338',
    address: 'Atención comercial y operativa en la subregión de Occidente',
    hours: [
      'Lunes a viernes: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
      'Sábados: 8:00 AM a 12:00 PM.',
    ],
    note: 'Cobertura y acompañamiento local para usuarios del municipio.',
  },
  {
    name: 'Ebéjico',
    phone: '315 292 2925',
    address: 'Atención comercial y operativa en el municipio',
    hours: [
      'Lunes a viernes: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
      'Sábados: 8:00 AM a 12:00 PM.',
    ],
    note: 'Punto de apoyo para atención al cliente y soporte en Ebéjico.',
  },
  {
    name: 'Altamira',
    phone: '300 593 3569',
    address: 'Atención comercial y operativa en el corregimiento de Altamira (Betulia)',
    hours: [
      'Lunes a viernes: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
      'Sábados: 8:00 AM a 12:00 PM.',
    ],
    note: 'Cobertura y acompañamiento local para usuarios de Altamira y Betulia.',
  },
];
