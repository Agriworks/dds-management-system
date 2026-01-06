BEGIN;

-- Seed accounts with sample data
-- Note: account_type_id is fetched using a subquery based on account_type name
INSERT INTO public.accounts (id, name, account_number, balance, account_type_id, description, is_active)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'Jitendra Maddi', 'ACC001', 0, 
   (SELECT id FROM public.account_types WHERE name = 'SAVINGS'), 
   'Main savings account for Jitendra Maddi', true),
   
  ('22222222-2222-2222-2222-222222222222', 'Jitendra Maddi', 'ACC002', 0, 
   (SELECT id FROM public.account_types WHERE name = 'DDS'), 
   'Daily deposit scheme account for Jitendra Maddi', true),
   
  ('33333333-3333-3333-3333-333333333333', 'Charan Manikanta Nalla', 'ACC003', 0, 
   (SELECT id FROM public.account_types WHERE name = 'SAVINGS'), 
   'Main savings account for Charan Manikanta Nalla', true),
   
  ('44444444-4444-4444-4444-444444444444', 'Charan Manikanta Nalla', 'ACC004', 0, 
   (SELECT id FROM public.account_types WHERE name = 'LOANS'), 
   'Loan account for Charan Manikanta Nalla', true),
   
  ('55555555-5555-5555-5555-555555555555', 'Charan Manikanta Nalla', 'ACC005', 0, 
   (SELECT id FROM public.account_types WHERE name = 'DDS'), 
   'Daily deposit scheme account for Charan Manikanta Nalla', true),
   
  ('66666666-6666-6666-6666-666666666666', 'Akhil Burada', 'ACC006', 0, 
   (SELECT id FROM public.account_types WHERE name = 'SAVINGS'), 
   'Main savings account for Akhil Burada', true),
   
  ('77777777-7777-7777-7777-777777777777', 'Akhil Burada', 'ACC007', 0, 
   (SELECT id FROM public.account_types WHERE name = 'DDS'), 
   'Daily deposit scheme account for Akhil Burada', true),
   
  ('88888888-8888-8888-8888-888888888888', 'Village Community Savings', 'ACC008', 0, 
   (SELECT id FROM public.account_types WHERE name = 'SAVINGS'), 
   'Community savings account for village fund', true),
   
  ('99999999-9999-9999-9999-999999999999', 'Village DDS Pool', 'ACC009', 0, 
   (SELECT id FROM public.account_types WHERE name = 'DDS'), 
   'Pool account for village DDS contributions', true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  account_number = EXCLUDED.account_number,
  balance = EXCLUDED.balance,
  account_type_id = EXCLUDED.account_type_id,
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active;

-- Link accounts to members
INSERT INTO public.members_accounts_onlink (member_id, account_id)
VALUES
  ('a1b2c3d4-e5f6-4789-a012-b3c4d5e6f789', '11111111-1111-1111-1111-111111111111'),
  ('a1b2c3d4-e5f6-4789-a012-b3c4d5e6f789', '22222222-2222-2222-2222-222222222222'),
  ('b2c3d4e5-f6a7-4890-b123-c4d5e6f7a890', '33333333-3333-3333-3333-333333333333'),
  ('b2c3d4e5-f6a7-4890-b123-c4d5e6f7a890', '44444444-4444-4444-4444-444444444444'),
  ('b2c3d4e5-f6a7-4890-b123-c4d5e6f7a890', '55555555-5555-5555-5555-555555555555'),
  ('c3d4e5f6-a7b8-4901-c234-d5e6f7a8b901', '66666666-6666-6666-6666-666666666666'),
  ('c3d4e5f6-a7b8-4901-c234-d5e6f7a8b901', '77777777-7777-7777-7777-777777777777')
ON CONFLICT (member_id, account_id) DO NOTHING;

-- Link accounts to villages based on member's village
INSERT INTO public.villages_accounts_onlink (village_id, account_id)
VALUES
  -- Jitendra Maddi's village (Tekur)
  ('602c62e7-dff0-4c89-9603-573d06ee9f24', '11111111-1111-1111-1111-111111111111'),
  ('602c62e7-dff0-4c89-9603-573d06ee9f24', '22222222-2222-2222-2222-222222222222'),
  ('602c62e7-dff0-4c89-9603-573d06ee9f24', '88888888-8888-8888-8888-888888888888'),
  ('602c62e7-dff0-4c89-9603-573d06ee9f24', '99999999-9999-9999-9999-999999999999'),
  -- Charan Manikanta Nalla's village (Vaddi)
  ('e1c4fb2e-597b-46c2-90a9-164c48eda07e', '33333333-3333-3333-3333-333333333333'),
  ('e1c4fb2e-597b-46c2-90a9-164c48eda07e', '44444444-4444-4444-4444-444444444444'),
  ('e1c4fb2e-597b-46c2-90a9-164c48eda07e', '55555555-5555-5555-5555-555555555555'),
  -- Akhil Burada's village (Lachu Nayak Thanda)
  ('7eb5ae5f-3613-469c-84e7-4b3f0ec5e480', '66666666-6666-6666-6666-666666666666'),
  ('7eb5ae5f-3613-469c-84e7-4b3f0ec5e480', '77777777-7777-7777-7777-777777777777')
ON CONFLICT (village_id, account_id) DO NOTHING;

COMMIT;

