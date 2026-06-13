schema "public" {
  comment = "Public schema for the application, containing all application tables"
}
 
table "users" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "first_name" {
    type = text
    null = false
  }

  column "last_name" {
    type = text
    null = false
  }

  column "email" {
    type = text
    null = false
  }

  column "external_id" {
    type = text
    null = false
  }

  unique "users_email_key" {
    columns = [column.email]
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

table "roles" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "name" {
    type = text
    null = false
  }

  unique "roles_name_unique" {
    columns = [column.name]
  }

  column "description" {
    type = text
    null = true
  }

  column "is_active" {
    type = boolean
    null = false
    default = true
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

table "user_roles_mapping" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "user_id" {
    type = uuid
    null = false
  }

  column "role_id" {
    type = uuid
    null = false
  }

  column "assigned_by" {
    type = uuid
    null = true
  }

  column "is_active" {
    type = boolean
    null = false
    default = true
  }

  column "expires_at" {
    type = timestamp
    null = true
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

  foreign_key "fk_user_roles_user" {
    columns = [column.user_id]
    ref_columns = [table.users.column.id]
    on_delete = "CASCADE"
  }

  foreign_key "fk_user_roles_role" {
    columns = [column.role_id]
    ref_columns = [table.roles.column.id]
    on_delete = "CASCADE"
  }

  foreign_key "fk_user_roles_assigned_by" {
    columns = [column.assigned_by]
    ref_columns = [table.users.column.id]
    on_delete = SET_NULL
  }

  primary_key {
    columns = [column.id]
  }

  unique "user_role_unique" {
    columns = [column.user_id, column.role_id]
  }
}

table "mandals" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "label_english" {
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
    default = sql("gen_random_uuid()")
  }

  column "label_english" {
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

  column "mandal_id" {
    type = uuid
    null = false
  }

  foreign_key "fk_villages_mandal" {
    columns = [column.mandal_id]
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
    default = sql("gen_random_uuid()")
  }

  column "given_name" {
    type = text
    null = false
  }

  column "family_name" {
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

  column "aadhar_number" {
    type = text
    null = false
  }

  unique "members_aadhar_number_unique" {
    columns = [column.aadhar_number]
  }

  column "is_archived" {
    type = boolean
    null = false
    default = false
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

table "member_name_labels" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "member_id" {
    type = uuid
    null = false
  }

  column "language_code" {
    type = varchar(10)
    null = false
  }

  column "given_name" {
    type = text
    null = false
  }

  column "family_name" {
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

  foreign_key "fk_member_name_labels_member" {
    columns = [column.member_id]
    ref_columns = [table.members.column.id]
    on_delete = "CASCADE"
  }

  unique "member_name_labels_unique" {
    columns = [column.member_id, column.language_code]
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
    default = sql("gen_random_uuid()")
  }

  column "supervisor_id" {
    type = uuid
    null = false
  }

  column "member_id" {
    type = uuid
    null = false
  }

  column "transaction_type" {
    type = enum.credit_debit_type
    null = false
  }

  column "account_id" {
    type = uuid
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

  column "transaction_date" {
    type = date
    null = false
  }

  column "receipt_number" {
    type = varchar(255)
    null = false
  }

  column "is_archived" {
    type = boolean
    null = false
    default = false
  }

  column "is_deleted" {
    type = boolean
    null = false
    default = false
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

  foreign_key "fk_transactions_user" {
    columns = [column.supervisor_id]
    ref_columns = [table.users.column.id]
    on_delete = "RESTRICT"
  }

  foreign_key "fk_transactions_member" {
    columns = [column.member_id]
    ref_columns = [table.members.column.id]
    on_delete = "RESTRICT"
  }

  foreign_key "fk_transactions_account" {
    columns = [column.account_id]
    ref_columns = [table.accounts.column.id]
    on_delete = "RESTRICT"
  }

  primary_key {
    columns = [column.id]
  }
}


table "account_types" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "name" {
    type = varchar(255)
    null = false
  }

  unique "account_types_name_unique" {
    columns = [column.name]
  }

  column "label_english" {
    type = varchar(255)
    null = false
  }

  column "description" {
    type = text
    null = true
  }

  column "is_active" {
    type = boolean
    null = false
    default = true
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

table "accounts" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "name" {
    type = varchar(255)
    null = false
  }

  column "account_number" {
    type = varchar(255)
    null = false
  }

  column "balance" {
    type = int
    null = false
    default = 0
  }

  column "account_type_id" {
    type = uuid
    null = false
  }

  column "description" {
    type = text
    null = true
  }

  column "is_active" {
    type = boolean
    null = false
    default = true
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

  foreign_key "fk_accounts_account_type" {
    columns = [column.account_type_id]
    ref_columns = [table.account_types.column.id]
    on_delete = "RESTRICT"
  }

  primary_key {
    columns = [column.id]
  }
}

table "members_accounts_onlink" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "member_id" {
    type = uuid
    null = false
  }

  column "account_id" {
    type = uuid
    null = false
  }

  unique "member_account_unique" {
    columns = [column.member_id, column.account_id]
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

  foreign_key "fk_member_account_member" {
    columns = [column.member_id]
    ref_columns = [table.members.column.id]
    on_delete = "RESTRICT"
  }

  foreign_key "fk_member_account_account" {
    columns = [column.account_id]
    ref_columns = [table.accounts.column.id]
    on_delete = "RESTRICT"
  }

  primary_key {
    columns = [column.id]
  }
}

table "endpointaccess" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "role" {
    type = varchar(255)
    null = false
  }

  column "endpoint" {
    type = varchar(255)
    null = false
  }

  column "viewer" {
    type = boolean
    null = false
  }

  column "contributor" {
    type = boolean
    null = false
  }

  column "admin" {
    type = boolean
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

  unique "role_endpoint_unique" {
    columns = [column.role, column.endpoint]
  }

  primary_key {
    columns = [column.id]
  }
}

table "i18n_labels" {
  schema = schema.public

  column "id" {
    type = uuid
    null = false
    default = sql("gen_random_uuid()")
  }

  column "entity_table" {
    type = varchar(255)
    null = false
  }

  column "entity_id" {
    type = uuid
    null = false
  }

  column "field" {
    type = varchar(255)
    null = false
  }

  column "language_code" {
    type = varchar(10)
    null = false
  }

  column "text" {
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

  unique "i18n_entity_field_lang_unique" {
    columns = [column.entity_table, column.entity_id, column.field, column.language_code]
  }

  primary_key {
    columns = [column.id]
  }
}

enum "credit_debit_type" {
  schema = schema.public
  values = ["credit", "debit"]
}