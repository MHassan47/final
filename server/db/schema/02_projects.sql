DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS users_to_projects CASCADE;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE users_to_projects (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE  
);