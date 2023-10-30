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
        question: 'What is Node.js, and how does it relate to web development?',
        answer: "Node.js is a runtime environment that allows you to run JavaScript on the server-side. It's commonly used in web development to build server-side applications and APIs."
    },
    {
        questionId: 10,
        question: 'Explain the role of Express.js in web development.',
        answer: 'Express.js is a web application framework for Node.js that simplifies building web applications and APIs. It provides tools and features to handle routing, middleware, and HTTP requests.'
    },
    {
        questionId: 11,
        question: 'What is middleware in Express.js, and why is it important?',
        answer: 'Middleware in Express.js are functions that process HTTP requests. They are essential for tasks like authentication, logging, and request parsing. Middleware can be used to modify the request or response objects before reaching the route handler.'
    },
    {
        questionId: 12,
        question: 'What is routing (or what are endpoints) in Express.js, and how do you define routes/endpoints?',
        answer: 'Routing in Express.js refers to determining how an application responds to a client request to a particular endpoint. You can define routes using HTTP methods like app.get(), app.post(), and app.use().'
    },
    {
        questionId: 13,
        question: 'How can you handle form data and query parameters in an Express.js application?',
        answer: 'You can use the body-parser middleware to handle form data, and you can access query parameters using req.query in your route handlers'
    },
    {
        questionId: 14,
        question: 'What are route parameters in Express.js, and how do you use them?',
        answer: "Route parameters are placeholders in route paths that capture values from the URL. For example, app.get('/users/:id') can capture the user's ID from the URL, which you can access using req.params.id"
    },
    {
        questionId: 15,
        question: 'What is a session and how can you set one up in your Express application?',
        answer: "A session is a mechanism in web development for persistently storing and managing user-specific data across multiple HTTP requests, often used for tasks like maintaining login status and user preferences. In an Express.js application, you can set up a session using the express-session middleware. First, you install the middleware with npm install express-session, and then you configure it, specifying options like a secret key for session data encryption, whether to resave unchanged sessions, and whether to save uninitialized sessions. Once configured, you can store and retrieve data on the req.session object within your routes to manage user-specific information, but for secure and scalable usage in production, it's essential to employ session stores such as Redis or a database to store session data. Proper session management and security practices, including setting session expiration times and protecting the session ID, are critical for safeguarding user data and privacy."
    },
    {
        questionId: 16,
        question: 'Explain the concept of middleware chaining in Express.js.',
        answer: 'Middleware chaining in Express allows you to apply multiple middleware functions to a single route. The order in which you define middleware matters, as they execute in the order they are defined.'
    },
    {
        questionId: 17,
        question: 'How do you set up and configure Express.js to serve static files like CSS, JavaScript, and images?',
        answer: "You can use the express.static middleware to serve static files. For example: javascript app.use(express.static('public'));  This code would serve files from a 'public' directory in your project. You can also setup standard endpoints and use res.sendFile or res.send to send back html files or plain html."
    },
]

