# Bamboog API

BambooG is a relaxation centre located in Abeokuta, Ogun State. It is known for selling expensive drinks and confectionery.

This is a Node.js API built with the Express framework. It uses MongoDB as a database and provides endpoints for user authentication and drinks information. This project uses role based access control (RBAC) to secure who can view which information. Based on the RBAC for this project we have access control for two sets of users.

## Users:
- Can register with the following data Phone Number, Age, Email, First Name, Last Name and Password
- Can Login be using Email address and Password
- Can see all available items (drinks and confectionery) uploaded by Admin.

## Admin:
- Can see all registered users
- Can search for users using their email address.
- Can post a list of available items (drinks and confectionery) so users logged in can see

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
    "token": {{TOKEN}}
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
      "_id": "641869fd092de2fd7fad54d9",
      "firstName": "Terence",
      "lastName": "Greenholt",
      "age": 609,
      "email": "Manuela_Batz@hotmail.com",
      "password": "$2b$10$y8fWILfbTl00gF5wXxeuSOEYgN7Pih/W1ma9gXNSDqXDhd84gpOsS",
      "phoneNumber": "7461316499461",
      "role": "user",
      "createdAt": "2023-03-20T14:13:17.564Z",
      "updatedAt": "2023-03-20T14:13:17.564Z",
      "__v": 0
    },
    {
      "_id": "64186a00092de2fd7fad54dd",
      "firstName": "Jack",
      "lastName": "Herzog",
      "age": 465,
      "email": "Erica_Nolan@gmail.com",
      "password": "$2b$10$toNT8zwu7GpfUjXhyeD2vuK5IZc5WsNIGWho/mKB7PVUX9DtKewU6",
      "phoneNumber": "7461316499461",
      "role": "user",
      "createdAt": "2023-03-20T14:13:20.841Z",
      "updatedAt": "2023-03-20T14:13:20.841Z",
      "__v": 0
    },
    {
      "_id": "64186a03092de2fd7fad54e1",
      "firstName": "Brittany",
      "lastName": "Volkman",
      "age": 623,
      "email": "Meaghan.Rippin@hotmail.com",
      "password": "$2b$10$8SyMgjHnoG4UDapVW1T0KukISPjw7SjGmK1g3EwRyJT4ZyCLXE18G",
      "phoneNumber": "7461316499461",
      "role": "user",
      "createdAt": "2023-03-20T14:13:23.889Z",
      "updatedAt": "2023-03-20T14:13:23.889Z",
      "__v": 0
    },
    {
      "_id": "64186a06092de2fd7fad54e5",
      "firstName": "Ruben",
      "lastName": "Kohler",
      "age": 723,
      "email": "Gonzalo.Hagenes@yahoo.com",
      "password": "$2b$10$u2jW/gx9JlLrMtyV2N2syuC4uRU.JbZ/eDsd8vmefHFQ5NqeZkVr2",
      "phoneNumber": "7461316499461",
      "role": "user",
      "createdAt": "2023-03-20T14:13:26.812Z",
      "updatedAt": "2023-03-20T14:13:26.812Z",
      "__v": 0
    },
    {
      "_id": "64186a0b092de2fd7fad54e9",
      "firstName": "Lillian",
      "lastName": "Heaney",
      "age": 556,
      "email": "Marcia4@gmail.com",
      "password": "$2b$10$/M5XpKw./cJBR.iiMtaZS.CwVQAI9rGPXe3kkxVf61Mc/APebZXfO",
      "phoneNumber": "7461316499461",
      "role": "user",
      "createdAt": "2023-03-20T14:13:31.733Z",
      "updatedAt": "2023-03-20T14:13:31.733Z",
      "__v": 0
    }
  ]
}
```

- `userDetail` (object) - An object containing details of the user.

# Add or Update existing drink
## Endpoint: `ap1/v1/user/addproduct` 

Adds a new product or updates an existing one.

#### Request Body

- `productName` (string, required) - The name of the product.
- `category` (string, required) - The category of the product.
- `quantity` (number, required) - The quantity of the product to add.
- `price` (number, required) - The price of the product.

```json 
{
    "productName" : "Fanta",
    "category" : "Drinks",
    "quantity" : "7",
    "price" : "200"
}
```

#### Response
```json 
{
  "message": "Sprite added successfully",
  "newProduct": {
    "productName": "Sprite",
    "category": "Drinks",
    "price": "200",
    "quantity": 5,
    "_id": "6418665077c30002882ee83d",
    "createdAt": "2023-03-20T13:57:36.807Z",
    "updatedAt": "2023-03-20T13:57:36.807Z",
    "__v": 0
  }
}
```
**Update product if particular product is availabe in the database**
```json 
{
  "message": "Sprite updated by 7"
}
```
# Available Products
Returns a list of available products by their category.

Endpoint: `GET ap1/v1/user/allproduct/:category`

**Request**
```json
http://localhost:4532/ap1/v1/user/allproduct/Confectionery
```

**Response Body**
```json
{
  "categoryItems": [
    {
      "productName": "Fried Rice",
      "price": "2700",
      "quantity": 3
    },
    {
      "productName": "Ofada Rice",
      "price": "3450",
      "quantity": 4
    },
    {
      "productName": "Isi Ewu",
      "price": "1500",
      "quantity": 5
    },
    {
      "productName": "Egusi Soup",
      "price": "1700",
      "quantity": 6
    }
  ]
}
```

Endpoint: `GET ap1/v1/user/allproduct/:category`

**Request**
```json
http://localhost:4532/ap1/v1/user/allproduct/Drinks
```

**Response Body**
```json
{
  "categoryItems": [
    {
      "productName": "Coke",
      "price": "200",
      "quantity": 8
    },
    {
      "productName": "Sprite",
      "price": "200",
      "quantity": 12
    }
  ]
}
```

- `allproduct` (object) - An object containing details of all the products available in the database.

# POSTMAN DOCUMENTATION
```json
https://documenter.getpostman.com/view/25494840/2s93K1peq7
```
## Article link on Exception handling in Node Js Express
```json
https://dev.to/codeagboro/handling-exception-in-node-js-express-4nmf
```

## Error Responses

- `200 OK` - successfull request.
- `201 Created` - New resource has been successfully created.
- `404 Not Found` - The requested resource was not found.
- `500 Internal Server Error` - An error occurred on the server. The `error` field in the response will contain more information about the error.
