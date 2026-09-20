/**
 * ReviewMuse Types
 */

export type LocationType = 'ร้านอาหาร' | 'คาเฟ่' | 'โรงแรม';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  branch?: string;
}

export type Platform = 'Instagram' | 'Facebook';
export type Status = 'ยังไม่มีร่าง' | 'ร่าง' | 'โพสต์แล้ว';

export interface PlatformData {
  tone?: string;
  caption: string;
  status: Status;
  link?: string;
  datePosted?: string;
}

export interface Review {
  id: string;
  locationId: string;
  locationName: string;
  locationType: LocationType;
  dateVisited?: string;
  images: string[]; // URLs or Base64
  coverImageIndex: number;
  experience: string;
  angle: string;
  lastEdited: string; // ISO Date
  currentStep: 1 | 2 | 3;
  platforms: {
    Instagram: PlatformData;
    Facebook: PlatformData;
  };
}
