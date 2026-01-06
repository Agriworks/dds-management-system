BEGIN;
-- Seed user roles mapping
INSERT INTO public.user_roles_mapping (user_id, role_id, assigned_by, is_active)
VALUES (
    '7da4f9d7-39a6-47a2-8fae-2a258c518550',
    '9c7f90e2-a8a5-4d67-95f9-f8af23afca2d',
    '7da4f9d7-39a6-47a2-8fae-2a258c518550',
    true
  ) ON CONFLICT (user_id, role_id) DO
UPDATE
SET assigned_by = EXCLUDED.assigned_by,
  is_active = EXCLUDED.is_active;
COMMIT;