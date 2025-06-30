// Transaction related types based on the database schema

export type TransactionType = "DEPOSIT" | "WITHDRAWL" | "LOAN" | "PAYBACK";
export type LoanType = "LIVESTOCK" | "INDIVIDUAL" | "LAAGODI";
export type FundType = "DDS_FUNDS" | "PROJECT_FUNDS";

export interface TransactionFormData {
  mandal: string;
  village: string;
  customer: string; // This would be the member ID
  transactionDate: Date;
  amount: string; // String in form, will be converted to number
  transactionType: TransactionType;
  loanType: LoanType | null;
  fundType: FundType | null;
  comments: string | null;
}

export interface CreateTransactionRequest {
  supervised_by: string; // UUID of supervisor
  member: string; // UUID of member (customer)
  type: TransactionType;
  amount: number; // Integer amount in database
  comments: string | null;
  loan_type: LoanType | null;
  fund_type: FundType | null;
  // created_at and updated_at are handled by database
}

export interface Transaction {
  id: string;
  supervised_by: string;
  member: string;
  type: TransactionType;
  amount: number;
  comments: string | null;
  loan_type: LoanType | null;
  fund_type: FundType | null;
  created_at: string;
  updated_at: string;
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

export interface Supervisor {
  id: string;
  full_name_english: string;
  full_name_telugu: string;
  created_at: string;
  updated_at: string;
}
