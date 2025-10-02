// Base types for our entities
export interface Mandal {
  id: string;
  label_english: string;
  label_telugu: string;
  createdAt: string;
  updatedAt: string;
}

export interface Village {
  id: string;
  label_english: string;
  label_telugu: string;
  mandalId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  full_name_english: string;
  village_id: string;
  house_number: string;
  phone_number: string;
  husband_or_father_name: string;
  created_at: string;
  updated_at: string;
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
export type GetRolesResponse = ApiResponse<Array<{ id: string; name: string; description: string | null; is_active: boolean }>>;
export type GetUsersResponse = ApiResponse<Array<{ id: string; name: string; email: string; roles: string[]; created_at: string; updated_at: string }>>;

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
