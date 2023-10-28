export const sqlData = [
    {
        questionId: 1,
        question: 'What is SQL, and how does it relate to databases?',
        answer: 'SQL stands for Structured Query Language. It is a domain-specific language (specific to relational databases) used for managing and manipulating relational databases. SQL allows you to perform operations like querying, inserting, updating, and deleting data in a structured way.'
    },
    {
        questionId: 2,
        question: 'What is PostgreSQL, and why might you choose it as a database system for a web application?',
        answer: "PostgreSQL is an open-source relational database management system known for its robust features, data integrity, and extensibility. It's a popular choice for web applications due to its support for complex queries, indexing, and support for JSON and other data types."
    },
    {
        questionId: 3,
        question: 'What is the purpose of Sequelize in a Node.js application, and how does it differ from raw SQL queries?',
        answer: 'Sequelize is an Object-Relational Mapping (ORM) library for Node.js that simplifies database interactions. It abstracts SQL queries into JavaScript methods and models, making it easier to work with databases. Unlike raw SQL queries, Sequelize provides an object-oriented approach, helping developers work with databases more easily.'
    },
    {
        questionId: 4,
        question: 'Explain the difference between a primary key and a foreign key in the context of a relational database.',
        answer: 'A primary key is a column or set of columns in a table that uniquely identifies each row. A foreign key is a column in one table that references the primary key of another table, creating a relationship between the two tables. Foreign keys are used to enforce referential integrity.'
    },
    {
        questionId: 5,
        question: 'What are the basic or most common SQL operations, and can you provide an example of each?',
        answer: "The basic SQL operations are SELECT (retrieve data), INSERT (add new data), UPDATE (modify existing data), and DELETE (remove data)."
    },
    {
        questionId: 6,
        question: 'What is an SQL injection, and how can it be prevented in a web application (using Sequelize)?',
        answer: 'An SQL injection is a security vulnerability that occurs when an attacker manipulates input data to execute malicious SQL queries. Sequelize helps prevent SQL injections by automatically escaping and sanitizing user inputs, making it difficult for attackers to inject malicious SQL code.'
    },
    {
        questionId: 7,
        question: 'Explain the concept of database normalization. Why is it important?',
        answer: "Database normalization is the process of organizing data in a database to eliminate redundancy and improve data integrity. It's important because it reduces data anomalies, ensures efficient storage, and simplifies data maintenance. Normal forms, like 1NF, 2NF, and 3NF, guide this process."
    },
    {
        questionId: 8,
        question: 'What is a JOIN clause in SQL, and how is it used to retrieve data from multiple tables?',
        answer: 'A JOIN clause is used to combine rows from two or more tables based on a related column between them. There are different types of JOINs, including INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN, which determine how matching and non-matching rows are returned when combining data from multiple tables.'
    },
];

export const nodeData = [
    {
        questionId: 9,
        question: '',
        answer: ''
    },
    {
        questionId: 10,
        question: '',
        answer: ''
    },
    {
        questionId: 11,
        question: '',
        answer: ''
    },
    {
        questionId: 12,
        question: '',
        answer: ''
    },
    {
        questionId: 13,
        question: '',
        answer: ''
    },
    {
        questionId: 14,
        question: '',
        answer: ''
    },
    {
        questionId: 15,
        question: '',
        answer: ''
    },
    {
        questionId: 16,
        question: '',
        answer: ''
    },
    {
        questionId: 17,
        question: '',
        answer: ''
    },
    {
        questionId: 18,
        question: '',
        answer: ''
    },
]
