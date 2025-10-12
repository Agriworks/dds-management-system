// Transaction related types based on the database schema

export type TransactionType = "DEPOSIT" | "WITHDRAWL" | "LOAN" | "PAYBACK";

export interface TransactionFormData {
  mandal: string;
  village: string;
  customer: string; // This would be the member ID
  transactionDate: Date;
  amount: string; // String in form, will be converted to number
  transactionType: TransactionType;
  transactionSubtype: string | null;
  comments: string | null;
}

export interface CreateTransactionRequest {
  supervised_by: string; // UUID of supervisor
  member: string; // UUID of member (customer)
  amount: number; // Integer amount in database
  comments: string | null;
  transaction_type_id: string; // UUID of transaction type (points to deepest level)
  // created_at and updated_at are handled by database
}

export interface Transaction {
  id: string;
  supervised_by: string;
  member: string;
  amount: number;
  comments: string | null;
  transaction_type_id: string;
  created_at: string;
  updated_at: string;
  // Type information for display
  type?: TransactionType; // Optional for API responses that include type
}

// Response types for transaction API
export interface CreateTransactionResponse {
  success: boolean;
  data: Transaction;
  message: string | null;
  timestamp: string;
}

export interface GetTransactionsResponse {
  success: boolean;
  data: {
    items: Transaction[];
    pagination: {
      total: number;
      limit: number;
      offset: number;
      hasMore: boolean;
    };
  };
  message: string | null;
  timestamp: string;
}

// Update the existing types to match database schema
export interface Member {
  id: string;
  full_name_english: string;
  village_id: string;
  house_number: string;
  phone_number: string;
  husband_or_father_name: string;
  created_at: string;
  updated_at: string;
}

export interface Village {
  id: string;
  label_english: string;
  label_telugu: string;
  mandal: string; // Foreign key to mandals table
  created_at: string;
  updated_at: string;
}

export interface Mandal {
  id: string;
  label_english: string;
  label_telugu: string;
  created_at: string;
  updated_at: string;
}

// Transaction with extra fields from API
export interface TransactionWithNames extends Transaction {
  member_name: string;
  supervisor_name: string;
  receipt_number: string;
  transaction_date: string;
  type_name?: string;
  type_label_english?: string;
  type_label_telugu?: string;
}

// API response type for getTransactions
export interface GetTransactionsApiResponse {
  transactions: TransactionWithNames[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}
