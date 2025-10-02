import {
  Mandal,
  Village,
  Customer,
  GetMandalsResponse,
  GetVillagesResponse,
  GetCustomersResponse,
  GetRolesResponse,
  GetUsersResponse,
  VillageQueryParams,
  CustomerQueryParams,
} from "@/types/api";
import {
  CreateTransactionRequest,
  TransactionType,
  LoanType,
  FundType,
  GetTransactionsApiResponse,
} from "@/types/transaction";
import type { TransactionWithNames } from "@/types/transaction";

// Base API configuration
const API_BASE_URL = "/api";

// Generic API fetch function with proper error handling
async function apiRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error?.message || "API request failed");
  }

  return data;
}

// API functions for each endpoint

/**
 * Fetch all mandals
 */
export async function getMandals(): Promise<Mandal[]> {
  const response = await apiRequest<GetMandalsResponse>("/mandals");
  return response.data;
}

/**
 * Fetch villages for a specific mandal
 */
export async function getVillages(
  params: VillageQueryParams,
): Promise<Village[]> {
  const searchParams = new URLSearchParams({
    mandalId: params.mandalId,
  });

  const response = await apiRequest<GetVillagesResponse>(
    `/villages?${searchParams}`,
  );
  return response.data;
}

/**
 * Fetch active roles
 */
export async function getRoles(): Promise<Array<{ id: string; name: string; description: string | null; is_active: boolean }>> {
  const response = await apiRequest<GetRolesResponse>(`/roles`);
  return response.data;
}

/**
 * Fetch all users with their roles
 */
export async function getUsers(): Promise<Array<{ id: string; name: string; email: string; roles: string[]; created_at: string; updated_at: string }>> {
  const response = await apiRequest<GetUsersResponse>(`/users`);
  return response.data;
}

/**
 * Update user roles
 */
export async function updateUserRoles(userId: string, roles: string[]): Promise<{ message: string }> {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/roles`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roles }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error?.message || "Failed to update user roles");
  }

  return data.data;
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
    searchParams.append("limit", params.limit);
  }
  if (params.offset) {
    searchParams.append("offset", params.offset);
  }
  if (params.search) {
    searchParams.append("search", params.search);
  }

  const response = await apiRequest<GetCustomersResponse>(
    `/customers?${searchParams}`,
  );
  return {
    customers: response.data.items,
    pagination: response.data.pagination,
  };
}

/**
 * Fetch transactions with pagination and optional filters
 */
export async function getTransactions(params: {
  limit?: number;
  offset?: number;
  memberId?: string;
  supervisorId?: string;
  type?: TransactionType;
}): Promise<GetTransactionsApiResponse> {
  const searchParams = new URLSearchParams();

  // Add optional parameters
  if (params.limit) {
    searchParams.append("limit", params.limit.toString());
  }
  if (params.offset) {
    searchParams.append("offset", params.offset.toString());
  }
  if (params.memberId) {
    searchParams.append("memberId", params.memberId);
  }
  if (params.supervisorId) {
    searchParams.append("supervisorId", params.supervisorId);
  }
  if (params.type) {
    searchParams.append("type", params.type);
  }

  const response = await apiRequest<unknown>(`/transactions?${searchParams}`);

  // Type guards
  function isNewShape(resp: unknown): resp is GetTransactionsApiResponse {
    if (typeof resp !== "object" || resp === null) return false;
    const obj = resp as Record<string, unknown>;
    return (
      Array.isArray(obj.transactions) &&
      typeof obj.pagination === "object" &&
      obj.pagination !== null
    );
  }
  function isLegacyShape(resp: unknown): resp is {
    data: {
      items: TransactionWithNames[];
      pagination: GetTransactionsApiResponse["pagination"];
    };
  } {
    if (typeof resp !== "object" || resp === null) return false;
    const obj = resp as Record<string, unknown>;
    const data = obj.data as Record<string, unknown> | undefined;
    return (
      !!data &&
      Array.isArray(data.items) &&
      typeof data.pagination === "object" &&
      data.pagination !== null
    );
  }

  let items: TransactionWithNames[] = [];
  let pagination: GetTransactionsApiResponse["pagination"];

  if (isNewShape(response)) {
    items = response.transactions;
    pagination = response.pagination;
  } else if (isLegacyShape(response)) {
    items = response.data.items;
    pagination = response.data.pagination;
  } else {
    throw new Error("Unexpected transactions API response shape");
  }

  return {
    transactions: items.map((t) => ({
      ...t,
      type: t.type as TransactionType,
      loan_type: t.loan_type as LoanType | null,
      fund_type: t.fund_type as FundType | null,
    })),
    pagination,
  };
}

/**
 * Create a new transaction
 */
export async function createTransaction(
  transaction: CreateTransactionRequest,
): Promise<{
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error?.message || "Transaction creation failed");
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
  pagination:
    | { total: number; limit: number; offset: number; hasMore: boolean }
    | undefined;
  loading: boolean;
  error: Error | null;
};

export type TransactionApiHook = (params: {
  limit?: number;
  offset?: number;
  memberId?: string;
  supervisorId?: string;
  type?: "DEPOSIT" | "WITHDRAWL" | "LOAN" | "PAYBACK";
}) => {
  transactions:
    | Array<{
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
      }>
    | undefined;
  pagination:
    | { total: number; limit: number; offset: number; hasMore: boolean }
    | undefined;
  loading: boolean;
  error: Error | null;
};
