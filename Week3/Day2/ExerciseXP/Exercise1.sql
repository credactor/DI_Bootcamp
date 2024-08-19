-- We will work on the public database that we created yesterday.
-- Use SQL to get the following from the database:
--     All items, ordered by price (lowest to highest).
--     Items with a price above 80 (80 included), ordered by price (highest to lowest).
--     The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
--     All last names (no other columns!), in reverse alphabetical order (Z-A)

select * from items ORDER BY price;
select * from items where price >= 80 ORDER BY price DESC;
select first_name, last_name from customers ORDER BY last_name LIMIT 3;
select last_name from customers ORDER BY last_name DESC;