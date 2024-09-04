-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
-- Get a list of all the Action films with Joe Swank.
--     Before you start, could there be a shortcut to getting this information? Maybe a view?

SELECT film.title, film.rental_rate
FROM film INNER JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id 
WHERE return_date is NULL;

SELECT customer.first_name, customer.last_name
FROM customer INNER JOIN rental ON customer.customer_id = rental.customer_id
WHERE rental.return_date is NULL
GROUP BY customer.customer_id;

SELECT film.title, film.description
FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id 
WHERE actor.first_name = 'Joe' AND actor.last_name = 'Swank';

-- To get a list of all the Action films with this actor, it might be useful  https://pypi.org/project/imdby -  a Python package useful to retrieve and manage the data of the IMDb movie database about movies.