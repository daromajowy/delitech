export type PageId = 
  | 'home'
  | 'offices'
  | 'homes'
  | 'solutions'
  | 'architects'
  | 'knx'
  | 'projects'
  | 'knowledge'
  | 'about'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  subItems?: { id: string; label: string; hash?: string }[];
}

export interface InquiryFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  investmentType: 'biuro' | 'dom' | 'apartament' | 'komercyjny' | 'inne';
  location: string;
  stage: 'koncepcja' | 'projekt' | 'stan-surowy' | 'wykonczenie' | 'modernizacja';
  areaSquareMeters?: string;
  scopeItems: string[];
  description: string;
  files: { name: string; size: number; type: string }[];
  consentDataProcessing: boolean;
  consentMarketing?: boolean;
}
