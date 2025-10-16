-- DDS Management System - Endpoint Access Table
-- Generated from Prisma schema

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Endpoint access table
CREATE TABLE endpointaccess (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    role VARCHAR(255) NOT NULL,
    endpoint VARCHAR(255) NOT NULL,
    viewer BOOLEAN NOT NULL,
    contributor BOOLEAN NOT NULL,
    admin BOOLEAN NOT NULL,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create unique constraint on role and endpoint combination
ALTER TABLE endpointaccess ADD CONSTRAINT role_endpoint_unique UNIQUE (role, endpoint);

-- Add comments
COMMENT ON TABLE endpointaccess IS 'Endpoint access permissions for different roles';
COMMENT ON COLUMN endpointaccess.id IS 'Unique identifier for the endpoint access record';
COMMENT ON COLUMN endpointaccess.role IS 'Role name';
COMMENT ON COLUMN endpointaccess.endpoint IS 'API endpoint path';
COMMENT ON COLUMN endpointaccess.viewer IS 'Whether role can view this endpoint';
COMMENT ON COLUMN endpointaccess.contributor IS 'Whether role can contribute to this endpoint';
COMMENT ON COLUMN endpointaccess.admin IS 'Whether role has admin access to this endpoint';
COMMENT ON COLUMN endpointaccess.created_at IS 'Timestamp when access record was created';
COMMENT ON COLUMN endpointaccess.updated_at IS 'Timestamp when access record was last updated';

-- Create indexes for better performance
CREATE INDEX idx_endpointaccess_endpoint ON endpointaccess(endpoint);
CREATE INDEX idx_endpointaccess_role ON endpointaccess(role);
