schema "public" {
  comment = "Public schema for the application, containing all application tables and enums"
}

# Enum for transaction types
enum "transaction_type_enum" {
  schema = schema.public
  values = ["DEPOSIT", "WITHDRAWL", "LOAN", "PAYBACK"]
}

# Enum for loan types
enum "loan_type_enum" {
  schema = schema.public
  values = ["LIVESTOCK", "INDIVIDUAL", "LAAGODI"]
}

# Enum for fund types (used only if loan_type = Laagodi)
enum "fund_type_enum" {
  schema = schema.public
  values = ["DDS_FUNDS", "PROJECT_FUNDS"]
}

table "supervisors" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
  }

  column "full_name_english" {
    type = text
    null = false
  }

  column "full_name_telugu" {
    type = text
    null = false
  }

  column "created_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  primary_key {
    columns = [column.id]
  }
}

table "mandals" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
  }

  column "label_english" {
    type = text
    null = false
  }

  column "label_telugu" {
    type = text
    null = false
  }

  column "created_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  primary_key {
    columns = [column.id]
  }
}

table "villages" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
  }

  column "label_english" {
    type = text
    null = false
  }

  column "label_telugu" {
    type = text
    null = false
  }

  column "created_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "mandal" {
    type = uuid
    null = false
  }

  foreign_key "fk_villages_mandal" {
    columns = [column.mandal]
    ref_columns = [table.mandals.column.id]
    on_delete = "RESTRICT"
  }

  primary_key {
    columns = [column.id]
  }
}

table "members" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
  }

  column "full_name_english" {
    type = text
    null = false
  }

  column "village_id" {
    type = uuid
    null = false
  }

  column "house_number" {
    type = text
    null = false
  }

  column "phone_number" {
    type = text
    null = false
  }

  column "husband_or_father_name" {
    type = text
    null = false
  }

  column "created_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  foreign_key "fk_members_village" {
    columns = [column.village_id]
    ref_columns = [table.villages.column.id]
    on_delete = "RESTRICT"
  }

  primary_key {
    columns = [column.id]
  }
}

table "transactions" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
  }

  column "supervised_by" {
    type = uuid
    null = false
  }

  column "member" {
    type = uuid
    null = false
  }

  column "type" {
    type = enum.transaction_type_enum
    null = false
  }

  column "amount" {
    type = int
    null = false
  }

  column "comments" {
    type = text
    null = true
  }

  column "loan_type" {
    type = enum.loan_type_enum
    null = true
  }

  column "fund_type" {
    type = enum.fund_type_enum
    null = true
  }

  column "transaction_date" {
    type = date
    null = false
  }

  column "recipet_number" {
    type = text
    null = false
  }

  column "created_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
  }

  foreign_key "fk_transactions_supervisor" {
    columns = [column.supervised_by]
    ref_columns = [table.supervisors.column.id]
    on_delete = "RESTRICT"
  }

  foreign_key "fk_transactions_member" {
    columns = [column.member]
    ref_columns = [table.members.column.id]
    on_delete = "RESTRICT"
  }

  check "loan_type_required_for_loans" {
    expr = "type != 'LOAN' OR loan_type IS NOT NULL"
  }

  check "fund_type_required_for_laagodi" {
    expr = "loan_type != 'LAAGODI' OR fund_type IS NOT NULL"
  }

  primary_key {
    columns = [column.id]
  }
}
