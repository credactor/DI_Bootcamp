-- Get a list of all the languages, from the language table.
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
--     review_id – a primary key, non null, auto-increment.
--     film_id – references the new_film table. The film that is being reviewed.
--     language_id – references the language table. What language the review is in.
--     title – the title of the review.
--     score – the rating of the review (1-10).
--     review_text – the text of the review. No limit on the length.
--     last_update – when the review was last updated.
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

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