# DDS Management System

## Setup Instructions

Run the following command to migrate the database schemas to postgres and set up.

```bash
make migrate
```

Run the following command to enter the postgres in the terminal.

```bash
psql -h localhost -p 5432 -U postgres -d postgres
```

Now, run the following commands to setup your database with synthetic data.

```
\i backend/scripts/seed_roles.sql

\i backend/scripts/seed_endpointaccess.sql

\i backend/scripts/seed_mandals.sql 

\i backend/scripts/seed_villages.sql

\i backend/scripts/seed_account_types.sql

```

To exit the postgres terminal, run this:

```
\q
```
