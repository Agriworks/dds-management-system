import { 
  Mandal, 
  Village, 
  Customer, 
  GetMandalsResponse, 
  GetVillagesResponse, 
  GetCustomersResponse,
  VillageQueryParams,
  CustomerQueryParams
} from '@/types/api';
import { CreateTransactionRequest } from '@/types/transaction';

// Base API configuration
const API_BASE_URL = '/api';

// Generic API fetch function with proper error handling
async function apiRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`
    );
  }

  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.error?.message || 'API request failed');
  }

  return data;
}

// API functions for each endpoint

/**
 * Fetch all mandals
 */
export async function getMandals(): Promise<Mandal[]> {
  const response = await apiRequest<GetMandalsResponse>('/mandals');
  return response.data;
}

/**
 * Fetch villages for a specific mandal
 */
export async function getVillages(params: VillageQueryParams): Promise<Village[]> {
  const searchParams = new URLSearchParams({
    mandalId: params.mandalId,
  });

  const response = await apiRequest<GetVillagesResponse>(`/villages?${searchParams}`);
  return response.data;
}

/**
 * Fetch customers for a specific village and mandal with pagination
 */
export async function getCustomers(params: CustomerQueryParams): Promise<{
  customers: Customer[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}> {
  const searchParams = new URLSearchParams({
    villageId: params.villageId,
    mandalId: params.mandalId,
  });

  // Add optional parameters
  if (params.limit) {
    searchParams.append('limit', params.limit);
  }
  if (params.offset) {
    searchParams.append('offset', params.offset);
  }
  if (params.search) {
    searchParams.append('search', params.search);
  }

  const response = await apiRequest<GetCustomersResponse>(`/customers?${searchParams}`);
  return {
    customers: response.data.items,
    pagination: response.data.pagination,
  };
}

/**
 * Create a new transaction
 */
export async function createTransaction(transaction: CreateTransactionRequest): Promise<{
  id: string;
  supervised_by: string;
  member: string;
  type: string;
  amount: number;
  comments: string | null;
  loan_type: string | null;
  fund_type: string | null;
  transaction_date: string;
  recipet_number: string;
  created_at: string;
  updated_at: string;
  member_name: string;
  supervisor_name: string;
}> {
  const response = await fetch(`${API_BASE_URL}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`
    );
  }

  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.error?.message || 'Transaction creation failed');
  }

  return data.data;
}

// Typed hooks for React components (if using SWR or React Query later)
export type MandalApiHook = () => {
  mandals: Mandal[] | undefined;
  loading: boolean;
  error: Error | null;
};

export type VillageApiHook = (mandalId: string | null) => {
  villages: Village[] | undefined;
  loading: boolean;
  error: Error | null;
};

export type CustomerApiHook = (params: {
  villageId: string | null;
  mandalId: string | null;
  limit?: number;
  offset?: number;
  search?: string;
}) => {
  customers: Customer[] | undefined;
  pagination: { total: number; limit: number; offset: number; hasMore: boolean } | undefined;
  loading: boolean;
  error: Error | null;
};
