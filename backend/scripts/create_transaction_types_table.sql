-- DDS Management System - Transaction Types Table
-- Generated from Prisma schema

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Transaction types table
CREATE TABLE transaction_types (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    label_english VARCHAR(255) NOT NULL,
    label_telugu VARCHAR(255) NOT NULL,
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    parent_id UUID
);

-- Create unique constraint on name
ALTER TABLE transaction_types ADD CONSTRAINT transaction_types_name_unique UNIQUE (name);

-- Foreign key constraint for self-referencing hierarchy
ALTER TABLE transaction_types 
ADD CONSTRAINT fk_type_parent 
FOREIGN KEY (parent_id) REFERENCES transaction_types(id) ON DELETE RESTRICT;

-- Add comments
COMMENT ON TABLE transaction_types IS 'Transaction types with hierarchical structure';
COMMENT ON COLUMN transaction_types.id IS 'Unique identifier for the transaction type';
COMMENT ON COLUMN transaction_types.name IS 'Unique name of the transaction type';
COMMENT ON COLUMN transaction_types.label_english IS 'Display label in English';
COMMENT ON COLUMN transaction_types.label_telugu IS 'Display label in Telugu';
COMMENT ON COLUMN transaction_types.description IS 'Description of the transaction type';
COMMENT ON COLUMN transaction_types.is_active IS 'Whether this transaction type is currently active';
COMMENT ON COLUMN transaction_types.parent_id IS 'Reference to parent transaction type for hierarchy';
COMMENT ON COLUMN transaction_types.created_at IS 'Timestamp when transaction type was created';
COMMENT ON COLUMN transaction_types.updated_at IS 'Timestamp when transaction type was last updated';

-- Create indexes for better performance
CREATE INDEX idx_types_active ON transaction_types(is_active);
CREATE INDEX idx_types_parent ON transaction_types(parent_id);
