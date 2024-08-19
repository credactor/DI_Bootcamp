-- Find out how many films there are for each rating.
-- Get a list of all the movies that have a rating of G or PG-13.
--     Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).

select rating, count(*) from film GROUP BY rating;

select title, rating from film WHERE rating = 'G' OR rating = 'PG-13';

select title, rating from film WHERE (rating = 'G' OR rating = 'PG-13')
	AND length < 120 AND rental_rate < 3;

UPDATE customer SET first_name = 'Stan', last_name = 'Johns', 
	email = 'fakemail@fakemail.org', last_update = '2024-08-19'
WHERE customer_id = 524;

select * from address where address_id = 530;

UPDATE address SET address = '142 Champs-Elysees', city_id = '111', postal_code = '75008', 
    phone = '33185735046', last_update = '2024-08-19 ', district = 'Paris'
WHERE address_id = 530;