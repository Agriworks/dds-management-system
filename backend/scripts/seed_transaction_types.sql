BEGIN;

-- Seed transaction types with self-referencing parent_id for hierarchy
-- Main types (no parent_id)
INSERT INTO public.transaction_types (id, name, label_english, description, is_active, debit_or_credit, parent_id)
VALUES
  ('fdf53e6b-50ab-4c08-92a0-8837c7df4d28', 'DEPOSIT', 'Deposit', 'Money deposited by member', true, 'credit', NULL),
  ('efa6384e-4ad5-46ae-b44e-fe83b3bddf0c', 'LOAN', 'Loan', 'Loan given to member', true, 'debit', NULL),
  ('21004871-d659-4329-97b7-2add44201bf4', 'PAYBACK', 'Payback', 'Loan repayment by member', true, 'credit', NULL),
  ('f7eb95e3-f414-4227-969e-0ad6a8869421', 'WITHDRAWAL', 'Withdrawal', 'Money withdrawn by member', true, 'debit', NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  label_english = EXCLUDED.label_english,
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active,
  debit_or_credit = EXCLUDED.debit_or_credit,
  parent_id = EXCLUDED.parent_id;

-- Deposit sub-types (parent_id = DEPOSIT)
INSERT INTO public.transaction_types (id, name, label_english, description, is_active, debit_or_credit, parent_id)
VALUES
  ('244b177f-4bb3-4108-99df-6340bb99cd7b', 'WEEKLY_DEPOSIT', 'Weekly Deposit', 'Weekly savings deposit', true, 'credit', 'fdf53e6b-50ab-4c08-92a0-8837c7df4d28'),
  ('7519062e-4db6-4364-ba15-450d28dbe922', 'GOAT_INSURANCE', 'Goat Insurance', 'Goat insurance deposit', true, 'credit', 'fdf53e6b-50ab-4c08-92a0-8837c7df4d28'),
  ('bd3eebc8-d7d3-4842-8109-7d0cfaa4ed74', 'COOPERATIVE_DEPOSIT', 'Cooperative Deposit', 'Cooperative society deposit', true, 'credit', 'fdf53e6b-50ab-4c08-92a0-8837c7df4d28'),
  ('ed85f1f3-397e-41b9-98d5-4ca08b21afd3', 'HEALTH_DEPOSIT', 'Health Deposit', 'Health savings deposit', true, 'credit', 'fdf53e6b-50ab-4c08-92a0-8837c7df4d28')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  label_english = EXCLUDED.label_english,
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active,
  debit_or_credit = EXCLUDED.debit_or_credit,
  parent_id = EXCLUDED.parent_id;

-- Loan sub-types (parent_id = LOAN)
INSERT INTO public.transaction_types (id, name, label_english, description, is_active, debit_or_credit, parent_id)
VALUES
  ('4aaf5e0d-f307-43da-9c82-035298a9e3dd', 'LAAGODI', 'Laagodi', 'Laagodi group loan', true, 'debit', 'efa6384e-4ad5-46ae-b44e-fe83b3bddf0c'),
  ('5161b41d-b1c0-4e1d-839b-7faf7332f4a3', 'LIVESTOCK', 'Livestock', 'Loan for livestock', true, 'debit', 'efa6384e-4ad5-46ae-b44e-fe83b3bddf0c'),
  ('64432fea-cfd5-49e5-8a47-85adc263fdd0', 'INDIVIDUAL', 'Individual', 'Individual loan', true, 'debit', 'efa6384e-4ad5-46ae-b44e-fe83b3bddf0c')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  label_english = EXCLUDED.label_english,
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active,
  debit_or_credit = EXCLUDED.debit_or_credit,
  parent_id = EXCLUDED.parent_id;

-- Laagodi sub-types (parent_id = LAAGODI)
INSERT INTO public.transaction_types (id, name, label_english, description, is_active, debit_or_credit, parent_id)
VALUES
  ('60cc5a72-4735-4471-b006-8c9ea208d202', 'PROJECT_FUNDS', 'Project Funds', 'Project-specific funds', true, 'debit', '4aaf5e0d-f307-43da-9c82-035298a9e3dd'),
  ('91bf513a-6962-4b37-943b-a395e673731f', 'DDS_FUNDS', 'DDS Funds', 'DDS organization funds', true, 'debit', '4aaf5e0d-f307-43da-9c82-035298a9e3dd')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  label_english = EXCLUDED.label_english,
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active,
  debit_or_credit = EXCLUDED.debit_or_credit,
  parent_id = EXCLUDED.parent_id;

-- Seed Telugu labels for all transaction types
INSERT INTO public.i18n_labels (entity_table, entity_id, field, language_code, text)
VALUES
  ('transaction_types', 'fdf53e6b-50ab-4c08-92a0-8837c7df4d28', 'label_telugu', 'te', 'డిపాజిట్'),
  ('transaction_types', 'efa6384e-4ad5-46ae-b44e-fe83b3bddf0c', 'label_telugu', 'te', 'లోన్'),
  ('transaction_types', '21004871-d659-4329-97b7-2add44201bf4', 'label_telugu', 'te', 'పేబ్యాక్'),
  ('transaction_types', 'f7eb95e3-f414-4227-969e-0ad6a8869421', 'label_telugu', 'te', 'విత్డ్రావల్'),
  ('transaction_types', '244b177f-4bb3-4108-99df-6340bb99cd7b', 'label_telugu', 'te', 'వీక్లీ డిపాజిట్'),
  ('transaction_types', '7519062e-4db6-4364-ba15-450d28dbe922', 'label_telugu', 'te', 'గోట్ ఇన్స్యూరెన్స్'),
  ('transaction_types', 'bd3eebc8-d7d3-4842-8109-7d0cfaa4ed74', 'label_telugu', 'te', 'కోఆపరేటివ్ డిపాజిట్'),
  ('transaction_types', 'ed85f1f3-397e-41b9-98d5-4ca08b21afd3', 'label_telugu', 'te', 'హెల్త్ డిపాజిట్'),
  ('transaction_types', '4aaf5e0d-f307-43da-9c82-035298a9e3dd', 'label_telugu', 'te', 'లాగోడి'),
  ('transaction_types', '5161b41d-b1c0-4e1d-839b-7faf7332f4a3', 'label_telugu', 'te', 'లివ్‌స్టాక్'),
  ('transaction_types', '64432fea-cfd5-49e5-8a47-85adc263fdd0', 'label_telugu', 'te', 'ఇండివిజువల్'),
  ('transaction_types', '60cc5a72-4735-4471-b006-8c9ea208d202', 'label_telugu', 'te', 'ప్రాజెక్ట్ ఫండ్స్'),
  ('transaction_types', '91bf513a-6962-4b37-943b-a395e673731f', 'label_telugu', 'te', 'డిడిఎస్ ఫండ్స్')
ON CONFLICT (entity_table, entity_id, field, language_code) DO UPDATE SET
  text = EXCLUDED.text;

COMMIT;
