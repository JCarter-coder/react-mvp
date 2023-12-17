DROP TABLE IF EXISTS activities_table

CREATE TABLE activities_table(
    id SERIAL PRIMARY KEY NOT NULL,
    activity JSON NOT NULL
)