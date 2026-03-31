FROM postgres:15
ENV POSTGRES_DB=customdb
ENV POSTGRES_USER=customuser
ENV POSTGRES_PASSWORD=custompass
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432