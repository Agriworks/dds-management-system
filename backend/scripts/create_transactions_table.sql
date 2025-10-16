-- DDS Management System - Transactions Table
-- Generated from schema-public.hcl

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Transactions table
CREATE TABLE transactions (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    supervised_by UUID NOT NULL,
    member UUID NOT NULL,
    transaction_type_id UUID NOT NULL,
    amount INTEGER NOT NULL,
    comments TEXT,
    transaction_date DATE NOT NULL,
    receipt_number VARCHAR(255) NOT NULL,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Foreign key constraints
ALTER TABLE transactions 
ADD CONSTRAINT fk_transactions_user 
FOREIGN KEY (supervised_by) REFERENCES users(id) ON DELETE RESTRICT;

ALTER TABLE transactions 
ADD CONSTRAINT fk_transactions_member 
FOREIGN KEY (member) REFERENCES members(id) ON DELETE RESTRICT;

ALTER TABLE transactions 
ADD CONSTRAINT fk_transactions_type 
FOREIGN KEY (transaction_type_id) REFERENCES transaction_types(id) ON DELETE RESTRICT;

-- Check constraints (removed loan_type and fund_type related constraints)

-- Add comments
COMMENT ON TABLE transactions IS 'Financial transactions including deposits, withdrawals, loans, and paybacks';
COMMENT ON COLUMN transactions.id IS 'Unique identifier for the transaction';
COMMENT ON COLUMN transactions.supervised_by IS 'Reference to the user who supervised this transaction';
COMMENT ON COLUMN transactions.member IS 'Reference to the member involved in this transaction';
COMMENT ON COLUMN transactions.transaction_type_id IS 'Reference to the transaction type';
COMMENT ON COLUMN transactions.amount IS 'Transaction amount in cents/paise';
COMMENT ON COLUMN transactions.comments IS 'Additional comments or notes about the transaction';
COMMENT ON COLUMN transactions.transaction_date IS 'Date when the transaction occurred';
COMMENT ON COLUMN transactions.receipt_number IS 'Receipt number for the transaction';
COMMENT ON COLUMN transactions.created_at IS 'Timestamp when transaction was created';
COMMENT ON COLUMN transactions.updated_at IS 'Timestamp when transaction was last updated';

-- Create indexes for better performance
CREATE INDEX idx_transactions_date ON transactions(transaction_date);
CREATE INDEX idx_transactions_member ON transactions(member);
CREATE INDEX idx_transactions_user ON transactions(supervised_by);
CREATE INDEX idx_transactions_type ON transactions(transaction_type_id);
