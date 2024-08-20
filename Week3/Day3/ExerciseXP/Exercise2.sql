-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--     The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
--     The 2nd film : A short documentary (less than 1 hour long), rated “R”.
--     The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
--     The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

UPDATE film SET language_id = 2 WHERE film_id < 3;

-- address_id in address. 

DROP TABLE customer_review; -- no problems

SELECT film.title, film.rental_rate
FROM (film INNER JOIN inventory ON film.film_id = inventory.film_id)
JOIN rental ON rental.inventory_id = inventory.inventory_id 
WHERE return_date is NULL ORDER BY film.rental_rate DESC LIMIT 30;

SELECT film.title, film.description 
FROM (film INNER JOIN film_actor ON film.film_id = film_actor.film_id)
JOIN actor ON actor.actor_id = film_actor.actor_id 
WHERE film.description ILIKE ('%sumo%') AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

SELECT film.title, film.description, film.length, film.rating 
FROM (film INNER JOIN film_category ON film.film_id = film_category.film_id)
JOIN category ON category.category_id = film_category.category_id 
WHERE category.name = 'Documentary' AND film.length < 60 AND film.rating = 'R';

SELECT film.title, film.description, film.rental_rate
FROM film INNER JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON customer.customer_id = rental.customer_id 
WHERE film.rental_rate > 4 AND rental.return_date >= '2005-07-28' AND rental.return_date <= '2005-08-01'
AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan';

SELECT film.title, film.description, film.replacement_cost
FROM film INNER JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON customer.customer_id = rental.customer_id 
WHERE (film.title ILIKE ('%boat%') OR film.description ILIKE ('%boat%'))
AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
ORDER BY film.replacement_cost DESC;