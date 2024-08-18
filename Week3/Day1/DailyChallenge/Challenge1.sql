CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL);

INSERT INTO public.actors (first_name, last_name, age, number_oscars) VALUES ('Matt','Damon','08/10/1970', 5);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('George','Clooney','06/05/1961', 2);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Nicole','Kidman','20/06/1967', 1);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Amy','Adams','20/08/1974', 0);
SELECT * FROM actors;
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Jack','Nicholson','22/04/1937',3);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Robert','De Niro','17/08/1943',2);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Vivian','Leigh','05/11/1913',2);

DELETE FROM actors WHERE actor_id=1 RETURNING actor_id, first_name, last_name, number_oscars;
INSERT INTO actors (actor_id, first_name, last_name, birthdate, number_oscars) VALUES (1, 'Matt','Damon','08/10/1970',1);

-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be?

SELECT count(*) FROM actors;
INSERT INTO actors (number_oscars) VALUES ('09/02/1971', 2); -- ERROR
INSERT INTO actors (first_name, last_name, number_oscars) VALUES ('', '', 2); -- ERROR

