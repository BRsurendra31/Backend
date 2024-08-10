### What is an API ?
- An **API (Application Programming Interface)** is a set of rules and tools that allows different software applications to communicate with each other. It defines the methods and data structures that developers can use to interact with the software components, services, or resources.
- Think of an API as a contract between two pieces of software. This contract defines how they can communicate and what data or services they can exchange.

**Rule of an API :**
1. **Interface:** An API serves as an interface between different software applications. It allows one piece of software to request data or services from another without needing to understand its internal workings.
2. **Abstraction:** APIs abstract the underlying complexity of operations. For example, when you use an API to retrieve weather data, you don't need to know how the weather data is stored or processed; you just make a request and get the data in a usable format.
3. **Standardization:** APIs provide a standardized way for different systems to interact. This ensures that various software components can work together, even if they are built using different technologies.

**Type of APIs :**

1. **Web APIs:** One common type of API is a Web API, often used in web development. Web APIs allow applications to communicate over the internet, typically using HTTP methods like GET, POST, PUT, and DELETE. For example, a weather application might use a Web API to fetch weather data from a remote server.

- **RESTful APIs:** These are the most popular type of web APIs. They follow the principles of REST (Representational State Transfer), which emphasizes stateless communication, where each request from a client to the server must contain all the information needed to understand and process the request.

    **Characteristics :**
    - Statelessness: Each request from a client to the server must contain all the information needed to understand and process the request. The server does not store the state of the client session.
    - Uniform Interface: RESTful APIs use a uniform interface, often based on HTTP methods like GET, POST, PUT, DELETE, etc.
    - Resource-Based: Everything in REST is considered a resource. Resources are identified by URLs, and each URL represents a unique resource.
    - Representation: Resources can have multiple representations, such as JSON, XML, HTML, etc. Most RESTful APIs use JSON due to its simplicity and readability.

    **Example :**
    Here’s an example of a simple RESTful API for managing a collection of books in a library.

    ```js
    const express = require('express');
    const app = express();
    app.use(express.json());

    let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 }
    ];

    // GET all books
    app.get('/api/books', (req, res) => {
    res.json(books);
    });

    // GET a specific book by ID
    app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
    });

    // POST a new book
    app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(book);
    res.status(201).json(book);
    });

    // PUT to update a book
    app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    book.title = req.body.title;
    book.author = req.body.author;
    book.publishedYear = req.body.publishedYear;
    res.json(book);
    });

    // DELETE a book
    app.delete('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    const index = books.indexOf(book);
    books.splice(index, 1);
    res.status(204).send();
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
    ```

- **Third-Party API:**
This is an API created and provided by an external service or platform, not developed by you or your team. These APIs allow you to integrate external services, data, or functionalities into your own application.
Examples of Third-Party APIs:
- Social Media APIs: APIs from platforms like Facebook, Twitter, or Instagram allow you to integrate social media features, such as fetching user profiles, posting updates, or displaying social feeds.
- Payment APIs: Services like Stripe, PayPal, or Square offer APIs to integrate payment processing into your application. You can use these APIs to handle payments, subscriptions, or refunds without building your own payment system.
- Mapping and Geolocation APIs: Google Maps API or Mapbox API can be used to embed maps, get geolocation data, or calculate distances in your application.
- Weather APIs: APIs like OpenWeatherMap or WeatherAPI.com provide weather data that you can use to display current conditions, forecasts, or weather alerts in your app.
- E-commerce APIs: Platforms like Shopify or Amazon provide APIs that allow you to manage products, orders, and customer data, making it easier to build e-commerce features into your app.
    **How to use Third party APIs** :
    1. Sign Up and Obtain API Credentials: Most third-party APIs require you to create an account and obtain an API key or client ID/secret. This key is used to authenticate your requests.
    2. Understand the API Documentation: The API provider usually provides comprehensive documentation that explains the available endpoints, request/response formats, rate limits, and error handling.
    3. Make API Requests: Using your API key, you make HTTP requests to the API's endpoints to fetch or send data. Typically, you'll use HTTP methods like GET, POST, PUT, and DELETE.
    4. Process the Response: The API will return a response, usually in JSON or XML format. You parse this response and use the data within your application, such as displaying it on the UI or storing it in your database.
    5. Handle Errors and Rate Limits: It's important to handle errors gracefully, such as when an API request fails due to a network issue or an invalid API key. Also, respect rate limits to avoid being blocked by the API provider.

    **Example :**
    If you want to fetch weather data from the OpenWeatherMap API, you might do something like this:
    ```javascript
    const axios = require('axios');

    const API_KEY = 'your_openweathermap_api_key';
    const city = 'London';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => {
        console.log('Weather data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });

    ```

