-- Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- Use SQL to delete all purchases made by Scott.
-- Does Scott still exist in the customers table, even though he has been deleted? Try and find him.
-- Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will appear, although instead of the customer’s first and last name, you should only see empty/blank. (Which kind of join should you use?).
-- Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will NOT appear. (Which kind of join should you use?)

SELECT * FROM customers ORDER BY last_name DESC LIMIT 2;

DELETE FROM purchases WHERE customer_id = 3;

select * from customers WHERE id = 3;

select customers.first_name, customers.last_name, purchases.item_id, purchases.quantity_purchased
	from purchases FULL JOIN customers ON customers.id = purchases.customer_id;

select customers.first_name, customers.last_name, purchases.item_id, purchases.quantity_purchased
	from purchases LEFT JOIN customers ON customers.id = purchases.customer_id;