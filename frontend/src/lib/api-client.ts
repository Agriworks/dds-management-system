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
  GetTransactionsApiResponse,
} from "@/types/transaction";
import type { TransactionWithNames } from "@/types/transaction";

// Transaction Type interface for dropdown
export interface TransactionTypeOption {
  id: string;
  name: string;
  label_english: string;
  label_telugu: string;
  description?: string;
  parent_id?: string | null;
}

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
export async function getRoles(): Promise<
  Array<{
    id: string;
    name: string;
    description: string | null;
    is_active: boolean;
  }>
> {
  const response = await apiRequest<GetRolesResponse>(`/roles`);
  return response.data;
}

/**
 * Fetch all users with their roles
 */
export async function getUsers(): Promise<
  Array<{
    id: string;
    name: string;
    email: string;
    roles: string[];
    created_at: string;
    updated_at: string;
  }>
> {
  const response = await apiRequest<GetUsersResponse>(`/users`);
  return response.data;
}

/**
 * Update user roles
 */
export async function updateUserRoles(
  userId: string,
  roles: string[],
  accessToken: string,
): Promise<{ message: string }> {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/roles`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
 * Fetch transaction types for dropdowns
 */
export async function getTransactionTypes(): Promise<TransactionTypeOption[]> {
  const response = await apiRequest<{
    success: boolean;
    data: {
      mainTypes: TransactionTypeOption[];
      count: number;
    };
    timestamp: string;
  }>("/transaction-types");

  return response.data.mainTypes;
}

/**
 * Fetch transactions with pagination and optional filters
 */
export async function getTransactions(params: {
  limit?: number;
  offset?: number;
  memberId?: string;
  supervisorId?: string;
  type?: string;
  amount?: number;
  startDate?: string;
  endDate?: string;
  isArchived?: boolean;
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
  if (params.amount) {
    searchParams.append("amount", params.amount.toString());
  }
  if (params.startDate) {
    searchParams.append("startDate", params.startDate);
  }
  if (params.endDate) {
    searchParams.append("endDate", params.endDate);
  }
  if (params.isArchived !== undefined) {
    searchParams.append("isArchived", params.isArchived.toString());
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
      type: t.type as TransactionType, // Type is now derived from subtype relationship
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

export async function invalidateTransaction(
  transactionId: string,
): Promise<{ id: string; is_archived: boolean }> {
  const response = await fetch(
    `${API_BASE_URL}/transactions/${transactionId}/invalidate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    const contentType = response.headers.get("content-type") || "";
    const errorData =
      contentType.includes("application/json")
        ? await response.json().catch(() => ({}))
        : {};
    const errorText = !contentType.includes("application/json")
      ? await response.text().catch(() => "")
      : "";
    throw new Error(
      errorData.error?.message ||
        errorText ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json().catch(async () => {
    const text = await response.text().catch(() => "");
    throw new Error(text || "Invalid JSON response from server");
  });

  if (!data.success) {
    throw new Error(data.error?.message || "Failed to invalidate transaction");
  }

  return data.data;
}

export async function validateTransaction(
  transactionId: string,
): Promise<{ id: string; is_archived: boolean }> {
  const response = await fetch(
    `${API_BASE_URL}/transactions/${transactionId}/validate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    const contentType = response.headers.get("content-type") || "";
    const errorData =
      contentType.includes("application/json")
        ? await response.json().catch(() => ({}))
        : {};
    const errorText = !contentType.includes("application/json")
      ? await response.text().catch(() => "")
      : "";
    throw new Error(
      errorData.error?.message ||
        errorText ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json().catch(async () => {
    const text = await response.text().catch(() => "");
    throw new Error(text || "Invalid JSON response from server");
  });

  if (!data.success) {
    throw new Error(data.error?.message || "Failed to validate transaction");
  }

  return data.data;
}

export async function archiveMember(
  memberId: string,
  accessToken: string,
): Promise<{ id: string; is_archived: boolean }> {
  const response = await fetch(`${API_BASE_URL}/members/${memberId}/archive`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
    throw new Error(data.error?.message || "Failed to archive member");
  }

  return data.data;
}

export async function deleteMember(
  memberId: string,
  accessToken: string,
): Promise<{ id: string; transactions_updated: number }> {
  const response = await fetch(`${API_BASE_URL}/members/${memberId}/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
    throw new Error(data.error?.message || "Failed to delete member");
  }

  return data.data;
}

export async function archiveTransaction(
  transactionId: string,
  accessToken: string,
): Promise<{ id: string; is_deleted: boolean }> {
  const response = await fetch(
    `${API_BASE_URL}/transactions/${transactionId}/archive`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error?.message || "Failed to archive transaction");
  }

  return data.data;
}

export async function deleteTransaction(
  transactionId: string,
  accessToken: string,
): Promise<{ id: string; is_archived: boolean }> {
  const response = await fetch(
    `${API_BASE_URL}/transactions/${transactionId}/delete`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error?.message || "Failed to delete transaction");
  }

  return data.data;
}

export async function getDeletedMembers(
  accessToken: string,
): Promise<unknown[]> {
  const response = await fetch(`${API_BASE_URL}/members/deleted`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
    throw new Error(data.error?.message || "Failed to fetch deleted members");
  }

  return data.data;
}

export async function restoreMember(
  memberId: string,
  accessToken: string,
): Promise<{ id: string; is_archived: boolean }> {
  const response = await fetch(`${API_BASE_URL}/members/${memberId}/restore`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
    throw new Error(data.error?.message || "Failed to restore member");
  }

  return data.data;
}

export async function restoreTransaction(
  transactionId: string,
  accessToken: string,
): Promise<{ id: string; is_archived: boolean }> {
  const response = await fetch(
    `${API_BASE_URL}/transactions/${transactionId}/restore`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error?.message || "Failed to restore transaction");
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
  type?: string;
  amount?: number;
  startDate?: string;
  endDate?: string;
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
