-- DDS Management System - Members Table
-- Generated from schema-public.hcl

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Members table
CREATE TABLE members (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    full_name_english TEXT NOT NULL,
    village_id UUID NOT NULL,
    house_number TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    husband_or_father_name TEXT NOT NULL,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Foreign key constraint
ALTER TABLE members 
ADD CONSTRAINT fk_members_village 
FOREIGN KEY (village_id) REFERENCES villages(id) ON DELETE RESTRICT;

-- Add comments
COMMENT ON TABLE members IS 'Community members who participate in the system';
COMMENT ON COLUMN members.id IS 'Unique identifier for the member';
COMMENT ON COLUMN members.full_name_english IS 'Full name of the member in English';
COMMENT ON COLUMN members.village_id IS 'Reference to the village this member belongs to';
COMMENT ON COLUMN members.house_number IS 'House number of the member';
COMMENT ON COLUMN members.phone_number IS 'Phone number of the member';
COMMENT ON COLUMN members.husband_or_father_name IS 'Name of husband or father';
COMMENT ON COLUMN members.created_at IS 'Timestamp when member was created';
COMMENT ON COLUMN members.updated_at IS 'Timestamp when member was last updated';

-- No additional indexes needed (Prisma schema doesn't define any)
