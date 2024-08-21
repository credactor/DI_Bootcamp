-- 1
CREATE TABLE customer (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100) NOT NULL);

CREATE TABLE profile (id SERIAL, isLoggedIn BOOLEAN DEFAULT false, customer_id INTEGER PRIMARY KEY NOT NULL,
CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customer (id));

INSERT INTO customer (first_name, last_name) VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

INSERT INTO profile (customer_id, isLoggedIn) 
VALUES ((SELECT id FROM customer where first_name = 'John'), true), 
((SELECT id FROM customer where first_name = 'Jerome'), false);

SELECT customer.first_name FROM customer INNER JOIN profile
ON customer.id = profile.customer_id WHERE profile.isLoggedIn = true;

SELECT customer.first_name, profile.isLoggedIn FROM customer LEFT JOIN profile
ON customer.id = profile.customer_id;

SELECT count(*) FROM customer LEFT JOIN profile
ON customer.id = profile.customer_id WHERE isLoggedIn = 'false' OR isLoggedIn is NULL;

--2
CREATE TABLE book (book_id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL);

INSERT INTO book (title, author) VALUES ('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'), ('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (student_id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE,
 age SMALLINT NOT NULL CHECK (age <= 15));

INSERT INTO student (name, age) VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);

CREATE TABLE library (book_fk_id INTEGER NOT NULL, student_id INTEGER NOT NULL, borrowed_date DATE,
PRIMARY KEY (book_fk_id, student_id),
FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE);

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES
((SELECT book_id FROM book where title = 'Alice In Wonderland'),
(SELECT student_id FROM student where name = 'John'), '2022-02-15');

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES
((SELECT book_id FROM book where title = 'To kill a mockingbird'),
(SELECT student_id FROM student where name = 'Bob'), '2021-03-03');

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES
((SELECT book_id FROM book where title = 'Alice In Wonderland'),
(SELECT student_id FROM student where name = 'Lera'), '2021-05-23');

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES
((SELECT book_id FROM book where title = 'Harry Potter'),
(SELECT student_id FROM student where name = 'Bob'), '2021-08-12');

select * from library;

SELECT student.name, book.title
FROM student INNER JOIN library ON student.student_id = library.student_id
JOIN book ON book.book_id = library.book_fk_id;

SELECT avg(student.age) FROM student INNER JOIN library ON student.student_id = library.student_id
JOIN book ON book.book_id = library.book_fk_id WHERE book.title = 'Alice In Wonderland';

-- Delete a student from the Student table -> The corresponding record is deleted from the "library" table.
