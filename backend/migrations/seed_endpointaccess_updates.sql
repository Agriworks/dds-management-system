BEGIN;

-- Restrict delete members to Supervisors and Admins
UPDATE public.endpointaccess
SET admin = true, updated_at = NOW()
WHERE role = 'supervisor' AND endpoint = '/members/browse';

-- Restrict delete transactions to Accountants and Admins
UPDATE public.endpointaccess
SET admin = true, updated_at = NOW()
WHERE role = 'accountant' AND endpoint = '/transactions/browse';

-- Add endpointaccess for deleted members page
INSERT INTO public.endpointaccess (role, endpoint, viewer, contributor, admin, created_at, updated_at)
VALUES
  ('user', '/members/deleted', false, false, false, NOW(), NOW()),
  ('supervisor', '/members/deleted', false, false, false, NOW(), NOW()),
  ('accountant', '/members/deleted', false, false, false, NOW(), NOW()),
  ('admin', '/members/deleted', true, true, true, NOW(), NOW())
ON CONFLICT (role, endpoint) DO UPDATE SET
  viewer = EXCLUDED.viewer,
  contributor = EXCLUDED.contributor,
  admin = EXCLUDED.admin,
  updated_at = EXCLUDED.updated_at;

-- Add endpointaccess for deleted transactions page
INSERT INTO public.endpointaccess (role, endpoint, viewer, contributor, admin, created_at, updated_at)
VALUES
  ('user', '/transactions/deleted', false, false, false, NOW(), NOW()),
  ('supervisor', '/transactions/deleted', false, false, false, NOW(), NOW()),
  ('accountant', '/transactions/deleted', false, false, false, NOW(), NOW()),
  ('admin', '/transactions/deleted', true, true, true, NOW(), NOW())
ON CONFLICT (role, endpoint) DO UPDATE SET
  viewer = EXCLUDED.viewer,
  contributor = EXCLUDED.contributor,
  admin = EXCLUDED.admin,
  updated_at = EXCLUDED.updated_at;

COMMIT;
