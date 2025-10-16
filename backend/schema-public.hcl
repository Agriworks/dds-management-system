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

  column "name" {
    type = text
    null = false
  }

  column "email" {
    type = text
    null = false
  }

  unique "users_email_key" {
    columns = [column.email]
  }

  column "external_id" {
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

  column "assigned_at" {
    type = timestamp
    null = false
    default = sql("CURRENT_TIMESTAMP")
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
    on_delete = "SET NULL"
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
    default = sql("gen_random_uuid()")
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
    default = sql("gen_random_uuid()")
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
    default = sql("gen_random_uuid()")
  }

  column "supervised_by" {
    type = uuid
    null = false
  }

  column "member" {
    type = uuid
    null = false
  }

  column "transaction_type_id" {
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
    columns = [column.supervised_by]
    ref_columns = [table.users.column.id]
    on_delete = "RESTRICT"
  }

  foreign_key "fk_transactions_member" {
    columns = [column.member]
    ref_columns = [table.members.column.id]
    on_delete = "RESTRICT"
  }

  foreign_key "fk_transactions_type" {
    columns = [column.transaction_type_id]
    ref_columns = [table.transaction_types.column.id]
    on_delete = "RESTRICT"
  }

  primary_key {
    columns = [column.id]
  }
}

table "transaction_types" {
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

  unique "transaction_types_name_unique" {
    columns = [column.name]
  }

  column "label_english" {
    type = varchar(255)
    null = false
  }

  column "label_telugu" {
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

  column "parent_id" {
    type = uuid
    null = true
  }

  foreign_key "fk_type_parent" {
    columns = [column.parent_id]
    ref_columns = [table.transaction_types.column.id]
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
