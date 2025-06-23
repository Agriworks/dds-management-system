schema "application" {
  comment = "standard application schema"
}

table "supervisors" {
  schema = schema.application

  column "id" {
    null = false
    type = uuid
  }

  column "organization_user" {
    null = false
    type = uuid
  }

  // Timestamp when the file was created
  column "created_at" {
      type = timestamp
      null = false
      default = sql("CURRENT_TIMESTAMP")
  }

  // Timestamp when the file was last updated
  column "updated_at" {
      type = timestamp
      null = true
      default = sql("CURRENT_TIMESTAMP")
  }

  primary_key {
    columns = [column.id]
  }
}

table "categories" {

  schema = schema.application

  column "id" {
    null = false
    type = bigserial
  }

  column "category_name" {
    null = false
    type = text
  }
  
  primary_key {
    columns = [column.id]
  }
}

table "locations" {
  
  schema = schema.application

  column "id" {
    null = false
    type = bigserial
  }

  column "location_name" {
    null = false
    type = text
  }

  primary_key {
    columns = [column.id]
  }

}


table "units_of_measurement" {

  schema = schema.application

  column "id" {
    null = false
    type = bigserial
  }

  column "unit_name" {
    null = false
    type = text
  }

  column "unit_symbol" {
    null = false
    type = text
  }

  column "description" {
    null = true
    type = text
  }

  primary_key {
    columns = [column.id]
  }

}

table "projects" {
  schema = schema.application

  column "id" {
    null = false
    type = bigserial
  }

  column "owner_client" {
    null = false
    type = text
  }

  column "pmc" {
    null = false
    type = text
  }

  column "contractor" {
    null = false
    type = text
  }

  column "location" {
    null = false
    type = text
  }

  column "unit_name" {
    null = false
    type = text
  }

  column "wo_number" {
    null = true
    type = text
  }

  column "name_of_work" {
    null = false
    type = text
  }

    #column "project_id" {
    #type = string
    #unique = true
  #}

   column "created_at" {
    type    = timestamp
    null    = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type    = timestamp
    null    = false
    default = sql("CURRENT_TIMESTAMP")
  }

  primary_key {
    columns = [column.id]
  }
}




table "tag" {
  schema = schema.application

  column "id" {
    type = bigserial
    null = false
  }

  column "tag_no" {
    type = text
  }

  column "model_no" {
    type = text
  }

  column "manufacturer" {
    type = text
  }

  column "serial_no" {
    type = text
  }

  column "category" {
    type = text
  }

  column "range" {
    type = text
  }

  column "comm_type" {
    type = text
  }

  column "units" {
    type = text
  }

  column "datasheet_no" {
    type = text
  }

  column "project_id" {
    type = bigserial
    null = false
  }

  column "created_at" {
    type    = timestamp
    null    = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type    = timestamp
    null    = false
    default = sql("CURRENT_TIMESTAMP")
  }


  primary_key {
    columns = [column.id]
  }

  foreign_key "fk_tag_project"{ 
    columns     = [column.project_id]
    ref_columns = [table.projects.column.id]
  }

  index "tag_index" {
    columns = [
      column.tag_no
    ]
    unique = true
  }
}



table "report" {
  schema = schema.application

  column "id" {
    type = bigserial
    null = false
  }

  column "report_name" {
    type = text
  }

  column "report_no" {
    type = text
  }

  column "detail_input_1" {
    type = text
  }

  column "detail_input_2" {
    type = text
  }

  column "detail_input_3" {
    type = text
  }

  column "detail_input_4" {
    type = text
  }

  column "detail_input_5" {
    type = text
  }

  column "detail_input_6" {
    type = text
  }

  column "tag_id" {
    type = bigserial
    null = false
  }

  column "created_at" {
    type    = timestamp
    null    = false
    default = sql("CURRENT_TIMESTAMP")
  }

  column "updated_at" {
    type    = timestamp
    null    = false
    default = sql("CURRENT_TIMESTAMP")
  }

    foreign_key "fk_report_tags"{ 
    columns     = [column.tag_id]
    ref_columns = [table.tag.column.id]
  }

    index "report_index" {
    columns = [
      column.report_no
    ]
    unique = true
  }
}