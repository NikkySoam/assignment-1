# 🚀 Assignment-1 Backend Developer

A backend application built using Node.js and Express.js that provides RESTful APIs for managing tasks. This project demonstrates API development, database integration, and clean backend architecture.

---

## 📌 Features

* CRUD operations
* RESTful API design
* MongoDB database integration
* Error handling and validation
* Clean folder structure 
* API testing using Postman


## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (for API testing)


## 📂 Project Structure

```
assignment-1/
│
├── src/
│   ├── controllers/     # Business logic
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── config/          # DB config
│
├── index.js             # Entry point
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/NikkySoam/assignment-1.git
cd assignment-1
```

2. Install dependencies

```
npm install
```

3. Setup environment variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

4. Run the server

```
npx nodemon server.js
```

Server will run at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Register user

```
POST /api/auth/register
```


### 🔹 Login user

```
POST /api/auth/login
```

### 🔹 Create Task

```
POST /api/task/create-task
```

### 🔹 Get Single Task

```
GET /api/task/get-task/:id
```


---

## 🧪 API Testing

All APIs are tested using Postman.
You can import the collection and test endpoints easily.
https://www.postman.com/q44444-6269/workspace/assignment-1

---


## 👨‍💻 Author

**Nikky Soam**

---

