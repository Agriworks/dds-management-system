// Base types for our entities
export interface Mandal {
  id: string;
  name: string;
  code: string;
  district: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

export interface Village {
  id: string;
  name: string;
  code: string;
  mandalId: string;
  mandalName: string;
  population?: number;
  pincode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
  villageId: string;
  villageName: string;
  mandalId: string;
  mandalName: string;
  customerType: "individual" | "business";
  kycStatus: "pending" | "verified" | "rejected";
  createdAt: string;
  updatedAt: string;
}

// API Request types
export interface GetVillagesRequest {
  mandalId: string;
}

export interface GetCustomersRequest {
  villageId: string;
  mandalId: string;
  limit?: number;
  offset?: number;
  search?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

// Specific API response types
export type GetMandalsResponse = ApiResponse<Mandal[]>;
export type GetVillagesResponse = ApiResponse<Village[]>;
export type GetCustomersResponse = ApiResponse<PaginatedResponse<Customer>>;

// Query parameter types for URL search params
export interface VillageQueryParams {
  mandalId: string;
}

export interface CustomerQueryParams {
  villageId: string;
  mandalId: string;
  limit?: string;
  offset?: string;
  search?: string;
}
