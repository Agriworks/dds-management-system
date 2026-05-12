
BEGIN;

-- Rename legacy LOANS type to LAAGODI (same logical account)
UPDATE public.account_types
SET
  name = 'LAAGODI',
  label_english = 'Laagodi Account',
  description = 'Laagodi account for members'
WHERE name = 'LOANS';

INSERT INTO public.account_types (name, label_english, description, is_active)
VALUES
  ('SAVINGS', 'Savings Account', 'Savings account for members', true),
  ('WITHDRAW', 'Withdrawal Account', 'Withdrawal account for members', true),
  ('LAAGODI', 'Laagodi Account', 'Laagodi account for members', true)
ON CONFLICT (name) DO UPDATE SET
  label_english = EXCLUDED.label_english,
  description = EXCLUDED.description,
  is_active = EXCLUDED.is_active;

-- Telugu display labels (i18n)
INSERT INTO public.i18n_labels (entity_table, entity_id, field, language_code, text)
SELECT
  'account_types',
  id,
  'label_telugu',
  'te',
  CASE name
    WHEN 'SAVINGS' THEN 'సంగం జమలు'
    WHEN 'WITHDRAW' THEN 'సంగం అప్పులు'
    WHEN 'LAAGODI' THEN 'లాగోడి ఖాతా'
  END
FROM public.account_types
WHERE name IN ('SAVINGS', 'WITHDRAW', 'LAAGODI')
ON CONFLICT (entity_table, entity_id, field, language_code) DO UPDATE SET
  text = EXCLUDED.text;

COMMIT;
