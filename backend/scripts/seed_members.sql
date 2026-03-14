BEGIN;

-- Seed members with sample data
INSERT INTO public.members (id, given_name, family_name, village_id, house_number, phone_number, husband_or_father_name, aadhar_number, created_at, updated_at)
VALUES
  ('a1b2c3d4-e5f6-4789-a012-b3c4d5e6f789', 'Jitendra', 'Maddi', '602c62e7-dff0-4c89-9603-573d06ee9f24', '101', '9876543210', 'Ramakrishna', '000000000000', '2025-01-01 10:00:00', '2025-01-01 10:00:00'),
  ('b2c3d4e5-f6a7-4890-b123-c4d5e6f7a890', 'Charan Manikanta', 'Nalla', 'e1c4fb2e-597b-46c2-90a9-164c48eda07e', '202', '8765432109', 'Venkatesh', '000000000000', '2025-01-01 10:00:00', '2025-01-01 10:00:00'),
  ('c3d4e5f6-a7b8-4901-c234-d5e6f7a8b901', 'Akhil', 'Burada', '7eb5ae5f-3613-469c-84e7-4b3f0ec5e480', '303', '7654321098', 'Krishna', '000000000000', '2025-01-01 10:00:00', '2025-01-01 10:00:00')
ON CONFLICT (id) DO UPDATE SET
  given_name = EXCLUDED.given_name,
  family_name = EXCLUDED.family_name,
  village_id = EXCLUDED.village_id,
  house_number = EXCLUDED.house_number,
  phone_number = EXCLUDED.phone_number,
  husband_or_father_name = EXCLUDED.husband_or_father_name,
  aadhar_number = EXCLUDED.aadhar_number,
  updated_at = EXCLUDED.updated_at;

-- Seed Telugu name labels for members
INSERT INTO public.member_name_labels (member_id, language_code, given_name, family_name, created_at, updated_at)
VALUES
  ('a1b2c3d4-e5f6-4789-a012-b3c4d5e6f789', 'te', 'జితేంద్ర', 'మద్ది', '2025-01-01 10:00:00', '2025-01-01 10:00:00'),
  ('b2c3d4e5-f6a7-4890-b123-c4d5e6f7a890', 'te', 'చరణ్ మణికంట', 'నల్ల', '2025-01-01 10:00:00', '2025-01-01 10:00:00'),
  ('c3d4e5f6-a7b8-4901-c234-d5e6f7a8b901', 'te', 'అఖిల్', 'బురాడ', '2025-01-01 10:00:00', '2025-01-01 10:00:00')
ON CONFLICT (member_id, language_code) DO UPDATE SET
  given_name = EXCLUDED.given_name,
  family_name = EXCLUDED.family_name,
  updated_at = EXCLUDED.updated_at;

COMMIT;

