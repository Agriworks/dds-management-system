BEGIN;

-- Seed mandals from CSV data
INSERT INTO public.mandals (id, label_english, created_at, updated_at)
VALUES
  ('0d1e2f3a-4b5c-4d6e-8f90-a1b2c3d4e5f6', 'Kohir', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('2f6a9d1b-8c73-4f1e-bd3a-56f00a9e12cd', 'Nyalkal', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('5e4d3c2b-1a0f-4e5d-9c8b-7a6f5e4d3c2b', 'Mogudampally', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('7b4e1f58-3c0a-4c9a-9a2b-1d7c8e9f2a31', 'Raikode', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('9a1c3e5f-2b47-4d6e-a90f-3f2e1d4c5b6a', 'Jharasangham', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('c4d5e6f7-8a9b-4c0d-b1e2-3f4a5b6c7d8e', 'Zaheerabad', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146')
ON CONFLICT (id) DO UPDATE SET
  label_english = EXCLUDED.label_english,
  updated_at = EXCLUDED.updated_at;

-- Seed Telugu labels as i18n entries for mandals
INSERT INTO public.i18n_labels (entity_table, entity_id, field, language_code, text, created_at, updated_at)
VALUES
  ('mandals', '0d1e2f3a-4b5c-4d6e-8f90-a1b2c3d4e5f6', 'label_telugu', 'te', 'కోహిర్', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('mandals', '2f6a9d1b-8c73-4f1e-bd3a-56f00a9e12cd', 'label_telugu', 'te', 'న్యాల్కల్', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('mandals', '5e4d3c2b-1a0f-4e5d-9c8b-7a6f5e4d3c2b', 'label_telugu', 'te', 'మోగుడంపల్లి', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('mandals', '7b4e1f58-3c0a-4c9a-9a2b-1d7c8e9f2a31', 'label_telugu', 'te', 'రాయికోడ్', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('mandals', '9a1c3e5f-2b47-4d6e-a90f-3f2e1d4c5b6a', 'label_telugu', 'te', 'ఝరాసంగం', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146'),
  ('mandals', 'c4d5e6f7-8a9b-4c0d-b1e2-3f4a5b6c7d8e', 'label_telugu', 'te', 'జహీరాబాద్', '2025-09-10 11:24:15.278146', '2025-09-10 11:24:15.278146')
ON CONFLICT (entity_table, entity_id, field, language_code) DO UPDATE SET
  text = EXCLUDED.text,
  updated_at = EXCLUDED.updated_at;

COMMIT;

