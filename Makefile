.PHONY: migrate
migrate:
	# Add your migrate command here
	cd backend && atlas schema apply \
	-u "postgres://postgres:@localhost:5432/postgres?sslmode=disable" \
	--to file://schema-application.hcl \
	--to file://schema-baseline.hcl \
	--dev-url "docker://postgres/15"


.PHONY: refresh-database
refresh-database: purge-database migrate init-db
	# Add your refresh-database command here
	@echo "Database Refreshed"

.PHONY: purge-database
purge-database:
	atlas schema clean -u "postgres://postgres:@localhost:5432/postgres?sslmode=disable"
