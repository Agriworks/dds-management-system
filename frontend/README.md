# DDS Management System (Frontend)

This project is a Next.js-based frontend for the DDS Management System, using Prisma ORM and a PostgreSQL database.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)
- PostgreSQL database

## 1. Install Dependencies

```
npm install
```

## 2. Configure the Database

1. Copy the example environment file and update it with your PostgreSQL connection string:

```
cp .env.example .env
```

2. Edit `.env` and set the `DATABASE_URL` variable:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

## 3. Migrate and Set Up the Database

1. Run the following command to migrate the database schemas to Postgres and set up:

```bash
make migrate
```

2. Run the following command to enter the Postgres terminal:

```bash
psql -h localhost -p 5432 -U postgres -d postgres
```

3. Now, run the following commands to set up your database with synthetic/sample data (adjust file paths as needed for your project):

```
\i sample-data/insert-mandals.sql
\i sample-data/insert-villages.sql
\i sample-data/insert-supervisors.sql
\i sample-data/insert-members.sql
\i sample-data/insert-transactions.sql
```

> **Note:** Make sure the `sample-data` directory contains the relevant SQL files for each table. You can add or modify these files as needed for your data model.

4. To exit the Postgres terminal, run this:

```
\q
```

## 4. Run the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) by default.