export const javascriptData = [
    {
        questionId: 18,
        question: 'What is a closure in JavaScript, and why is it useful in practice? Provide an example of a closure and explain how it works.',
        answer: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It closes over' the variables in its lexical scope, even after the outer function has finished executing. Closures are useful for maintaining private variables, creating factory functions, and handling asynchronous operations with callbacks."
    },
    {
        questionId: 19,
        question: 'Explain the concept of hoisting in JavaScript. How does it affect the interpretation of variables and functions in code execution?',
        answer: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use a variable or function before it's declared in the code. However, only the declarations are hoisted, not the initializations."
    },
    {
        questionId: 20,
        question: 'What is the Event Loop in JavaScript, and how does it relate to asynchronous programming? Describe the key components and their roles in managing the execution stack.',
        answer: "The Event Loop is a critical part of JavaScript's concurrency model. It manages the execution stack, handling asynchronous operations using a message queue. It consists of the Call Stack (for function calls), Web APIs (for asynchronous tasks), the Callback Queue (for resolved promises and events), and the Event Loop itself. The Event Loop continuously checks the queue for messages and moves them to the call stack when it's empty"
    },
    {
        questionId: 21,
        question: 'Explain the differences between "null" and "undefined" in JavaScript. How and when would you encounter each of these values in code?',
        answer: "'null' is an intentional absence of any value and is often used to represent the absence of an object. 'undefined' is a variable that has been declared but hasn't been assigned a value. It can also be the default return value of a function. You would encounter 'null' when you explicitly set a variable to it or when an API or function returns 'null.' You would encounter 'undefined' when you access a variable that hasn't been assigned a value, or when a function doesn't explicitly return a value."
    },
    {
        questionId: 22,
        question: 'What is the purpose of the "this" keyword in JavaScript, and how does its value change in different contexts (e.g., function, object method, constructor)?',
        answer: 'The "this" keyword refers to the current execution context and its value can change based on how a function is called. In a global function, "this" refers to the global object (e.g., "window" in browsers). In an object method, "this" refers to the object that the method is called on. In a constructor, "this" refers to the newly created instance.'
    },
    {
        questionId: 23,
        question: 'Explain the concept of callbacks in JavaScript. How are they used to handle asynchronous operations, and what are the potential issues associated with the "callback hell" (callback pyramid)?',
        answer: 'Callbacks are functions that are passed as arguments to other functions and are executed at a later time, often used to handle asynchronous operations. Callback hell, or the "pyramid of doom," is a situation where multiple nested callbacks make the code hard to read and maintain. It can lead to issues like callback hell and make code harder to understand and maintain'
    },
    {
        questionId: 24,
        question: 'Describe the differences between "==" and "===" in JavaScript for comparing values. What is type coercion, and how does it affect the results of comparisons using these operators?',
        answer: "'==' is the loose equality operator that compares values, attempting to perform type coercion if necessary. '===' is the strict equality operator that compares values without type coercion. Type coercion is the automatic conversion of data types during a comparison. For example, '2' == 2 would return true because JavaScript coerces the string to a number, while '2' === 2 would return false because it doesn't perform type coercion"
    },
    {
        questionId: 25,
        question: 'What are JavaScript Promises, and how do they simplify working with asynchronous operations? Provide examples of creating and using Promises.',
        answer: 'JavaScript Promises are a way to handle asynchronous operations in a more structured and readable manner. They represent a value that may not be available yet but will be resolved in the future. Promises have two states: pending, and resolved or rejected. You can create a Promise to perform an asynchronous task and use the then method to handle the result or catch to handle errors.'
    },
    {
        questionId: 26,
        question: 'How does the "let," "const," and "var" keywords differ in JavaScript when declaring variables? When and why would you use one over the others?',
        answer: 'The "let" and "const" keywords were introduced in ES6 and have block scope, while "var" has function scope. "let" allows variable reassignment, while "const" enforces immutability for variable values. Use "let" for variables that may change, "const" for constants, and "var" should be avoided in favor of "let" and "const."'
    },
    {
        questionId: 27,
        question: 'What are arrow functions in JavaScript, and how do they differ from regular function expressions? When would you choose to use arrow functions, and what are their limitations?',
        answer: "Arrow functions are a more concise way to write functions in JavaScript. They have a shorter syntax and inherit the 'this' value from their surrounding code(where they're created, not where they're called). They are suitable for short, simple functions, but they cannot be used as constructors, have no 'arguments' object, and may not work well in certain cases that require a specific 'this' context."
    },
]

