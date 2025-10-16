-- DDS Management System - Mandals Table
-- Generated from schema-public.hcl

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Mandals table
CREATE TABLE mandals (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    label_english TEXT NOT NULL,
    label_telugu TEXT NOT NULL,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add comments
COMMENT ON TABLE mandals IS 'Administrative divisions (mandals)';
COMMENT ON COLUMN mandals.id IS 'Unique identifier for the mandal';
COMMENT ON COLUMN mandals.label_english IS 'Mandal name in English';
COMMENT ON COLUMN mandals.label_telugu IS 'Mandal name in Telugu';
COMMENT ON COLUMN mandals.created_at IS 'Timestamp when mandal was created';
COMMENT ON COLUMN mandals.updated_at IS 'Timestamp when mandal was last updated';

-- No additional indexes needed (Prisma schema doesn't define any)
