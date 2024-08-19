-- Download this sample database file: http://www.postgresqltutorial.com/postgresql-sample-database/
-- We will use the newly installed dvdrental database.
-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.
-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
-- 3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
-- 4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
-- 6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
-- 7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
-- 8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
-- 9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
-- 10. Write a query which will find the 10 cheapest movies.
-- 11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies. 
--     Bonus: Try to not use LIMIT.
-- 12. Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
-- 14. Write a query to find which city is in which country.
-- 15. Bonus: You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd. 

select * from customer;

select (first_name, last_name) AS full_name from customer;

select DISTINCT create_date from customer;

select * from customer ORDER BY first_name DESC;

select film_id, title, description, release_year, rental_rate from film ORDER BY rental_rate;

SELECT customer.first_name, customer.last_name, address.address, address.phone, address.district 
FROM customer INNER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'Texas';

select * from film WHERE film_id = 15 OR film_id = 150;

SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE '%gone%';

SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'Fa%';

SELECT title, rental_rate FROM film ORDER BY rental_rate LIMIT 10;

SELECT title, rental_rate FROM film ORDER BY rental_rate LIMIT 10 OFFSET 10;

SELECT customer.first_name, customer.last_name, customer.customer_id, payment.amount, payment.payment_date 
FROM customer INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer_id;

SELECT film.film_id, film.title
FROM film LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.film_id IS NULL;

SELECT city.city, country.country
FROM city LEFT JOIN country
ON city.country_id = country.country_id;

SELECT customer.customer_id, customer.first_name, customer.last_name, 
	payment.amount, payment.payment_date, payment.staff_id
FROM customer INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id;