export const globalStateReactData = [
    {
        questionId: 28,
        question: 'What is Redux, and why is it commonly used in React applications?',
        answer: 'Redux is a state management library for React applications. It provides a predictable and centralized way to manage the state of an application, making it easier to share and update data across components. Redux is commonly used to simplify state management, especially in large and complex applications, and to enhance debugging and testing capabilities.'
    },
    {
        questionId: 29,
        question: 'Explain the core concepts of Redux, such as actions, reducers, and the store. How do they work together to manage application state?',
        answer: "In Redux, actions are plain JavaScript objects that describe state changes. Reducers are functions that handle these actions and specify how the state changes. The store is a single source of truth that holds the application's state. Actions are dispatched to the store, and reducers update the state based on the actions, creating a unidirectional data flow."
    },
    {
        questionId: 30,
        question: 'What is the difference between the actions and action creators in Redux? How and why would you use action creators?',
        answer: 'Actions are plain objects with a type property that describe the state change, while action creators are functions that create and return these action objects. Action creators help encapsulate the logic for creating actions, making it easier to dispatch actions in a consistent manner and reducing potential errors in action creation.'
    },
    {
        questionId: 31,
        question: 'Explain the purpose of the Context API in React. How does it enable components to access global state without prop drilling?',
        answer: 'The Context API allows components to access global state or data without prop drilling, which is the process of passing props through multiple intermediary components. It provides a way to share values such as themes, user authentication, or other global data with components at any level in the component tree.'
    },
    {
        questionId: 32,
        question: 'What are the key components of the Context API, including Provider and useContext? How do they work together to make context available to components?',
        answer: 'The Context API includes the Provider component, which wraps the application or a part of it and makes the context available to its descendants. The useContext hook allows you to access the context from the Provider in components that are wrapped in it.'
    },
    {
        questionId: 33,
        question: "Why might you choose to manage global state using Redux over React's Context API? What are the advantages and disadvantages of each approach?",
        answer: "Redux is often chosen for managing global state when you need more control and structure for state management, especially in larger applications. It offers advanced features like middleware, time-travel debugging, and dev tools. React's Context API is simpler and more lightweight, suitable for smaller applications or when you need a basic global state solution without the complexity of Redux."
    },
    {
        questionId: 34,
        question: 'How can you manage global state in a React application without using external libraries like Redux or Context API?',
        answer: 'You can manage global state in a React application without external libraries by lifting state to a common ancestor component, often referred to as "prop drilling." Alternatively, you can use other third-party state management libraries.'
    },
    {
        questionId: 35,
        question: 'What are the potential challenges and best practices when managing global state in a React application?',
        answer: 'Challenges in global state management may include avoiding excessive re-renders, ensuring data consistency, and handling complex state updates. Best practices include minimizing global state usage, optimizing performance, and using appropriate libraries or patterns when necessary.'
    },
    {
        questionId: 36,
        question: 'Explain the concept of immutability in relation to global state management. Why is it important, and how can you achieve it when working with global state in React?',
        answer: "Immutability means that data cannot be changed after it's created. It's crucial for global state management because it ensures data consistency and makes it easier to track changes. To achieve immutability in React, you can use libraries like Redux, immer, or follow immutability principles when updating state. We don't change state in React, we update (replace) it."
    },
    {
        questionId: 37,
        question: 'What are the potential performance considerations when dealing with global state in a React application? How can you optimize the performance of components that rely on global state?',
        answer: "When dealing with global state, it's essential to avoid unnecessary re-renders. Use memoization techniques, such as useMemo and useCallback, to optimize the performance of components that rely on global state. Additionally, consider using libraries or patterns that offer advanced optimizations, like Redux's connect function for reducing re-renders in connected components."
    },
]

export const gitGithubData = [
    {
        questionId: 38,
        question: '',
        answer: ''
    },
    {
        questionId: 39,
        question: '',
        answer: ''
    },
    {
        questionId: 40,
        question: '',
        answer: ''
    },
    {
        questionId: 41,
        question: '',
        answer: ''
    },
    {
        questionId: 42,
        question: '',
        answer: ''
    },
    {
        questionId: 43,
        question: '',
        answer: ''
    },
    {
        questionId: 44,
        question: '',
        answer: ''
    },
    {
        questionId: 45,
        question: '',
        answer: ''
    },
    {
        questionId: 46,
        question: '',
        answer: ''
    },
    {
        questionId: 47,
        question: '',
        answer: ''
    },
]
