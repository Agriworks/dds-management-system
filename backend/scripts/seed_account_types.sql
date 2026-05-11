
BEGIN;

-- Seed account types
INSERT INTO public.account_types (name, label_english, description, is_active)
VALUES
  ('SAVINGS', 'Savings Account', 'Savings account for members', true),
  ('LOANS', 'Loan Account', 'Loan account for members', true)
ON CONFLICT (name) DO UPDATE SET
  label_english = EXCLUDED.label_english,
  description = EXCLUDED.description;

-- Seed Telugu labels as i18n entries for account types
INSERT INTO public.i18n_labels (entity_table, entity_id, field, language_code, text)
SELECT 'account_types', id, 'label_telugu', 'te', 'సంఘం అప్పులు జమలు'
FROM public.account_types WHERE name = 'SAVINGS'
UNION ALL
SELECT 'account_types', id, 'label_telugu', 'te', 'లాగోడి ఖాతా'
FROM public.account_types WHERE name = 'LOANS'
ON CONFLICT (entity_table, entity_id, field, language_code) DO UPDATE SET
  text = EXCLUDED.text;

COMMIT;