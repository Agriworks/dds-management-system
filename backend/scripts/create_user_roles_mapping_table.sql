-- DDS Management System - User Roles Mapping Table
-- Generated from schema-public.hcl

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- User roles mapping table
CREATE TABLE user_roles_mapping (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    role_id UUID NOT NULL,
    assigned_by UUID,
    assigned_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    expires_at TIMESTAMP(6),
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create unique constraint on user_id and role_id combination
ALTER TABLE user_roles_mapping ADD CONSTRAINT user_role_unique UNIQUE (user_id, role_id);

-- Foreign key constraints
ALTER TABLE user_roles_mapping 
ADD CONSTRAINT fk_user_roles_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE user_roles_mapping 
ADD CONSTRAINT fk_user_roles_role 
FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE;

ALTER TABLE user_roles_mapping 
ADD CONSTRAINT fk_user_roles_assigned_by 
FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE SET NULL;

-- Add comments
COMMENT ON TABLE user_roles_mapping IS 'Many-to-many mapping between users and roles';
COMMENT ON COLUMN user_roles_mapping.id IS 'Unique identifier for the mapping';
COMMENT ON COLUMN user_roles_mapping.user_id IS 'Reference to the user';
COMMENT ON COLUMN user_roles_mapping.role_id IS 'Reference to the role';
COMMENT ON COLUMN user_roles_mapping.assigned_by IS 'User who assigned this role (optional)';
COMMENT ON COLUMN user_roles_mapping.assigned_at IS 'Timestamp when role was assigned';
COMMENT ON COLUMN user_roles_mapping.is_active IS 'Whether this role assignment is currently active';
COMMENT ON COLUMN user_roles_mapping.expires_at IS 'When this role assignment expires (optional)';
COMMENT ON COLUMN user_roles_mapping.created_at IS 'Timestamp when mapping was created';
COMMENT ON COLUMN user_roles_mapping.updated_at IS 'Timestamp when mapping was last updated';

-- Create indexes for better performance
CREATE INDEX idx_user_roles_mapping_user_id ON user_roles_mapping(user_id);
CREATE INDEX idx_user_roles_mapping_role_id ON user_roles_mapping(role_id);
CREATE INDEX idx_user_roles_mapping_is_active ON user_roles_mapping(is_active);
