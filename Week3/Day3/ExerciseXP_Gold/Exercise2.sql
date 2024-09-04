-- There is a zombie plague approaching! The DVD rental company is offering to lend all of its DVDs to the local shelters, so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces. Prepare tables with the following data:
-- 1. How many stores there are, and in which city and country they are located.
-- 2. How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.
-- 3. Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)
-- 4. A list of all customers in the cities where the stores are located.
-- 5. A list of all customers in the countries where the stores are located.
-- 6. Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
--     Hint : use the CHECK contraint
-- 7. For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes). 

SELECT count(*) FROM store

SELECT store.store_id, address.city_id, city.city, country.country FROM store
INNER JOIN address ON store.address_id = address.address_id
INNER JOIN city ON city.city_id = address.city_id
INNER JOIN country ON country.country_id = city.country_id

SELECT inventory.store_id, sum(film.length)/60 FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
WHERE rental.return_date is NOT NULL
GROUP BY inventory.store_id

SELECT customer.first_name, customer.last_name, customer.email, address.city_id FROM customer
INNER JOIN address ON customer.address_id = address.address_id
WHERE address.city_id = 300 OR address.city_id = 576
ORDER BY address.city_id

SELECT customer.first_name, customer.last_name, customer.email, city.country_id FROM customer
INNER JOIN address ON customer.address_id = address.address_id
INNER JOIN city ON city.city_id = address.city_id
WHERE city.country_id = 8 OR city.country_id = 20
ORDER BY city.country_id

SELECT sum(film.length) FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
WHERE film_category.category_id != 11

SELECT sum(film.length) FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
WHERE NOT (film_category.category_id = 11 OR film.title ILIKE '%beast%'
OR film.title ILIKE '%monster%' OR film.title ILIKE '%ghost%'
OR film.title ILIKE '%dead%' OR film.title ILIKE '%zombie%'
OR film.title ILIKE '%undead%' OR film.description ILIKE '%beast%'
OR film.description ILIKE '%monster%' OR film.description ILIKE '%ghost%'
OR film.description ILIKE '%dead%' OR film.description ILIKE '%zombie%'
OR film.description ILIKE '%undead%')

CREATE or REPLACE FUNCTION days_hours()
RETURNS varchar(50) AS $times$
declare
    days int;
    hours int;
	minutes bigint;
    times varchar(50);
BEGIN
    minutes := (SELECT sum(film.length) FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
WHERE NOT (film_category.category_id = 11 OR film.title ILIKE '%beast%'
OR film.title ILIKE '%monster%' OR film.title ILIKE '%ghost%'
OR film.title ILIKE '%dead%' OR film.title ILIKE '%zombie%'
OR film.title ILIKE '%undead%' OR film.description ILIKE '%beast%'
OR film.description ILIKE '%monster%' OR film.description ILIKE '%ghost%'
OR film.description ILIKE '%dead%' OR film.description ILIKE '%zombie%'
OR film.description ILIKE '%undead%'));
   	days := minutes / 1440;
    hours := (minutes % 1440) / 60;
    times := CONCAT (to_char(days, '999'), ' days', to_char(hours, '99'), ' hours');
    RETURN times;
END;
$times$ LANGUAGE plpgsql;
SELECT days_hours();