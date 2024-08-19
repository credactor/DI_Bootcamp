CREATE TABLE FirstTab (id integer, name VARCHAR(10));
INSERT INTO FirstTab VALUES (5,'Pawan'), (6,'Sharlee'), (7,'Krish'), (NULL,'Avtaar');
SELECT * FROM FirstTab;
CREATE TABLE SecondTab (id integer);
INSERT INTO SecondTab VALUES (5), (NULL);
SELECT * FROM SecondTab;

-- Go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
-- Then, execute them to make sure you were correct.
-- Q1. What will be the OUTPUT of the following statement?
-- A1: 0
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)
-- Q2. What will be the OUTPUT of the following statement?
-- A2: 2
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5)
-- Q3. What will be the OUTPUT of the following statement?
-- A3: 0
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab)
-- Q4. What will be the OUTPUT of the following statement?
-- A4: 2
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)
