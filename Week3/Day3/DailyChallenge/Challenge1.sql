-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
--     A customer can have only one profile, and a profile belongs to only one customer
--     The Customer table should have the columns : id, first_name, last_name NOT NULL
--     The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
-- Insert those customers
--     John, Doe
--     Jerome, Lalu
--     Lea, Rive
-- Insert those customer profiles, use subqueries
--     John is loggedIn
--     Jerome is not logged in
-- Use the relevant types of Joins to display:
--     The first_name of the LoggedIn customers
--     All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
--     The number of customers that are not LoggedIn

CREATE TABLE customer (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100) NOT NULL);

CREATE TABLE profile (id SERIAL, isLoggedIn BOOLEAN DEFAULT false, customer_id INTEGER PRIMARY KEY NOT NULL,
CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customer (id));

INSERT INTO customer (first_name, last_name) VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

INSERT INTO profile (customer_id, isLoggedIn) 
VALUES ((SELECT id FROM customer where first_name = 'John'), true), 
((SELECT id FROM customer where first_name = 'Jerome'), false);

SELECT customer.first_name FROM customer INNER JOIN profile
ON customer.id = profile.customer_id WHERE profile.isLoggedIn = true;
