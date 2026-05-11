BEGIN;

-- Seed explicit values for endpoint access
INSERT INTO public.endpointaccess (
  role,
  endpoint,
  viewer,
  contributor,
  admin,
  created_at,
  updated_at
)
VALUES
  ('user','/dashboard',true,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('user','/transactions/browse',true,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('user','/transactions/add',false,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('user','/members/browse',false,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('user','/members/add',false,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('user','/customers',false,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('user','/accounts',false,false,false,'2025-10-06 05:47:22.479386','2025-10-06 05:47:22.479386'),
  ('supervisor','/dashboard',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('supervisor','/transactions/browse',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('supervisor','/transactions/add',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('supervisor','/members/browse',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('supervisor','/members/add',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('supervisor','/customers',true,false,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('supervisor','/accounts',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/dashboard',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/transactions/browse',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/transactions/add',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/members/browse',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/members/add',true,true,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/customers',true,false,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('accountant','/accounts',true,false,false,'2025-10-06 05:47:22.569238','2025-10-06 05:47:22.569238'),
  ('admin','/dashboard',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224'),
  ('admin','/transactions/browse',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224'),
  ('admin','/transactions/add',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224'),
  ('admin','/members/browse',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224'),
  ('admin','/members/add',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224'),
  ('admin','/customers',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224'),
  ('admin','/accounts',true,true,true,'2025-10-06 05:47:22.644224','2025-10-06 05:47:22.644224')
ON CONFLICT (role, endpoint) DO UPDATE SET
  viewer = EXCLUDED.viewer,
  contributor = EXCLUDED.contributor,
  admin = EXCLUDED.admin,
  updated_at = EXCLUDED.updated_at;

COMMIT;
