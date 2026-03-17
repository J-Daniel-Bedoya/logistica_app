export interface NavItem {
  label: string;
  path: string;
  dropdownLabel?: string;
  dropdownPath?: string;
  children?: NavItem[];
}

export interface ServicePlan {
  label: string;
  price: string;
  detail?: string;
}

export interface PlanCategory {
  title: string;
  location: string;
  type: string;
  plans: ServicePlan[];
  note?: string;
}

export interface Office {
  name: string;
  phone: string;
  address: string;
  hours?: string[];
  note?: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface QualityDocument {
  label: string;
  url: string;
}

export interface QualityYear {
  year: number;
  documents: QualityDocument[];
}

export interface RegulatoryDocument {
  title: string;
  url: string;
}

export interface RegulatoryCategory {
  category: string;
  documents: RegulatoryDocument[];
}

export interface BillingDate {
  label: string;
  date: string;
  icon: string;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface ContactInfo {
  phone: string;
  phone2: string;
  email: string;
  address: string;
  website: string;
  facebook: string;
  whatsapp: string;
  paymentLink?: string;
  officeHours?: string[];
  supportHours?: string[];
}
