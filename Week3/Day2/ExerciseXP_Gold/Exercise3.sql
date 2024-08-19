-- Part I
-- Create a table named purchases. It should have 3 columns :
--     id : the primary key of the table
--     customer_id : this column references the table customers
--     item_id : this column references the table items
--     quantity_purchased : this column is the quantity of items purchased by a certain customer
-- Insert purchases for the customers, use subqueries:
--     Scott Scott bought one fan
--     Melanie Johnson bought ten large desks
--     Greg Jones bougth two small desks

-- Part II
-- Use SQL to get the following from the database:
--     All purchases. Is this information useful to us?
--     All purchases, joining with the customers table.
--     Purchases of the customer with the ID equal to 5.
--     Purchases for a large desk AND a small desk
-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
--     Customer first name
--     Customer last name
--     Item name (id?)
-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). 
-- Does this work? Why/why not?    It doesn't work because of "item_id is NOT NULL".

CREATE TABLE purchases (id SERIAL PRIMARY KEY, customer_id integer NOT NULL, 
	item_id integer NOT NULL, quantity_purchased integer);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (3, 3, 1), (5, 2, 10), (1, 1, 2);

select * from purchases;

select customers.first_name, customers.last_name, purchases.item_id, purchases.quantity_purchased
	from purchases INNER JOIN customers ON customers.id = purchases.customer_id;

select customers.first_name, customers.last_name, purchases.item_id, purchases.quantity_purchased
	from purchases INNER JOIN customers ON customers.id = purchases.customer_id 
    WHERE customers.id = 5;

select customers.first_name, customers.last_name, purchases.item_id, purchases.quantity_purchased
	from purchases INNER JOIN customers ON customers.id = purchases.customer_id 
    WHERE purchases.item_id < 3;

select customers.first_name, customers.last_name, purchases.item_id
	from customers INNER JOIN purchases ON customers.id = purchases.customer_id;

