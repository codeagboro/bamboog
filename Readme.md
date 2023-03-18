# Bamboog API

This is a Node.js API built with the Express framework. It uses MongoDB as a database and provides endpoints for user authentication and drinks information.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository
2. Install the required dependencies by running `yarn add`
3. Create an `.env` file and add your environment variables
4. Start the server by running `yarn run dev`

## Installed Dependencies

1. Express
2. bcrypt
3. joi
4. jsonwebtoken
5. dotenv
6. mongodb

## Entity Relationship Model for the API

![Alt text](https://res.cloudinary.com/dtdcb7llh/image/upload/v1679141114/bamboogerd_qouxza.jpg)

# API Endpoints

# User Signup Endpoint

Creates a new user account.

**Endpoint:** `POST ap1/v1/user/signup`

**Request Body:**

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "password": "password123",
    "phoneNumber": "1234567890",
    "role": "user"
}
```
**Response Body**

```json
{
    "message": "user created successfully",
    "newuser": {
        "_id": "1234567890",
        "firstName": "John",
        "lastName": "Doe",
        "age": 30,
        "email": "johndoe@example.com",
        "phoneNumber": "1234567890",
        "password": "$2b$10$yNklVj4L4e4uWyQI1f/NSuVJjSbuN0nsCMo5P",
        "role": "user",
        "createdAt": "2023-03-18T08:06:59.364Z",
        "updatedAt": "2023-03-18T08:06:59.364Z",
        "__v": 0
    }
}
```
# User Login Endpoint
## Authenticate an existing user.

Endpoint: `POST ap1/v1/user/login`

**Request Body:**
```json
{
    "email": "johndoe@example.com",
    "password": "password123"
}
```
**Response Body**
```json
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpZCI6IjYzMTI5ZjNiNGU5OWRmMTE5ZjgyODZlNyIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkRvZSIsInBob25lTnVtYmVyIjoiMTIzNDU2Nzg5MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjE3NjMwNjM0LCJleHAiOjE2MTc2MzA2NTR9.1zQidB8WfvGyLYb-lEi7PYGTXoOqVfZuQvz1V7lYJd8"
}
```


# Fetch all Users Endpoint

## `GET ap1/v1/user/allusers`

Fetches all users.

**Query Parametre**

http://localhost:4532/api/v1/user/allusers

 
#### Response

- `users` (array) - An array of all users.
```json
{
    "users": [
        {
            "_id": "64131f9a1a51b5873cd9b70f",
            "firstName": "john",
            "lastName": "doe",
            "age": 18,
            "email": "johndoe@examplemail.com",
            "password": "$2b$10$2SgroUM5ozSUMwhQqUAW8eFC1XcxIgDpfYgLA6h4Yd3dWPxMVdps2",
            "phoneNumber": "01254789651",
            "role": "admin",
            "createdAt": "2023-03-16T13:54:34.692Z",
            "updatedAt": "2023-03-16T13:54:34.692Z",
            "__v": 0
        },
        {
            "_id": "64131f9a1a51b5873cd9b70f",
            "firstName": "john",
            "lastName": "doe",
            "age": 18,
            "email": "johndoe@examplemail.com",
            "password": "$2b$10$2SgroUM5ozSUMwhQqUAW8eFC1XcxIgDpfYgLA6h4Yd3dWPxMVdps2",
            "phoneNumber": "01254789651",
            "role": "user",
            "createdAt": "2023-03-16T13:55:07.815Z",
            "updatedAt": "2023-03-16T13:55:07.815Z",
            "__v": 0
        },
        {
            "_id": "64131f9a1a51b5873cd9b70f",
            "firstName": "john",
            "lastName": "doe",
            "age": 18,
            "email": "johndoe@examplemail.com",
            "password": "$2b$10$2SgroUM5ozSUMwhQqUAW8eFC1XcxIgDpfYgLA6h4Yd3dWPxMVdps2",
            "phoneNumber": "01254789651",
            "role": "user",
            "createdAt": "2023-03-16T13:56:13.036Z",
            "updatedAt": "2023-03-16T13:56:13.036Z",
            "__v": 0
        },
        {
            "_id": "64131f9a1a51b5873cd9b70f",
            "firstName": "john",
            "lastName": "doe",
            "age": 18,
            "email": "johndoe@examplemail.com",
            "password": "$2b$10$2SgroUM5ozSUMwhQqUAW8eFC1XcxIgDpfYgLA6h4Yd3dWPxMVdps2",
            "phoneNumber": "01254789651",
            "role": "user",
            "createdAt": "2023-03-16T14:01:30.163Z",
            "updatedAt": "2023-03-16T14:01:30.163Z",
            "__v": 0
        }
    ]
}
```

# Get User by Email Endpoint
## `GET ap1/v1/user/:email`

Fetches details of a single user by email using query parametres.

#### Query Parameters

- `email` (string, required) - The email address of the user to fetch details for.

```json
http://localhost:4532/api/v1/user/johndoe@examplemail.com
```

#### Response
```json
{
    "userDetail": {
        "_id": "64131ffd1a51b5873cd9b717",
        "firstName": "john",
        "lastName": "doe",
        "age": 18,
        "email": "johndoe@exmplemail.com",
        "password": "$2b$10$MmeQQymL7IMlzFl/35tL9uN3A28avr0UdoDK7BxtqspqcX5Zw.RfS",
        "phoneNumber": "01254789651",
        "role": "user",
        "createdAt": "2023-03-16T13:56:13.036Z",
        "updatedAt": "2023-03-16T13:56:13.036Z",
        "__v": 0
    }
}
```

- `userDetail` (object) - An object containing details of the user.

# Add or Update existing drink
## Endpoint: `ap1/v1/user/createdrink` 

Adds a new drink or updates an existing one.

#### Request Body

- `drinkName` (string, required) - The name of the drink.
- `manufacturer` (string, required) - The manufacturer of the drink.
- `quantity` (number, required) - The quantity of the drink to add.
- `price` (number, required) - The price of the drink.

```json 
{
     "drinkName" : "7 up",
      "manufacturer": "Coca-Cola",
      "quantity": "1",
      "price" : "250"
}
```

#### Response

- `message` (string) - A message indicating whether the drink was added or updated successfully.
- `newDrink` (object) - An object containing details of the newly added drink, if a new drink was added.
```json 
{
    "message": "7 up added successfully",
    "newDrink": {
        "drinkName": "7 up",
        "manufacturer": "Coca-Cola",
        "price": "250",
        "quantity": 1,
        "_id": "6415893b659abdc0cdcfe914",
        "createdAt": "2023-03-18T09:49:47.160Z",
        "updatedAt": "2023-03-18T09:49:47.160Z",
        "__v": 0
        }
}
```
**Update drink if particular drink is availabe in the db**
```json 
{
    "message": "7 up updated by 1"
}
```
# Available Drinks
Returns a list of available drinks.

Endpoint: `GET ap1/v1/user/alldrinks`

**Request**
```json
http://localhost:4532/api/v1/user/alldrinks
```

**Response Body**
```json
{
    "alldrinks": [
        {
            "_id": "641320721a51b5873cd9b71b",
            "drinkName": "Fanta",
            "manufacturer": "Coca-Cola",
            "price": "200",
            "quantity": 4,
            "createdAt": "2023-03-16T13:58:10.880Z",
            "updatedAt": "2023-03-16T13:58:23.875Z",
            "__v": 0
        },
        {
            "_id": "6413208c1a51b5873cd9b724",
            "drinkName": "Coke",
            "manufacturer": "Coca-Cola",
            "price": "200",
            "quantity": 4,
            "createdAt": "2023-03-16T13:58:36.997Z",
            "updatedAt": "2023-03-16T13:58:44.526Z",
            "__v": 0
        },
        {
            "_id": "6413209f1a51b5873cd9b72d",
            "drinkName": "Sprite",
            "manufacturer": "Coca-Cola",
            "price": "200",
            "quantity": 8,
            "createdAt": "2023-03-16T13:58:55.698Z",
            "updatedAt": "2023-03-16T13:59:50.772Z",
            "__v": 0
        },
        {
            "_id": "64132442fbcd7fd178fc4a3e",
            "drinkName": "Amstel Malta",
            "manufacturer": "NBC",
            "price": "250",
            "quantity": 1,
            "createdAt": "2023-03-16T14:14:26.937Z",
            "updatedAt": "2023-03-16T14:14:26.937Z",
            "__v": 0
        },
        {
            "_id": "6415893b659abdc0cdcfe914",
            "drinkName": "7 up",
            "manufacturer": "Coca-Cola",
            "price": "250",
            "quantity": 2,
            "createdAt": "2023-03-18T09:49:47.160Z",
            "updatedAt": "2023-03-18T09:52:35.284Z",
            "__v": 0
        }
    ]
}
```
- `allDrink` (object) - An object containing details of all the drinks available in the database.

# POSTMAN DOCUMENTATION
```json
https://documenter.getpostman.com/view/25494840/2s93JzM175
```


## Error Responses

- `200 OK` - successfull request.
- `201 Created` - New resource has been successfully created.
- `404 Not Found` - The requested resource was not found.
- `500 Internal Server Error` - An error occurred on the server. The `error` field in the response will contain more information about the error.
