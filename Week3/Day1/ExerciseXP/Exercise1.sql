-- Create a database called public.
-- Add two tables:
--     items
--     customers.
-- Add the following items to the items table:
-- ...
-- Add 5 new customers to the customers table:
-- ...
-- Use SQL to fetch the following data from the database:
--     All the items.
--     All the items with a price above 80 (80 not included).
--     All the items with a price below 300. (300 included)
--     All customers whose last name is ‘Smith’ (What will be your outcome?).
--     All customers whose last name is ‘Jones’.
--     All customers whose firstname is not ‘Scott’.

CREATE TABLE items(
 id SERIAL PRIMARY KEY,
 name VARCHAR (50) NOT NULL,
 price integer NOT NULL);

CREATE TABLE customers(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL);

INSERT INTO items(name, price) VALUES ('Small Desk', 100);
INSERT INTO items(name, price) VALUES ('Large desk', 300);
INSERT INTO items(name, price) VALUES ('Fan', 80);
select * from items;

INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Sandra', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Scott', 'Scott');
INSERT INTO customers (first_name, last_name) VALUES ('Trevor', 'Green');
INSERT INTO customers (first_name, last_name) VALUES ('Melanie', 'Johnson');
select * from customers;

select * from items where price > 80;
select * from items where price <= 300;
select * from customers where last_name = 'Smith';
select * from customers where last_name = 'Jones';
select * from customers where first_name != 'Scott';