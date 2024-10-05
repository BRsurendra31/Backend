### What is mongoDB ? 
MongoDB is a document database. It stores data in a type of JSON format called BSON.

MongoDB is a NoSQL, document-oriented database that stores data in JSON-like format, which is called BSON. It's known for its scalability, flexibility, and high performance, allowing for the storage of large amounts of unstructured or semi-structured data.

If you are unfamiliar with JSON, check out our JSON tutorial.

A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.

### A MongoDB Document :
Records in a MongoDB database are called documents, and the field values may include numbers, strings, booleans, arrays, or even nested documents.

```json
{
    title: "Post Title 1",
	body: "Body of post.",
	category: "News",
	likes: 1,
	tags: ["news", "events"],
	date: Date()
}

```
### How JSON and BSON is related in MongoDB ? 

**Example Scenario: User Information Storage**
Imagine you want to store information about users in a MongoDB database. Here’s how this data would be stored and represented:

**1. JSON Representation :**
```json
{
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "active": true,
  "friends": ["Bob", "Charlie"]
}
```
**2. BSON Representation :**
When you store this JSON document in MongoDB, it is converted into BSON (Binary JSON) format. BSON is a binary encoding of JSON-like documents. While BSON is not human-readable, it is optimized for storage and querying.

Here’s a simplified representation of how this JSON data might look in BSON format (not actual binary, but a conceptual illustration):
```json
{
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "active": true,
  "friends": ["Bob", "Charlie"]
}
```

**Workong :**

1. Insert Data into MongoDB:
Using MongoDB’s shell or a driver for your programming language, you can insert a document like this:
```json 
db.users.insertOne({
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  active: true,
  friends: ["Bob", "Charlie"]
});
```
This command inserts the document into the users collection of the MongoDB database. Internally, MongoDB converts this document to BSON for storage.

2. Query Data:
To retrieve the data, you can use:

```javascript
db.users.find({ name: "Alice" });

```
MongoDB will query the BSON-encoded data and return it in a format that can be easily read by your application, often converting BSON back to JSON for display or processing.

**Summary :**
1. MongoDB stores data as documents in a collection.
2. BSON is the format MongoDB uses internally to store these documents. It’s a binary representation of JSON-like documents.
3. Advantages of BSON: Faster processing and additional data types.