- **SOAP APIs:** Simple Object Access Protocol (SOAP) APIs use XML-based messaging and are known for their strong standards and security features. SOAP is more rigid and complex compared to REST.
- **GraphQL:** A more flexible alternative to REST, GraphQL allows clients to request only the data they need, rather than a fixed structure. This minimizes data transfer and can be more efficient for certain use cases.

2. **Operating system APIs :**
These APIs allow applications to interact with the underlying operating system. For example, Windows provides a set of APIs that allow software to interact with the file system, hardware devices, or manage memory.
3. **Library or Framework APIs :**
These APIs are provided by libraries or frameworks, allowing developers to use pre-built functions or components. For instance, the React library provides APIs for managing the state and rendering UI components.
4. **Database APIs :**
These APIs allow applications to interact with databases. SQL queries can be considered a type of API that allows you to interact with a relational database.

**How APIs Work :**

**A.The Basic Request-Response Model:**

APIs typically work based on a request-response model:

- **Client:** This is the entity that initiates a request. The client could be a web browser, a mobile app, or another server.
- **Request:** The client sends a request to the API, usually via HTTP. The request includes a method (e.g., GET, POST, PUT, DELETE), an endpoint (the URL of the API), and optionally, some data (like JSON payloads in the body of a POST request).
- **Server:** The server that hosts the API receives the request, processes it (which might involve querying a database, performing some logic, etc.), and then returns a response.
- **Response:** The server sends back a response to the client. This response typically includes status information (e.g., success or error codes) and data, usually in JSON or XML format.

**B. Authentication and Authorization:**

APIs often require authentication (verifying who you are) and authorization (verifying what you are allowed to do). This ensures that sensitive data or operations are only accessible to permitted users.
- API Keys: A simple way to authenticate, where the client includes a key in the request.
- OAuth: A more complex but flexible method, often used for third-party integrations.


### How to create an API ?

Below is a basic example of how to create a simple RESTful API using Node.js, Express, and Mongoose, which allows you to perform CRUD (Create, Read, Update, Delete) operations on the User model.

**Step 1: Set Up the Project**
1. Create a new directory for your project and navigate into it:
```bash
mkdir user-api
cd user-api
```
2. Initialize a new Node.js project:
```bash
npm init -y
```
3. npm install express mongoose
```bash
npm install express mongoose
```

**Step 2: Set Up Mongose and Express**
Create a new file named index.js for the main application logic.

```js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model

const app = express();
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Define the API endpoints

// 1. Create a new user (POST /users)
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 2. Get all users (GET /users)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 3. Get a user by ID (GET /users/:id)
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 4. Update a user by ID (PATCH /users/:id)
app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 5. Delete a user by ID (DELETE /users/:id)
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

**Step 3: Create the User Model**

Create a **'models'** directory in the root of your project and inside it, create a file named **'User.js'** with the following content:
```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```
**Step 4: Run the Application**
1. Start your MongoDB server if it's not already running:
```bash
mongod
```
2. Run the Node.js application:
```bash
node index.js
```
**Step 5: Test the API** <br>
You can use tools like Postman or cURL to interact with the API:

- Create a new user (POST '/users')
```json
POST /users
{
  "username": "john_doe",
  "password": "securePassword123"
}
```
- Get all users (GET '/users')
```http
GET /users
```
- Get a user by ID (GET '/users/:id')
```http
GET /users/60e71f47bc8fa92f342ab12b
```
- Update a user by ID (PATCH '/users/:id')
```json
PATCH /users/60e71f47bc8fa92f342ab12b

{
  "password": "newSecurePassword456"
}
```
- Delete a user by ID (DELETE '/users/:id')
```http
DELETE /users/60e71f47bc8fa92f342ab12b
```
