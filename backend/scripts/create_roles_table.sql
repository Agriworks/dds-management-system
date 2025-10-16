-- DDS Management System - Roles Table
-- Generated from schema-public.hcl

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Roles table
CREATE TABLE roles (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add comments
COMMENT ON TABLE roles IS 'System roles for access control';
COMMENT ON COLUMN roles.id IS 'Unique identifier for the role';
COMMENT ON COLUMN roles.name IS 'Name of the role';
COMMENT ON COLUMN roles.description IS 'Description of the role (optional)';
COMMENT ON COLUMN roles.is_active IS 'Whether the role is currently active';
COMMENT ON COLUMN roles.created_at IS 'Timestamp when role was created';
COMMENT ON COLUMN roles.updated_at IS 'Timestamp when role was last updated';

-- Create indexes for better performance
CREATE INDEX idx_roles_active ON roles(is_active);
