BEGIN;

-- Seed explicit values for roles
INSERT INTO public.roles (
  name,
  description,
  is_active,
  created_at,
  updated_at
)
VALUES
  ('supervisor','Supervisor with access to manage transactions and oversee operations',true,'2025-09-18 19:51:57.971416','2025-09-18 19:51:57.971416'),
  ('admin','Administrator with full access to all system features and settings',true,'2025-09-18 19:51:57.971416','2025-09-18 19:51:57.971416'),
  ('user','Basic user with limited access to view and manage their own data',true,'2025-09-18 19:51:57.971416','2025-09-18 19:51:57.971416')
ON CONFLICT (name) DO UPDATE SET
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active,
  updated_at = EXCLUDED.updated_at;

COMMIT;


