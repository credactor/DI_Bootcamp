-- Fetch the first four students. You have to order the four students alphabetically by last_name.
-- Fetch the details of the youngest student.
-- Fetch three students skipping the first two students.

SELECT id, first_name, last_name FROM students ORDER BY last_name LIMIT 4;
SELECT id, first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1;
SELECT id, first_name, last_name FROM students LIMIT 3 OFFSET 2;