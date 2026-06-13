BEGIN;

-- Allow duplicate phone numbers across members
ALTER TABLE public.members DROP CONSTRAINT IF EXISTS members_phone_number_unique;

-- Soft-archive support for members
ALTER TABLE public.members
  ADD COLUMN IF NOT EXISTS is_archived boolean NOT NULL DEFAULT false;

-- Soft-delete support for transactions (separate from pending/validated is_archived workflow)
ALTER TABLE public.transactions
  ADD COLUMN IF NOT EXISTS is_deleted boolean NOT NULL DEFAULT false;

COMMIT;
