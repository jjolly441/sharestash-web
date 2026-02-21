export interface RentalItem {
  id: string;
  title: string;
  description: string;
  category: string;
  pricePerDay: number;
  pricePerHour?: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  image: string;
  ownerId: string;
  ownerName: string;
  isAvailable: boolean;
  createdAt: string;
  location?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: { latitude: number; longitude: number } | null;
  };
  viewCount?: number;
  securityDeposit?: number;
}

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  photoURL?: string;
  bio?: string;
  isVerified?: boolean;
  isAdmin?: boolean;
  trustScore?: number;
  totalRentals?: number;
  createdAt?: any;
}
