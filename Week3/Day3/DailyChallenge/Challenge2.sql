-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
-- Insert those books :
--     Alice In Wonderland, Lewis Carroll
--     Harry Potter, J.K Rowling
--     To kill a mockingbird, Harper Lee
-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
-- Insert those students:
--     John, 12
--     Lera, 11
--     Patrick, 10
--     Bob, 14
-- Create a table named Library, with the columns :
--     book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
--     student_id ON DELETE CASCADE ON UPDATE CASCADE
--     borrowed_date
--     This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
--     book_fk_id is a Foreign Key representing the column book_id from the Book table
--     student_fk_id is a Foreign Key representing the column student_id from the Student table
--     The pair of Foreign Keys is the Primary Key of the Junction Table
-- Add 4 records in the junction table, use subqueries.
--     the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
--     the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
--     the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
--     the student named Bob, borrowed the book Harry Potter the on 12/08/2021
-- Display the data
--     Select all the columns from the junction table
--     Select the name of the student and the title of the borrowed books
--     Select the average age of the children, that borrowed the book Alice in Wonderland
--     Delete a student from the Student table, what happened in the junction table ?

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