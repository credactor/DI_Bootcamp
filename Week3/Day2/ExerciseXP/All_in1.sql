-- 1
select * from items ORDER BY price;
select * from items where price >= 80 ORDER BY price DESC;
select first_name, last_name from customers ORDER BY last_name LIMIT 3;
select last_name from customers ORDER BY last_name DESC;

-- 2
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
