-- 1
SELECT * FROM language;

SELECT title, description, name FROM film JOIN language ON film.language_id=language.language_id;

SELECT title, description, name FROM film RIGHT JOIN language ON film.language_id=language.language_id;

CREATE TABLE new_film (id SERIAL PRIMARY KEY, name VARCHAR(255));

INSERT into new_film (name) VALUES ('The Instigators'), ('The Union');

CREATE TABLE customer_review (
review_id SERIAL PRIMARY KEY,
film_id INTEGER NOT NULL,
FOREIGN KEY (film_id) REFERENCES new_film (id) ON DELETE CASCADE,
language_id INTEGER NOT NULL,
FOREIGN KEY (language_id) REFERENCES language (language_id),
title VARCHAR(255),
score SMALLINT CHECK (score >= 1 AND score <= 10),
review_text TEXT NOT NULL,
last_update date NOT NULL);

INSERT into customer_review (film_id, language_id, title, score, review_text, last_update) 
VALUES (1, 1, 'Enjoyable but forgettable crime caper', 6, 'Both Casey Affleck and Matt Damon starred in Oceans Eleven (2001) so it is no surprise they both collaborate in this similar updated version. Like the aforementioned fipm it is an enjoyable time killer with colourful characters, zany action scenes,underwritten female roles and a hairbrained plot. The ever reliable Ron Perlman enjoys himself as the brusque major but poor Toby Jones has nothing to do as his P. A. It has zip,pace and colour and I laughed several times at the one liners,felt they both had some chemistry together but whilst writing this review, I am wracking my brains trying to remember this film!', '2024-08-11');

INSERT into customer_review (film_id, language_id, title, score, review_text, last_update) 
VALUES (2, 1, 'Great action, great actors, poor script', 6, 'For a Netflix movie it had big screen action and actors and great locations. Very cool to finally see Berry and Wahlberg doing something together - on-screen professionals doing what they do best, make it look so easy and believable which redeems the weak script. You kinda wonder, if they are throwing all this money into big names and big action, why would not they do better with the script and storyline? Script and storyline 3/10, actors, action and locations 8/10. So this gets an overall 6. Found the scene blowing up the BBC BT Tower in London amusing and interesting (given that I am a Londoner). What would London actually do if that happened!! Wowzers.', '2024-08-17');

DELETE FROM new_film where id = 1;

-- 2
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