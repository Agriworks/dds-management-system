.PHONY: atlas-apply
atlas-apply:
	# Add your migrate command here
	cd backend && atlas schema apply \
	-u "postgres://postgres:@localhost:5432/postgres?sslmode=disable" \
	--to file://schema-public.hcl \
	--to file://schema-baseline.hcl \
	--dev-url "docker://postgres/15"

.PHONY: prisma-db-pull
atlas-apply:
	# Add your migrate command here
	cd frontend && npx prisma db pull

.PHONY: prisma-generate
prisma-generate:
	# Add your migrate command here
	cd frontend && npx prisma generate

.PHONY: migrate
migrate: atlas-apply prisma-db-pull prisma-generate
	# Add your migrate command here
	@echo "Migration Completed"


.PHONY: refresh-database
refresh-database: purge-database migrate init-db
	# Add your refresh-database command here
	@echo "Database Refreshed"

.PHONY: purge-database
purge-database:
	atlas schema clean -u "postgres://postgres:@localhost:5432/postgres?sslmode=disable"
