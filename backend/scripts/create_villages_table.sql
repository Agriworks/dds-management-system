-- DDS Management System - Villages Table
-- Generated from schema-public.hcl

-- Create the public schema (if it doesn't exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Set the schema for subsequent commands
SET search_path TO public;

-- Villages table
CREATE TABLE villages (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    label_english TEXT NOT NULL,
    label_telugu TEXT NOT NULL,
    created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    mandal UUID NOT NULL
);

-- Foreign key constraint
ALTER TABLE villages 
ADD CONSTRAINT fk_villages_mandal 
FOREIGN KEY (mandal) REFERENCES mandals(id) ON DELETE RESTRICT;

-- Add comments
COMMENT ON TABLE villages IS 'Villages within mandals';
COMMENT ON COLUMN villages.id IS 'Unique identifier for the village';
COMMENT ON COLUMN villages.label_english IS 'Village name in English';
COMMENT ON COLUMN villages.label_telugu IS 'Village name in Telugu';
COMMENT ON COLUMN villages.mandal IS 'Reference to the mandal this village belongs to';
COMMENT ON COLUMN villages.created_at IS 'Timestamp when village was created';
COMMENT ON COLUMN villages.updated_at IS 'Timestamp when village was last updated';

-- Create indexes for better performance
CREATE INDEX idx_villages_label_english ON villages(label_english);
CREATE INDEX idx_villages_label_telugu ON villages(label_telugu);
CREATE INDEX idx_villages_mandal ON villages(mandal);
